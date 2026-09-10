# Indicadores de segurança e saúde (SSMA / EHS)

## Objetivo
Acompanhar o desempenho de segurança do trabalho, saúde ocupacional e meio ambiente: acidentes e quase-acidentes, taxas normalizadas, desvios e inspeções, ações abertas e cultura, com foco nas ações preventivas que exigem decisão.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (gerência industrial, SSMA) e estratégico (diretoria, comitê de segurança); versão operacional para DDS e quadros |
| Frequência | Mensal (comitê), semanal (operação), trimestral (diretoria) |
| Duração | 15 a 30 min |
| Tamanho | 6 a 12 slides |
| Estrutura narrativa | Status, desvios, causas, ações |
| Paleta | `operacional-alto-contraste` ou `industria` |
| Exposição | Interáreas; casos individuais anonimizados; dados de saúde só agregados |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Período, unidade | "Segurança e saúde, setembro/26" |
| 2 | `kpi_row` | Dias sem acidente com afastamento, acidentes (CAF, SAF), taxa de frequência, taxa de gravidade, quase-acidentes, desvios tratados | "142 dias sem acidente com afastamento; taxa de frequência abaixo da meta" |
| 3 | `chart` linha | Taxa de frequência (ou nº de eventos) 12 meses vs. meta | "Taxa de frequência cai pelo quarto mês" |
| 4 | `pareto` | Eventos por tipo (queda, corte, ergonômico, químico) ou por área | "Mãos e ergonomia concentram 60% dos eventos" |
| 5 | `table` | Eventos relevantes do período: data, área, tipo, gravidade, causa, ação, status (sem nome) | "Dois eventos com potencial de gravidade alta" |
| 6 | `progress_bars` | Programas preventivos: inspeções realizadas/planejadas, DDS, treinamentos, EPIs, observações comportamentais | "Inspeções em 96%; observações comportamentais em 70%" |
| 7 | `kpi_row` ou `chart` | Saúde ocupacional (agregado): exames periódicos em dia, afastamentos por causa (agregado), ergonomia | "Exames periódicos em 98%" |
| 8 | `kpi_row` | Meio ambiente: resíduos, água, energia, incidentes ambientais (quando integrado) | "Zero incidentes ambientais; resíduos -8%" |
| 9 | `action_plan` | Ações abertas: preventivas e corretivas, atrasadas em destaque | "5 ações abertas, 1 atrasada" |
| 10 | `takeaways` + `callout` decision | Prioridades e pedido (investimento, recurso, campanha) | "Três prioridades do próximo mês" |

## Dados e KPIs típicos
Acidentes com e sem afastamento, quase-acidentes, primeiros socorros; taxas de frequência e gravidade (por milhão de horas); dias sem acidente; desvios e condições inseguras identificados e tratados; inspeções, auditorias comportamentais, DDS realizados; treinamentos e EPIs; exames periódicos; afastamentos (agregado); incidentes ambientais; consumo de água/energia e geração de resíduos.

## Regras específicas
- **Sem nomes** de acidentados; descrever área, atividade, tipo e causa.
- Dados de saúde só agregados (n mínimo); nada de diagnóstico individual.
- Ordem fixa: pessoas antes de indicadores; evento grave abre o deck.
- Indicadores reativos (acidentes) sempre ao lado de proativos (inspeções, observações, desvios tratados).
- Toda ação corretiva ligada a uma causa raiz; "reforçar conscientização" não é ação.
- Versão para quadro de gestão à vista: 1 slide, fonte 24 pt ou mais.

## Variações
| Contexto | Ajustes |
|---|---|
| Diretoria (trimestral) | Slides 2, 3, 5 (só graves), 9, 10; comparar com benchmark do setor |
| Operação (semanal / DDS) | 1 a 3 slides: painel, evento da semana e lição, foco do dia |
| Contratadas | Adicionar indicadores de terceiros e integração |

## Erros comuns
- Só indicadores reativos; nenhum proativo.
- Nome do acidentado no slide.
- Taxa sem base de horas.
- Ação "conscientizar a equipe" sem mudança de condição ou processo.

