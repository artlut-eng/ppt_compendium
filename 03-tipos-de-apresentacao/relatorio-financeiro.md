# Relatório financeiro

## Objetivo
Apresentar o resultado financeiro de um período (mês, trimestre, ano) contra orçamento e período anterior, explicar as variações e projetar o restante do ano.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico (diretoria, conselho) e tático (gerentes com orçamento) |
| Frequência | Mensal (fechamento), trimestral (conselho), anual |
| Duração | 20 a 40 min |
| Tamanho | 10 a 20 slides + anexos (DRE completa, balanço, fluxo de caixa) |
| Estrutura narrativa | Resposta primeiro (Minto) |
| Paleta | `financeira-sobria` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | "Resultado <período>", data-base, área responsável | "Resultado 2T26" |
| 2 | `sumario-executivo` | Receita, EBITDA, margem, caixa vs. orçamento; 3 fatores; decisão pedida | "EBITDA de R$ 8,2 mi, 6% acima do orçamento, apesar de receita 2% abaixo" |
| 3 | `kpi-dashboard` | Receita, EBITDA, margem EBITDA, lucro líquido, caixa, com delta vs. orçamento e vs. ano anterior | "Todos os indicadores acima do ano anterior; receita abaixo do orçamento" |
| 4 | `grafico` waterfall | Ponte EBITDA orçado para real: volume, preço, custo, despesas | "Ganho de custo compensou volume menor" |
| 5 | `grafico` linha | Receita mensal: real, orçamento, ano anterior (12 meses) | "Receita recupera desde abril" |
| 6 | `tabela` | DRE resumida: linhas principais, real, orçamento, variação R$ e %, AA | "Margem bruta subiu 1,8 p.p." |
| 7 | `grafico` barras | Receita ou margem por unidade de negócio / região / produto | "Divisão B respondeu por 70% do ganho" |
| 8 | `grafico` | Despesas por natureza vs. orçamento | "Despesas 4% abaixo, puxadas por marketing adiado" |
| 9 | `grafico` | Fluxo de caixa / posição de caixa e dívida | "Caixa líquido de R$ 12 mi, cobertura de 8 meses" |
| 10 | `tabela` ou `grafico` | Projeção (forecast) do ano: real + previsto vs. orçamento | "Projeção anual mantém EBITDA de R$ 34 mi" |
| 11 | `riscos-e-issues` | Riscos ao forecast: câmbio, inadimplência, volume | "Câmbio é o maior risco: cada 10% = R$ 1,5 mi" |
| 12 | `proximos-passos` | Decisões pedidas (revisão de orçamento, aprovação de capex), próximos passos | "Pedimos aprovar antecipação de capex de R$ 2 mi" |
| A | anexos | DRE completa, balanço, DFC, notas de reconciliação, glossário | - |

## Dados e KPIs típicos
- Receita líquida, margem bruta, EBITDA e margem EBITDA, lucro líquido
- Despesas por natureza (pessoal, marketing, G&A) e por centro de custo
- Caixa, dívida líquida, capital de giro, DSO/DPO/DIO
- Capex realizado vs. aprovado
- Variações: vs. orçamento (R$ e %), vs. período anterior, vs. ano anterior
- Forecast do ano (real + previsto)

## Gráficos recomendados
- **Waterfall** (ponte) para explicar variação entre dois resultados. O gráfico mais importante deste tipo.
- Linha com 3 séries (real, orçamento, ano anterior) para tendência mensal.
- Barras agrupadas real vs. orçamento por unidade.
- Barras empilhadas 100% para composição de receita ou custo (máx. 5 categorias).
- Tabela DRE com colunas de variação e semáforo discreto.
- Evitar: pizza para DRE, gráficos 3D, mais de uma escala por gráfico.

## Convenções numéricas
- Unidade declarada no título ou eixo: "R$ mil" ou "R$ mi". Não misturar no mesmo slide.
- Variações negativas entre parênteses ou com sinal, consistente no deck inteiro.
- Percentuais com 1 casa; pontos percentuais como "p.p.".
- Alinhamento à direita em colunas numéricas; totais em negrito com linha superior.

