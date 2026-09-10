# Indicadores de pessoas (RH)

## Objetivo
Mostrar à liderança a situação da força de trabalho: tamanho e composição, movimentações (contratações, desligamentos, turnover), absenteísmo, clima e engajamento, capacitação e sucessão, com os riscos de pessoas que exigem decisão.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico e tático (diretoria, gestores de área) |
| Frequência | Mensal (movimentações) e trimestral/semestral (clima, sucessão) |
| Duração | 20 a 40 min |
| Tamanho | 8 a 14 slides |
| Estrutura narrativa | Situação, análise, ação |
| Paleta | `corporativa-azul` |
| Exposição | **Interáreas com regras rígidas**: dados agregados; nada nominal fora de comitê de pessoas restrito |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Período | "Pessoas 3T26" |
| 2 | `executive_summary` | Headcount, turnover, clima; 3 mensagens; pedido | "Turnover caiu para 14%, mas engenharia perde talentos" |
| 3 | `kpi_row` | Headcount, turnover anualizado, absenteísmo, vagas abertas, tempo de contratação, engajamento | "Cinco de seis indicadores dentro da meta" |
| 4 | `chart` linha | Turnover mensal (voluntário e involuntário) últimos 12 meses | "Turnover voluntário cai desde abril" |
| 5 | `chart` barras ou `progress_bars` | Turnover ou vagas por área, ordenado; destaque na área crítica | "Engenharia concentra 40% das saídas voluntárias" |
| 6 | `pareto` | Motivos de desligamento voluntário (entrevista de saída) | "Remuneração e carreira explicam 60% das saídas" |
| 7 | `kpi_row` ou `chart` | Clima/engajamento: nota geral, participação, evolução, dimensões mais baixas | "Engajamento de 72%, com liderança como ponto baixo" |
| 8 | `table` | Sucessão de posições críticas: posição, prontidão (1 a 3 anos), risco de vacância; **sem nomes fora do comitê** | "Três posições críticas sem sucessor pronto" |
| 9 | `kpi_row` | Capacitação: horas por pessoa, cobertura de treinamentos obrigatórios | "Treinamentos obrigatórios em 96%" |
| 10 | `action_plan` | Ações: retenção, contratação, desenvolvimento, com dono e prazo | "Três ações de retenção para engenharia" |

## Dados e KPIs típicos
Headcount (ativo, por área, por tipo de contrato), admissões e desligamentos, turnover anualizado (voluntário/involuntário), tempo de casa, absenteísmo, horas extras, vagas abertas e tempo médio de contratação, custo de pessoal vs. orçamento, engajamento/eNPS e participação na pesquisa, horas de treinamento, cobertura de obrigatórios, posições críticas e prontidão de sucessores, diversidade (agregada, grupos com n mínimo).

## Regras específicas (exposição)
- **Agregar**: nenhum indicador por pessoa; grupos com menos de 5 pessoas não são exibidos separadamente (diversidade, salário, desempenho).
- **Sucessão e desempenho** nominais só em comitê de pessoas restrito, com deck separado e marcação "Confidencial - RH".
- Desligamentos: motivos agregados; nunca nomes ou casos individuais.
- Salários: faixas e médias por nível, nunca valores individuais.
- Clima: resultados por área só quando a área tem participação mínima (ex.: 10 respostas).

## Variações
| Contexto | Ajustes |
|---|---|
| Comitê de pessoas (restrito) | Adiciona sucessão nominal, calibração de desempenho, casos críticos; exposição interno-restrito |
| All-hands | Só headcount, boas-vindas, clima geral e ações; nada por área |
| Operação industrial | Adicionar absenteísmo por turno, horas extras, acidentes (ligar com `indicadores-de-seguranca`) |

## Erros comuns
- Turnover sem separar voluntário e involuntário.
- Ranking de áreas por clima exposto a toda a empresa.
- Tabela de sucessão com nomes em deck que circula.
- Ação genérica ("melhorar engajamento") sem dono nem indicador.

