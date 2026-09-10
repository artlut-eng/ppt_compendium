# Análise de eficiência de processo

## Objetivo
Diagnosticar onde um processo transacional (compras, aquisições, chamados, aprovações, expedição, onboarding) perde eficiência, quantificar as causas e propor controles simples com dono e cadência. Diferente da revisão operacional (que acompanha o dia a dia), aqui a análise cobre um período (3 a 12 meses) a partir de uma base de registros.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Operacional interno e tático (gestores do processo, áreas envolvidas) |
| Frequência | Pontual ou semestral |
| Duração | 10 a 20 min |
| Tamanho | 8 a 12 slides |
| Estrutura narrativa | Tese, evidências, causas, controles, rotina |
| Paleta | `corporativa-azul` ou `operacional-alto-contraste` |
| Exposição típica | Interno ou interáreas (métricas por pessoa exigem cuidado) |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` com `thesis` | Tese central em uma frase, período, público | "Atraso é o principal custo operacional do processo" |
| 2 | `kpi_row` + `callout` | 4 KPIs do período (% fora do prazo, atraso médio, % risco alto, saving) com cobertura; callout de conclusão | "76% das solicitações atrasadas, apesar de 4,3% de saving" |
| 3 | `chart` coluna + `callout` warning | Evolução mensal do indicador principal; ressalva de maturidade das coortes recentes; volume por mês no rodapé | "A melhora recente ainda não prova virada sustentável" |
| 4 | `process` com `metrics` | Etapas do fluxo com tempo médio por etapa e cobertura (n) de cada média; callout com foco de melhoria | "O maior tempo controlável está após a emissão do pedido" |
| 5 | `chart` barras + bullets | Comparação por modalidade/canal/tipo (taxa de atraso); diferença entre melhor e pior; 3 ações | "Contrato vigente reduz atraso, mas ainda opera longe do ideal" |
| 6 | `chart` + `progress_bars` | Carga e desempenho por responsável (volume × taxa de atraso); callout: balanceamento, não avaliação individual | "A distribuição combina carga alta com desempenho desigual" |
| 7 | `big_number` ou `kpi_row` | Eficácia da priorização declarada (prioridade alta atrasa tanto quanto as demais?); regra de fila proposta | "A criticidade declarada não está protegendo o prazo" |
| 8 | `progress_bars` (qualidade do dado) | Campos sem registro (data de aprovação, pedido, entrega, valor) e % preenchido; controle mínimo de registro | "A gestão perde previsibilidade onde faltam marcos" |
| 9 | `table` | Controles propostos: ação, como atuar, cadência, indicador; meta operacional sugerida (rotulada como recomendação) | "Quatro controles simples atacam as maiores ineficiências" |
| 10 | `takeaways` + `callout` decision | Rotina: agora / próximas semanas / após 30 dias; painel semanal mínimo; decisão esperada | "A rotina deve transformar o indicador em decisão semanal" |

## Dados e KPIs típicos
- % dentro/fora do prazo (SLA), atraso médio e mediano, distribuição de atraso
- Tempo por etapa (solicitação, aprovação, pedido, entrega) com cobertura de cada média
- Volume por período, por modalidade, por responsável, por prioridade
- Resultado financeiro do processo (saving, custo evitado) e sua cobertura
- Qualidade do registro: % de campos preenchidos por marco

## Análises que dão o título
1. **Prazo vs. resultado financeiro**: o processo entrega economia mas perde prazo (ou o inverso).
2. **Evolução com ressalva de coorte**: meses recentes parecem melhores porque ainda não tiveram tempo de atrasar.
3. **Decomposição por etapa**: qual etapa concentra o tempo controlável.
4. **Segmentação**: modalidade, fornecedor, categoria, canal.
5. **Carga por pessoa**: volume × desempenho, sempre tratada como balanceamento.
6. **Eficácia da priorização**: itens críticos atrasam tanto quanto os demais?
7. **Lacunas de registro**: onde o processo não é mensurável.

## Gráficos recomendados
- Colunas mensais com rótulo de % e volume por mês no rodapé.
- Fluxo horizontal com métrica por etapa (`process` + `metrics`).
- Barras por modalidade ordenadas; `highlight_index` no melhor ou no pior.
- Barras de progresso (`progress_bars`) para carga por pessoa e para % de preenchimento.
- Evitar: pizza, séries múltiplas, ranking nominal em público amplo.

## Variações por público
| Público | Ajustes |
|---|---|
| Operacional | Estrutura completa; fonte maior; slide 6 por equipe, não por pessoa, se o deck circular |
| Tático | Adicionar comparação com meta/benchmark e custo do atraso em R$ |
| Estratégico | 4 slides: tese, KPIs, causa principal, controles + pedido |

## Erros comuns
- Ler a melhora dos meses recentes como estrutural.
- Média de etapa sem dizer quantos registros tinham a data.
- Transformar carga por pessoa em ranking de desempenho.
- Propor "melhorar comunicação" em vez de controle com dono, cadência e indicador.
- Não separar fato (76% atrasadas) de recomendação (meta de 50%).

## Spec mínima
```json
{
  "meta": {"title": "Eficiência do processo de aquisições", "audience": "operacional", "type": "analise-de-processo", "palette": "corporativa-azul", "exposure": "interno", "brand": "Empresa Exemplo", "deck_name": "Aquisições", "date": "set/2026", "logo": "05-artefatos-visuais/logo-placeholder.png", "logo_light": "05-artefatos-visuais/logo-placeholder-light.png"},
  "slides": [
    {"type": "cover", "kicker": "Eficiência de aquisições", "title": "Atraso é o principal custo operacional do processo", "subtitle": "Leitura dos últimos 6 meses | uso operacional interno", "thesis": "O fluxo gera economia de compra, mas perde eficiência no cumprimento do prazo, sobretudo após a emissão do pedido."},
    {"type": "kpi_row", "kicker": "Visão geral", "title": "76% das solicitações estão atrasadas, apesar de 4,3% de saving", "kpis": [
      {"label": "Fora do prazo", "value": "76%", "delta": "54 de 71", "status": "danger", "description": "classificadas como atrasadas"},
      {"label": "Atraso médio", "value": "62 dias", "delta": "mediana 61", "status": "danger"},
      {"label": "Risco alto", "value": "70%", "delta": "50 solicitações", "status": "warning"},
      {"label": "Saving ponderado", "value": "4,3%", "delta": "R$ 68,6 mil", "status": "success", "description": "só itens com valor contratado (n=50)"}],
      "callout": {"kind": "conclusion", "label": "Conclusão operacional", "text": "Preservar a disciplina de negociação e deslocar a gestão diária para prazo, risco e confirmação de entrega."},
      "source": "Base de solicitações, mar a set/2026 (n=71)"},
    {"type": "chart", "kicker": "Evolução", "title": "A melhora recente ainda não prova uma virada sustentável", "subtitle": "Taxa de atraso por mês de solicitação (%)", "chart_type": "column", "categories": ["mar", "abr", "mai", "jun", "jul", "ago", "set"], "series": [{"name": "Taxa de atraso", "values": [100, 100, 92, 100, 75, 18, 20]}], "number_format": "0", "commentary": ["**98%** de atraso nas coortes maduras (mar a jun)", "Volume por mês: 8, 12, 12, 11, 12, 11, 5"], "callout": {"kind": "warning", "label": "Cuidado de leitura", "text": "Solicitações mais novas ainda podem estar dentro do prazo; a queda não deve ser lida isoladamente como ganho estrutural."}, "source": "Base de solicitações (n=71)"},
    {"type": "process", "kicker": "Fluxo", "title": "O maior tempo controlável está após a emissão do pedido", "steps": ["Solicitação", "Aprovação", "Pedido", "Entrega"], "metrics": ["", "7,2 d", "4,3 d", "39,9 d"], "descriptions": ["", "até aprovação (n=40)", "até pedido (n=27)", "até entrega real (n=13)"], "current_index": 3,
      "callout": {"kind": "recommendation", "label": "Foco de melhoria", "text": "Confirmar data do fornecedor no pedido, registrar marcos intermediários e escalar desvios antes do vencimento."}},
    {"type": "progress_bars", "kicker": "Qualidade do dado", "title": "A gestão perde previsibilidade onde faltam marcos do processo", "items": [
      {"label": "Data de aprovação", "value": 44, "display": "31 sem registro (44%)", "status": "warning"},
      {"label": "Data do pedido", "value": 62, "display": "44 sem registro (62%)", "status": "danger"},
      {"label": "Entrega real", "value": 82, "display": "58 sem registro (82%)", "status": "danger"},
      {"label": "Valor contratado", "value": 30, "display": "21 sem registro (30%)", "status": "warning"}],
      "callout": {"kind": "decision", "label": "Controle mínimo", "text": "Responsável, data prometida, próximo marco e motivo do desvio obrigatórios em toda mudança de status."}},
    {"type": "takeaways", "kicker": "Próximos passos", "title": "A rotina deve transformar o indicador em decisão semanal", "items": [
      {"tag": "Agora", "heading": "Sanear os itens atrasados", "text": "Definir próximo marco, responsável e motivo do desvio para cada item."},
      {"tag": "Próximas 4 semanas", "heading": "Implantar a gestão à vista", "text": "Acompanhar SLA, risco alto, confirmação do fornecedor e completude de dados."},
      {"tag": "Após 30 dias", "heading": "Revisar causa e capacidade", "text": "Comparar coortes, modalidades e carga por comprador."}],
      "callout": {"kind": "decision", "label": "Decisão esperada", "text": "Aprovar a rotina semanal e nomear os donos dos quatro controles."}}
  ]
}
```
