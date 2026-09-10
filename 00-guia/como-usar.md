# Como usar este compêndio (guia para IAs)

Este documento descreve o **fluxo de decisão** que uma IA deve seguir ao receber um pedido do tipo "faça uma apresentação sobre X".

## Fluxo em 8 passos

```
Pedido do usuário
   │
   ├─ 0. BRIEFING ────── qual a mensagem central, objetivo e nível de exposição? → 00-guia/briefing.md
   ├─ 1. PÚBLICO ─────── quem vai assistir e como decide? → 02-publicos/ (nível + estilo)
   ├─ 2. TIPO ─────────── qual o objetivo do deck? → 03-tipos-de-apresentacao/
   ├─ 3. NARRATIVA ────── qual a mensagem central e a ordem? → 01-fundamentos/storytelling-e-estrutura.md
   ├─ 4. SLIDES ───────── quais modelos de slide para cada ponto? → 04-modelos-de-slides/
   ├─ 5. VISUAL ───────── paleta, fonte, gráficos → 01-fundamentos/ + 05-artefatos-visuais/
   ├─ 6. GERAÇÃO ──────── spec JSON → código → .pptx → schemas/ + 06-codigo/
   └─ 7. VALIDAÇÃO ────── checklist por público → 07-checklists/
```

## Passo 0 — Briefing

Antes de qualquer escolha, descubra com o usuário (ver [`briefing.md`](briefing.md)):
1. **Mensagem central** em uma frase e **o que deve acontecer depois** (decidir, aprovar, alinhar, informar, vender).
2. **Nível de exposição**: `interno` (tudo pode entrar, inclusive riscos crus), `interareas` (fraquezas só com plano, sem culpar áreas, sem dados de pessoas) ou `externo` (só o que a empresa autoriza publicar). Na dúvida, `interareas`.
3. **Identidade visual e logotipo**: pergunte sempre se há logotipo (PNG transparente), cores e fontes da marca ou template obrigatório. Sem arquivo, use o nome da empresa como marca-texto (`meta.brand`) e avise que o logo pode ser inserido depois. Ver `05-artefatos-visuais/logotipo-e-marca.md`.
4. Escolha o **modo de condução**: direto (premissas padrão, entrega única) ou guiado (uma pergunta por vez, roteiro aprovado antes de produzir). Ver `prompt-base-para-agentes.md`.
5. Confirme um resumo de briefing de 6 linhas antes de montar o deck.

## Passo 1 — Identificar o público

Perguntas a fazer (ao usuário ou inferir do contexto):

| Pergunta | Se a resposta for... | Público |
|---|---|---|
| Quem decide depois de ver? | Diretoria, conselho, C-level, sócios | **Estratégico** |
| | Gerentes, coordenadores, líderes de área | **Tático** |
| | Supervisores, analistas, equipe de execução | **Operacional** |
| | Clientes, investidores, parceiros, imprensa, público geral | **Externo** |

Se não for possível determinar, assuma **tático** (meio-termo em densidade e detalhe) e informe a premissa.

Se o usuário souber como o decisor se comunica, aplique também o **estilo** de [`02-publicos/estilos-de-comunicacao.md`](../02-publicos/estilos-de-comunicacao.md): Vermelho (direto: resposta e pedido no slide 2, deck curto), Amarelo (ideia e entusiasmo: abrir pela oportunidade, espaço para debate), Verde (pessoas e segurança: contexto antes da mudança, impacto no time, transição gradual), Azul (dados e método: fonte em tudo, anexos com premissas). Público misto: abra para o Vermelho, sustente para o Azul, contextualize para o Verde, dê espaço para o Amarelo.

Detalhes e matriz comparativa: [`02-publicos/README.md`](../02-publicos/README.md).

## Passo 2 — Identificar o tipo de apresentação

| Palavras-chave no pedido | Tipo | Arquivo |
|---|---|---|
| status, andamento, acompanhamento, semanal, mensal do projeto | Relatório de projeto | `relatorio-de-projeto.md` |
| resultado, DRE, receita, custo, margem, orçamento, fechamento | Relatório financeiro | `relatorio-financeiro.md` |
| vendas, pipeline, funil, meta, cota, comercial | Relatório de vendas | `relatorio-de-vendas.md` |
| proposta, orçamento para cliente, escopo, oferta | Proposta comercial | `proposta-comercial.md` |
| investidor, captação, rodada, pitch, startup | Pitch para investidores | `pitch-investidores.md` |
| planejamento, visão, OKR, metas anuais, direcionamento | Plano estratégico | `plano-estrategico.md` |
| kickoff, início de projeto, alinhamento inicial | Kickoff de projeto | `kickoff-de-projeto.md` |
| produção, OEE, turno, paradas, indicadores diários, chão de fábrica | Revisão operacional | `revisao-operacional.md` |
| justificativa, ROI, viabilidade, aprovação de investimento | Business case | `business-case.md` |
| lições aprendidas, retrospectiva, post-mortem, encerramento | Lições aprendidas | `licoes-aprendidas.md` |
| treinamento, capacitação, tutorial, onboarding | Treinamento | `treinamento.md` |
| all-hands, town hall, comunicado geral, resultados para toda a empresa | All-hands | `all-hands.md` |
| eficiência, gargalo, SLA, atraso, tempo de ciclo, base de solicitações/chamados | Análise de processo | `analise-de-processo.md` |
| portfólio, carteira de projetos, comitê, repriorizar, planos de recuperação | Revisão de portfólio | `revisao-de-portfolio.md` |
| KPIs da área, ciclo, planejamento do próximo ciclo, alinhar expectativas | Revisão de KPIs de área | `revisao-de-kpis-de-area.md` |
| progresso, ensaios, testes, lotes, aprovação, reprovação, plano vs. realizado | Relatório de progresso | `relatorio-de-progresso.md` |

