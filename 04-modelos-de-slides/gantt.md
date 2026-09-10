# Gantt simplificado (`gantt`)

## Quando usar
Cronograma macro de projeto, roadmap por iniciativa, plano de implantação, cadência de governança. Até 10 linhas e 16 períodos. Para marcos apenas, prefira `timeline`.

## Anatomia
| Elemento | Estilo |
|---|---|
| Coluna de nomes | 3,0 pol., 12 pt, zebra `neutral_light` em linhas alternadas |
| Cabeçalho de períodos | faixa `primary`, texto branco 11 pt bold |
| Barras | `primary` (ou cor do `status`), altura 50% da linha, de `start` a `end` em índice de período (fração permitida: 1.5 = meio do 2º período) |
| Marcos | losango na posição `start` |
| Rótulo na barra (`label`) | 9 pt branco, opcional |
| Hoje | linha tracejada `accent` vertical com rótulo |
| Grade | linhas verticais `neutral_light` entre períodos |

## Regras
- Períodos uniformes (meses, semanas, trimestres) e curtos ("out", "S36", "1T27").
- Status por cor só quando há acompanhamento (concluído, em risco, atrasado); no plano inicial, tudo em `primary`.
- Marcos com nome objetivo ("Go-live", "Gate 2").
- Detalhe do cronograma fica na ferramenta de projeto; aqui vão fases e marcos.

## Spec
```json
{ "type": "gantt", "kicker": "Cronograma", "title": "Go-live em março, com piloto em janeiro",
  "periods": ["set", "out", "nov", "dez", "jan", "fev", "mar"],
  "tasks": [
    {"name": "Diagnóstico", "start": 0, "end": 1.5, "status": "success"},
    {"name": "Desenho e piloto", "start": 1.5, "end": 4, "status": "warning", "label": "piloto em 1 rota"},
    {"name": "Implantação", "start": 4, "end": 6},
    {"name": "Go-live", "start": 6.5, "milestone": true, "status": "neutral"}
  ], "today": 2.3, "source": "Plano do projeto, base 10/09" }
```
