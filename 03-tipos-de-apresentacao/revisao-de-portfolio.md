# Revisão de portfólio (comitê e deep dive decisório)

## Objetivo
Dar à liderança uma visão comparável de uma carteira de projetos (P&D, TI, capex, produtos) e, na versão decisória, repriorizar a carteira, aprovar planos de recuperação e realocar orçamento e capacidade. Duas variantes:

| Variante | Objetivo | Slides | Duração | Estrutura |
|---|---|---|---|---|
| **Visão executiva (tomada de ciência)** | Situação consolidada, exceções que exigem atenção, horizonte de marcos | 6 a 8 | 10 a 15 min | Composição, execução, recursos, atenção, horizonte, leitura |
| **Deep dive decisório** | Repriorizar a carteira e aprovar intervenções | 20 a 30 + anexo | 30 a 45 min | Situação, necessidade de escolha, método, classificação, blocos, planos, realocações, decisões |

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico (diretoria, comitê de portfólio); tático para o desdobramento |
| Frequência | Mensal/trimestral (visão executiva); pontual ou semestral (deep dive) |
| Paleta | `financeira-sobria` ou `corporativa-azul` |
| Exposição típica | Interáreas; projetos nominais no anexo, blocos no corpo |
| Modo de condução | **Guiado**, com realinhamentos: o deep dive depende de decisões do usuário que não estão na base |

## Variante A: visão executiva (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Capa com painel "portfólio em 1 minuto": nº de projetos, orçamento total, conclusão média, projetos em risco alto | "Situação geral do portfólio" |
| 2 | `kpi_row` + `progress_bars` | Composição: projetos, prioridade alta, distribuição por maturidade (TRL/fase) e por categoria | "A carteira é ampla e equilibrada entre níveis de maturidade" |
| 3 | `chart` empilhado 100% + `kpi_row` | Execução: distribuição por status; conclusão média; em execução/validação; em espera | "56% dos projetos estão em andamento ou validação" |
| 4 | `kpi_row` + `progress_bars` + `callout` warning | Recursos: orçamento total, gasto acumulado, saldo, projetos acima do orçamento; avanço físico × consumo financeiro | "O portfólio consumiu 52% do orçamento para 52% de avanço" |
| 5 | `kpi_row` + `table` | Atenção: projetos com risco alto, prioridade alta, estouro, em espera; tabela das 5 exceções (projeto, status, risco, conclusão, consumo, saldo) | "Risco alto e estouro se concentram em poucas exceções" |
| 6 | `chart` colunas + `callout` | Horizonte: marcos por mês nos próximos 12 meses; leitura para ciência | "15 marcos estão concentrados no próximo trimestre" |

## Variante B: deep dive decisório (blocos de slides)
| Bloco | Slides | Conteúdo |
|---|---|---|
| **Tese e resultado esperado** | 1 a 2 | Capa com tese ("a carteira pode gerar mais valor com os mesmos recursos") e as decisões que o comitê tomará |
| **Situação consolidada** | 3 | KPIs e exceções (igual à variante A, condensado) |
| **Necessidade de escolha** | 4 | Restrições: orçamento fixo, time atual, mobilidade entre equipes, horizonte; implicação: acelerar exige despriorizar |
| **Método** | 5 a 7 | Pesos do modelo de pontuação; fatos da base × proxies × recomendação; hierarquia estratégica de categorias (se definida pelo usuário) |
| **Classificação** | 8 a 9 | Faixas de pontuação → blocos (Acelerar, Manter, Recuperar, Reavaliar, Descontinuar); distribuição da carteira entre blocos |
| **Blocos decisórios** | 10 a 14 | Um slide por bloco: projetos, pontuação, orçamento, capacidade, decisão solicitada; exceções destacadas |
| **Planos de recuperação** | 15 a 20 | Um plano por projeto (ou dois por slide): diagnóstico, atratividade, ações (até 3), recursos, marco de 90 dias, decisão pedida |
| **Realocações** | 21 a 23 | Fontes e destinos de orçamento (waterfall ou colunas); capacidade por equipe (pool fechado); gates e cadência (D0, D30, D90, 12 meses) |
| **Decisões** | 24 | Lista das aprovações pedidas com espaço para registrar (aprovado / ajustado / rejeitado) |
| **Anexo** | 25+ | Divisória "Rastreabilidade" + classificação completa dos N projetos em tabelas de 12 a 15 linhas; planos de recuperação em tabela; fontes de realocação; sensibilidade do modelo |

## Framework de classificação (generalizado)

