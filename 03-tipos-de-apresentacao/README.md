# Catálogo de tipos de apresentação

Cada arquivo descreve um tipo: objetivo, público típico, estrutura slide a slide, dados e gráficos recomendados, variações por público, erros comuns e uma **spec mínima** em JSON (formato de `schemas/deck-spec.schema.json`).

## Catálogo

| Tipo | Arquivo | Público principal | Estrutura | Slides | Frequência |
|---|---|---|---|---|---|
| Relatório de projeto (status) | [`relatorio-de-projeto.md`](relatorio-de-projeto.md) | Tático (versão exec. para estratégico) | Situação, análise, ação | 8 a 15 | Semanal / quinzenal / mensal |
| Relatório financeiro | [`relatorio-financeiro.md`](relatorio-financeiro.md) | Estratégico / tático | Resposta primeiro | 10 a 20 | Mensal / trimestral |
| Relatório de vendas | [`relatorio-de-vendas.md`](relatorio-de-vendas.md) | Tático / estratégico | Situação, análise, ação | 10 a 18 | Semanal / mensal |
| Revisão operacional | [`revisao-operacional.md`](revisao-operacional.md) | Operacional | Status, desvios, ações | 5 a 12 | Diária / semanal |
| Plano estratégico | [`plano-estrategico.md`](plano-estrategico.md) | Estratégico | Resposta primeiro | 12 a 20 | Anual |
| Business case | [`business-case.md`](business-case.md) | Estratégico | Problema, solução, prova, pedido | 10 a 15 | Pontual |
| Proposta comercial | [`proposta-comercial.md`](proposta-comercial.md) | Externo | Problema, solução, prova, chamada | 10 a 15 | Pontual |
| Pitch para investidores | [`pitch-investidores.md`](pitch-investidores.md) | Externo | Problema, solução, prova, pedido | 10 a 14 | Pontual |
| Kickoff de projeto | [`kickoff-de-projeto.md`](kickoff-de-projeto.md) | Tático / operacional | Cronológica + alinhamento | 10 a 15 | Início de projeto |
| Lições aprendidas | [`licoes-aprendidas.md`](licoes-aprendidas.md) | Tático | Cronológica + análise | 8 a 12 | Fim de projeto / fase |
| Treinamento | [`treinamento.md`](treinamento.md) | Operacional | Cronológica / modular | 15 a 40 | Pontual / recorrente |
| All-hands / Town hall | [`all-hands.md`](all-hands.md) | Misto (toda a empresa) | Resposta primeiro + celebração | 10 a 20 | Mensal / trimestral |

## Como escolher
Ver tabela de palavras-chave em [`00-guia/como-usar.md`](../00-guia/como-usar.md#passo-2--identificar-o-tipo-de-apresentação).

## Combinações frequentes
- **Relatório mensal de gestão** = `relatorio-financeiro` (resumo) + `relatorio-de-vendas` (resumo) + `revisao-operacional` (consolidada) + plano de ação. Público tático/estratégico; usar sumário executivo único.
- **Reunião de conselho** = `relatorio-financeiro` (versão exec.) + status dos projetos estratégicos (1 slide cada) + decisões pedidas.
- **Reunião diária de produção** = `revisao-operacional` em formato de painel único.

## Modelo de arquivo (para adicionar novos tipos)
```
# <Nome do tipo>
## Objetivo
## Público e contexto
## Estrutura recomendada (slide a slide)
## Dados e KPIs típicos
## Gráficos recomendados
## Variações por público
## Erros comuns
## Spec mínima
```
