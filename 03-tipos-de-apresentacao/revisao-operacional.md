# Revisão operacional (diária / semanal)

## Objetivo
Alinhar a equipe de execução sobre o desempenho do período (turno, dia, semana), expor desvios e definir ações imediatas com dono e prazo. Inclui reuniões de produção, gestão à vista, daily de times, revisão de atendimento/suporte, logística.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Operacional (supervisores, líderes, equipe) |
| Variações | Tático (consolidado semanal/mensal para gerente de planta ou de operações) |
| Frequência | Diária (5 a 10 min, em pé) ou semanal (15 a 30 min) |
| Tamanho | 5 a 12 slides, ou painel único em TV |
| Estrutura narrativa | Status, desvios, ações |
| Paleta | `operacional-alto-contraste` |
| Fonte mínima | 18 pt (20 a 24 pt em TV) |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `kpi-dashboard` | Painel do período: segurança, produção, qualidade, disponibilidade/OEE, entregas, custo. Semáforo em cada um. | "Ontem: 3 de 6 indicadores no verde; OEE em 68% (meta 75%)" |
| 2 | `bullets` ou `tabela` | Segurança: incidentes, quase-acidentes, dias sem acidente | "Zero incidentes; 1 quase-acidente registrado na expedição" |
| 3 | `grafico` run chart | Indicador principal dia a dia (últimos 10 a 30 dias) com linha de meta | "Produção abaixo da meta em 4 dos últimos 7 dias" |
| 4 | `grafico` Pareto | Causas de parada / defeito / atraso do período | "Troca de ferramenta e falta de material = 70% das paradas" |
| 5 a 7 | `tabela` desvios | Um slide por indicador vermelho: valor, meta, causa, ação, dono, prazo | "Prensa 3: 4h de parada por falha hidráulica; manutenção corretiva hoje" |
| 8 | `proximos-passos` | Ações abertas (novas e pendentes), com status | "5 ações abertas, 2 atrasadas" |
| 9 | `bullets` | Plano do dia/semana: prioridades, sequência, recursos | "Hoje: priorizar pedido 4521, Prensa 3 volta às 14h" |
| 10 | `bullets` | Apoio necessário / escalonamentos para a gerência | "Precisamos de aprovação de hora extra no sábado" |

## Dados e KPIs típicos
| Área | KPIs |
|---|---|
| Produção industrial | OEE (disponibilidade × performance × qualidade), peças/hora, refugo %, retrabalho, paradas (min e causas), MTBF/MTTR, consumo de energia por unidade |
| Manutenção | Ordens abertas/fechadas, backlog, preventivas cumpridas %, corretivas emergenciais |
| Logística | OTIF, pedidos expedidos, ocupação de frota, avarias |
| Atendimento / suporte | Chamados abertos/resolvidos, tempo de resposta, SLA %, backlog, CSAT |
| Times de software (daily) | Itens concluídos, em andamento, impedimentos, burn-down da sprint |
| Segurança | Incidentes, quase-acidentes, dias sem acidente, desvios de EPI |

## Gráficos recomendados
- Run chart (linha diária) com faixa/linha de meta, 10 a 30 pontos.
- Pareto (barras decrescentes + linha acumulada).
- Tabela de desvios com semáforo por linha.
- Barras por turno / linha / máquina para o indicador do dia.
- Evitar: tendências de 12 meses, cenários, gráficos com mais de 2 séries, pizza.

## Painel único (TV / gestão à vista)
Um slide fixo com layout que não muda:
```
+------------------------------------------------------------------+
| SEGURANÇA  | PRODUÇÃO  | QUALIDADE | OEE      | ENTREGAS | CUSTO  |  <- 6 KPIs com semáforo, 40 pt
+------------------------------------------------------------------+
| Run chart produção diária (meta)     | Pareto de paradas          |
+------------------------------------------------------------------+
| Ações abertas: ação | dono | prazo | status  (3 a 5 linhas, 18 pt)  |
+------------------------------------------------------------------+
```
Gerado por script a cada turno a partir dos dados do sistema (MES, ERP, CRM, ferramenta de chamados). Ver `06-codigo/python-pptx/README.md`.