### Pontuação ponderada (0 a 100)
| Critério | Peso sugerido | Proxies quando o dado não existe |
|---|---|---|
| Valor estratégico | 40% | Prioridade declarada, aderência da categoria à estratégia (hierarquia definida pelo usuário), relevância do próximo marco |
| Potencial financeiro | 30% | Proximidade de captura de valor (maturidade e status), capital ainda necessário, eficiência avanço físico ÷ consumo, risco, timing |
| Viabilidade de execução | 20% | Risco geral, desvio financeiro, status (em espera, atrasado) |
| Urgência e timing | 10% | Proximidade do próximo marco, prazo previsto, necessidade de recuperação |

Pesos e hierarquias são **decisões do usuário**, obtidas no modo guiado; o deck os apresenta como premissas, e a categoria nunca determina isoladamente a recomendação.

### Blocos e faixas
| Bloco | Faixa sugerida | Condição adicional | Decisão solicitada |
|---|---|---|---|
| Acelerar | 80 a 100 | Execução viável, capaz de absorver recursos em 12 meses | Confirmar prioridade, proteger orçamento, aprovar realocação |
| Manter | 65 a 79 | Sem desvio material | Manter prioridade e governança; não expandir escopo |
| Recuperar | 65 ou mais | Desvio material de risco, prazo ou orçamento | Aprovar plano de 90 dias em bloco; exceções individualmente |
| Reavaliar | 45 a 64 ou baixa confiança | Premissas incertas | Limitar investimento; bloquear parte do saldo; gate em 90 dias |
| Descontinuar | abaixo de 45 | Execução desfavorável e alternativa superior para os recursos (regra balanceada) | Aprovar encerramento em bloco; preservar conhecimento; liberar recursos |

Proteções antes de recomendar descontinuação: valor de opção (PI, plataforma), custo de saída, dependências, recursos realmente recuperáveis, alternativa superior, confiança da recomendação. Projetos concluídos não são candidatos.

### Plano de recuperação (6 campos por projeto)
1. **Diagnóstico**: causa principal do desvio.
2. **Atratividade**: valor estratégico e potencial financeiro (marcar "estimado por proxies").
3. **Ações**: até 3, ligadas à causa (revalidar justificativa, revisar escopo, replanejar marcos, realocar capacidade, reestruturar orçamento, mitigar riscos, reforçar governança).
4. **Recursos**: capacidade (em unidades relativas quando não há headcount) e orçamento condicionado.
5. **Marco de recuperação**: evidência esperada e prazo (90 dias; até 180 com evidência intermediária).
6. **Decisão solicitada**: aprovar, ajustar ou rejeitar; e a decisão de saída ao fim do ciclo (acelerar, manter, replanejar, reavaliar, descontinuar).

### Regras de realocação (quando o orçamento total é constante)
| Bloco | Tratamento do saldo |
|---|---|
| Descontinuar | % reservado para encerramento (ex.: 10%); restante potencialmente liberável |
| Reavaliar | % bloqueado até o gate (ex.: 50%); restante para validação mínima |
| Manter | Orçamento do marco principal protegido; redução só de entregas secundárias |
| Acelerar / Recuperar | Recebem realocações, por atratividade e por plano aprovado |
| Reserva | Até ~5% do total liberado como contingência por 90 dias |

Capacidade: quando a base só tem "equipe responsável", medir em unidades relativas de projeto (0,5 / 1,0 / 1,5) e fechar o balanço **dentro de cada equipe** se a mobilidade não for autorizada. Declarar a limitação no slide.

### Cadência de governança
D0 aprovar blocos e realocações → D30 confirmar execução → D90 gate de recuperação/reavaliação → trimestral atualizar ranking → 12 meses nova repriorização. Nenhum projeto fica em Recuperar/Reavaliar mais de 90 dias sem decisão explícita.

## Perguntas de realinhamento (modo guiado)
Ação esperada; amplitude (toda a carteira ou críticos); critérios e pesos; método para dados ausentes (proxies ou preenchimento); postura (classificação objetiva ou cenários); abertura a descontinuação; agrupamento das decisões (blocos ou individual); autoridade sobre realocações; restrição orçamentária; restrição de capacidade e mobilidade; horizonte; exposição (nominal ou blocos + anexo); hierarquia de categorias; regra de descontinuação; profundidade dos planos; limiares. Ver `00-guia/prompt-base-para-agentes.md`.

