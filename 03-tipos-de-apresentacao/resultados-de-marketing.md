# Resultados de marketing e campanhas

## Objetivo
Mostrar o retorno do investimento em marketing: funil (alcance, leads, oportunidades, vendas), custo por resultado, desempenho por canal e por campanha, marca, e as decisões de realocação de verba.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (gerência de marketing e comercial); versão executiva para diretoria |
| Frequência | Mensal (canais e campanhas), trimestral (marca e ROI) |
| Duração | 20 a 40 min |
| Tamanho | 8 a 14 slides |
| Estrutura narrativa | Situação, análise, ação |
| Paleta | `vendas-energetica` |
| Exposição | Interáreas (dados de mídia e agências são sensíveis para o mercado) |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Período | "Marketing 3T26" |
| 2 | `executive_summary` | Leads, CAC, pipeline gerado, ROI; 3 mensagens; realocação proposta | "Pipeline gerado cresceu 30% com CAC 12% menor" |
| 3 | `kpi_row` | Investimento, leads qualificados, CAC, pipeline gerado, receita influenciada, ROI | "ROI de 4,2x no trimestre" |
| 4 | `process` com `metrics` | Funil: alcance → leads → MQL → SQL → vendas, com conversão por etapa | "Conversão de MQL para SQL é o gargalo" |
| 5 | `chart` barras | Leads ou pipeline por canal (orgânico, pago, eventos, indicação, parcerias) | "Eventos geram 40% do pipeline com 20% da verba" |
| 6 | `table` | Campanhas do período: investimento, leads, CAC, pipeline, status | "Duas campanhas abaixo do CAC-alvo" |
| 7 | `chart` linha | Evolução mensal de leads e CAC | "CAC cai pelo terceiro mês" |
| 8 | `kpi_row` ou `chart` | Marca e digital: tráfego, engajamento, share of voice, NPS de marca | "Tráfego orgânico +25%" |
| 9 | `waterfall` ou `comparison` | Realocação de verba proposta: de onde sai, para onde vai | "Realocar R$ 120 mil de mídia paga para eventos" |
| 10 | `action_plan` | Ações e testes do próximo período | "Quatro testes e uma realocação" |

## Dados e KPIs típicos
Investimento por canal e campanha; alcance e impressões; leads, MQL, SQL, oportunidades, vendas; conversão por etapa; CAC e CAC por canal; pipeline gerado e receita influenciada; ROI/ROAS; tráfego, taxa de conversão do site, engajamento; share of voice, recall, NPS de marca.

## Regras específicas
- Definir "lead", "MQL" e "SQL" no anexo e manter a definição entre períodos.
- Atribuição declarada (último clique, multitoque, influência) e igual em todos os slides.
- Receita "influenciada" nunca somada à receita "gerada".
- Todo canal com CAC e volume; canal barato com volume irrelevante não é conclusão.
- Testes: hipótese, métrica, resultado, decisão (manter, escalar, parar).

## Variações
| Contexto | Ajustes |
|---|---|
| Lançamento de produto/campanha (pós-campanha) | 6 slides: objetivo e meta, execução, resultados vs. meta, aprendizados, custo, próximos passos |
| Diretoria (executivo) | Slides 2, 3, 5, 9, 10 |
| B2C / varejo | Substituir pipeline por vendas e ticket; adicionar tráfego de loja e conversão |

## Erros comuns
- Métricas de vaidade (impressões, curtidas) sem ligação com funil.
- Mudar a definição de lead entre meses.
- ROI calculado sobre receita influenciada.
- Só canais pagos; ignorar orgânico e indicação.

