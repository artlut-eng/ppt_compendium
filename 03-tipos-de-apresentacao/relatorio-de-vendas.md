# Relatório de vendas

## Objetivo
Mostrar o desempenho comercial contra meta (cota), a saúde do pipeline e as ações para atingir o resultado do período seguinte.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (gerente comercial, diretor de vendas); versão resumida para estratégico |
| Frequência | Semanal (pipeline), mensal (resultado), trimestral (revisão) |
| Duração | 20 a 40 min |
| Tamanho | 10 a 18 slides |
| Estrutura narrativa | Situação, análise, ação |
| Paleta | `vendas-energetica` ou `corporativa-azul` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | "Vendas <período>", data-base | "Vendas agosto/26" |
| 2 | `sumario-executivo` | Atingimento da meta, 3 fatores, ação principal | "Atingimos 94% da meta; Sul superou, Sudeste ficou 12% abaixo" |
| 3 | `kpi-dashboard` | Receita/volume vendido, % meta, ticket médio, novos clientes, churn, conversão | "Ticket médio subiu 8%, volume caiu 5%" |
| 4 | `grafico` barras | Real vs. meta por região / vendedor / produto | "Sudeste responde por todo o gap da meta" |
| 5 | `grafico` linha | Vendas mensais acumuladas vs. meta acumulada (ano) | "Acumulado do ano em 97% da meta" |
| 6 | `grafico` funil | Pipeline por estágio: quantidade e valor | "Pipeline de R$ 18 mi cobre 2,1x a meta do próximo mês" |
| 7 | `tabela` | Top 10 oportunidades: cliente, valor, estágio, probabilidade, previsão de fechamento, dono | "5 oportunidades acima de R$ 500 mil fecham em setembro" |
| 8 | `grafico` | Conversão por estágio ou motivo de perda (Pareto) | "Preço é o motivo de 45% das perdas" |
| 9 | `grafico` ou `tabela` | Ranking / desempenho individual (com cuidado em público amplo) | "6 de 9 vendedores acima de 90% da meta" |
| 10 | `proximos-passos` | Plano de ação comercial: campanhas, revisões de preço, foco de contas | "Três ações para fechar o gap do Sudeste" |
| 11 | `encerramento` | Próxima revisão | - |

## Dados e KPIs típicos
- Receita/volume vendido vs. meta (período e acumulado)
- Ticket médio, mix de produtos, margem por venda (se disponível)
- Novos clientes, clientes ativos, churn, recompra
- Pipeline: nº e valor por estágio, cobertura (pipeline / meta), velocidade, taxa de conversão
- Motivos de perda, ciclo médio de venda
- Desempenho por região, canal, vendedor, produto

## Gráficos recomendados
- Barras horizontais real vs. meta com ordenação decrescente (região, vendedor).
- Linha acumulada real vs. meta.
- Funil (barras horizontais decrescentes por estágio) com valor e quantidade.
- Pareto de motivos de perda.
- Tabela de oportunidades com coluna de probabilidade em semáforo.
- Evitar: pizza de mix com mais de 5 fatias; gráficos de ranking que humilhem (em público amplo, mostrar faixas).

## Variações por público
| Público | Ajustes |
|---|---|
| Estratégico | Slides 2, 3, 4, 6, 10. Foco em tendência, cobertura de pipeline e risco de meta anual. |
| Tático | Estrutura completa. |
| Operacional (time de vendas) | Painel semanal: meta da semana, pipeline por vendedor, próximas reuniões, campanhas. Sem análise histórica. |

## Erros comuns
- Mostrar só valor sem quantidade (ou vice-versa).
- Pipeline sem probabilidade ou sem data prevista.
- Não separar novos clientes de base recorrente.
- Comparar meses com número de dias úteis diferentes sem ajustar.
- Plano de ação genérico ("intensificar prospecção").

## Spec mínima
```json
{
  "meta": { "title": "Vendas agosto/26", "audience": "tatico", "type": "relatorio-de-vendas", "palette": "vendas-energetica", "date": "2026-09-01" },
  "slides": [
    { "type": "cover", "title": "Vendas agosto/26", "subtitle": "Diretoria Comercial" },
    { "type": "executive_summary",
      "headline": "Atingimos 94% da meta; Sul superou, Sudeste ficou 12% abaixo",
      "points": ["Ticket médio +8% com novo mix", "Sudeste perdeu 3 contas grandes para concorrente por preço", "Pipeline cobre 2,1x a meta de setembro"],
      "ask": "Aprovar campanha de retenção no Sudeste (R$ 120 mil)" },
    { "type": "kpi_row", "title": "Ticket médio subiu 8%, volume caiu 5%",
      "kpis": [
        {"label": "Receita", "value": "R$ 4,7 mi", "delta": "94% da meta", "status": "warning"},
        {"label": "Ticket médio", "value": "R$ 18,2 mil", "delta": "+8%", "status": "success"},
        {"label": "Novos clientes", "value": "23", "delta": "+4", "status": "success"},
        {"label": "Churn", "value": "2,1%", "delta": "+0,6 p.p.", "status": "danger"}
      ] },
    { "type": "chart", "title": "Sudeste responde por todo o gap da meta", "chart_type": "bar",
      "categories": ["Sul", "Nordeste", "Centro-Oeste", "Sudeste"],
      "series": [{"name": "Meta", "values": [1.2, 0.8, 0.6, 2.4]}, {"name": "Real", "values": [1.35, 0.8, 0.58, 2.0]}],
      "source": "CRM, extração 01/09/2026" },
    { "type": "chart", "title": "Pipeline de R$ 18 mi cobre 2,1x a meta de setembro", "chart_type": "bar",
      "categories": ["Qualificação", "Proposta", "Negociação", "Fechamento"],
      "series": [{"name": "R$ mi", "values": [8.0, 5.5, 3.0, 1.5]}], "source": "CRM" },
    { "type": "action_plan", "title": "Três ações para fechar o gap do Sudeste",
      "actions": [
        {"action": "Campanha de retenção nas 20 maiores contas", "owner": "Ger. Sudeste", "due": "15/09", "status": "neutral"},
        {"action": "Revisar tabela de preço para produto B", "owner": "Pricing", "due": "10/09", "status": "warning"},
        {"action": "Contratar 1 vendedor para interior de SP", "owner": "RH", "due": "30/09", "status": "neutral"}
      ] },
    { "type": "closing", "title": "Próxima revisão: 01/10" }
  ]
}
```
