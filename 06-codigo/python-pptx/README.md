# python-pptx: DeckBuilder

## Instalação
```bash
pip install python-pptx jsonschema pandas openpyxl pillow pywin32
```
(`pandas`/`openpyxl` para `profile_data.py`, `pillow` para imagens e miniaturas, `pywin32` para renderizar via PowerPoint no Windows.)

## Uso a partir de spec
```bash
python build_from_spec.py minha_spec.json saida.pptx
```
Valida contra `schemas/deck-spec.schema.json` (se `jsonschema` estiver instalado) e gera o arquivo. `--template modelo.pptx` usa um arquivo base (mantém o tema/máscara); `--no-validate` pula a validação.

## Uso programático
```python
import sys; sys.path.insert(0, "06-codigo/python-pptx")
from deckbuilder import DeckBuilder

db = DeckBuilder(palette="corporativa-azul", font_scale=1.0, confidentiality="Uso interno")
db.add_cover("Projeto Atlas", "Status semana 34", author="PMO", date="01/09/2026")
db.add_executive_summary(
    headline="Projeto no amarelo: prazo em risco por atraso do fornecedor",
    points=["Avanço 62% vs. 68%", "Custo 3% abaixo", "Homologação atrasou 2 semanas"],
    ask="Aprovar plano B até 05/09")
db.add_kpi_row("4 de 5 dimensões no verde", [
    {"label": "Prazo", "value": "-2 sem", "delta": "marco 3", "status": "warning"},
    {"label": "Custo", "value": "-3%", "delta": "vs. orçamento", "status": "success"},
])
db.add_chart("Avanço físico de 62% vs. 68% planejado", "line", ["S30", "S31", "S32"],
             [{"name": "Planejado", "values": [50, 55, 60]}, {"name": "Real", "values": [48, 52, 56]}], source="Cronograma")
db.add_closing("Próxima revisão: 15/09", "pmo@empresa.com")
db.save("atlas.pptx")
```

## Métodos disponíveis (1 por modelo de slide)
| Método | `type` na spec | Arquivo do modelo |
|---|---|---|
| `add_cover(title, subtitle, author, date)` | `cover` | `04-modelos-de-slides/capa.md` |
| `add_agenda(items, title, durations)` | `agenda` | `agenda.md` |
| `add_section(title, number, subtitle)` | `section` | `secao-divisoria.md` |
| `add_executive_summary(headline, points, ask, title)` | `executive_summary` | `sumario-executivo.md` |
| `add_kpi_row(title, kpis, bullets)` | `kpi_row` | `kpi-dashboard.md` |
| `add_big_number(title, value, label, context)` | `big_number` | `numero-grande.md` |
| `add_chart(title, chart_type, categories, series, highlight_index, number_format, show_labels, commentary)` | `chart` | `grafico.md` |
| `add_table(title, columns, rows, align, col_widths, total_row, highlight_rows, status_columns)` | `table` | `tabela.md`, `riscos-e-issues.md` |
| `add_bullets(title, bullets, sub_bullets)` | `bullets` | `bullets-e-duas-colunas.md` |
| `add_two_column(title, left, right)` | `two_column` | `bullets-e-duas-colunas.md` |
| `add_comparison(title, options)` | `comparison` | `comparacao.md` |
| `add_timeline(title, milestones, today_index)` | `timeline` | `timeline-roadmap.md` |
| `add_process(title, steps, descriptions, current_index)` | `process` | `processo-fluxo.md` |
| `add_matrix_2x2(title, quadrants, x_label, y_label, highlight)` | `matrix_2x2` | `matriz-2x2.md` |
| `add_action_plan(title, actions, decision)` | `action_plan` | `proximos-passos.md` |
| `add_quote(text, author, dark)` | `quote` | `citacao-destaque.md` |
| `add_closing(title, subtitle)` | `closing` | `encerramento.md` |
| `add_takeaways(title, items)` | `takeaways` | `takeaways.md` |
| `add_progress_bars(title, items, max_value, columns, highlight_index)` | `progress_bars` | `progress-bars.md` |
| `add_image(title, image, caption, layout, bullets, highlights, alt)` | `image` | `imagem.md` |

Todos os métodos de conteúdo aceitam também `subtitle`, `source` (rodapé), `notes` (notas do apresentador), `kicker` (rótulo acima do título) e `callout` (`{kind, label, text}`). O construtor aceita `brand`, `deck_name`, `date`, `logo`, `logo_light` e `logo_position` (cabeçalho e logotipo em todos os slides; ver `04-modelos-de-slides/cabecalho-kicker-e-logo.md`).

## Como o estilo é aplicado
- **Título**: placeholder nativo do layout "Título apenas", reposicionado para o grid, fonte de título da paleta, cor `primary`, 28 pt × `font_scale`.
- **Rodapé**: "Fonte: ..." + confidencialidade à esquerda, número da página à direita, 10 pt `neutral_mid`.
- **Bullets**: marcadores reais (`a:buChar`) em `primary`; `**texto**` dentro de um item vira negrito.
- **Gráficos**: sem título interno, grade horizontal `neutral_light`, legenda embaixo só com 2 ou mais séries, séries na ordem de `chart` da paleta; séries chamadas Meta/Planejado/Orçado ficam cinza tracejado; rótulos de dados ligados com 1 série e até 12 categorias; `highlight_index` pinta uma barra em `accent`.
- **Tabelas**: cabeçalho `primary`/branco, zebra `neutral_light`, `status_columns` pintam células com Verde/Amarelo/Vermelho ou Alta/Média/Baixa, `total_row` em negrito, `highlight_rows` com fundo âmbar claro.
- **Status**: `success` / `warning` / `danger` / `neutral` viram cor + texto (nunca só cor).

## Estender
1. Crie `add_<novo>(self, title, ..., subtitle=None, source=None, notes=None)` usando `self._content_slide(...)` para título/rodapé e `self._rect`, `self._text`, `self._bullets` para os elementos.
2. Registre em `add_from_spec` (dicionário `dispatch`).
3. Adicione a definição em `schemas/deck-spec.schema.json` (`$defs` + `oneOf`).
4. Documente em `04-modelos-de-slides/<novo>.md` com anatomia e coordenadas.
5. Rode `build_examples.py`.

## Limitações conhecidas
- Waterfall não é nativo em python-pptx: use `column` com valores positivos/negativos ou construa com formas.
- Pareto com linha acumulada exige gráfico combinado (não suportado nativamente); use `bar` decrescente.
- Fontes precisam existir na máquina que abre o arquivo (Calibri, Arial e Segoe UI são seguras no Windows/Office).
