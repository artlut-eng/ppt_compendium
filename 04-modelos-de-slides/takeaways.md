# Leitura executiva / takeaways (`takeaways`)

## Quando usar
Três (2 a 4) pontos numerados lado a lado, cada um com título curto e uma frase: leitura executiva de um conjunto de dados, direcionadores, decisões pedidas, plano em fases (agora / próximas semanas / após 30 dias). Substitui listas de bullets quando os pontos são paralelos e merecem peso igual.

## Anatomia (3 itens)
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Cartão i | 0,5 + i × 4,21 | top + 0,2 | 3,91 | até 4,3 | fundo `neutral_light`; barra superior 0,06 na cor da série `chart[i]` (ou `primary`) |
| Número / tag | +0,25 | +0,25 | 3,4 | 0,45 | número "01" 22 pt bold na cor da barra; ou `tag` em pílula 10 pt (ex.: "Agora") |
| Título | +0,25 | +0,8 | 3,4 | 0,7 | 18 pt bold `neutral_dark` |
| Texto | +0,25 | +1,55 | 3,4 | restante | 14 pt `neutral_dark`, até 4 linhas |

Para 2 itens: width 6,02, passo 6,32. Para 4: width 2,86, passo 3,16 (título 15 pt, texto 12 pt).

## Regras
- Paralelismo: mesmo tipo de frase nos três (todos começam com verbo, ou todos com substantivo).
- Um `tag` opcional por item substitui o número (fases no tempo, categorias).
- Combina bem com `callout` `decision` embaixo.

## Spec
```json
{ "type": "takeaways", "title": "Três direcionadores devem filtrar o próximo ciclo",
  "items": [
    {"heading": "Foco", "text": "Priorizar iniciativas alinhadas à estratégia e limitar dispersão."},
    {"heading": "Previsibilidade", "text": "Pactuar capacidade, prazo e maturidade com metas realistas."},
    {"tag": "Após 30 dias", "heading": "Valor", "text": "Acompanhar a materialização dos benefícios."}
  ],
  "callout": {"kind": "conclusion", "label": "Princípio", "text": "Nenhuma iniciativa avança sem responder aos três filtros."} }
```
