# Modelos de slide

Padrões reutilizáveis de **um slide**. Cada arquivo traz: quando usar, anatomia com coordenadas (polegadas, 16:9), regras, variantes e o trecho de spec correspondente. A chave `type` é a usada em `schemas/deck-spec.schema.json` e implementada em `06-codigo/`.

## Catálogo

| Modelo | `type` na spec | Quando usar | Arquivo |
|---|---|---|---|
| Capa | `cover` | Primeiro slide de qualquer deck com apresentador | [`capa.md`](capa.md) |
| Agenda | `agenda` | Decks com 8 ou mais slides ou mais de 3 blocos | [`agenda.md`](agenda.md) |
| Divisória de seção | `section` | Separar blocos em decks com 12 ou mais slides | [`secao-divisoria.md`](secao-divisoria.md) |
| Sumário executivo | `executive_summary` | Slide 2 de qualquer deck tático/estratégico | [`sumario-executivo.md`](sumario-executivo.md) |
| Painel de KPIs | `kpi_row` | Visão geral de 3 a 6 indicadores com status | [`kpi-dashboard.md`](kpi-dashboard.md) |
| Número grande | `big_number` | Um único número que é a mensagem | [`numero-grande.md`](numero-grande.md) |
| Gráfico | `chart` | Tendência, comparação, composição | [`grafico.md`](grafico.md) |
| Tabela | `table` | Dados que precisam de leitura precisa (até 8 a 10 linhas) | [`tabela.md`](tabela.md) |
| Bullets | `bullets` | 3 a 6 pontos de texto | [`bullets-e-duas-colunas.md`](bullets-e-duas-colunas.md) |
| Duas colunas | `two_column` | Antes/depois, certo/errado, dentro/fora | [`bullets-e-duas-colunas.md`](bullets-e-duas-colunas.md) |
| Comparação | `comparison` | 2 a 4 opções lado a lado | [`comparacao.md`](comparacao.md) |
| Timeline / roadmap | `timeline` | Marcos no tempo | [`timeline-roadmap.md`](timeline-roadmap.md) |
| Processo / fluxo | `process` | Etapas sequenciais (3 a 6) | [`processo-fluxo.md`](processo-fluxo.md) |
| Matriz 2×2 | `matrix_2x2` | Priorização, posicionamento, SWOT | [`matriz-2x2.md`](matriz-2x2.md) |
| Riscos e issues | `table` (variante) | Lista priorizada de riscos com dono | [`riscos-e-issues.md`](riscos-e-issues.md) |
| Plano de ação / próximos passos | `action_plan` | Ações com dono, prazo e status | [`proximos-passos.md`](proximos-passos.md) |
| Citação / destaque | `quote` | Frase de impacto, depoimento, visão | [`citacao-destaque.md`](citacao-destaque.md) |
| Encerramento | `closing` | Último slide: pedido, contato, próxima revisão | [`encerramento.md`](encerramento.md) |
| Leitura executiva / takeaways | `takeaways` | 2 a 4 pontos numerados lado a lado (leitura, direcionadores, fases) | [`takeaways.md`](takeaways.md) |
| Barras de progresso / distribuição | `progress_bars` | 3 a 12 itens com valor proporcional e cor por status (qualidade de dado, carga, distribuição) | [`progress-bars.md`](progress-bars.md) |
| Waterfall / ponte | `waterfall` | Variação entre dois totais (EBITDA, receita, orçamento) | [`waterfall.md`](waterfall.md) |
| Pareto | `pareto` | Causas ordenadas com % acumulado e limiar 80% | [`pareto.md`](pareto.md) |
| Gantt simplificado | `gantt` | Fases e marcos por período, com linha de hoje | [`gantt.md`](gantt.md) |
| Imagem / print de tela | `image` | Prints com destaques numerados, fotos, diagramas; layouts full/left/right | [`imagem.md`](imagem.md) |
| Callout rotulado | campo `callout` | Caixa de conclusão / ressalva / recomendação / decisão no rodapé de qualquer slide | [`callout.md`](callout.md) |
| Cabeçalho, kicker e logotipo | `meta.brand`, `kicker`, `meta.logo` | Identidade e navegação em todos os slides | [`cabecalho-kicker-e-logo.md`](cabecalho-kicker-e-logo.md) |

## Campos comuns a todos os slides de conteúdo
| Campo | Obrigatório | Descrição |
|---|---|---|
| `type` | sim | Chave do modelo |
| `title` | sim (exceto capa, seção, citação, encerramento) | Título-conclusão, máx. 2 linhas |
| `subtitle` | não | Mensagem de apoio, 1 linha |
| `source` | não | Fonte dos dados; vai para o rodapé |
| `notes` | não | Notas do apresentador |
| `kicker` | não | Rótulo de seção em caixa alta acima do título |
| `callout` | não | `{kind, label, text}`; reduz a área de conteúdo em 1 pol. |

## Coordenadas de referência (pol.)
Ver `01-fundamentos/grid-e-layout.md`. Resumo: título em (0,5 / 0,4 / 12,33 / 0,9); conteúdo em (0,5 / 1,5 / 12,33 / 5,2) sem subtítulo ou (0,5 / 1,9 / 12,33 / 4,8) com subtítulo; rodapé em (0,5 / 6,8 / 12,33 / 0,4).