## Spec mínima
```json
{
  "meta": {"title": "Marketing 3T26", "audience": "tatico", "type": "resultados-de-marketing", "palette": "vendas-energetica", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "Marketing", "date": "out/2026"},
  "slides": [
    {"type": "cover", "kicker": "Marketing e geração de demanda", "title": "Marketing 3T26", "subtitle": "Funil, canais, campanhas e realocação de verba", "thesis": "Pipeline gerado cresceu 30% com CAC 12% menor; eventos são o canal mais eficiente."},
    {"type": "kpi_row", "kicker": "Visão geral", "title": "ROI de 4,2x no trimestre", "kpis": [{"label": "Investimento", "value": "R$ 610 mil", "delta": "no orçamento"}, {"label": "Leads qualificados (MQL)", "value": "1.840", "delta": "+22%", "status": "success"}, {"label": "CAC", "value": "R$ 2,1 mil", "delta": "-12%", "status": "success"}, {"label": "Pipeline gerado", "value": "R$ 9,8 mi", "delta": "+30%", "status": "success"}, {"label": "ROI", "value": "4,2x", "delta": "receita gerada / investimento", "status": "success"}], "source": "CRM e plataformas de mídia, jul a set/26 (atribuição: último toque)"},
    {"type": "process", "kicker": "Funil", "title": "Conversão de MQL para SQL é o gargalo", "steps": ["Alcance", "Leads", "MQL", "SQL", "Vendas"], "metrics": ["420 mil", "6.100", "1.840", "410", "96"], "descriptions": ["impressões únicas", "1,5% do alcance", "30% dos leads", "22% dos MQL", "23% dos SQL"], "current_index": 3, "callout": {"kind": "recommendation", "label": "Foco", "text": "Qualificação de MQL para SQL em 22%: revisar critérios e cadência de contato do pré-vendas."}},
    {"type": "chart", "kicker": "Canais", "title": "Eventos geram 40% do pipeline com 20% da verba", "subtitle": "Pipeline gerado, R$ mi", "chart_type": "bar", "categories": ["Eventos", "Busca paga", "Orgânico", "Indicação", "Social pago", "Parcerias"], "series": [{"name": "Pipeline", "values": [3.9, 2.1, 1.6, 1.2, 0.6, 0.4]}], "highlight_index": 0, "number_format": "0.0", "commentary": ["**Eventos:** CAC de R$ 1,4 mil, 20% da verba", "**Social pago:** CAC de R$ 4,8 mil, acima do alvo", "Orgânico cresce sem investimento incremental"], "source": "CRM (origem do lead)"},
    {"type": "table", "kicker": "Campanhas", "title": "Duas campanhas abaixo do CAC-alvo", "columns": ["Campanha", "Investimento", "MQL", "CAC", "Pipeline", "Status"], "rows": [["Feira do setor", "R$ 120 mil", "310", "R$ 1,3 mil", "R$ 2,4 mi", "Verde"], ["Webinar eficiência", "R$ 25 mil", "190", "R$ 0,9 mil", "R$ 0,8 mi", "Verde"], ["Busca paga Q3", "R$ 180 mil", "520", "R$ 2,2 mil", "R$ 2,1 mi", "Amarelo"], ["Social pago", "R$ 95 mil", "140", "R$ 4,8 mil", "R$ 0,6 mi", "Vermelho"]], "status_columns": [5], "align": ["left", "right", "right", "right", "right", "center"], "source": "Plataformas de mídia e CRM"},
    {"type": "waterfall", "kicker": "Realocação", "title": "Realocar R$ 120 mil de social pago e busca para eventos e webinars", "subtitle": "Verba do 4T, R$ mil", "items": [{"label": "Verba 4T", "value": 620, "total": true}, {"label": "Social pago", "value": -70}, {"label": "Busca paga", "value": -50}, {"label": "Eventos", "value": 80}, {"label": "Webinars", "value": 40}, {"label": "Verba 4T ajustada", "value": 620, "total": true}], "decimals": 0, "source": "Proposta de marketing", "callout": {"kind": "decision", "label": "Decisão", "text": "Aprovar a realocação sem aumento de verba total."}},
    {"type": "action_plan", "kicker": "Próximo período", "title": "Quatro testes e uma realocação", "actions": [{"action": "Realocar R$ 120 mil conforme proposta", "owner": "Marketing", "due": "01/10", "status": "warning"}, {"action": "Teste: nova régua de qualificação MQL", "owner": "Pré-vendas", "due": "31/10", "status": "neutral"}, {"action": "Teste: 2 webinars por mês", "owner": "Marketing", "due": "nov/26", "status": "neutral"}, {"action": "Pausar social pago até revisar criativos", "owner": "Agência", "due": "05/10", "status": "danger"}]}
  ]
}
```
