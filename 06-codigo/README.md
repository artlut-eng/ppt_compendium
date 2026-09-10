# Código gerador

Bibliotecas base para transformar uma **spec JSON** (`schemas/deck-spec.schema.json`) em `.pptx`, aplicando automaticamente grid, paleta, tipografia e modelos de slide do compêndio.

| Pasta | Linguagem | Estado |
|---|---|---|
| [`python-pptx/`](python-pptx/README.md) | Python 3.10+, `python-pptx` | Completo: 19 modelos de slide, kicker/callout/cabeçalho/logotipo, validação de spec, geração dos exemplos, miniaturas e auditoria |
| [`pptxgenjs/`](pptxgenjs/README.md) | Node 18+, `pptxgenjs` | Completo: os 23 modelos, kicker/callout/logotipo, paginação de tabelas; sem template corporativo |

## Fluxo
```
spec.json  ->  build_from_spec.py  ->  deck.pptx
   ^                 |
   |                 +-- valida contra schemas/deck-spec.schema.json (jsonschema)
   |                 +-- DeckBuilder (deckbuilder.py): 1 metodo por modelo de slide
   +-- escrita pela IA a partir de 02-publicos + 03-tipos + 04-modelos
```

## Princípios do código
1. **Só papéis de cor** (`primary`, `accent`, `success`...), nunca hex solto. Trocar paleta = trocar 1 string.
2. **Coordenadas do grid** em constantes (`TITLE_BOX`, `FOOTER_BOX`, `CONTENT_W`...). Todo slide de conteúdo usa título no placeholder nativo, rodapé com fonte e número de página.
3. **Um método por modelo de slide**, com a mesma assinatura da spec (`add_kpi_row(title, kpis, ...)`).
4. **Escala de fonte** única (`font_scale`) para adaptar ao público (operacional/TV = 1,25).
5. **Estender, não copiar**: novo modelo = novo método `add_<tipo>` + entrada no `dispatch` de `add_from_spec` + definição no schema + arquivo em `04-modelos-de-slides/`.

## Teste de fumaça
```bash
python 06-codigo/python-pptx/build_examples.py
```
Extrai o bloco JSON de cada arquivo em `03-tipos-de-apresentacao/`, valida contra o schema, salva em `schemas/exemplos/` e gera um `.pptx` por tipo em `examples/`. Se um exemplo da documentação quebrar, a documentação está errada.

## Perfil de base de dados
```bash
python 06-codigo/python-pptx/profile_data.py base.xlsx --cutoff 2026-09-10 --spec esqueleto.json --title "Título"
```
Relatório Markdown/JSON com colunas, cobertura, período, registros futuros, alertas (coortes imaturas, campos vazios, outliers, duplicatas), KPIs, segmentações e gráficos sugeridos, mais um esqueleto de spec com placeholders. Ver `00-guia/da-base-ao-deck.md`. `fmt.py` centraliza a formatação numérica pt-BR (`01-fundamentos/formatacao-numerica.md`).

## Revisão de deck existente e rubrica
```bash
python 06-codigo/python-pptx/extract_deck.py deck.pptx --out outline.md --to-spec spec_aprox.json
python 06-codigo/python-pptx/score_deck.py deck.pptx --audience tatico --manual A3=2,B3=1
```
`extract_deck.py` produz o outline (teste dos títulos, textos com fontes, dados dos gráficos e tabelas, diagnóstico) e uma spec aproximada para reconstruir o deck no padrão do compêndio. `score_deck.py` preenche a folha da rubrica (`07-checklists/rubrica-de-qualidade.md`) com os critérios automáticos. Fluxo em `00-guia/revisao-de-deck-existente.md`.

## Template corporativo
`meta.template` + `meta.template_branding: true` (ou `--template`) fazem o gerador preencher os layouts do arquivo da empresa em vez de desenhar identidade. Ver `05-artefatos-visuais/template-corporativo.md`. Tabelas com mais de `max_rows` (10) linhas são paginadas automaticamente em slides `(i/n)`.

## Miniaturas (Windows + PowerPoint)
```bash
pip install pywin32
python 06-codigo/python-pptx/render_thumbnails.py
```
Abre cada `.pptx` de `examples/` no PowerPoint (automação COM) e exporta um PNG por slide em `examples/thumbnails/`. Serve para revisão visual e para alimentar a IA com imagens dos modelos.

## Auditoria automática
```bash
python 06-codigo/python-pptx/audit_deck.py deck.pptx --audience tatico --expect-logo --fonts Calibri,Arial
```
Lista ocorrências por slide (fora da zona segura, fonte abaixo do mínimo, possível estouro de texto, gráfico sem fonte, título ausente, tabela longa, logo ausente, fontes não permitidas). Retorna código 1 se houver `erro`. Ver `07-checklists/auditoria-de-arquivo.md`.
