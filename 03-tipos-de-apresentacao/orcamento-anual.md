# Orçamento anual (proposta e revisão)

## Objetivo
Apresentar a proposta de orçamento do próximo ano (ou a revisão de forecast) para aprovação: premissas, receita, custos e despesas, investimentos, pessoas, cenários e o que muda em relação ao ano atual.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico (diretoria, conselho); tático na fase de construção por área |
| Frequência | Anual (proposta), trimestral (revisão de forecast) |
| Duração | 45 a 90 min |
| Tamanho | 12 a 18 slides + anexo por área |
| Estrutura narrativa | Resposta primeiro: números-chave, de onde vem a variação, premissas, riscos, pedido |
| Paleta | `financeira-sobria` |
| Exposição | Interno / interáreas (por área, cada gestor vê só a sua) |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Orçamento do ano, versão, data | "Orçamento 2027, versão para aprovação" |
| 2 | `executive_summary` | Receita, EBITDA, capex, headcount propostos; 3 mensagens; pedido | "Orçamento 2027 cresce receita 12% com margem estável e capex de R$ 15 mi" |
| 3 | `kpi_row` | Receita, EBITDA e margem, capex, headcount, caixa: proposta vs. forecast do ano atual | "Crescimento com margem mantida em 19%" |
| 4 | `waterfall` | Ponte de EBITDA: ano atual → proposta (volume, preço, custo, despesas, novos negócios) | "Volume e preço somam R$ 6 mi; despesas crescem R$ 2 mi" |
| 5 | `table` | Premissas macro e de negócio: câmbio, inflação, volume, preço, reajustes, com fonte | "Premissas conservadoras em câmbio e inflação" |
| 6 | `chart` colunas | Receita por unidade / produto: ano atual vs. proposta | "Divisão B lidera o crescimento" |
| 7 | `chart` colunas ou `table` | Despesas por natureza: variação e justificativa | "Despesas crescem abaixo da receita" |
| 8 | `table` | Capex por projeto: valor, retorno, prioridade | "R$ 15 mi de capex, 70% em capacidade" |
| 9 | `chart` ou `kpi_row` | Pessoas: headcount por área, contratações, custo | "Headcount +6%, concentrado em vendas e engenharia" |
| 10 | `comparison` | Cenários base / otimista / pessimista com gatilhos | "No pessimista, EBITDA cai a R$ 28 mi e capex é escalonado" |
| 11 | `table` | Riscos e sensibilidades (câmbio, volume, preço) com impacto em R$ | "Cada 10% no câmbio vale R$ 1,5 mi" |
| 12 | `action_plan` | Decisões pedidas, calendário de revisão, donos | "Aprovar o orçamento e a regra de revisão trimestral" |
| A | anexos | Orçamento por centro de custo, DRE mensalizada, memória de cálculo | - |

## Dados e KPIs típicos
Receita, margem bruta, EBITDA, lucro, caixa; capex e opex por projeto/natureza; headcount e custo de pessoal; premissas macro; variação vs. ano atual (forecast) e vs. orçamento anterior; sensibilidades.

## Regras específicas
- Toda linha de variação tem uma justificativa em uma frase (premissa, projeto, decisão).
- Comparar sempre com o **forecast** do ano atual (não com o orçamento antigo), e mostrar os dois no anexo.
- Premissas com fonte (banco central, consultoria, contrato) e data.
- Cenários com **gatilhos** de acionamento, não só números.
- Regra de revisão (quando e como o forecast muda) no último slide.

## Variações
| Contexto | Ajustes |
|---|---|
| Revisão trimestral de forecast | 6 a 8 slides: KPIs, ponte orçamento → forecast, principais mudanças, pedidos de realocação |
| Orçamento de uma área (tático) | Foco em despesas, headcount e projetos da área; comparação com a meta dada pela diretoria |
| Base zero | Adicionar slide por pacote de decisão (o que entra, o que sai, custo, impacto) |

## Erros comuns
- Crescimento de receita sem premissa de volume e preço separadas.
- Capex listado sem retorno nem prioridade.
- Só cenário base.
- Comparação com o orçamento do ano anterior, escondendo o desvio já ocorrido.

