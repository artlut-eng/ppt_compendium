# Divisória de seção (`section`)

## Quando usar
Decks com 12 ou mais slides, para marcar a transição entre blocos (diagnóstico / direção / plano). Não usar em decks curtos nem em painéis operacionais.

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Fundo | 0 | 0 | 13,333 | 7,5 | `primary` sólido |
| Número da seção | 0,8 | 2,2 | 2,0 | 1,0 | 60 pt, bold, `accent` |
| Título da seção | 0,8 | 3,3 | 11,7 | 1,2 | 36 pt, bold, branco |
| Descrição (opcional) | 0,8 | 4,5 | 11,7 | 0,8 | 18 pt, branco 80%, uma frase com a conclusão do bloco |

## Regras
- Título curto (até 5 palavras).
- Descrição opcional: a conclusão da seção em uma frase (ajuda quem lê sem apresentador).
- Mesma cor de fundo em todas as divisórias do deck.

## Spec
```json
{ "type": "section", "number": "2", "title": "Para onde vamos", "subtitle": "Três pilares para dobrar a receita até 2029" }
```