## Spec mínima
```json
{
  "meta": {"title": "Segurança e saúde, setembro/26", "audience": "tatico", "type": "indicadores-de-seguranca", "palette": "industria", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "SSMA", "date": "out/2026"},
  "slides": [
    {"type": "cover", "kicker": "Comitê de segurança", "title": "Segurança e saúde, setembro/26", "subtitle": "Unidade industrial | dados sem identificação de pessoas", "thesis": "142 dias sem acidente com afastamento; mãos e ergonomia concentram os eventos e pedem ação em duas linhas."},
    {"type": "kpi_row", "kicker": "Painel", "title": "142 dias sem acidente com afastamento; taxa de frequência abaixo da meta", "kpis": [{"label": "Dias sem CAF", "value": "142", "delta": "recorde: 210", "status": "success"}, {"label": "Acidentes SAF", "value": "2", "delta": "mês anterior: 3", "status": "warning"}, {"label": "Taxa de frequência", "value": "1,8", "delta": "meta 2,5 (12 meses)", "status": "success"}, {"label": "Quase-acidentes", "value": "14", "delta": "reportados", "status": "success"}, {"label": "Desvios tratados", "value": "91%", "delta": "meta 90%", "status": "success"}], "source": "Sistema de SSMA, set/26 (base 182 mil horas)"},
    {"type": "chart", "kicker": "Tendência", "title": "Taxa de frequência cai pelo quarto mês", "subtitle": "Acidentes por milhão de horas, 12 meses móveis", "chart_type": "line", "categories": ["out", "nov", "dez", "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set"], "series": [{"name": "Taxa de frequência", "values": [3.1, 3.0, 3.2, 2.9, 2.8, 2.9, 2.6, 2.4, 2.3, 2.1, 1.9, 1.8]}, {"name": "Meta", "values": [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5]}], "source": "Sistema de SSMA"},
    {"type": "pareto", "kicker": "Tipos de evento", "title": "Mãos e ergonomia concentram 60% dos eventos", "categories": ["Mãos (corte/prensamento)", "Ergonômico", "Queda mesmo nível", "Químico", "Outros"], "values": [11, 7, 5, 3, 4], "source": "Acidentes, quase-acidentes e primeiros socorros, 12 meses (n=30)", "callout": {"kind": "recommendation", "label": "Foco", "text": "Proteções de máquina na linha 2 e análise ergonômica do envase atacam os dois tipos principais."}},
    {"type": "table", "kicker": "Eventos do mês", "title": "Dois eventos com potencial de gravidade alta", "columns": ["Data", "Área", "Tipo", "Gravidade potencial", "Causa básica", "Ação", "Status"], "rows": [["03/09", "Linha 2", "Prensamento de dedo (SAF)", "Alta", "Proteção removida para ajuste", "Intertravamento e bloqueio", "Em andamento"], ["17/09", "Expedição", "Quase-acidente empilhadeira", "Alta", "Pedestre em área de tráfego", "Segregação de fluxo e sinalização", "Concluída"], ["22/09", "Envase", "Corte leve (SAF)", "Baixa", "Estilete inadequado", "Substituir por cortador de segurança", "Concluída"]], "status_columns": [3], "source": "Investigações de eventos (sem identificação de pessoas)"},
    {"type": "progress_bars", "kicker": "Prevenção", "title": "Inspeções em 96%; observações comportamentais em 70%", "items": [{"label": "Inspeções planejadas", "value": 96, "display": "48 de 50 (96%)"}, {"label": "DDS realizados", "value": 100, "display": "22 de 22"}, {"label": "Treinamentos obrigatórios", "value": 93, "display": "93%"}, {"label": "Observações comportamentais", "value": 70, "display": "35 de 50 (70%)", "status": "warning"}, {"label": "Exames periódicos em dia", "value": 98, "display": "98%"}], "source": "Programas de SSMA, set/26"},
    {"type": "action_plan", "kicker": "Ações", "title": "5 ações abertas, 1 atrasada", "actions": [{"action": "Intertravamento das proteções da linha 2", "owner": "Manutenção", "due": "15/10", "status": "warning"}, {"action": "Análise ergonômica do envase", "owner": "SSMA + Ergonomista", "due": "31/10", "status": "neutral"}, {"action": "Segregação de fluxo na expedição (pintura e barreiras)", "owner": "Logística", "due": "30/09", "status": "danger"}, {"action": "Campanha de observação comportamental por líder", "owner": "Supervisores", "due": "out/26", "status": "neutral"}, {"action": "Substituir estiletes por cortadores de segurança", "owner": "Compras", "due": "10/10", "status": "success"}], "decision": "Aprovar R$ 45 mil para intertravamento e barreiras da expedição"}
  ]
}
```
