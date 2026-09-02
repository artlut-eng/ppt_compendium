# Tabela (`table`)

## Quando usar
Quando o público precisa ler valores exatos ou comparar várias dimensões ao mesmo tempo (DRE resumida, lista de entregas, plano de ação, riscos). Não usar tabela para mostrar tendência (use gráfico).

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão da tabela |
| Tabela | 0,5 | 1,6 | 12,33 | até 5,0 | altura de linha 0,4 a 0,5 pol. |
| Rodapé | 0,5 | 6,8 | 12,33 | 0,4 | fonte, notas |

## Regras de estilo (aplicadas pelo código base)
- Cabeçalho: fundo `primary`, texto branco bold 12 a 14 pt.
- Linhas: zebra com `neutral_light` em linhas pares; sem bordas verticais; borda horizontal fina `neutral_light`.
- Texto 12 a 14 pt (operacional: 16 a 18 pt).
- Números alinhados à direita, texto à esquerda, status centralizado.
- Máximo 8 a 10 linhas e 6 a 7 colunas. Acima disso: top N + "outros" e tabela completa em anexo.
- Linha de total em bold com borda superior `neutral_mid`.
- Coluna de status: célula com texto ("Verde", "Amarelo", "Vermelho") e fundo na cor semântica, quando `status_column` estiver definido.
- Destaque de uma linha (a que importa): fundo `accent` a 20% ou texto bold, via `highlight_rows`.

## Spec
```json
{
  "type": "table", "title": "Margem bruta subiu 1,8 p.p.",
  "columns": ["R$ mi", "Real", "Orçado", "Var.", "Var. %"],
  "rows": [
    ["Receita líquida", "41,3", "42,1", "(0,8)", "-1,9%"],
    ["Custo", "(27,0)", "(28,3)", "1,3", "-4,6%"],
    ["Margem bruta", "14,3", "13,8", "0,5", "+3,6%"]
  ],
  "align": ["left", "right", "right", "right", "right"],
  "total_row": true,
  "highlight_rows": [2],
  "source": "DRE gerencial"
}
```
Campos opcionais: `align` (por coluna), `total_row` (última linha em bold), `highlight_rows` (índices), `status_column` (índice da coluna cujo conteúdo é `success|warning|danger|neutral` ou texto Verde/Amarelo/Vermelho), `col_widths` (lista em polegadas).
