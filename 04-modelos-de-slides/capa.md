# Capa (`cover`)

## Quando usar
Primeiro slide de qualquer deck apresentado ou distribuído. Exceção: painéis operacionais diários (começam direto no painel).

## Anatomia (16:9, pol.)
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Fundo | 0 | 0 | 13,333 | 7,5 | `primary_dark` sólido |
| Faixa de destaque (opcional) | 0 | 6,9 | 13,333 | 0,6 | `accent` |
| Título | 0,8 | 2,4 | 11,7 | 1,6 | 40 a 44 pt, bold, branco, alinhado à esquerda |
| Subtítulo | 0,8 | 4,1 | 11,7 | 0,8 | 20 a 24 pt, branco 80% |
| Data / autor / área | 0,8 | 6,3 | 11,7 | 0,5 | 12 a 14 pt, branco 70% |
| Logo | 11,3 | 0,5 | 1,5 | 0,6 | canto superior direito, pequeno |

## Regras
- Título: nome do deck em até 8 palavras. Não é o título-conclusão; a conclusão vai no sumário executivo.
- Subtítulo: período, contexto ou público ("Relatório de status - semana 34").
- Nada além de título, subtítulo, data/autor, logo. Sem imagem de fundo decorativa (aceitável para externo/pitch se for da marca).
- Confidencialidade, se aplicável, na linha de data.

## Variantes
- **Clara**: fundo `background`, título em `primary`, faixa `primary` no topo (0 / 0 / 13,333 / 0,25). Para decks impressos.
- **Externa**: imagem da marca à direita (6,7 / 0 / 6,63 / 7,5) e título à esquerda.

## Spec
```json
{ "type": "cover", "title": "Projeto Atlas", "subtitle": "Relatório de status - semana 34", "author": "PMO", "date": "01/09/2026" }
```
