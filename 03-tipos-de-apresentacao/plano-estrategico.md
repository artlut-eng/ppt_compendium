# Plano estratégico

## Objetivo
Comunicar a direção da empresa ou área para um horizonte de 1 a 5 anos: onde estamos, para onde vamos, como chegaremos e o que isso exige (investimentos, prioridades, metas). Inclui apresentações de OKRs anuais, planejamento estratégico e revisões de estratégia.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico (diretoria, conselho, sócios); versão de desdobramento para tático |
| Frequência | Anual, com revisões semestrais/trimestrais |
| Duração | 30 a 60 min |
| Tamanho | 12 a 20 slides + anexos |
| Estrutura narrativa | Resposta primeiro (Minto), com bloco de diagnóstico |
| Paleta | `financeira-sobria` ou `corporativa-azul` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | "Plano estratégico <período>" | "Plano estratégico 2027-2029" |
| 2 | `sumario-executivo` | Ambição, 3 pilares, investimento total, resultado esperado | "Dobrar receita até 2029 com 3 pilares e R$ 15 mi de investimento" |
| 3 | `secao-divisoria` | Diagnóstico | - |
| 4 | `kpi-dashboard` | Onde estamos: receita, margem, share, NPS, principais indicadores | "Crescemos 8% ao ano, abaixo do mercado (12%)" |
| 5 | `grafico` | Tendência histórica (3 a 5 anos) vs. mercado/concorrentes | "Perdemos 2 p.p. de share em 3 anos" |
| 6 | `matriz-2x2` ou `comparacao` | SWOT ou posicionamento competitivo | "Força em serviço, fraqueza em custo" |
| 7 | `secao-divisoria` | Direção | - |
| 8 | `citacao-destaque` ou `bullets` | Visão / ambição em uma frase + metas 3 a 5 anos | "Ser referência em X no Sul até 2029" |
| 9 | `comparacao` (3 colunas) | Pilares estratégicos: objetivo, iniciativas, indicador | "Três pilares: eficiência, novos mercados, digital" |
| 10 a 12 | `bullets` ou `processo-fluxo` | Um slide por pilar: iniciativas, marcos, responsáveis | "Pilar 1: reduzir custo unitário em 15% via automação" |
| 13 | `timeline-roadmap` | Roadmap de 3 anos: iniciativas por trimestre/ano | "Ano 1 constrói base; anos 2 e 3 escalam" |
| 14 | `tabela` | Metas por ano: receita, margem, share, indicadores por pilar | "Metas anuais e desdobramento" |
| 15 | `grafico` ou `tabela` | Investimento e retorno: capex/opex por pilar, payback, cenários | "R$ 15 mi com payback de 2,5 anos no cenário base" |
| 16 | `riscos-e-issues` | Riscos estratégicos e mitigação | "Três riscos que podem inviabilizar o plano" |
| 17 | `proximos-passos` | Governança: ritual de acompanhamento, donos, decisões pedidas | "Aprovar o plano e o orçamento do ano 1" |
| 18 | `encerramento` | - | - |

## Dados e KPIs típicos
- Histórico 3 a 5 anos: receita, margem, share, clientes, NPS, produtividade
- Mercado: tamanho, crescimento, concorrentes, tendências
- Metas por ano e por pilar (OKRs)
- Investimento por iniciativa, retorno esperado, cenários (base, otimista, pessimista)
- Riscos com probabilidade, impacto, mitigação

## Gráficos recomendados
- Linha histórica vs. mercado.
- Barras de metas por ano (real histórico + projetado, cores diferentes).
- Matriz 2×2 (SWOT, priorização impacto × esforço, posicionamento).
- Roadmap/timeline por pilar.
- Tabela de metas com desdobramento.
- Waterfall de receita atual para receita-alvo por pilar.

