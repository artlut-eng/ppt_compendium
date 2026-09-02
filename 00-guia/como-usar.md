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
3. Confirme um resumo de briefing de 6 linhas antes de montar o deck.

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

- Abertura: `capa` → `agenda` (opcional se < 8 slides) → `sumario-executivo`
- Corpo: `kpi-dashboard`, `grafico`, `tabela`, `comparacao`, `timeline-roadmap`, `processo-fluxo`, `matriz-2x2`, `riscos-e-issues`
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

Percorra `07-checklists/pre-entrega.md`, o checklist do público em `07-checklists/revisao-por-publico.md` e o filtro de exposição em `07-checklists/nivel-de-exposicao.md`.

## Regras invioláveis

1. **Título = conclusão.** Nunca "Vendas Q3"; sempre "Vendas do Q3 cresceram 12% puxadas pelo Sul".
2. **Uma ideia por slide.** Se precisa de "e também", é outro slide.
3. **Nenhum slide só de texto com mais de 6 linhas** (exceto treinamento/documentação).
4. **Números sempre com contexto**: comparação (vs. meta, vs. período anterior) e unidade.
5. **Fonte dos dados** no rodapé de qualquer slide com números.
6. **Não decore**: ícone, imagem ou forma só entram se carregam informação.
7. **Consistência**: mesma posição de título, mesma paleta, mesma fonte em todos os slides.
8. **Exposição**: nada entra no deck que não possa ser visto por todos os que o receberão depois (ver `briefing.md`, bloco 3).
