# Revisão de desempenho de fornecedores

## Objetivo
Avaliar a base de fornecedores (ou um fornecedor crítico) em qualidade, prazo, custo, serviço e risco, decidir desenvolvimento, substituição ou renegociação, e preparar a reunião de avaliação com o fornecedor.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (compras, qualidade, operações); estratégico para fornecedores críticos; externo na reunião com o fornecedor |
| Frequência | Trimestral (base), mensal (críticos), anual (reunião de avaliação) |
| Duração | 20 a 40 min |
| Tamanho | 6 a 12 slides |
| Estrutura narrativa | Situação, análise, ação |
| Paleta | `corporativa-azul` ou `industria` |
| Exposição | Interáreas; na versão para o fornecedor, só os dados dele |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Período, escopo (categoria, base) | "Fornecedores 3T26" |
| 2 | `kpi_row` | Fornecedores ativos, gasto, % gasto com críticos, OTIF médio, PPM/rejeições, saving, fornecedores abaixo do mínimo | "OTIF médio de 91%; quatro fornecedores abaixo do mínimo" |
| 3 | `progress_bars` | Índice de desempenho (IQF/scorecard) por fornecedor crítico, ordenado, com mínimo | "Fornecedor X abaixo do mínimo por 3 meses" |
| 4 | `chart` barras | Gasto por categoria ou fornecedor (concentração) | "Dois fornecedores concentram 45% do gasto" |
| 5 | `pareto` | Ocorrências (atraso, não conformidade, divergência de nota) por causa ou fornecedor | "Atrasos de entrega são 60% das ocorrências" |
| 6 | `table` | Fornecedores em atenção: scorecard, ocorrências, plano (desenvolver, substituir, renegociar), dono, prazo | "Três planos de desenvolvimento e uma substituição" |
| 7 | `matrix_2x2` | Matriz de criticidade × desempenho (ou Kraljic: impacto × risco de suprimento) | "Dois fornecedores críticos com desempenho baixo" |
| 8 | `kpi_row` ou `table` | Contratos e negociações: vencimentos, saving realizado vs. meta, reajustes | "R$ 1,2 mi de saving no ano, 80% da meta" |
| 9 | `action_plan` | Ações e decisões | "Cinco ações do trimestre" |

## Dados típicos
Gasto por fornecedor e categoria; OTIF; qualidade (PPM, lotes rejeitados, não conformidades); lead time; ocorrências por tipo; scorecard (pesos por critério); saving e reajustes; vencimento de contratos; risco (dependência única, financeiro, geográfico, ESG).

## Regras específicas
- Scorecard com pesos e fontes definidos uma vez (anexo); o fornecedor deve conhecer os critérios.
- Comparar com o mínimo aceitável e com a média da categoria.
- Cada fornecedor abaixo do mínimo tem plano com prazo e critério de saída (recupera ou substitui).
- Versão para o fornecedor: só os dados dele, com evidências das ocorrências e o que se espera; sem dados de concorrentes.
- Risco de dependência única sempre explícito.

## Variações
| Contexto | Ajustes |
|---|---|
| Reunião de avaliação com o fornecedor (externo) | 5 slides: scorecard dele, ocorrências com evidência, o que funcionou, plano acordado, próximos passos |
| Categoria estratégica (estratégico) | Foco em concentração, risco, contratos e alternativas |
| Integrado à revisão pela direção | Slide 3 entra em `revisao-pela-direcao-qualidade` |

## Erros comuns
- Scorecard sem pesos explícitos.
- Fornecedor abaixo do mínimo sem plano nem prazo.
- Ocorrências sem evidência (o fornecedor contesta).
- Ignorar dependência única de um fornecedor "bom".