Catálogo completo: [`03-tipos-de-apresentacao/README.md`](../03-tipos-de-apresentacao/README.md).

## Passo 3 — Definir a narrativa

1. Escreva a **mensagem central** em uma frase (o que o público deve lembrar se esquecer todo o resto).
2. Escolha a estrutura conforme o tipo e público — regra geral:
   - Estratégico → **resposta primeiro** (Pirâmide de Minto / SCQA).
   - Tático → **situação → análise → plano de ação**.
   - Operacional → **status → desvios → ações → responsáveis**.
   - Externo/persuasivo → **problema → solução → prova → chamada para ação**.
3. Cada slide recebe um **título-conclusão** (frase afirmativa). Teste: lendo só os títulos em sequência, a história faz sentido?

## Passo 4 — Escolher modelos de slide

Mapeie cada ponto da narrativa para um modelo em `04-modelos-de-slides/`. Combinações mais comuns:

- Campos comuns em todo slide de conteúdo: `kicker` (rótulo de seção acima do título) e `callout` (caixa rotulada de conclusão / ressalva / recomendação / decisão). Ver `04-modelos-de-slides/callout.md` e `cabecalho-kicker-e-logo.md`.
- Abertura: `capa` (com `thesis` quando houver tese central) → `agenda` (opcional se < 8 slides) → `sumario-executivo`
- Corpo: `kpi-dashboard`, `grafico`, `tabela`, `progress-bars`, `comparacao`, `timeline-roadmap`, `processo-fluxo` (com métricas por etapa), `matriz-2x2`, `riscos-e-issues`, `takeaways`
- Fechamento: `proximos-passos` → `encerramento`

## Passo 5 — Aplicar regras visuais

- Paleta: escolha em `05-artefatos-visuais/paletas/` pelo tipo/setor. Nunca invente mais de 1 cor de destaque além da paleta.
- Tipografia: `01-fundamentos/tipografia.md`. Padrão: títulos 28–36 pt, corpo 14–18 pt, mínimo 12 pt (operacional em TV: mínimo 18 pt).
- Gráficos: `05-artefatos-visuais/graficos/escolha-do-grafico.md`. Um gráfico por slide, sempre com o título dizendo a conclusão.

## Passo 6 — Gerar

1. Produza uma **spec JSON** válida contra `schemas/deck-spec.schema.json`.
2. Rode `06-codigo/python-pptx/build_from_spec.py spec.json saida.pptx` (ou o equivalente em JS).
3. Se precisar de algo que a biblioteca base não cobre, estenda `deckbuilder.py` em vez de escrever código solto.

## Passo 7 — Validar

1. Rode `06-codigo/python-pptx/audit_deck.py <deck> --audience <nível> --expect-logo` e renderize as miniaturas (`render_thumbnails.py`).
2. Percorra `07-checklists/pre-entrega.md`, `revisao-por-publico.md`, `nivel-de-exposicao.md` e `auditoria-de-arquivo.md`.
3. Entregue: resumo da narrativa, roteiro, decisões de design (paleta, fontes, logotipo), dados a confirmar e tabela de auditoria (formato em `prompt-base-para-agentes.md`).

## Regras invioláveis

1. **Título = conclusão.** Nunca "Vendas Q3"; sempre "Vendas do Q3 cresceram 12% puxadas pelo Sul".
2. **Uma ideia por slide.** Se precisa de "e também", é outro slide.
3. **Nenhum slide só de texto com mais de 6 linhas** (exceto treinamento/documentação).
4. **Números sempre com contexto**: comparação (vs. meta, vs. período anterior) e unidade.
5. **Fonte dos dados** no rodapé de qualquer slide com números.
6. **Não decore**: ícone, imagem ou forma só entram se carregam informação.
7. **Consistência**: mesma posição de título, mesma paleta, mesma fonte em todos os slides.
8. **Exposição**: nada entra no deck que não possa ser visto por todos os que o receberão depois (ver `briefing.md`, bloco 3).
9. **Logotipo presente e discreto**: capa e encerramento no canto superior direito, conteúdo no rodapé; sem arquivo, marca-texto. Nunca esquecer de perguntar.
10. **Fato, inferência e recomendação rotulados**; números com cobertura e ressalvas de maturidade (`fatos-inferencias-recomendacoes.md`).
