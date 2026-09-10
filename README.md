# PPT Compendium

Base de conhecimento para que IAs (e pessoas) criem apresentações em PowerPoint de forma consistente: **público-alvo → tipo de apresentação → estrutura narrativa → modelos de slide → regras visuais → código gerador**.

Idioma: português (pt-BR). Formato padrão dos decks: **16:9 (13,333 × 7,5 pol.)**.

## Como uma IA deve usar este repositório

1. Leia [`00-guia/como-usar.md`](00-guia/como-usar.md) — é o fluxo de decisão completo.
2. Se o pedido vem com uma planilha, comece por [`00-guia/da-base-ao-deck.md`](00-guia/da-base-ao-deck.md) e o perfil automático `profile_data.py`.
3. Faça o **briefing** com [`00-guia/briefing.md`](00-guia/briefing.md): mensagem central, objetivo, nível de exposição (interno, interáreas, externo) e identidade visual (logotipo, cores). Modo direto ou guiado: [`00-guia/prompt-base-para-agentes.md`](00-guia/prompt-base-para-agentes.md).
4. Identifique o **público** em [`02-publicos/`](02-publicos/README.md): nível (estratégico, tático, operacional, externo) e estilo de comunicação do decisor ([4 cores](02-publicos/estilos-de-comunicacao.md)).
5. Identifique o **tipo de apresentação** em [`03-tipos-de-apresentacao/`](03-tipos-de-apresentacao/README.md).
6. Monte o deck com os **modelos de slide** de [`04-modelos-de-slides/`](04-modelos-de-slides/README.md).
7. Escreva títulos-conclusão com o [`banco de títulos`](01-fundamentos/banco-de-titulos.md) e aplique **paletas, tipografia e escolha de gráficos** de [`01-fundamentos/`](01-fundamentos/) e [`05-artefatos-visuais/`](05-artefatos-visuais/README.md).
8. Gere o arquivo com o código de [`06-codigo/`](06-codigo/README.md) a partir de uma spec no formato [`schemas/deck-spec.schema.json`](schemas/deck-spec.schema.json).
9. Para melhorar um deck que já existe, siga [`00-guia/revisao-de-deck-existente.md`](00-guia/revisao-de-deck-existente.md) (`extract_deck.py`, `score_deck.py`).
10. Valide com os **checklists** de [`07-checklists/`](07-checklists/) e o validador `06-codigo/python-pptx/audit_deck.py`; separe fatos, inferências e recomendações ([`00-guia/fatos-inferencias-recomendacoes.md`](00-guia/fatos-inferencias-recomendacoes.md)).

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `00-guia/` | Fluxo de decisão, briefing, prompt base para agentes, da base ao deck, revisão de deck existente, fatos × inferências × recomendações, glossário |
| `01-fundamentos/` | Princípios de design, tipografia, cores, grid, storytelling, acessibilidade, banco de títulos, formatação numérica |
| `02-publicos/` | Perfis por nível (estratégico, tático, operacional, externo) e por estilo de comunicação (vermelho, amarelo, verde, azul) |
| `03-tipos-de-apresentacao/` | 16 tipos (status de projeto, financeiro, vendas, pitch, plano estratégico, análise de processo, portfólio, KPIs de área, progresso...) com estrutura slide a slide e spec |
| `04-modelos-de-slides/` | 23 modelos de slide (capa, KPI, tabela, timeline, takeaways, barras de progresso...) + campos comuns (kicker, callout, cabeçalho, logotipo) com anatomia e coordenadas |
| `05-artefatos-visuais/` | Paletas em JSON, escolha de gráficos, ícones e formas, logotipo e marca, template corporativo (com exemplo) |
| `06-codigo/` | Bibliotecas base em python-pptx e PptxGenJS, gerador a partir da spec, perfil de base de dados, formatação numérica, extração/reconstrução de decks existentes, pontuação pela rubrica, miniaturas (PowerPoint) e validador automático |
| `07-checklists/` | Pré-entrega, por público, por nível de exposição, auditoria de arquivo e rubrica de qualidade (0 a 100) |
| `schemas/` | JSON Schema da spec de deck + `exemplos/` (uma spec por tipo, extraídas da documentação) |
| `examples/` | Decks `.pptx` gerados a partir de `schemas/exemplos/` pelo código base, com miniaturas PNG em `examples/thumbnails/` |

## Convenções

- Um slide = uma ideia. O título do slide é a **conclusão** (frase completa), não o assunto.
- Medidas em **polegadas** (unidade nativa do python-pptx e do PptxGenJS). Ver grid em `01-fundamentos/grid-e-layout.md`.
- Cores sempre em hexadecimal sem `#` nos JSONs de paleta (`1F3A5F`), com `#` nos textos Markdown.
- Toda recomendação numérica (nº de slides, tamanho de fonte) é um **padrão inicial**, não uma regra rígida.

## Status

v0.4 — v0.3 + da base ao deck, slide de imagem, banco de títulos, formatação numérica, revisão de deck existente, rubrica, paginação de tabelas, template corporativo, waterfall/Pareto/Gantt, paletas por setor, versão JS completa, guias em inglês.

v0.3 — v0.2 + prompt base para agentes (modos direto/guiado), fatos × inferências × recomendações, 4 novos tipos (análise de processo, portfólio, KPIs de área, progresso), callout/kicker/cabeçalho/logotipo em todos os slides, modelos takeaways e barras de progresso, validador automático e placeholders de logo.

## Roadmap sugerido

- [x] Exemplos `.pptx` gerados para cada tipo de apresentação (`examples/`)
- [x] Versão JS completa (23 modelos; sem template corporativo)
- [x] Miniaturas (PNG) de todos os exemplos (`examples/thumbnails/`, geradas por `render_thumbnails.py` via PowerPoint)
- [x] Template corporativo (`meta.template`, `template_branding`) com exemplo
- [x] Paletas por segmento (indústria, saúde, tecnologia, varejo/serviços, educação/público)
- [ ] Biblioteca de ícones SVG neutros
- [x] Validador automático de deck (`audit_deck.py`)
- [ ] Exemplos com identidade de marca real (paleta + logo) via fork privado
- [ ] Guias completos em inglês (hoje: `README.en.md` e `00-guia/como-usar.en.md`)
