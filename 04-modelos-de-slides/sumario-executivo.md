# Sumário executivo (`executive_summary`)

## Quando usar
Slide 2 de todo deck tático ou estratégico. É o slide mais importante: quem só ler este deve sair com a resposta completa.

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | "Sumário executivo" ou já a conclusão |
| Mensagem central (headline) | 0,5 | 1,5 | 12,33 | 1,1 | 22 a 24 pt, bold, `primary`; caixa com fundo `neutral_light` e barra lateral `accent` (0,5 / 1,5 / 0,08 / 1,1) |
| Pontos de sustentação (3) | 0,5 | 2,9 | 12,33 | 2,7 | 16 a 18 pt; cada ponto com número/marcador em `primary`; 0,9 pol. de altura por ponto |
| Pedido / decisão | 0,5 | 5,8 | 12,33 | 0,8 | 16 a 18 pt, bold; rótulo "Pedimos:" ou "Decisão:" em `accent` |

## Regras
- Headline: 1 frase, no máximo 2 linhas, com número.
- Exatamente 3 pontos (2 a 4 aceitável). Cada um com um dado.
- O pedido é obrigatório em decks que buscam decisão; em relatórios informativos, substituir por "Próximo passo".
- Nenhum gráfico neste slide.
- Ordem: resposta, evidência, pedido. Nunca contexto primeiro.

## Variante para deck de leitura (sem apresentador)
Aumentar para 4 a 5 pontos com frases completas e dividir em 2 slides (Resultado / Ações).

## Spec
```json
{
  "type": "executive_summary",
  "title": "Sumário executivo",
  "headline": "EBITDA de R$ 8,2 mi, 6% acima do orçamento, apesar de receita 2% abaixo",
  "points": ["Custo unitário caiu 4% com renegociação", "Receita abaixo por volume na Divisão A", "Caixa líquido de R$ 12 mi"],
  "ask": "Aprovar antecipação de capex de R$ 2 mi"
}
```
