# Timeline / roadmap (`timeline`)

## Quando usar
Marcos de projeto, fases de implantação, roadmap de plano estratégico, histórico de eventos (lições aprendidas). 3 a 8 marcos.

## Anatomia (horizontal)
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão ("Marco 3 desliza 2 semanas; final mantido") |
| Linha base | 0,8 | 3,9 | 11,7 | 0,06 | `neutral_mid` |
| Marcador i | x_i - 0,2 | 3,73 | 0,4 | 0,4 | círculo na cor do status (`success` concluído, `warning` em risco, `danger` atrasado, `primary`/`neutral` futuro) |
| Data i | x_i - 0,9 | 3,0 | 1,8 | 0,4 | 12 a 14 pt, `neutral_mid`, centralizado, acima da linha |
| Rótulo i | x_i - 0,9 | 4,3 | 1,8 | 1,0 | 12 a 14 pt, `neutral_dark`, centralizado, abaixo da linha; alternar acima/abaixo se houver mais de 6 marcos |
| Marcador "hoje" (opcional) | x_hoje | 3,3 | 0,03 | 1,3 | linha vertical `accent` tracejada com rótulo "Hoje" |

x_i distribuídos uniformemente entre 1,3 e 12,0 (x_i = 1,3 + i × (10,7 / (n-1))).

## Variante vertical (fases com descrição)
Coluna esquerda com marcadores e datas (0,5 / 1,6 / 2,5 / 5,0), coluna direita com título e 1 a 2 linhas de descrição por fase. Até 5 fases.

## Variante Gantt simplificado
Linhas = iniciativas (até 6), colunas = períodos (trimestres/meses); barras `primary` para planejado, `accent` para real; marcos como losangos. Usar `table` estilizada ou formas; não usar gráfico nativo.

## Regras
- Marcos concluídos, em risco e futuros com cores diferentes e legenda.
- Datas no mesmo formato em todos os marcos.
- Rótulos de até 4 palavras; detalhe nas notas.
- Sempre indicar "hoje" quando o deck é de status.

## Spec
```json
{
  "type": "timeline", "title": "Marco 3 desliza 2 semanas; marco final mantido",
  "milestones": [
    {"date": "Jun/26", "label": "Kickoff", "status": "success"},
    {"date": "Jul/26", "label": "Design aprovado", "status": "success"},
    {"date": "Set/26", "label": "Homologação", "status": "warning"},
    {"date": "Nov/26", "label": "Go-live", "status": "neutral"}
  ],
  "today_index": 2
}
```
