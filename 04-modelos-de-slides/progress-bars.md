# Barras de progresso / distribuição (`progress_bars`)

## Quando usar
Lista de 3 a 10 itens com um valor proporcional cada: distribuição por categoria, carga por equipe, % de preenchimento de campos (qualidade de dado), aprovação por parâmetro, atingimento por região. É um gráfico de barras construído com formas, mais legível que o gráfico nativo quando há poucos itens e rótulos longos, e permite cor semântica por linha.

## Anatomia (1 coluna)
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Rótulo i | 0,5 | top + i × 0,55 | 3,0 | 0,45 | 14 pt, `neutral_dark`, alinhado à esquerda |
| Trilha | 3,6 | +0,1 | 7,0 | 0,25 | `neutral_light` |
| Preenchimento | 3,6 | +0,1 | 7,0 × valor/max | 0,25 | `primary`; ou cor do `status` |
| Valor (display) | 10,7 | top + i × 0,55 | 2,13 | 0,45 | 13 pt bold, cor do status ou `neutral_dark`, alinhado à esquerda |

Com `columns: 2`, cada coluna tem rótulo 1,9 / trilha 3,0 / valor 1,0, passo horizontal 6,32; até 12 itens.

## Regras
- `max` define a escala (padrão 100). Barras comparáveis só com o mesmo `max`.
- `display` é o texto mostrado ("13/25 aprovados | 52%"); se ausente, mostra o valor.
- `status` colore a barra e o valor (`danger` para o pior, etc.); sem status, tudo em `primary` e o destaque se dá por `highlight_index` em `accent`.
- Ordenar do maior para o menor, salvo ordem natural (etapas, campos do processo).

## Spec
```json
{ "type": "progress_bars", "title": "A gestão perde previsibilidade onde faltam marcos",
  "items": [
    {"label": "Data de aprovação", "value": 44, "display": "31 sem registro (44%)", "status": "warning"},
    {"label": "Data do pedido", "value": 62, "display": "44 sem registro (62%)", "status": "danger"},
    {"label": "Entrega real", "value": 82, "display": "58 sem registro (82%)", "status": "danger"}
  ],
  "max": 100, "columns": 1 }
```
