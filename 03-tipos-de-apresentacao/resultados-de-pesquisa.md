# Resultados de pesquisa (clima, NPS, satisfação, mercado)

## Objetivo
Apresentar os resultados de uma pesquisa (clima organizacional, NPS de clientes, satisfação de usuários, pesquisa de mercado) de forma que o público entenda o que foi medido, com que confiança, o que os números dizem e o que se propõe fazer.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático e estratégico; versão resumida para all-hands ou cliente |
| Frequência | Por onda de pesquisa (semestral, anual) |
| Duração | 20 a 40 min |
| Tamanho | 8 a 14 slides |
| Estrutura narrativa | Método, resultado geral, detalhamento, temas abertos, ações |
| Paleta | `corporativa-azul` |
| Exposição | Interáreas (clima por área só com n mínimo); externo quando é NPS apresentado ao cliente |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Pesquisa, onda, período | "Pesquisa de clima 2026" |
| 2 | `executive_summary` | Nota geral, variação, 3 achados, ação principal | "Engajamento de 72% (+3 p.p.); liderança é o tema a atacar" |
| 3 | `kpi_row` + `callout` warning | Método: população, respondentes, participação, período, margem de erro, escala | "1.240 respostas, 78% de participação" |
| 4 | `chart` linha ou colunas | Nota geral ao longo das ondas | "Terceira alta seguida" |
| 5 | `progress_bars` | Nota por dimensão/tema, ordenada; destaque no pior | "Liderança e carreira são as dimensões mais baixas" |
| 6 | `chart` barras | Nota por segmento (área, região, perfil de cliente), só com n mínimo | "Operações e engenharia abaixo da média" |
| 7 | `table` | Perguntas com maior variação vs. onda anterior (subiram e caíram) | "Reconhecimento caiu 6 p.p." |
| 8 | `pareto` ou `bullets` | Temas dos comentários abertos (codificados) com quantidade | "Comunicação e carga de trabalho dominam os comentários" |
| 9 | `quote` (opcional) | 1 comentário representativo, anônimo | - |
| 10 | `takeaways` | Três achados que exigem ação | "Três achados que exigem ação" |
| 11 | `action_plan` | Plano por tema: ação, dono, prazo, indicador de acompanhamento | "Cinco ações com dono até o fim do ano" |

## Dados e KPIs típicos
Nota geral (média, % favorável, NPS), participação, notas por dimensão e por segmento, variação vs. onda anterior, perguntas destaque, temas de comentários abertos, benchmark externo quando existir.

## Regras específicas
- **Método antes do resultado**: sem amostra, participação e escala, o número não vale.
- Segmentos com menos de 10 respostas (ou o mínimo definido) não são exibidos; agrupar.
- NPS: mostrar promotores, neutros e detratores, não só o número final.
- Comentários abertos: codificar em temas e contar; citar textualmente só de forma anônima e sem detalhes identificáveis.
- Comparar sempre com a onda anterior; variação de 1 ou 2 pontos em amostra pequena não é tendência.
- Fechar com ações e a data da próxima onda: pesquisa sem ação destrói a participação seguinte.

## Variações
| Contexto | Ajustes |
|---|---|
| NPS apresentado ao cliente (externo) | Só o que se refere àquele cliente, plano de melhoria, sem comparação nominal com outros clientes |
| Pesquisa de mercado | Adicionar desenho amostral, perfil dos respondentes, intervalo de confiança e limitações |
| Devolutiva para uma área (tático) | Resultados da área vs. empresa, comentários da área, plano de ação local |

## Erros comuns
- Resultado sem participação nem margem de erro.
- Ranking de áreas por nota exposto a todos.
- Média sem distribuição (nota 7 pode ser 50% de 10 e 50% de 4).
- Comentários citados com detalhe que identifica o autor.
- Nenhuma ação ou ação sem dono.