## Spec mínima
```json
{
  "meta": {"title": "Fornecedores 3T26", "audience": "tatico", "type": "revisao-de-fornecedores", "palette": "industria", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "Suprimentos", "date": "out/2026"},
  "slides": [
    {"type": "cover", "kicker": "Suprimentos", "title": "Revisão de fornecedores 3T26", "subtitle": "Base de fornecedores críticos | scorecard, ocorrências e planos", "thesis": "OTIF médio de 91% com quatro fornecedores abaixo do mínimo; o fornecedor X precisa de decisão de substituição."},
    {"type": "kpi_row", "kicker": "Painel", "title": "OTIF médio de 91%; quatro fornecedores abaixo do mínimo", "kpis": [{"label": "Fornecedores ativos", "value": "86", "delta": "18 críticos"}, {"label": "Gasto no trimestre", "value": "R$ 14,2 mi", "delta": "45% em 2 fornecedores", "status": "warning"}, {"label": "OTIF médio", "value": "91%", "delta": "meta 95%", "status": "warning"}, {"label": "Lotes rejeitados", "value": "1,4%", "delta": "meta 1%", "status": "danger"}, {"label": "Abaixo do mínimo", "value": "4", "delta": "de 18 críticos", "status": "danger"}, {"label": "Saving no ano", "value": "R$ 1,2 mi", "delta": "80% da meta", "status": "warning"}], "source": "ERP e scorecard de fornecedores, jul a set/26"},
    {"type": "progress_bars", "kicker": "Scorecard", "title": "Fornecedor X abaixo do mínimo por 3 meses", "items": [{"label": "Fornecedor A", "value": 94, "display": "94"}, {"label": "Fornecedor B", "value": 91, "display": "91"}, {"label": "Fornecedor C", "value": 88, "display": "88"}, {"label": "Fornecedor D", "value": 82, "display": "82"}, {"label": "Fornecedor E", "value": 74, "display": "74 (mín. 75)", "status": "warning"}, {"label": "Fornecedor X", "value": 66, "display": "66 (3º mês abaixo)", "status": "danger"}], "source": "Scorecard: qualidade 40%, prazo 30%, custo 15%, serviço 15%"},
    {"type": "pareto", "kicker": "Ocorrências", "title": "Atrasos de entrega são 60% das ocorrências", "categories": ["Atraso de entrega", "Não conformidade", "Divergência de nota", "Quantidade errada", "Outros"], "values": [42, 15, 7, 4, 2], "source": "Registro de ocorrências (n=70)"},
    {"type": "matrix_2x2", "kicker": "Criticidade", "title": "Dois fornecedores críticos com desempenho baixo", "x_label": "Desempenho", "y_label": "Criticidade para a operação", "quadrants": {"tl": {"label": "Crítico e fraco: agir", "items": ["Fornecedor X (matéria-prima única)", "Fornecedor E (embalagem)"]}, "tr": {"label": "Crítico e forte: proteger", "items": ["Fornecedor A", "Fornecedor B"]}, "bl": {"label": "Substituível e fraco", "items": ["Fornecedor F", "Fornecedor G"]}, "br": {"label": "Substituível e forte", "items": ["Fornecedor C", "Fornecedor D"]}}, "highlight": "tl"},
    {"type": "table", "kicker": "Planos", "title": "Três planos de desenvolvimento e uma substituição", "columns": ["Fornecedor", "Scorecard", "Principal ocorrência", "Plano", "Dono", "Prazo"], "rows": [["Fornecedor X", "66", "Atrasos recorrentes", "Substituição: homologar fornecedor Y", "Compras + Qualidade", "dez/26"], ["Fornecedor E", "74", "Não conformidade de embalagem", "Desenvolvimento: plano de ação com auditoria", "Qualidade", "nov/26"], ["Fornecedor F", "71", "Divergência de nota", "Desenvolvimento: integração de pedidos", "Compras", "nov/26"], ["Fornecedor G", "69", "Atraso", "Desenvolvimento: revisão de lead time", "Compras", "out/26"]], "align": ["left", "right", "left", "left", "left", "center"], "source": "Planos de fornecedores"},
    {"type": "action_plan", "kicker": "Ações", "title": "Cinco ações do trimestre", "actions": [{"action": "Homologar fornecedor Y como alternativa ao X", "owner": "Qualidade", "due": "15/12", "status": "warning"}, {"action": "Auditoria no fornecedor E", "owner": "Qualidade", "due": "30/10", "status": "neutral"}, {"action": "Renegociar contrato do fornecedor A (vence jan/27)", "owner": "Compras", "due": "nov/26", "status": "neutral"}, {"action": "Reduzir concentração: segundo fornecedor para categoria M", "owner": "Compras", "due": "1T27", "status": "neutral"}, {"action": "Reunião de avaliação com fornecedores críticos", "owner": "Compras + Qualidade", "due": "out/26", "status": "warning"}], "decision": "Aprovar a substituição do fornecedor X e o custo de homologação (R$ 60 mil)"}
  ]
}
```