## Spec mínima
```json
{
  "meta": {"title": "Orçamento 2027", "audience": "estrategico", "type": "orcamento-anual", "palette": "financeira-sobria", "exposure": "interno", "brand": "Empresa Exemplo", "deck_name": "Orçamento 2027", "date": "nov/2026"},
  "slides": [
    {"type": "cover", "kicker": "Planejamento financeiro", "title": "Orçamento 2027", "subtitle": "Versão para aprovação da diretoria", "thesis": "Crescer 12% em receita mantendo a margem em 19%, com R$ 15 mi de capex concentrado em capacidade."},
    {"type": "executive_summary", "kicker": "Sumário", "headline": "Orçamento 2027 cresce receita 12% com margem estável e capex de R$ 15 mi", "points": ["Receita de R$ 540 mi (+12%): volume +7%, preço +5%", "EBITDA de R$ 103 mi (19,1%), despesas crescem 8%", "Capex de R$ 15 mi, 70% em capacidade; headcount +6%"], "ask": "Aprovar o orçamento e a regra de revisão trimestral", "source": "Consolidação FP&A, nov/26"},
    {"type": "kpi_row", "kicker": "Números-chave", "title": "Crescimento com margem mantida em 19%", "kpis": [{"label": "Receita", "value": "R$ 540 mi", "delta": "+12% vs. forecast 2026", "status": "success"}, {"label": "EBITDA", "value": "R$ 103 mi", "delta": "19,1% (19,0% em 2026)", "status": "success"}, {"label": "Capex", "value": "R$ 15 mi", "delta": "+R$ 4 mi", "status": "neutral"}, {"label": "Headcount", "value": "412", "delta": "+6%", "status": "neutral"}], "source": "FP&A"},
    {"type": "waterfall", "kicker": "Ponte de EBITDA", "title": "Volume e preço somam R$ 6 mi; despesas crescem R$ 2 mi", "subtitle": "R$ mi, forecast 2026 para orçamento 2027", "items": [{"label": "Forecast 2026", "value": 91.6, "total": true}, {"label": "Volume", "value": 6.8}, {"label": "Preço", "value": 5.9}, {"label": "Custo", "value": -3.2}, {"label": "Despesas", "value": -2.1}, {"label": "Novos negócios", "value": 4.0}, {"label": "Orçamento 2027", "value": 103.0, "total": true}], "source": "FP&A"},
    {"type": "table", "kicker": "Premissas", "title": "Premissas conservadoras em câmbio e inflação", "columns": ["Premissa", "2026 (forecast)", "2027 (orçamento)", "Fonte"], "rows": [["Câmbio (R$/US$)", "5,40", "5,60", "Boletim Focus, out/26"], ["Inflação (IPCA)", "4,2%", "4,0%", "Boletim Focus"], ["Volume (t)", "48.000", "51.400", "Plano comercial"], ["Preço médio", "+4%", "+5%", "Política de preços"], ["Reajuste salarial", "5%", "4,5%", "Convenção coletiva"]], "align": ["left", "right", "right", "left"], "source": "FP&A"},
    {"type": "comparison", "kicker": "Cenários", "title": "No pessimista, EBITDA cai a R$ 88 mi e o capex é escalonado", "options": [{"name": "Pessimista", "points": ["Volume +2%, câmbio 6,20", "EBITDA R$ 88 mi (17,5%)", "Gatilho: 2 meses abaixo de 90% da meta"]}, {"name": "Base", "points": ["Volume +7%, câmbio 5,60", "EBITDA R$ 103 mi (19,1%)", "Capex integral"], "recommended": true}, {"name": "Otimista", "points": ["Volume +10%, câmbio 5,30", "EBITDA R$ 114 mi (20,2%)", "Gatilho: antecipar fase 2 da planta"]}]},
    {"type": "action_plan", "kicker": "Decisões", "title": "Aprovar o orçamento e a regra de revisão trimestral", "actions": [{"action": "Aprovar orçamento 2027 (cenário base)", "owner": "Diretoria", "due": "30/11", "status": "warning"}, {"action": "Aprovar capex de R$ 15 mi com liberação por fase", "owner": "Diretoria", "due": "30/11", "status": "warning"}, {"action": "Definir gatilhos de revisão de forecast", "owner": "CFO", "due": "15/12", "status": "neutral"}], "decision": "Aprovar o orçamento 2027 no cenário base com revisão trimestral"}
  ]
}
```
