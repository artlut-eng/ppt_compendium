# Waterfall / ponte (`waterfall`)

## Quando usar
Explicar como se sai de um total para outro (EBITDA orçado → real; receita ano anterior → atual; orçamento → realocação). É o gráfico mais importante do relatório financeiro e do deep dive de portfólio. Construído com formas (python-pptx não tem waterfall nativo), portanto editável como objetos.

## Anatomia
| Elemento | Estilo |
|---|---|
| Barras de total (`total: true`) | partem de zero, cor `primary` |
| Ganhos (valor positivo) | `success`, partem do nível acumulado |
| Perdas (valor negativo) | `danger` |
| Rótulo de valor | acima da barra, 12 pt bold, com sinal nos deltas |
| Conector | linha tracejada `neutral_mid` ligando o topo da barra anterior à seguinte |
| Linha de base | zero, `neutral_mid` |
| Categorias | abaixo, 11 pt, centralizadas |

Área: (0,5 / top+0,35 / 12,33 / até 4,5). Escala automática incluindo negativos.

## Regras
- Primeiro e último itens são totais; no meio, 2 a 7 deltas na ordem lógica (volume, preço, custo, despesas).
- Unidade no subtítulo ou em `unit`; mesma casa decimal em todos (`decimals`).
- Título diz de onde veio a variação ("Ganho de custo compensou volume menor").
- Não use para séries temporais (isso é linha ou coluna).

## Spec
```json
{ "type": "waterfall", "kicker": "Ponte de EBITDA", "title": "Ganho de custo compensou volume menor", "subtitle": "R$ mi, 2T26 vs. orçamento",
  "items": [
    {"label": "EBITDA orçado", "value": 7.7, "total": true},
    {"label": "Volume", "value": -0.9}, {"label": "Preço", "value": 0.3}, {"label": "Custo", "value": 1.4}, {"label": "Despesas", "value": -0.3},
    {"label": "EBITDA real", "value": 8.2, "total": true}
  ], "decimals": 1, "source": "DRE gerencial, jun/26" }
```
