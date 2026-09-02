# Encerramento (`closing`)

## Quando usar
Último slide (antes dos anexos). Reforça o pedido ou próximo passo e dá o contato. Não usar "Obrigado" sozinho em decks que pedem decisão.

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Fundo | 0 | 0 | 13,333 | 7,5 | `primary_dark` (igual à capa) |
| Título | 0,8 | 2,6 | 11,7 | 1,4 | 36 a 40 pt, bold, branco: pedido, próxima data ou "Perguntas?" |
| Subtítulo | 0,8 | 4,1 | 11,7 | 0,8 | 18 a 20 pt, branco 80%: contato, canal, referência aos anexos |
| Logo | 11,3 | 6,4 | 1,5 | 0,6 | |

## Regras
- Título com conteúdo: "Próxima revisão: 15/09", "Pedimos aprovação até 30/09", "Perguntas?".
- Contato de quem responde depois (e-mail/canal).
- Se houver anexos, avisar aqui ("Anexos: DRE completa, premissas").
- Mesmo estilo visual da capa.

## Spec
```json
{ "type": "closing", "title": "Próxima revisão: 15/09", "subtitle": "pmo@empresa.com | Anexos: cronograma completo, registro de riscos" }
```
