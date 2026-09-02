# Plano de ação / próximos passos (`action_plan`)

## Quando usar
Penúltimo ou último slide de conteúdo de quase todo deck: o que será feito, por quem, até quando, e o que se pede do público. Também no meio de relatórios táticos (plano de recuperação de desvios).

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão / pedido ("Precisamos aprovar o plano B até sexta") |
| Tabela de ações | 0,5 | 1,6 | 12,33 | até 4,5 | colunas: Ação (6,5) / Dono (2,0) / Prazo (1,5) / Status (2,33) |
| Caixa de decisão pedida (opcional) | 0,5 | 6,0 | 12,33 | 0,7 | fundo `accent` a 15%, borda esquerda `accent`, texto bold 16 pt: "Decisão pedida: ..." |

## Regras
- 3 a 7 ações. Mais que isso vai para anexo ou ferramenta de gestão.
- Ação começa com verbo no infinitivo e é verificável ("Aprovar fornecedor Y", não "Ver fornecedores").
- Dono é uma pessoa ou área específica. Prazo é uma data.
- Status: `neutral` (não iniciada), `success` (concluída), `warning` (em andamento / atenção), `danger` (atrasada).
- Ações que dependem do público (decisões) ficam destacadas ou em caixa separada.
- Em relatórios recorrentes, mostrar ações do período anterior com status antes das novas.

## Variante "próximos passos" simples
Sem tabela: 3 a 5 bullets com data no início ("15/09 - Comitê de aprovação") e a caixa de decisão pedida.

## Spec
```json
{
  "type": "action_plan", "title": "Precisamos aprovar o plano B até sexta",
  "actions": [
    {"action": "Aprovar fornecedor Y", "owner": "Sponsor", "due": "05/09", "status": "warning"},
    {"action": "Replanejar testes integrados", "owner": "GP", "due": "10/09", "status": "neutral"},
    {"action": "Contratar temporário para testes", "owner": "RH", "due": "12/09", "status": "neutral"}
  ],
  "decision": "Aprovar o fornecedor Y como plano B (custo adicional de R$ 40 mil)"
}
```