## Spec mínima
```json
{
  "meta": {"title": "Indicadores de pessoas 3T26", "audience": "estrategico", "type": "indicadores-de-pessoas", "palette": "corporativa-azul", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "Pessoas", "date": "out/2026"},
  "slides": [
    {"type": "cover", "kicker": "Pessoas e cultura", "title": "Indicadores de pessoas 3T26", "subtitle": "Dados agregados; sem informação individual", "thesis": "Turnover caiu para 14%, mas engenharia perde talentos por remuneração e carreira."},
    {"type": "kpi_row", "kicker": "Visão geral", "title": "Cinco de seis indicadores dentro da meta", "kpis": [{"label": "Headcount", "value": "388", "delta": "+2% no trimestre"}, {"label": "Turnover anualizado", "value": "14%", "delta": "meta 15%", "status": "success"}, {"label": "Absenteísmo", "value": "2,1%", "delta": "meta 2,5%", "status": "success"}, {"label": "Vagas abertas", "value": "17", "delta": "8 em engenharia", "status": "warning"}, {"label": "Tempo de contratação", "value": "41 dias", "delta": "meta 45", "status": "success"}, {"label": "Engajamento", "value": "72%", "delta": "+3 p.p.", "status": "success"}], "source": "Sistema de RH e pesquisa de clima, set/26"},
    {"type": "chart", "kicker": "Turnover", "title": "Turnover voluntário cai desde abril", "subtitle": "% anualizado por mês", "chart_type": "line", "categories": ["out", "nov", "dez", "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set"], "series": [{"name": "Voluntário", "values": [12, 12.5, 13, 13.5, 14, 14.2, 13.1, 12.4, 11.8, 11.2, 10.6, 10.1]}, {"name": "Involuntário", "values": [3.5, 3.4, 3.6, 3.8, 3.9, 4.0, 3.9, 4.0, 4.1, 3.9, 3.9, 3.9]}], "source": "Sistema de RH"},
    {"type": "progress_bars", "kicker": "Por área", "title": "Engenharia concentra 40% das saídas voluntárias", "items": [{"label": "Engenharia", "value": 40, "display": "12 saídas (40%)", "status": "danger"}, {"label": "Operações", "value": 27, "display": "8 saídas (27%)"}, {"label": "Comercial", "value": 17, "display": "5 saídas (17%)"}, {"label": "Administrativo", "value": 10, "display": "3 saídas (10%)"}, {"label": "Outras", "value": 6, "display": "2 saídas (6%)"}], "source": "Desligamentos voluntários, últimos 12 meses (n=30)"},
    {"type": "pareto", "kicker": "Motivos", "title": "Remuneração e carreira explicam 60% das saídas", "categories": ["Remuneração", "Carreira", "Liderança", "Localização", "Outros"], "values": [11, 7, 5, 4, 3], "source": "Entrevistas de saída (n=30)", "callout": {"kind": "warning", "label": "Cuidado de leitura", "text": "Motivos declarados em entrevista de saída; amostra pequena, tratar como indicativo."}},
    {"type": "table", "kicker": "Sucessão", "title": "Três posições críticas sem sucessor pronto", "columns": ["Posição crítica", "Sucessor pronto agora", "Pronto em 1 a 3 anos", "Risco de vacância"], "rows": [["Gerência de engenharia", "Não", "Sim (1)", "Alto"], ["Gerência industrial", "Sim (1)", "Sim (2)", "Baixo"], ["Coordenação de qualidade", "Não", "Não", "Alto"], ["Gerência comercial Sul", "Não", "Sim (1)", "Médio"]], "status_columns": [3], "source": "Mapa de sucessão (nomes no comitê de pessoas)", "callout": {"kind": "decision", "label": "Exposição", "text": "Nomes e avaliações individuais ficam no comitê de pessoas; este slide circula só com prontidão agregada."}},
    {"type": "action_plan", "kicker": "Ações", "title": "Três ações de retenção para engenharia", "actions": [{"action": "Revisar faixas salariais de engenharia vs. mercado", "owner": "RH + Diretoria", "due": "15/11", "status": "warning"}, {"action": "Trilha de carreira técnica (especialista)", "owner": "RH", "due": "dez/26", "status": "neutral"}, {"action": "Programa de sucessão para 3 posições críticas", "owner": "Diretoria", "due": "1T27", "status": "neutral"}], "decision": "Aprovar revisão salarial de engenharia (impacto estimado R$ 480 mil/ano)"}
  ]
}
```
