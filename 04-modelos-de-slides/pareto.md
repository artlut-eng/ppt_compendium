# Pareto (`pareto`)

## Quando usar
Causas de parada, defeito, reprovação, perda de venda, chamados: mostrar quais poucas causas concentram a maior parte do efeito. Construído com formas: barras decrescentes + linha de % acumulado + limiar (80% por padrão).

## Anatomia
| Elemento | Estilo |
|---|---|
| Barras | decrescentes; as que compõem o acumulado até o limiar em `accent`, as demais em `primary` |
| Rótulo de valor | acima de cada barra, 11 pt bold |
| Linha acumulada | `neutral_dark` 1,75 pt com marcadores e rótulo de % |
| Limiar | linha tracejada horizontal em `threshold` (80%) com rótulo à direita |
| Categorias | abaixo, 11 pt |

Área: (0,5 / top+0,4 / 11,1 / até 4,4); coluna direita de 1,2 para o rótulo do limiar.

## Regras
- 3 a 8 causas; "Outros" por último e pequeno (se for grande, a classificação está fraca: diga isso).
- Título traz a conclusão ("Troca de ferramenta e falta de material somam 70% das paradas").
- `sort: false` só quando a ordem tem significado próprio (raro).
- Em público operacional, use `font_scale` maior; rótulos já são 11 pt.

## Spec
```json
{ "type": "pareto", "kicker": "Causas", "title": "Troca de ferramenta e falta de material somam 70% das paradas",
  "categories": ["Troca de ferramenta", "Falta de material", "Falha hidráulica", "Ajuste", "Outros"],
  "values": [120, 95, 50, 30, 15], "unit": "min", "threshold": 80, "source": "Apontamento de paradas, semana 36" }
```
