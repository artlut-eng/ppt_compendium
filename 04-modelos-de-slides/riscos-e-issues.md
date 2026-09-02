# Riscos e issues (`table`, variante)

## Quando usar
Lista priorizada de riscos (futuros, incertos) ou issues (problemas atuais) com resposta e dono. Relatórios de projeto, business case, plano estratégico, financeiro (riscos ao forecast).

## Anatomia
Tabela padrão (`table`) com colunas fixas:

| Coluna | Largura (pol.) | Conteúdo |
|---|---|---|
| # | 0,5 | ordem de prioridade |
| Risco / Issue | 4,0 | descrição em 1 linha (o que pode acontecer / o que está acontecendo) |
| Prob. | 1,0 | Alta / Média / Baixa (célula colorida: `danger` / `warning` / `success`) - só para riscos |
| Impacto | 1,0 | Alto / Médio / Baixo (célula colorida) |
| Resposta / ação | 4,0 | mitigação, contingência, ou ação corretiva |
| Dono | 1,3 | pessoa ou área |
| Prazo | 0,9 | data (issues) |

Alternativa visual: matriz probabilidade × impacto (`matrix_2x2`) à esquerda (0,5 / 1,6 / 5,5 / 5,0) com os riscos numerados, e tabela resumida à direita (6,3 / 1,6 / 6,53 / 5,0).

## Regras
- Máximo 5 a 7 riscos no corpo; lista completa em anexo.
- Ordenar por prioridade (prob. × impacto), o mais crítico primeiro.
- Todo risco com resposta e dono. Sem dono = não é gerenciado.
- Separar riscos de issues (slides ou seções distintas) quando houver ambos.
- Risco escrito como causa e efeito: "Se o fornecedor X não homologar até 15/09, o go-live atrasa 3 semanas".
- Título do slide traz o risco mais importante, não "Riscos".

## Spec
```json
{
  "type": "table", "title": "Risco crítico: homologação do fornecedor X",
  "columns": ["#", "Risco", "Prob.", "Impacto", "Resposta", "Dono"],
  "rows": [
    ["1", "Fornecedor X não homologa até 15/09", "Alta", "Alto", "Acionar fornecedor Y (plano B)", "Compras"],
    ["2", "Rotatividade no time de testes", "Média", "Médio", "Contratar 1 temporário", "RH"],
    ["3", "Mudança de escopo pelo cliente", "Baixa", "Alto", "Congelar escopo até go-live", "GP"]
  ],
  "col_widths": [0.5, 4.0, 1.0, 1.0, 4.5, 1.33],
  "status_columns": [2, 3],
  "source": "Registro de riscos, 01/09/2026"
}
```
`status_columns`: índices de colunas cujo texto (Alta/Alto = `danger`, Média/Médio = `warning`, Baixa/Baixo = `success`) recebe fundo colorido.
