# Gráfico (`chart`)

## Quando usar
Tendência (linha), comparação entre categorias (barras/colunas), composição (empilhado, pizza até 4 fatias), variação (waterfall). Um gráfico por slide.

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão do gráfico |
| Subtítulo (opcional) | 0,5 | 1,3 | 12,33 | 0,5 | unidade e período ("R$ mi, jan a ago/26") |
| Gráfico | 0,5 | 1,9 | 12,33 | 4,8 | ou coluna esquerda (0,5 / 1,9 / 8,0 / 4,8) com comentários à direita (8,8 / 1,9 / 4,03 / 4,8) |
| Rodapé | 0,5 | 6,8 | 12,33 | 0,4 | fonte dos dados, 10 pt |

## Regras de estilo (aplicadas pelo código base)
- Sem título interno no gráfico (o título do slide já é a conclusão).
- Sem linhas de grade verticais; grade horizontal fina em `neutral_light`.
- Eixos em `neutral_mid`, 11 a 12 pt. Eixo Y começa em zero para barras/colunas.
- Rótulos de dados diretamente nas barras/pontos quando há até 12 pontos; legenda só se houver 2 ou mais séries.
- Legenda embaixo ou à direita; nunca sobre os dados.
- Série principal em `primary`, secundária em `secondary`, meta/referência em `neutral_mid` tracejado, destaque em `accent`.
- Sem 3D, sem sombra, sem gradiente.
- Ordenar categorias por valor (decrescente) quando não houver ordem natural (tempo).

## Escolha do tipo
Ver `05-artefatos-visuais/graficos/escolha-do-grafico.md`. Resumo:
| Pergunta | Tipo |
|---|---|
| Como evoluiu ao longo do tempo? | `line` (ou `column` para poucos períodos) |
| Quem é maior? | `bar` (horizontal, ordenado) |
| Real vs. meta por categoria? | `column` ou `bar` agrupado (2 séries) |
| Como se compõe o total? | `stacked_column` (até 5 partes) ou `pie`/`doughnut` (até 4 fatias) |
| De onde veio a variação? | waterfall (usar `column` com valores positivos/negativos até haver suporte nativo) |
| Causas principais? | `bar` decrescente (Pareto) |

## Spec
```json
{
  "type": "chart", "title": "Avanço físico de 62% vs. 68% planejado", "subtitle": "% acumulado por semana",
  "chart_type": "line",
  "categories": ["S28","S29","S30","S31","S32","S33","S34"],
  "series": [{"name": "Planejado", "values": [40,45,50,55,60,64,68]}, {"name": "Real", "values": [40,44,48,52,56,59,62]}],
  "highlight_index": 6,
  "source": "Cronograma, base 01/09/2026"
}
```
`chart_type`: `bar`, `column`, `line`, `pie`, `doughnut`, `stacked_column`, `stacked_bar`, `area`.
