# Reunião de conselho (board pack)

## Objetivo
Dar ao conselho de administração (ou comitê executivo) uma visão completa e padronizada do período: resultado, execução da estratégia, riscos e as decisões que só o conselho pode tomar. O deck circula antes da reunião e serve de base para a ata.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico (conselheiros, sócios, comitê executivo) |
| Frequência | Mensal ou trimestral, pauta fixa |
| Duração | 60 a 120 min, com discussão por item |
| Tamanho | 12 a 20 slides + anexos (financeiro completo, projetos, riscos) |
| Estrutura narrativa | Resposta primeiro; ordem fixa da pauta |
| Paleta | `financeira-sobria` |
| Exposição | Interno (topo); ainda assim sem dados pessoais nominais |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Reunião, data, nº da reunião | "Reunião do conselho 3T26" |
| 2 | `agenda` | Pauta com tempos e tipo de item (informe / deliberação) | - |
| 3 | `executive_summary` | Resultado do período, 3 mensagens, decisões pedidas | "EBITDA no plano; dois projetos estratégicos em risco; três deliberações hoje" |
| 4 | `kpi_row` | Receita, EBITDA, caixa, NPS ou indicador de mercado, com delta vs. plano e ano anterior | "Todos os indicadores acima do ano anterior; receita 2% abaixo do plano" |
| 5 | `waterfall` | Ponte do resultado (plano → real) | "Custo compensou volume menor" |
| 6 | `chart` linha | Tendência de 8 ou mais períodos (receita, margem ou caixa) | "Margem recupera pelo terceiro trimestre" |
| 7 | `table` + status | Projetos estratégicos: status, marco, risco, decisão necessária (um por linha) | "Quatro de seis iniciativas no verde" |
| 8 | `table` | Riscos corporativos top 5: probabilidade, impacto, resposta, dono | "Câmbio e concentração de clientes são os riscos principais" |
| 9 a 11 | modelos do tema | Itens de deliberação: um slide por decisão (contexto, opções, recomendação, impacto) | "Recomendamos aprovar o investimento de R$ 12 mi na planta 2" |
| 12 | `action_plan` (`headers` de decisão) | Quadro de deliberações: decisão, responsável, prazo, registro | "Três deliberações para registro em ata" |
| 13 | `bullets` | Pendências da reunião anterior e status | "Duas pendências fechadas, uma em curso" |
| 14 | `closing` | Próxima reunião, anexos | - |
| A | anexos | DRE, balanço, DFC, detalhe de projetos, registro completo de riscos | - |

## Dados e KPIs típicos
Resultado vs. plano e vs. ano anterior; caixa e dívida; covenant; indicadores de mercado (share, NPS); status dos projetos estratégicos; riscos com evolução; pendências de reuniões anteriores.

## Regras específicas
- **Pauta e posições fixas**: o conselheiro sabe onde está cada coisa. Mudar a ordem só com aviso.
- **Item de deliberação sempre com recomendação** da diretoria, opções consideradas e impacto financeiro.
- **Ata pronta**: o quadro de deliberações é escrito de forma a ser copiado para a ata.
- Circular o deck 5 dias antes; o slide 3 deve bastar para quem não leu o resto.
- Sem nomes de pessoas em avaliações; sem dados de terceiros sob NDA sem marcação.

## Variações
| Contexto | Ajustes |
|---|---|
| Comitê executivo (semanal/mensal) | Mais operacional: 8 a 10 slides, sem pauta formal, foco em desvios e decisões rápidas |
| Conselho de empresa familiar / sócios | Adicionar caixa disponível para distribuição e governança |
| Startup com investidores | Adicionar métricas de tração (MRR, churn, runway) e uso do caixa da rodada |

## Erros comuns
- Deck de 60 slides que é o relatório gerencial completo; o conselho quer o resumo com anexos.
- Deliberação sem recomendação ("o conselho decide").
- Riscos repetidos de reunião em reunião sem mostrar evolução.
- Não fechar as pendências da reunião anterior.

