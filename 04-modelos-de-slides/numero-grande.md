# Número grande (`big_number`)

## Quando usar
Quando um único número é a mensagem: tamanho de mercado, custo do problema, resultado alcançado, meta. Decks estratégicos, pitch, proposta, all-hands.

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão |
| Número | 0,5 | 2,0 | 12,33 | 2,0 | 72 a 96 pt, bold, `primary` (ou `accent`), centralizado |
| Rótulo | 0,5 | 4,0 | 12,33 | 0,6 | 18 a 20 pt, `neutral_mid`, centralizado |
| Contexto | 0,5 | 4,8 | 12,33 | 1,2 | 14 a 16 pt, `neutral_dark`, centralizado; comparação, base, período |
| Rodapé | 0,5 | 6,8 | 12,33 | 0,4 | fonte |

## Variante lado a lado
Número à esquerda (0,5 / 1,9 / 5,5 / 4,8) e 3 a 4 bullets de explicação à direita (6,5 / 1,9 / 6,33 / 4,8).

## Regras
- Número com unidade e arredondado ("R$ 2,1 mi", não "R$ 2.137.412,00").
- Contexto obrigatório: comparação ou base ("= 8% do faturamento", "12 mil plantas × R$ 78 mil").
- Um número por slide. Dois números comparáveis (antes/depois) usam a variante `two_column` com números grandes em cada lado.

## Spec
```json
{ "type": "big_number", "title": "Você gasta R$ 2,1 mi por ano em energia sem saber onde",
  "value": "R$ 2,1 mi", "label": "custo anual de energia", "context": "Fatura única, sem rateio por máquina ou turno. Equivale a 8% do faturamento.",
  "source": "Faturas de energia 2025, fornecidas pelo cliente" }
```
