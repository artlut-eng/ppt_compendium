# PPT Compendium

Base de conhecimento para que IAs (e pessoas) criem apresentações em PowerPoint de forma consistente: **público-alvo → tipo de apresentação → estrutura narrativa → modelos de slide → regras visuais → código gerador**.

Idioma: português (pt-BR). Formato padrão dos decks: **16:9 (13,333 × 7,5 pol.)**.

## Como uma IA deve usar este repositório

1. Leia [`00-guia/como-usar.md`](00-guia/como-usar.md) — é o fluxo de decisão completo.
2. Faça o **briefing** com [`00-guia/briefing.md`](00-guia/briefing.md): mensagem central, objetivo e nível de exposição (interno, interáreas, externo).
3. Identifique o **público** em [`02-publicos/`](02-publicos/README.md): nível (estratégico, tático, operacional, externo) e estilo de comunicação do decisor ([4 cores](02-publicos/estilos-de-comunicacao.md)).
4. Identifique o **tipo de apresentação** em [`03-tipos-de-apresentacao/`](03-tipos-de-apresentacao/README.md).
5. Monte o deck com os **modelos de slide** de [`04-modelos-de-slides/`](04-modelos-de-slides/README.md).
6. Aplique **paletas, tipografia e escolha de gráficos** de [`01-fundamentos/`](01-fundamentos/) e [`05-artefatos-visuais/`](05-artefatos-visuais/README.md).
7. Gere o arquivo com o código de [`06-codigo/`](06-codigo/README.md) a partir de uma spec no formato [`schemas/deck-spec.schema.json`](schemas/deck-spec.schema.json).
8. Valide com os **checklists** de [`07-checklists/`](07-checklists/).

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `00-guia/` | Fluxo de decisão, roteiro de briefing (mensagem central, exposição) e glossário |
| `01-fundamentos/` | Princípios de design, tipografia, cores, grid, storytelling, acessibilidade |
| `02-publicos/` | Perfis por nível (estratégico, tático, operacional, externo) e por estilo de comunicação (vermelho, amarelo, verde, azul) |
| `03-tipos-de-apresentacao/` | Catálogo de tipos (status de projeto, financeiro, vendas, pitch, plano estratégico...) com estrutura slide a slide |
| `04-modelos-de-slides/` | Padrões de slide individuais (capa, KPI, tabela, timeline, comparação...) com anatomia e coordenadas |
| `05-artefatos-visuais/` | Paletas em JSON, guia de escolha de gráficos, ícones e formas |
| `06-codigo/` | Bibliotecas base em python-pptx e PptxGenJS + exemplos que leem a spec JSON |
| `07-checklists/` | Verificações antes da entrega, por público e por nível de exposição |
| `schemas/` | JSON Schema da spec de deck + `exemplos/` (uma spec por tipo, extraídas da documentação) |
| `examples/` | Decks `.pptx` gerados a partir de `schemas/exemplos/` pelo código base, com miniaturas PNG em `examples/thumbnails/` |

## Convenções

- Um slide = uma ideia. O título do slide é a **conclusão** (frase completa), não o assunto.
- Medidas em **polegadas** (unidade nativa do python-pptx e do PptxGenJS). Ver grid em `01-fundamentos/grid-e-layout.md`.
- Cores sempre em hexadecimal sem `#` nos JSONs de paleta (`1F3A5F`), com `#` nos textos Markdown.
- Toda recomendação numérica (nº de slides, tamanho de fonte) é um **padrão inicial**, não uma regra rígida.

## Status

v0.2 — base inicial (públicos, tipos, modelos de slide, paletas, código, schema) + briefing com nível de exposição, estilos de comunicação e miniaturas renderizadas.

## Roadmap sugerido

- [x] Exemplos `.pptx` gerados para cada tipo de apresentação (`examples/`)
- [ ] Versão JS completa (comparison, timeline, process, matrix_2x2, quote)
- [x] Miniaturas (PNG) de todos os exemplos (`examples/thumbnails/`, geradas por `render_thumbnails.py` via PowerPoint)
- [ ] Templates `.potx` corporativos
- [ ] Paletas por segmento (indústria, saúde, tecnologia, varejo)
- [ ] Biblioteca de ícones SVG neutros
- [ ] Validador automático de spec + checklist