## Spec mínima
```json
{
  "meta": {"title": "Reunião do conselho 3T26", "audience": "estrategico", "type": "reuniao-de-conselho", "palette": "financeira-sobria", "exposure": "interno", "brand": "Empresa Exemplo", "deck_name": "Conselho de administração", "date": "out/2026"},
  "slides": [
    {"type": "cover", "kicker": "Reunião ordinária nº 47", "title": "Reunião do conselho 3T26", "subtitle": "Resultado, estratégia, riscos e deliberações", "thesis": "Resultado no plano e caixa confortável; duas iniciativas estratégicas precisam de decisão hoje."},
    {"type": "agenda", "items": ["Resultado do trimestre (informe)", "Iniciativas estratégicas (informe)", "Riscos corporativos (informe)", "Investimento na planta 2 (deliberação)", "Política de dividendos (deliberação)", "Pendências e encerramento"], "durations": ["15 min", "15 min", "10 min", "20 min", "15 min", "5 min"]},
    {"type": "executive_summary", "kicker": "Sumário", "headline": "EBITDA no plano; dois projetos estratégicos em risco; três deliberações hoje", "points": ["EBITDA de R$ 24,5 mi (+1% vs. plano), receita 2% abaixo", "Caixa líquido de R$ 38 mi, alavancagem 0,8x", "Expansão da planta 2 e portal B2B com marcos atrasados"], "ask": "Aprovar investimento de R$ 12 mi e a política de dividendos revisada", "source": "Fechamento 3T26"},
    {"type": "kpi_row", "kicker": "Resultado", "title": "Todos os indicadores acima do ano anterior; receita 2% abaixo do plano", "kpis": [{"label": "Receita", "value": "R$ 124 mi", "delta": "-2% vs. plano | +9% a.a.", "status": "warning"}, {"label": "EBITDA", "value": "R$ 24,5 mi", "delta": "+1% vs. plano", "status": "success"}, {"label": "Caixa líquido", "value": "R$ 38 mi", "delta": "0,8x EBITDA", "status": "success"}, {"label": "NPS", "value": "68", "delta": "+4 vs. 2T", "status": "success"}], "source": "DRE gerencial e pesquisa NPS, 3T26"},
    {"type": "waterfall", "kicker": "Ponte do resultado", "title": "Custo compensou volume menor", "subtitle": "EBITDA, R$ mi, 3T26 plano vs. real", "items": [{"label": "Plano", "value": 24.2, "total": true}, {"label": "Volume", "value": -2.1}, {"label": "Preço", "value": 0.6}, {"label": "Custo", "value": 2.4}, {"label": "Despesas", "value": -0.6}, {"label": "Real", "value": 24.5, "total": true}], "source": "DRE gerencial"},
    {"type": "table", "kicker": "Estratégia", "title": "Quatro de seis iniciativas no verde", "columns": ["Iniciativa", "Marco atual", "Status", "Risco", "Decisão necessária"], "rows": [["Planta 2", "Licença ambiental", "Amarelo", "Alto", "Aprovar R$ 12 mi"], ["Portal B2B", "Piloto com 10 clientes", "Amarelo", "Médio", "-"], ["Canal indireto Sul", "3 distribuidores ativos", "Verde", "Baixo", "-"], ["Automação L4", "Comissionamento", "Verde", "Baixo", "-"], ["Nova linha X", "Testes de estabilidade", "Verde", "Médio", "-"], ["ERP", "Go-live módulo fiscal", "Verde", "Baixo", "-"]], "status_columns": [2, 3], "source": "PMO, base 30/09"},
    {"type": "comparison", "kicker": "Deliberação 1", "title": "Recomendamos aprovar o investimento de R$ 12 mi na planta 2", "options": [{"name": "Não investir", "points": ["Capacidade esgota em 2028", "Perda estimada: R$ 8 mi/ano de receita", "Sem risco de execução"]}, {"name": "Investir em 2 fases", "points": ["R$ 12 mi (fase 1 R$ 7 mi)", "Payback 3,2 anos", "Risco de licença mitigado"], "recommended": true}, {"name": "Investir tudo agora", "points": ["R$ 18 mi", "Payback 2,9 anos", "Exposição à licença ambiental"]}], "callout": {"kind": "decision", "label": "Deliberação", "text": "Aprovar a fase 1 (R$ 7 mi) com liberação da fase 2 condicionada à licença."}},
    {"type": "action_plan", "kicker": "Ata", "title": "Três deliberações para registro em ata", "headers": ["Deliberação", "Responsável", "Prazo", "Registro"], "actions": [{"action": "Aprovar fase 1 da planta 2 (R$ 7 mi)", "owner": "Diretoria", "due": "out/26", "status": "aprovado"}, {"action": "Política de dividendos: mínimo 30% do lucro", "owner": "CFO", "due": "nov/26", "status": "aprovado com ajuste"}, {"action": "Plano de recuperação do portal B2B", "owner": "CTO", "due": "próx. reunião", "status": "informe"}]},
    {"type": "closing", "title": "Próxima reunião: 15/01/2027", "subtitle": "Anexos: DRE, balanço, DFC, registro de riscos"}
  ]
}
```