## Variações por público
| Público | Ajustes |
|---|---|
| Operacional | Estrutura acima. Sem capa, agenda ou sumário. |
| Tático (semanal/mensal consolidado) | Adicionar capa, sumário executivo, tendência de 4 a 12 semanas, comparação entre linhas/turnos/plantas, plano de ação consolidado. Fonte padrão. |
| Estratégico | Não é o tipo certo; use 1 slide de KPIs operacionais dentro do relatório financeiro ou do plano estratégico. |

## Erros comuns
- Fonte pequena; slide feito para ser lido no notebook e projetado em TV.
- Mostrar tudo, inclusive o que está no alvo, em detalhe.
- Causa da parada como "outros" ou "diversos" dominando o Pareto (classificação ruim).
- Ação sem dono ou com prazo "o quanto antes".
- Mudar o layout do painel (a equipe perde a referência visual).
- Percentual sem número absoluto quando a base é pequena.

## Spec mínima
```json
{
  "meta": { "title": "Reunião diária - Linha 2", "audience": "operacional", "type": "revisao-operacional", "palette": "operacional-alto-contraste", "date": "2026-09-01", "font_scale": 1.25 },
  "slides": [
    { "type": "kpi_row", "title": "Ontem: 3 de 6 indicadores no verde; OEE em 68%",
      "kpis": [
        {"label": "Segurança", "value": "0 inc.", "delta": "142 dias", "status": "success"},
        {"label": "Produção", "value": "4.120 pç", "delta": "meta 4.500", "status": "danger"},
        {"label": "Qualidade", "value": "1,8% refugo", "delta": "meta 2%", "status": "success"},
        {"label": "OEE", "value": "68%", "delta": "meta 75%", "status": "danger"},
        {"label": "Entregas", "value": "96% OTIF", "delta": "meta 95%", "status": "success"},
        {"label": "Paradas", "value": "310 min", "delta": "meta 180", "status": "danger"}
      ] },
    { "type": "chart", "title": "Produção abaixo da meta em 4 dos últimos 7 dias", "chart_type": "line",
      "categories": ["26/08","27/08","28/08","29/08","30/08","31/08","01/09"],
      "series": [{"name": "Produzido", "values": [4600,4300,4100,4550,4200,3900,4120]}, {"name": "Meta", "values": [4500,4500,4500,4500,4500,4500,4500]}],
      "source": "MES, turnos A+B+C" },
    { "type": "chart", "title": "Troca de ferramenta e falta de material = 70% das paradas", "chart_type": "bar",
      "categories": ["Troca de ferramenta", "Falta de material", "Falha hidráulica", "Ajuste", "Outros"],
      "series": [{"name": "min", "values": [120, 95, 50, 30, 15]}], "source": "Apontamento de paradas" },
    { "type": "table", "title": "Prensa 3: 4h de parada por falha hidráulica; manutenção corretiva hoje",
      "columns": ["Desvio", "Valor", "Meta", "Causa", "Ação", "Dono", "Prazo"],
      "rows": [
        ["Paradas Prensa 3", "240 min", "60 min", "Vazamento no cilindro", "Trocar vedação", "Manutenção", "Hoje 14h"],
        ["Falta de material L2", "95 min", "0", "Atraso do almoxarifado", "Kit de 2h na linha", "Logística", "02/09"]
      ] },
    { "type": "action_plan", "title": "5 ações abertas, 2 atrasadas",
      "actions": [
        {"action": "Trocar vedação Prensa 3", "owner": "Manutenção", "due": "01/09 14h", "status": "warning"},
        {"action": "Kit de material 2h na linha", "owner": "Logística", "due": "02/09", "status": "neutral"},
        {"action": "Treinar turno C em SMED", "owner": "Supervisor C", "due": "28/08", "status": "danger"}
      ] }
  ]
}
```