## Variações por público
| Público | Ajustes |
|---|---|
| Estratégico | Estrutura completa (foco em 2, 8, 9, 15, 17). |
| Tático (desdobramento) | Trocar diagnóstico de mercado por diagnóstico da área; detalhar iniciativas do pilar da área; metas trimestrais; donos por iniciativa. |
| Operacional / all-hands | Slides 2, 8, 9, 13 apenas, linguagem simples, "o que muda para você". |

## Erros comuns
- Visão genérica que serviria para qualquer empresa.
- Pilares sem indicador nem dono.
- Roadmap sem datas ou com tudo no ano 1.
- Investimento sem retorno esperado ou sem cenários.
- Não conectar diagnóstico (slides 4 a 6) com as escolhas (slides 9 a 12).

## Spec mínima
```json
{
  "meta": { "title": "Plano estratégico 2027-2029", "audience": "estrategico", "type": "plano-estrategico", "palette": "financeira-sobria", "date": "2026-11-10" },
  "slides": [
    { "type": "cover", "title": "Plano estratégico 2027-2029", "subtitle": "Proposta para aprovação do conselho" },
    { "type": "executive_summary",
      "headline": "Dobrar receita até 2029 com 3 pilares e R$ 15 mi de investimento",
      "points": ["Eficiência: -15% custo unitário via automação", "Novos mercados: entrar em 2 estados com canal indireto", "Digital: 30% das vendas por plataforma própria"],
      "ask": "Aprovar o plano e o orçamento de R$ 5 mi do ano 1" },
    { "type": "section", "number": "1", "title": "Onde estamos" },
    { "type": "chart", "title": "Perdemos 2 p.p. de share em 3 anos", "chart_type": "line",
      "categories": ["2023","2024","2025","2026"],
      "series": [{"name": "Nós (% a.a.)", "values": [10, 8, 8, 7]}, {"name": "Mercado (% a.a.)", "values": [11, 12, 12, 13]}],
      "source": "Relatórios setoriais, dados internos" },
    { "type": "section", "number": "2", "title": "Para onde vamos" },
    { "type": "comparison", "title": "Três pilares: eficiência, novos mercados, digital",
      "options": [
        {"name": "Eficiência", "points": ["Automação linhas 2 e 4", "SMED em toda a planta", "Indicador: custo unitário -15%"]},
        {"name": "Novos mercados", "points": ["Canal indireto em PR e SC", "2 distribuidores por estado", "Indicador: R$ 20 mi de receita nova"]},
        {"name": "Digital", "points": ["Portal de pedidos B2B", "Integração com ERP dos clientes", "Indicador: 30% das vendas online"]}
      ] },
    { "type": "timeline", "title": "Ano 1 constrói base; anos 2 e 3 escalam",
      "milestones": [
        {"date": "2027", "label": "Automação L2, portal B2B v1, 1º distribuidor", "status": "neutral"},
        {"date": "2028", "label": "Automação L4, canal PR/SC completo", "status": "neutral"},
        {"date": "2029", "label": "30% digital, receita 2x", "status": "neutral"}
      ] },
    { "type": "table", "title": "R$ 15 mi com payback de 2,5 anos no cenário base",
      "columns": ["Pilar", "Investimento", "Receita adicional 2029", "Payback"],
      "rows": [["Eficiência", "R$ 8 mi", "-", "2,0 anos"], ["Novos mercados", "R$ 4 mi", "R$ 20 mi", "2,5 anos"], ["Digital", "R$ 3 mi", "R$ 10 mi", "3,0 anos"]] },
    { "type": "action_plan", "title": "Aprovar o plano e o orçamento do ano 1",
      "actions": [{"action": "Aprovação do conselho", "owner": "Conselho", "due": "Dez/26", "status": "warning"}, {"action": "Definir donos por iniciativa", "owner": "CEO", "due": "Jan/27", "status": "neutral"}] },
    { "type": "closing", "title": "Obrigado" }
  ]
}
```