## Variações por público
| Público | Ajustes |
|---|---|
| Estratégico / conselho | Slides 2, 3, 4, 9, 10, 12. Máximo 8 slides. Sem DRE detalhada no corpo. |
| Tático (gerentes de área) | Adicionar slide por área: orçamento vs. real do centro de custo, com ações para desvios. |
| Externo (investidores, banco) | Remover dados sensíveis, adicionar contexto de mercado, usar métricas padronizadas (EBITDA ajustado, alavancagem). |

## Erros comuns
- Explicar variação sem waterfall (só tabela).
- Misturar caixa e competência sem avisar.
- Números diferentes para o mesmo indicador em slides diferentes (fontes distintas).
- Mostrar só o mês sem acumulado do ano.
- Não dizer a data-base e o critério (IFRS, gerencial, ajustado).

## Spec mínima
```json
{
  "meta": { "title": "Resultado 2T26", "audience": "estrategico", "type": "relatorio-financeiro", "palette": "financeira-sobria", "date": "2026-07-15" },
  "slides": [
    { "type": "cover", "title": "Resultado 2T26", "subtitle": "Diretoria Financeira - base gerencial" },
    { "type": "executive_summary",
      "headline": "EBITDA de R$ 8,2 mi, 6% acima do orçamento, apesar de receita 2% abaixo",
      "points": ["Custo unitário caiu 4% com renegociação de insumos", "Receita abaixo por volume na Divisão A", "Caixa líquido de R$ 12 mi, cobertura de 8 meses"],
      "ask": "Aprovar antecipação de capex de R$ 2 mi para a linha 4" },
    { "type": "kpi_row", "title": "Todos os indicadores acima do ano anterior",
      "kpis": [
        {"label": "Receita líquida", "value": "R$ 41,3 mi", "delta": "-2% vs. orç.", "status": "warning"},
        {"label": "EBITDA", "value": "R$ 8,2 mi", "delta": "+6% vs. orç.", "status": "success"},
        {"label": "Margem EBITDA", "value": "19,9%", "delta": "+1,5 p.p.", "status": "success"},
        {"label": "Caixa líquido", "value": "R$ 12,0 mi", "delta": "+R$ 1,1 mi", "status": "success"}
      ] },
    { "type": "chart", "title": "Ganho de custo compensou volume menor", "chart_type": "column",
      "categories": ["EBITDA orçado", "Volume", "Preço", "Custo", "Despesas", "EBITDA real"],
      "series": [{"name": "R$ mi", "values": [7.7, -0.9, 0.3, 1.4, -0.3, 8.2]}],
      "source": "DRE gerencial, jun/26", "notes": "Substituir por waterfall nativo quando disponível" },
    { "type": "table", "title": "Margem bruta subiu 1,8 p.p.",
      "columns": ["R$ mi", "Real", "Orçado", "Var.", "Var. %"],
      "rows": [
        ["Receita líquida", "41,3", "42,1", "(0,8)", "-1,9%"],
        ["Custo", "(27,0)", "(28,3)", "1,3", "-4,6%"],
        ["Margem bruta", "14,3", "13,8", "0,5", "+3,6%"],
        ["Despesas", "(6,1)", "(6,1)", "0,0", "0,0%"],
        ["EBITDA", "8,2", "7,7", "0,5", "+6,5%"]
      ] },
    { "type": "action_plan", "title": "Pedimos aprovar antecipação de capex de R$ 2 mi",
      "actions": [
        {"action": "Aprovar capex linha 4", "owner": "Diretoria", "due": "31/07", "status": "warning"},
        {"action": "Revisar forecast de volume Divisão A", "owner": "Comercial + FP&A", "due": "15/08", "status": "neutral"}
      ] },
    { "type": "closing", "title": "Obrigado", "subtitle": "Anexos: DRE completa, DFC, reconciliações" }
  ]
}
```
