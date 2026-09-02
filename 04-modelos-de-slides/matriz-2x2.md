# Matriz 2×2 (`matrix_2x2`)

## Quando usar
Priorização (impacto × esforço), posicionamento competitivo (preço × qualidade), riscos (probabilidade × impacto), SWOT (4 quadrantes sem eixos).

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão ("Três iniciativas de alto impacto e baixo esforço") |
| Área da matriz | 1,5 | 1,6 | 9,0 | 5,0 | quadrado ou retângulo centralizado |
| Quadrante TL / TR / BL / BR | 1,5 / 6,0 ; 1,6 / 4,1 | | 4,5 | 2,5 | fundo `neutral_light`; quadrante de destaque com fundo `accent` a 15% |
| Rótulo do quadrante | canto superior esquerdo de cada | | | | 11 a 12 pt bold, `neutral_mid` ("Fazer agora", "Planejar", "Delegar", "Descartar") |
| Itens | dentro do quadrante | | | | 12 a 14 pt, bullets ou círculos rotulados posicionados por (x, y) normalizados 0 a 1 |
| Eixo X (rótulo) | 1,5 | 6,7 | 9,0 | 0,4 | centralizado, com seta e "baixo / alto" nas extremidades |
| Eixo Y (rótulo) | 0,6 | 1,6 | 0,8 | 5,0 | rotacionado 270°, "baixo / alto" |
| Legenda / comentários | 10,8 | 1,6 | 2,0 | 5,0 | opcional |

## Regras
- Máximo 10 a 12 itens no total; nomes curtos.
- Quadrante "bom" sempre no canto superior direito (alto × alto) para leitura intuitiva.
- SWOT: sem eixos; quadrantes Forças / Fraquezas / Oportunidades / Ameaças, 3 a 5 bullets cada.

## Spec
```json
{
  "type": "matrix_2x2", "title": "Três iniciativas de alto impacto e baixo esforço",
  "x_label": "Esforço", "y_label": "Impacto",
  "quadrants": {
    "tl": {"label": "Planejar", "items": ["Automação L4"]},
    "tr": {"label": "Fazer agora", "items": ["SMED turno C", "Kit de material na linha", "Alerta de energia"]},
    "bl": {"label": "Descartar", "items": ["Novo layout do refeitório"]},
    "br": {"label": "Delegar", "items": ["Revisão de checklist"]}
  },
  "highlight": "tr"
}
```
Nota: na convenção acima, o eixo X cresce da direita para a esquerda no caso de "esforço" (menor esforço = melhor). Prefira eixos onde "alto" é sempre melhor (ex.: "Facilidade" em vez de "Esforço") para manter o quadrante bom no canto superior direito.
