# Imagem / print de tela (`image`)

## Quando usar
Prints de sistema em treinamentos, fotos de produto ou instalação em decks externos, fotos de equipe em all-hands, diagramas exportados de outras ferramentas. A imagem é o conteúdo; o título continua sendo a conclusão ("Quatro passos para registrar uma parada").

## Anatomia
| Layout | Imagem | Texto |
|---|---|---|
| `full` | ajustada a (0,5 / top / 12,33 / até 5,2), centralizada, proporção preservada | legenda opcional abaixo, 11 pt itálico `neutral_mid` |
| `left` | (0,5 / top / 8,0 / altura disponível) | bullets à direita (8,8 / top / 4,03) |
| `right` | (4,83 / top / 8,0 / altura disponível) | bullets à esquerda (0,5 / top / 4,03) |

Borda fina `neutral_light` em volta da imagem. Com `callout`, a altura disponível diminui 1 pol.

## Destaques numerados (`highlights`)
Retângulos `accent` de 2,25 pt sem preenchimento sobre a imagem, com círculo numerado no canto superior esquerdo. Coordenadas normalizadas (0 a 1) em relação à imagem: `{"x": 0.2, "y": 0.22, "w": 0.55, "h": 0.07, "number": 1}`. Os números devem corresponder aos passos nos bullets.

## Regras
- Resolução mínima 150 dpi no tamanho final; prints em 1600 px de largura ou mais.
- Recortar o print ao que importa antes de inserir; não mostrar barra do navegador, área de trabalho, dados pessoais.
- Texto alternativo (`alt`) sempre: uma frase com o que a imagem mostra (padrão: legenda ou título).
- Uma imagem por slide; comparação antes/depois usa dois slides `image` ou um `two_column` com imagens pequenas.
- Fotos de pessoas só com autorização; logos de terceiros idem.

## Spec
```json
{ "type": "image", "kicker": "Passo a passo", "title": "Quatro passos para registrar uma parada",
  "image": "05-artefatos-visuais/print-placeholder.png", "layout": "left",
  "highlights": [{"x": 0.2, "y": 0.22, "w": 0.55, "h": 0.07, "number": 1}, {"x": 0.2, "y": 0.34, "w": 0.55, "h": 0.07, "number": 2}, {"x": 0.2, "y": 0.73, "w": 0.15, "h": 0.08, "number": 3}],
  "bullets": ["**1.** Selecionar a máquina", "**2.** Escolher a causa na lista", "**3.** Confirmar e informar a duração"],
  "caption": "Tela Paradas > Nova parada (ambiente de teste)", "alt": "Formulário de registro de parada com campos máquina, causa, início e duração" }
```
