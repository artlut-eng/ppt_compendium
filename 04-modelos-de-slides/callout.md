# Callout rotulado (campo `callout`, comum a todos os slides de conteúdo)

## Quando usar
Para fechar um slide com a leitura, a ressalva, a recomendação ou a decisão pedida, separada visualmente do dado. É o mecanismo padrão para sinalizar **fato × inferência × recomendação** (`00-guia/fatos-inferencias-recomendacoes.md`). No máximo um callout por slide.

## Tipos (`kind`)
| `kind` | Uso | Visual |
|---|---|---|
| `conclusion` | Leitura executiva, inferência, "o que isso significa" | Fundo `neutral_light`, barra lateral `primary`, rótulo `primary` |
| `warning` | Ressalva de dado, cuidado de leitura, ponto de atenção | Fundo âmbar claro, barra `warning`, rótulo `warning` |
| `recommendation` | Proposta, foco de melhoria, oportunidade | Fundo verde claro, barra `success`, rótulo `success` |
| `decision` | Decisão esperada/solicitada, controle mínimo, resultado esperado | Fundo `primary_dark`, texto branco, rótulo `accent` |

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Caixa | 0,5 | 5,85 | 12,33 | 0,8 | conforme `kind`; sem borda |
| Barra lateral | 0,5 | 5,85 | 0,08 | 0,8 | cor do `kind` (exceto `decision`) |
| Rótulo | 0,75 | 5,85 | 2,3 | 0,8 | 10 pt bold, caixa alta, cor do `kind`, centralizado verticalmente |
| Texto | 3,05 | 5,85 | 9,6 | 0,8 | 14 pt bold (`neutral_dark` ou branco), até 2 linhas |

Quando há callout, a área de conteúdo termina em 5,7 (em vez de 6,7); o código base ajusta os modelos automaticamente.

## Regras
- Rótulo de 1 a 3 palavras ("Conclusão operacional", "Cuidado de leitura", "Foco de melhoria", "Decisão esperada").
- Texto de até 2 linhas (cerca de 180 caracteres); frase completa.
- `decision` só no slide em que a decisão é de fato pedida; não repetir em todos.
- Não usar callout para repetir o título.

## Spec
```json
{ "type": "kpi_row", "title": "...", "kpis": [ ... ],
  "callout": {"kind": "warning", "label": "Cuidado de leitura", "text": "Solicitações mais novas ainda podem estar dentro do prazo; a queda não deve ser lida isoladamente como ganho estrutural."} }
```
