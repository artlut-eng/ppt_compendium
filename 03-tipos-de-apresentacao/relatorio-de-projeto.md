# Relatório de projeto (status report)

## Objetivo
Informar o andamento de um projeto em relação ao plano (escopo, prazo, custo, qualidade, riscos) e obter decisões ou apoio para desvios.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (gerente do projeto para sponsor, PMO, comitê) |
| Variações | Estratégico (comitê executivo: 3 a 5 slides), Operacional (time: semanal, 3 a 6 slides) |
| Frequência | Semanal (time), quinzenal/mensal (comitê) |
| Duração | 15 a 30 min |
| Tamanho | 8 a 15 slides + anexos |
| Estrutura narrativa | Situação, análise, ação |
| Paleta | `corporativa-azul` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | Nome do projeto, período do relatório, data, responsável | "Projeto Atlas - Status semana 34" |
| 2 | `sumario-executivo` | Status geral (semáforo), 3 destaques, 1 pedido | "Projeto no amarelo: prazo em risco por atraso de fornecedor; pedimos aprovação de plano B" |
| 3 | `kpi-dashboard` | Semáforos: escopo, prazo, custo, qualidade, riscos + % concluído | "4 de 5 dimensões no verde; prazo em amarelo" |
| 4 | `timeline-roadmap` | Marcos planejado vs. real, próximos marcos | "Marco 3 desliza 2 semanas; marco final mantido" |
| 5 | `grafico` | Curva S ou burn-down: planejado vs. realizado (físico e/ou financeiro) | "Avanço físico de 62% vs. 68% planejado" |
| 6 | `tabela` | Entregas do período: concluídas, em andamento, atrasadas | "7 entregas concluídas, 2 atrasadas" |
| 7 | `grafico` ou `tabela` | Orçamento: previsto, realizado, comprometido, projeção | "Custo projetado 3% abaixo do orçamento" |
| 8 | `riscos-e-issues` | Top 5 riscos/issues: descrição, probabilidade, impacto, resposta, dono | "Risco crítico: homologação do fornecedor X" |
| 9 | `proximos-passos` | Ações do próximo período, decisões pedidas | "Precisamos aprovar o plano B até sexta" |
| 10 | `encerramento` | Contato, próxima revisão | - |
| A | anexos | Cronograma completo, lista de issues, mudanças de escopo aprovadas | - |

## Dados e KPIs típicos
- % avanço físico (planejado vs. real), SPI/CPI se usar EVM
- Marcos: planejado, previsto, real
- Orçamento: aprovado, realizado, comprometido, projeção no término (EAC)
- Entregas por status; issues abertas por severidade; riscos por nível
- Mudanças de escopo (solicitadas, aprovadas)
- Qualidade: defeitos, retrabalho, aceitação

## Gráficos recomendados
- Curva S (linha planejado vs. real acumulado)
- Burn-down / burn-up (projetos ágeis)
- Gantt simplificado com marcos (timeline)
- Barras: orçamento por pacote de trabalho (previsto vs. real)
- Matriz de riscos (probabilidade × impacto)

## Variações por público
| Público | Ajustes |
|---|---|
| Estratégico | Só slides 2, 3, 8 (top 3), 9. Um slide por projeto quando for portfólio. Sem curva S detalhada. |
| Tático | Estrutura completa. |
| Operacional (time) | Sem capa/sumário. Painel de entregas da semana, impedimentos, plano da próxima semana. Fonte grande. |

## Erros comuns
- Semáforo verde com prazo já estourado ("verde-melancia").
- Não mostrar o plano de recuperação junto com o desvio.
- Lista de 30 riscos sem priorização.
- Percentual de avanço sem base ("70% de quê?").
- Relatório sem data-base explícita.

## Spec mínima
```json
{
  "meta": {
    "title": "Projeto Atlas - Status semana 34",
    "audience": "tatico",
    "type": "relatorio-de-projeto",
    "palette": "corporativa-azul",
    "author": "PMO",
    "date": "2026-09-01"
  },
  "slides": [
    { "type": "cover", "title": "Projeto Atlas", "subtitle": "Relatório de status - semana 34" },
    { "type": "executive_summary",
      "headline": "Projeto no amarelo: prazo em risco por atraso do fornecedor",
      "points": ["Avanço físico 62% vs. 68% planejado", "Custo projetado 3% abaixo do orçamento", "Homologação do fornecedor X atrasou 2 semanas"],
      "ask": "Aprovar plano B (fornecedor alternativo) até 05/09" },
    { "type": "kpi_row", "title": "4 de 5 dimensões no verde; prazo em amarelo",
      "kpis": [
        {"label": "Escopo", "value": "OK", "status": "success"},
        {"label": "Prazo", "value": "-2 sem", "status": "warning"},
        {"label": "Custo", "value": "-3%", "status": "success"},
        {"label": "Qualidade", "value": "OK", "status": "success"},
        {"label": "Riscos", "value": "1 crítico", "status": "danger"}
      ] },
    { "type": "timeline", "title": "Marco 3 desliza 2 semanas; marco final mantido",
      "milestones": [
        {"date": "Jun", "label": "Kickoff", "status": "success"},
        {"date": "Jul", "label": "Design aprovado", "status": "success"},
        {"date": "Set", "label": "Homologação", "status": "warning"},
        {"date": "Nov", "label": "Go-live", "status": "neutral"}
      ] },
    { "type": "chart", "title": "Avanço físico de 62% vs. 68% planejado", "chart_type": "line",
      "categories": ["S28","S29","S30","S31","S32","S33","S34"],
      "series": [
        {"name": "Planejado", "values": [40,45,50,55,60,64,68]},
        {"name": "Real", "values": [40,44,48,52,56,59,62]}
      ], "source": "Cronograma MS Project, base 01/09/2026" },
    { "type": "table", "title": "Risco crítico: homologação do fornecedor X",
      "columns": ["Risco", "Prob.", "Impacto", "Resposta", "Dono"],
      "rows": [
        ["Fornecedor X não homologa até 15/09", "Alta", "Alto", "Acionar fornecedor Y (plano B)", "Compras"],
        ["Rotatividade no time de testes", "Média", "Médio", "Contratar 1 temporário", "RH"]
      ] },
    { "type": "action_plan", "title": "Precisamos aprovar o plano B até sexta",
      "actions": [
        {"action": "Aprovar fornecedor Y", "owner": "Sponsor", "due": "05/09", "status": "warning"},
        {"action": "Replanejar testes integrados", "owner": "GP", "due": "10/09", "status": "neutral"}
      ] },
    { "type": "closing", "title": "Próxima revisão: 15/09", "subtitle": "pmo@empresa.com" }
  ]
}
```