## Erros comuns
- Apresentar proxies como se fossem dados de mercado.
- Recomendar descontinuação por um único indicador (categoria, risco, TRL).
- Planos de recuperação genéricos ("acompanhar de perto").
- Realocação que soma mais do que o liberado, ou que transfere capacidade entre equipes sem autorização.
- Corpo principal com todos os projetos nominais em fonte 8 pt; a lista completa é anexo.

## Spec mínima (variante A)
```json
{
  "meta": {"title": "Situação geral do portfólio", "audience": "estrategico", "type": "revisao-de-portfolio", "palette": "financeira-sobria", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "Comitê de portfólio"},
  "slides": [
    {"type": "cover", "kicker": "Comitê de portfólio", "title": "Situação geral do portfólio", "subtitle": "Visão executiva para tomada de ciência | setembro/2026", "thesis": "55 projetos, R$ 58 mi de orçamento, 52% de conclusão média e 19 projetos em risco alto."},
    {"type": "kpi_row", "kicker": "Composição", "title": "A carteira é ampla e equilibrada entre níveis de maturidade", "kpis": [{"label": "Projetos", "value": "55", "delta": "10 categorias"}, {"label": "Prioridade alta", "value": "27", "delta": "49% da carteira", "status": "warning"}, {"label": "Fase inicial", "value": "18", "delta": "33%"}, {"label": "Fase intermediária", "value": "20", "delta": "36%"}, {"label": "Fase avançada", "value": "17", "delta": "31%"}], "source": "Base de portfólio, set/2026"},
    {"type": "progress_bars", "kicker": "Composição", "title": "Nenhuma categoria concentra mais de 15% da carteira", "columns": 2, "items": [{"label": "Categoria A", "value": 7, "max": 10, "display": "7"}, {"label": "Categoria B", "value": 6, "max": 10, "display": "6"}, {"label": "Categoria C", "value": 6, "max": 10, "display": "6"}, {"label": "Categoria D", "value": 5, "max": 10, "display": "5"}, {"label": "Categoria E", "value": 5, "max": 10, "display": "5"}, {"label": "Categoria F", "value": 4, "max": 10, "display": "4"}]},
    {"type": "kpi_row", "kicker": "Recursos", "title": "O portfólio consumiu 52% do orçamento para 52% de avanço médio", "kpis": [{"label": "Orçamento total", "value": "R$ 58,0 mi"}, {"label": "Gasto acumulado", "value": "R$ 30,1 mi", "delta": "51,8%"}, {"label": "Saldo", "value": "R$ 28,0 mi"}, {"label": "Acima do orçamento", "value": "7 projetos", "delta": "R$ 460 mil de estouro", "status": "danger"}], "callout": {"kind": "warning", "label": "Ponto de atenção", "text": "O equilíbrio consolidado não elimina desvios individuais: sete projetos concentram o estouro."}},
    {"type": "table", "kicker": "Atenção", "title": "Risco alto e estouro de orçamento se concentram em poucas exceções", "columns": ["Projeto", "Status", "Risco", "Conclusão", "Consumo", "Saldo"], "rows": [["P-014", "Validação", "Alto", "78%", "105%", "(R$ 115 mil)"], ["P-035", "Validação", "Alto", "74%", "106%", "(R$ 24 mil)"], ["P-052", "Em andamento", "Alto", "46%", "108%", "(R$ 65 mil)"], ["P-040", "Em espera", "Alto", "60%", "72%", "R$ 330 mil"], ["P-017", "Em espera", "Alto", "50%", "53%", "R$ 402 mil"]], "status_columns": [2], "align": ["left", "left", "center", "right", "right", "right"], "source": "Base de portfólio; critério: risco alto + desvio financeiro ou em espera", "callout": {"kind": "conclusion", "label": "Leitura", "text": "Não representa recomendação de priorização; exceções para acompanhamento mais próximo."}},
    {"type": "chart", "kicker": "Horizonte", "title": "15 marcos estão concentrados no último trimestre do ano", "chart_type": "column", "categories": ["out", "nov", "dez", "jan", "fev", "mar", "abr", "mai", "jun"], "series": [{"name": "Marcos", "values": [5, 5, 5, 5, 4, 5, 4, 4, 3]}], "highlight_index": 0, "source": "Próximo marco por projeto", "callout": {"kind": "conclusion", "label": "Para ciência", "text": "Carteira diversificada, execução física e financeira equilibradas no consolidado, com exceções de risco e orçamento sob acompanhamento."}},
    {"type": "closing", "title": "Próximo comitê: outubro", "subtitle": "Anexo: lista completa dos 55 projetos"}
  ]
}
```