## Spec mínima
```json
{
  "meta": {"title": "Pesquisa de clima 2026", "audience": "tatico", "type": "resultados-de-pesquisa", "palette": "corporativa-azul", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "Pesquisa de clima", "date": "out/2026"},
  "slides": [
    {"type": "cover", "kicker": "Pesquisa de clima", "title": "Pesquisa de clima 2026", "subtitle": "Resultados consolidados e plano de ação", "thesis": "Engajamento subiu para 72%, terceira alta seguida; liderança e carreira são as dimensões a atacar."},
    {"type": "kpi_row", "kicker": "Método", "title": "1.240 respostas, 78% de participação", "kpis": [{"label": "População", "value": "1.590", "delta": "colaboradores ativos"}, {"label": "Respostas", "value": "1.240", "delta": "78% de participação", "status": "success"}, {"label": "Período", "value": "12 dias", "delta": "01 a 12/09"}, {"label": "Escala", "value": "1 a 5", "delta": "% favorável = notas 4 e 5"}], "callout": {"kind": "warning", "label": "Leitura", "text": "Segmentos com menos de 10 respostas foram agrupados; variações menores que 2 p.p. não são tratadas como tendência."}, "source": "Plataforma de pesquisa, set/26"},
    {"type": "chart", "kicker": "Evolução", "title": "Terceira alta seguida no engajamento", "subtitle": "% favorável", "chart_type": "column", "categories": ["2023", "2024", "2025", "2026"], "series": [{"name": "% favorável", "values": [61, 65, 69, 72]}], "highlight_index": 3, "number_format": "0", "source": "Pesquisas de clima 2023 a 2026"},
    {"type": "progress_bars", "kicker": "Dimensões", "title": "Liderança e carreira são as dimensões mais baixas", "items": [{"label": "Orgulho e pertencimento", "value": 84, "display": "84%"}, {"label": "Colaboração", "value": 79, "display": "79%"}, {"label": "Condições de trabalho", "value": 74, "display": "74%"}, {"label": "Reconhecimento", "value": 66, "display": "66% (-6 p.p.)", "status": "warning"}, {"label": "Carreira", "value": 61, "display": "61%", "status": "danger"}, {"label": "Liderança", "value": 58, "display": "58%", "status": "danger"}], "source": "Pesquisa de clima 2026 (n=1.240)"},
    {"type": "pareto", "kicker": "Comentários abertos", "title": "Comunicação e carga de trabalho dominam os comentários", "categories": ["Comunicação da liderança", "Carga de trabalho", "Carreira", "Infraestrutura", "Benefícios", "Outros"], "values": [142, 118, 96, 61, 44, 39], "unit": "", "source": "512 comentários codificados em 6 temas"},
    {"type": "takeaways", "kicker": "Achados", "title": "Três achados que exigem ação", "items": [{"heading": "Liderança", "text": "58% favorável; comentários apontam falta de feedback e de clareza de prioridades."}, {"heading": "Carreira", "text": "61% favorável; técnicos não veem trilha além da gestão."}, {"heading": "Reconhecimento", "text": "Caiu 6 p.p.; queda concentrada em operações e turnos noturnos."}]},
    {"type": "action_plan", "kicker": "Plano", "title": "Cinco ações com dono até o fim do ano", "actions": [{"action": "Programa de feedback estruturado para gestores", "owner": "RH", "due": "dez/26", "status": "neutral"}, {"action": "Trilha de carreira técnica", "owner": "RH + Engenharia", "due": "1T27", "status": "neutral"}, {"action": "Ritual de reconhecimento por turno", "owner": "Operações", "due": "nov/26", "status": "warning"}, {"action": "Devolutiva por área com plano local", "owner": "Gestores", "due": "30/10", "status": "warning"}, {"action": "Pesquisa pulso em março", "owner": "RH", "due": "mar/27", "status": "neutral"}], "decision": "Aprovar o plano e a pesquisa pulso de acompanhamento"}
  ]
}
```
