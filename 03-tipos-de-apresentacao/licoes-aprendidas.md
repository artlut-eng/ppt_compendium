# Lições aprendidas (retrospectiva / post-mortem)

## Objetivo
Registrar e compartilhar o que funcionou e o que não funcionou em um projeto, fase ou incidente, com recomendações acionáveis para os próximos.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (gerentes, PMO, líderes de projetos futuros) e a própria equipe |
| Frequência | Fim de projeto, fim de fase, após incidente relevante |
| Duração | 30 a 60 min |
| Tamanho | 8 a 12 slides |
| Estrutura narrativa | Cronológica curta + análise (o que, por quê, o que fazer) |
| Paleta | `corporativa-azul` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | Projeto / incidente, data | "Lições aprendidas - Projeto Atlas" |
| 2 | `sumario-executivo` | Resultado final vs. objetivo, 3 lições principais, 1 recomendação estrutural | "Atlas entregou a meta com 6 semanas de atraso; integração foi o gargalo" |
| 3 | `kpi-dashboard` | Resultado: planejado vs. real (prazo, custo, escopo, qualidade, benefício) | "Benefício atingido; prazo estourou 25%" |
| 4 | `timeline-roadmap` | Linha do tempo com os eventos-chave (o que aconteceu, quando) | "Atraso concentrado na fase de integração" |
| 5 | `two_column` | O que funcionou / o que não funcionou | "Piloto funcionou; homologação com fornecedor não" |
| 6 | `tabela` | Análise de causa raiz dos principais problemas (problema, causa, evidência) | "Três causas explicam 80% do atraso" |
| 7 | `tabela` | Lições e recomendações: lição, recomendação, aplicável a, dono | "Cinco recomendações para os próximos projetos" |
| 8 | `proximos-passos` | Ações para institucionalizar (atualizar template, treinar, mudar processo) | "Atualizar checklist de homologação até outubro" |
| 9 | `encerramento` | Agradecimento à equipe | - |

## Dados típicos
- Planejado vs. real: prazo, custo, escopo, qualidade, benefício
- Eventos e decisões-chave com datas
- Causas raiz com evidência (não opinião)
- Lições classificadas (processo, pessoas, tecnologia, fornecedor, comunicação)

## Gráficos recomendados
- Timeline com marcos planejados vs. reais.
- KPIs planejado vs. real.
- Tabela de causas e de recomendações.
- Diagrama de Ishikawa simplificado (opcional, como `processo-fluxo` ou imagem).

## Variações
| Contexto | Ajustes |
|---|---|
| Post-mortem de incidente (TI, segurança, operação) | Timeline em minutos/horas, impacto quantificado, detecção e resposta, ações preventivas. Sem culpa individual. |
| Retrospectiva ágil (sprint) | 3 slides: o que manter, o que mudar, ações. Sem capa. |

## Erros comuns
- Lista de problemas sem causa.
- Culpar pessoas em vez de processos.
- Lições genéricas ("comunicar melhor").
- Sem dono para as recomendações (nada muda).
- Só o negativo; o que funcionou também deve ser replicado.

## Spec mínima
```json
{
  "meta": { "title": "Lições aprendidas - Projeto Atlas", "audience": "tatico", "type": "licoes-aprendidas", "palette": "corporativa-azul" },
  "slides": [
    { "type": "cover", "title": "Lições aprendidas", "subtitle": "Projeto Atlas - encerramento" },
    { "type": "executive_summary", "headline": "Atlas entregou a meta com 6 semanas de atraso; integração foi o gargalo",
      "points": ["Lead time caiu de 12 para 8,7 dias (meta 9)", "Atraso de 6 semanas na integração TMS-ERP", "Custo 4% acima do orçamento"],
      "ask": "Adotar checklist de homologação de integração em todos os projetos" },
    { "type": "kpi_row", "title": "Benefício atingido; prazo estourou 25%", "kpis": [{"label": "Lead time", "value": "8,7 dias", "delta": "meta 9", "status": "success"}, {"label": "Prazo", "value": "+6 sem", "delta": "+25%", "status": "danger"}, {"label": "Custo", "value": "+4%", "delta": "R$ 32 mil", "status": "warning"}, {"label": "Escopo", "value": "100%", "delta": "sem cortes", "status": "success"}] },
    { "type": "two_column", "title": "Piloto funcionou; homologação com fornecedor não",
      "left": {"heading": "Funcionou", "bullets": ["Piloto de 2 semanas em 1 rota", "Reunião diária de 15 min na implantação", "Sponsor presente nas decisões"]},
      "right": {"heading": "Não funcionou", "bullets": ["Homologação de API do fornecedor sem prazo contratual", "Requisitos de integração levantados tarde", "Dependência de 1 pessoa em TI"]} },
    { "type": "table", "title": "Cinco recomendações para os próximos projetos", "columns": ["Lição", "Recomendação", "Dono"],
      "rows": [["Integração descoberta tarde", "Levantar requisitos de integração no diagnóstico", "PMO"], ["Fornecedor sem prazo", "Cláusula de prazo de homologação em contrato", "Compras"], ["Pessoa única em TI", "Dupla em todo papel crítico", "TI"]] },
    { "type": "action_plan", "title": "Atualizar checklist de homologação até outubro", "actions": [{"action": "Revisar template de kickoff", "owner": "PMO", "due": "15/10", "status": "neutral"}, {"action": "Incluir cláusula padrão em contratos", "owner": "Jurídico", "due": "31/10", "status": "neutral"}] },
    { "type": "closing", "title": "Obrigado à equipe Atlas" }
  ]
}
```
