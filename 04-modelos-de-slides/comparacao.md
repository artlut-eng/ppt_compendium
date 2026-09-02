# Comparação (`comparison`)

## Quando usar
2 a 4 opções, cenários, pilares ou produtos lado a lado com os mesmos critérios. Alternativas em business case, planos de preço em proposta, pilares em plano estratégico.

## Anatomia (3 colunas)
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão ("Opção B tem melhor retorno") |
| Cartão i (i = 0..2) | 0,5 + i × 4,21 | 1,6 | 3,91 | 5,0 | fundo `neutral_light`; cartão recomendado com borda `accent` 2 pt |
| Cabeçalho do cartão | +0 | +0 | 3,91 | 0,7 | fundo `primary`, texto branco bold 16 a 18 pt, centralizado |
| Pontos | +0,25 | +0,9 | 3,41 | 4,0 | 14 a 16 pt, 3 a 6 bullets, mesmos critérios na mesma ordem em todas as colunas |
| Selo "Recomendada" (opcional) | +2,4 | -0,25 | 1,5 | 0,4 | fundo `accent`, 11 pt bold |

Para 2 colunas: width 6,02, passo 6,32. Para 4: width 2,86, passo 3,16 (fonte 12 a 14 pt).

## Regras
- Mesmos critérios, mesma ordem, mesma quantidade de linhas em todas as colunas ("Custo:", "Retorno:", "Risco:").
- No máximo uma coluna destacada como recomendada.
- Quando há mais de 6 critérios, use `table` com opções nas colunas.

## Spec
```json
{
  "type": "comparison", "title": "Opção B tem melhor retorno com risco aceitável",
  "options": [
    {"name": "Não fazer", "points": ["Custo: R$ 0", "Perda: R$ 1,8 mi/ano", "Risco: parada total"]},
    {"name": "A: Reforma", "points": ["Custo: R$ 0,9 mi", "Economia: R$ 0,7 mi/ano", "Risco: sem peças"]},
    {"name": "B: Prensa nova", "points": ["Custo: R$ 2,4 mi", "Economia: R$ 1,45 mi/ano", "Risco: 5 dias parada"], "recommended": true}
  ]
}
```
