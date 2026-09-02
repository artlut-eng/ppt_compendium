# Agenda (`agenda`)

## Quando usar
Decks com 8 ou mais slides de conteúdo ou mais de 3 blocos. Reuniões com discussão (kickoff, treinamento, all-hands). Não usar em decks executivos curtos (o sumário executivo já orienta).

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | "Agenda" ou "O que vamos ver" |
| Lista numerada | 0,5 | 1,7 | 8,0 | 4,8 | 20 a 24 pt, um item por linha, espaçamento 0,7 pol. entre itens |
| Número do item | 0,5 | (1,7 + i × 0,7) | 0,6 | 0,6 | círculo `primary` com número branco, ou número em `accent` 24 pt |
| Coluna direita (opcional) | 8,8 | 1,7 | 4,03 | 4,8 | tempo por bloco, ou imagem |

## Regras
- 3 a 7 itens. Mais que isso: agrupe.
- Itens como substantivos curtos ("Resultados do trimestre"), não frases.
- Tempo por bloco quando a reunião tem mais de 30 min.
- A mesma lista pode ser reutilizada como divisória com o item atual destacado (variante "agenda de progresso").

## Spec
```json
{ "type": "agenda", "items": ["Resultados do trimestre", "Conquistas dos times", "Onde estamos no plano", "O que muda", "Perguntas"] }
```
