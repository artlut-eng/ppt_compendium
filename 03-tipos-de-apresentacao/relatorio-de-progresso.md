# Relatório de progresso de atividades recorrentes (ensaios, testes, lotes, campanhas)

## Objetivo
Mostrar à gerência o avanço de um conjunto planejado de atividades repetitivas (ensaios de laboratório, testes de software, lotes-piloto, auditorias, campanhas) contra o plano, a taxa de aprovação/sucesso, as causas de falha e as decisões necessárias para a próxima etapa.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (gerência do time); versão curta para estratégico |
| Frequência | Semanal ou por onda/etapa |
| Duração | 10 a 15 min |
| Tamanho | 5 a 7 slides |
| Estrutura narrativa | Resposta primeiro: avanço, qualidade, causas, tendência, decisões |
| Paleta | `corporativa-azul` |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` com `thesis` | Avanço do plano em %; mensagem-chave (ritmo × qualidade) | "Progresso dos ensaios até <data>" |
| 2 | `kpi_row` + bullets | Realizado/planejado, % aprovação, % concluído, período; leitura executiva em 3 pontos (execução, qualidade, governança) | "40 ensaios realizados: 20% do plano" |
| 3 | `progress_bars` ou `chart` empilhado | Aprovados vs. reprovados por parâmetro/tipo; o pior destacado; foco recomendado | "O parâmetro B tem a menor aprovação" |
| 4 | `chart` barras (Pareto) + comentários | Causas de reprovação; % das duas maiores; prioridade imediata | "58% das reprovações vêm de processo ou calibração" |
| 5 | `timeline` ou `chart` | Janela recente (últimos 10 registros) com status individual; aprovação da janela vs. acumulado | "A última janela melhorou para 60% de aprovação" |
| 6 | `takeaways` + `callout` decision | Decisões: fechar pendências em revisão, plano para causas recorrentes, confirmar a programação futura | "Três decisões destravam a próxima etapa" |

## Dados e KPIs típicos
- Planejado vs. realizado (quantidade e %), por período
- Taxa de aprovação/sucesso (total, por parâmetro, por janela recente)
- Itens em revisão/pendentes
- Causas de falha (Pareto) e recorrência
- Registros com data futura (programação) separados do realizado

## Regras específicas
- **Corte temporal explícito** na capa e no rodapé ("registros com data até 10/09"). Registros futuros na base são programação, não realizado; pedir confirmação.
- Base pequena: mostrar "x de y" ao lado de todo percentual (2 de 5 aprovados = 40%).
- Itens em revisão não são aprovados nem reprovados; contar separadamente.
- Identificar itens por ID quando o público precisa agir sobre eles (fechar revisões); em público amplo, só quantidades.

## Variações
| Contexto | Ajustes |
|---|---|
| Testes de software (QA) | Casos executados/planejados, taxa de passagem, defeitos por severidade, bloqueios |
| Lotes-piloto / produção experimental | Lotes produzidos, rendimento, desvios por causa, liberação de qualidade |
| Campanhas / auditorias | Executadas/planejadas, conformidade %, não conformidades por tipo |

## Erros comuns
- Somar programação futura ao realizado.
- Taxa de aprovação sem o denominador.
- Pareto com "outros" dominando.
- Decisões pedidas sem dono ("alinhar internamente").

## Spec mínima
```json
{
  "meta": {"title": "Progresso dos ensaios", "audience": "tatico", "type": "relatorio-de-progresso", "palette": "corporativa-azul", "brand": "Empresa Exemplo", "deck_name": "Relatório de progresso", "date": "10/09/2026"},
  "slides": [
    {"type": "cover", "kicker": "Relatório de progresso", "title": "Progresso dos ensaios", "subtitle": "Visão executiva até 10 de setembro", "thesis": "O ritmo está aderente ao cronograma, mas quase metade dos resultados realizados exige investigação ou reensaio."},
    {"type": "kpi_row", "kicker": "Resumo", "title": "40 ensaios realizados: 20% do plano", "kpis": [{"label": "Progresso", "value": "40 / 200", "delta": "160 registros futuros na base"}, {"label": "Aprovação", "value": "52,5%", "delta": "21 aprovados | 19 reprovados", "status": "warning"}, {"label": "Conclusão", "value": "90%", "delta": "36 concluídos | 4 em revisão"}, {"label": "Período", "value": "40 dias", "delta": "02/08 a 10/09"}], "bullets": ["**Execução:** a base contém 200 ensaios, dos quais 40 têm data até o corte.", "**Qualidade:** 19 resultados abaixo da meta, 47,5% do realizado.", "**Governança:** 4 ensaios aguardam revisão, 2 já aprovados tecnicamente."], "source": "Base de ensaios, corte 10/09/2026"},
    {"type": "progress_bars", "kicker": "Qualidade", "title": "O parâmetro B tem a menor aprovação entre os quatro", "items": [{"label": "Parâmetro A", "value": 52, "display": "13/25 aprovados | 52%"}, {"label": "Parâmetro B", "value": 40, "display": "2/5 aprovados | 40%", "status": "danger"}, {"label": "Parâmetro C", "value": 60, "display": "3/5 aprovados | 60%"}, {"label": "Parâmetro D", "value": 60, "display": "3/5 aprovados | 60%"}], "callout": {"kind": "recommendation", "label": "Foco recomendado", "text": "Revisar o método do parâmetro B e as três reprovações antes da próxima onda."}},
    {"type": "chart", "kicker": "Causas", "title": "58% das reprovações vêm de processo ou calibração", "chart_type": "bar", "categories": ["Variação de processo", "Necessita calibração", "Resultado abaixo da meta", "Amostra fora do padrão"], "series": [{"name": "Reprovações", "values": [6, 5, 5, 3]}], "highlight_index": 0, "commentary": ["**11 de 19** reprovações associadas a processo ou calibração", "Prioridade imediata: padronizar investigação e bloquear equipamento quando aplicável"], "source": "Base de ensaios (n=19 reprovações)"},
    {"type": "takeaways", "kicker": "Decisões", "title": "Três decisões destravam a próxima etapa", "items": [{"heading": "Fechar 4 revisões", "text": "Priorizar os ensaios em revisão; dois já estão aprovados tecnicamente."}, {"heading": "Atacar causas recorrentes", "text": "Abrir plano conjunto para variação de processo e calibração (11 das 19 reprovações)."}, {"heading": "Confirmar a cadência futura", "text": "Validar os 160 registros datados após o corte como programação oficial."}], "callout": {"kind": "decision", "label": "Decisão solicitada", "text": "Aprovar prioridades e donos para fechamento na próxima reunião de acompanhamento."}}
  ]
}
```
