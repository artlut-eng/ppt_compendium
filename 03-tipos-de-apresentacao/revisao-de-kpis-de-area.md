# Revisão de KPIs de área (base para o próximo ciclo)

## Objetivo
Criar uma leitura compartilhada do desempenho de uma área (P&D, operações, TI, marketing) ao fim de um ciclo, para alinhar expectativas, prioridades e metas do ciclo seguinte. Não é prestação de contas nem auditoria: é insumo de planejamento.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico + tático juntos (diretoria e gestores da área) |
| Frequência | Anual ou por ciclo de planejamento |
| Duração | 45 a 60 min (35 a 40 de apresentação, 20 a 25 de discussão) |
| Tamanho | 10 a 12 slides |
| Estrutura narrativa | Situação, evidências, implicações, direcionamento, decisão |
| Tom | Equilibrado e transparente: conquistas e tensões, sem otimismo excessivo |
| Paleta | `corporativa-azul` ou `financeira-sobria` |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` com `thesis` | Tese do ciclo; 3 a 4 números-chave | "Desempenho da área como base para o próximo ciclo" |
| 2 | `process` + `callout` decision | Propósito da reunião: ler o ciclo, alinhar expectativas, decidir, encaminhar; resultado esperado | "A reunião deve converter desempenho em direcionamento" |
| 3 | `kpi_row` + `chart` | Investimento vs. orçamento, variação, crescimento do portfólio; leitura executiva | "O crescimento veio com disciplina financeira" |
| 4 | `kpi_row` + `chart` linha + callouts | Execução: entregas, % no prazo (média e evolução); "ponto forte" e "atenção: sustentar, não extrapolar" | "A execução ganhou previsibilidade ao longo do ciclo" |
| 5 | `chart` linha + `kpi_row` | Qualidade/maturidade: indicador de maturidade, inovação (patentes, protótipos, parcerias) | "O portfólio avançou em maturidade e capacidade de inovação" |
| 6 | `chart` + `callout` warning | Valor: benefício estimado vs. investimento; ressalva estimado ≠ realizado | "O benefício potencial supera o investimento, mas ainda precisa ser realizado" |
| 7 | `chart` 2 séries + `callout` inferência | Capacidade: projetos ativos vs. pessoas; tensão de dispersão como tema de planejamento | "O crescimento aumenta a necessidade de escolhas" |
| 8 | `takeaways` | Três direcionadores para o próximo ciclo (foco, previsibilidade, valor); princípio de decisão | "Três direcionadores devem filtrar o próximo ciclo" |
| 9 | `table` ou `bullets` numerados | Cinco decisões para discussão (prazo, maturidade, critérios de portfólio, capacidade, valor) sem metas ainda não aprovadas | "As expectativas precisam ser traduzidas em decisões comuns" |
| 10 | `action_plan` com `headers` de decisão | Quadro editável: decisão, responsável, prazo, pendência; preenchido durante a reunião | "A reunião termina com decisões, responsáveis e próximos passos" |

## Distribuição do tempo (1 hora)
5 min propósito e ação esperada; 20 min resultados; 10 min implicações; 20 min discussão; 5 min decisões e fechamento.

## Dados e KPIs típicos
Investimento vs. orçamento; entregas concluídas; % no prazo (média e mês a mês); indicador de maturidade/qualidade; outputs de inovação; benefício estimado (marcado como potencial); projetos ativos e pessoas; horas de capacitação.

## Regras específicas
- Diferenciar fato, inferência e recomendação em cada slide (`00-guia/fatos-inferencias-recomendacoes.md`).
- Nenhuma meta numérica nova no deck sem aprovação; apresentar como "para discussão".
- Slide final é um formulário: preenchido ao vivo, exportado como ata.
- Reconhecer evolução sem tratar o último mês como garantia.

## Erros comuns
- Deck de prestação de contas (só o passado) sem implicações para o próximo ciclo.
- Benefício estimado apresentado como retorno.
- 15 KPIs sem hierarquia; escolher 6 a 8 que permitam decidir.
- Tom triunfalista ou defensivo; o público mistura quem cobra e quem executa.

## Spec mínima
```json
{
  "meta": {"title": "Desempenho da área e próximo ciclo", "audience": "estrategico", "type": "revisao-de-kpis-de-area", "palette": "corporativa-azul", "brand": "Empresa Exemplo", "deck_name": "Planejamento do próximo ciclo"},
  "slides": [
    {"type": "cover", "kicker": "Diretoria e gestores", "title": "Desempenho da área", "subtitle": "Base para alinhar prioridades, metas e investimentos do próximo ciclo", "thesis": "O avanço de capacidade, maturidade e entregas cria uma base sólida. O próximo passo é converter esse desempenho em escolhas compartilhadas."},
    {"type": "process", "kicker": "Propósito", "title": "A reunião deve converter desempenho em direcionamento", "steps": ["Ler o ciclo", "Alinhar expectativas", "Decidir", "Encaminhar"], "descriptions": ["Resultados e tendências", "Ambição e limites", "Prioridades e metas", "Responsáveis e pendências"], "current_index": 2, "callout": {"kind": "decision", "label": "Resultado esperado", "text": "Prioridades, metas e direcionadores de investimento validados, com decisões e responsáveis registrados."}},
    {"type": "kpi_row", "kicker": "Entrega", "title": "A execução ganhou previsibilidade ao longo do ciclo", "kpis": [{"label": "Concluídos", "value": "29", "delta": "projetos"}, {"label": "No prazo", "value": "84,5%", "delta": "média anual", "status": "success"}, {"label": "Evolução", "value": "78% a 91%", "delta": "jan a dez", "status": "success"}], "callout": {"kind": "warning", "label": "Atenção", "text": "Sustentar, não extrapolar: o fechamento de 91% orienta a ambição, mas não substitui uma meta pactuada."}, "source": "Painel de KPIs da área"},
    {"type": "chart", "kicker": "Valor", "title": "O benefício potencial supera o investimento, mas ainda precisa ser realizado", "chart_type": "column", "categories": ["Investimento", "Benefício estimado"], "series": [{"name": "R$ mi", "values": [3.27, 4.59]}], "highlight_index": 1, "number_format": "0.00", "commentary": ["**1,40x** de benefício potencial sobre o investimento", "Benefício estimado não é retorno realizado", "O próximo ciclo deve incorporar marcos de captura e validação de valor"], "callout": {"kind": "warning", "label": "Transparência", "text": "Benefício estimado não é retorno realizado."}, "source": "Painel de KPIs da área"},
    {"type": "takeaways", "kicker": "Recomendação", "title": "Três direcionadores devem filtrar o próximo ciclo", "items": [{"heading": "Foco", "text": "Priorizar iniciativas alinhadas à estratégia e limitar dispersão."}, {"heading": "Previsibilidade", "text": "Pactuar capacidade, prazo e avanço de maturidade com metas realistas."}, {"heading": "Valor", "text": "Acompanhar a materialização dos benefícios, não apenas sua estimativa."}], "callout": {"kind": "conclusion", "label": "Princípio de decisão", "text": "Nenhuma iniciativa avança sem responder claramente aos três filtros."}},
    {"type": "action_plan", "kicker": "Fechamento", "title": "A reunião termina com decisões, responsáveis e próximos passos", "headers": ["Decisão / direcionamento", "Responsável", "Prazo", "Pendência"], "actions": [{"action": "", "owner": "", "due": "", "status": ""}, {"action": "", "owner": "", "due": "", "status": ""}, {"action": "", "owner": "", "due": "", "status": ""}, {"action": "", "owner": "", "due": "", "status": ""}], "callout": {"kind": "recommendation", "label": "Critério de saída", "text": "Cada tema relevante precisa de decisão ou de um responsável por fechar a pendência."}}
  ]
}
```
