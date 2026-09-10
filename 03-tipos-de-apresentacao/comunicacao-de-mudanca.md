# Comunicação de mudança organizacional

## Objetivo
Comunicar uma mudança (reorganização, nova estrutura, novo sistema ou processo, mudança de política, fusão, encerramento de unidade) de forma que cada público entenda o que muda, por quê, quando, o que se espera dele e onde tirar dúvidas. É um deck de comunicação, não de análise.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Misto: lideranças (primeiro), depois equipes (operacional); versões por público |
| Frequência | Por evento; em cascata (diretoria → gestores → equipes) |
| Duração | 15 a 30 min + perguntas |
| Tamanho | 6 a 10 slides |
| Estrutura narrativa | Por quê, o quê, o que não muda, quando, o que esperamos de você, apoio, dúvidas |
| Paleta | `corporativa-azul` ou marca |
| Exposição | Muito sensível: versão para gestores (interno) ≠ versão para equipes (interáreas); nada de dados de pessoas |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Nome da mudança, data, público da versão | "Nova estrutura comercial a partir de outubro" |
| 2 | `bullets` ou `big_number` | Por quê: contexto e objetivo em linguagem simples, com 1 ou 2 números | "Crescemos 40% e a estrutura atual não acompanha" |
| 3 | `two_column` ou `comparison` | O que muda / o que não muda (antes e depois) | "Muda a organização por região; não mudam metas, produtos nem equipes de campo" |
| 4 | `process` ou `image` | Nova estrutura/processo (organograma por função, sem nomes na versão ampla) | "Três regiões com gerente próprio" |
| 5 | `timeline` ou `gantt` | Quando: fases, datas, o que acontece em cada uma | "Transição em três fases até dezembro" |
| 6 | `takeaways` | O que esperamos de você (por público) | "Três pedidos para as equipes" |
| 7 | `bullets` | Apoio disponível: treinamento, canal de dúvidas, ponto focal, FAQ | "Onde buscar ajuda" |
| 8 | `bullets` | Perguntas frequentes já respondidas (as difíceis primeiro) | "As cinco perguntas mais frequentes" |
| 9 | `closing` | Próximos passos, contato, próxima comunicação | "Próxima comunicação em 15 dias" |

## Regras específicas
- **Cascata**: gestores recebem a versão completa antes das equipes e sabem responder às perguntas difíceis.
- **O que não muda** é tão importante quanto o que muda; reduz ansiedade.
- Linguagem simples; sem siglas nem eufemismos ("otimização de estrutura" para desligamentos).
- Mudanças que afetam pessoas (desligamentos, transferências, mudança de chefia): comunicação individual **antes** da coletiva; o deck coletivo não traz nomes nem números que permitam identificar.
- Perguntas difíceis respondidas no deck ("vai ter demissão?", "meu salário muda?"); se a resposta é "não sabemos ainda", dizer isso e quando saberá.
- Data e canal da próxima comunicação sempre; silêncio gera boato.
- Tom: honesto, direto, respeitoso; sem triunfalismo em mudanças que custam às pessoas.

## Versões por público
| Público | Diferenças |
|---|---|
| Diretoria / gestores | Contexto completo, critérios, impactos em pessoas (agregado), script de comunicação, cronograma detalhado, FAQ interna |
| Equipes | Por quê, o que muda e não muda, quando, o que esperamos, apoio, FAQ |
| Clientes / parceiros (quando aplicável) | O que muda no atendimento, quem é o novo contato, continuidade de compromissos |

## Erros comuns
- Comunicar às equipes antes dos gestores.
- Só "o que muda" sem "o que não muda".
- Eufemismos.
- Sem FAQ nem data da próxima comunicação.
- Organograma com nomes em deck que vaza.

## Spec mínima
```json
{
  "meta": {"title": "Nova estrutura comercial", "audience": "operacional", "type": "comunicacao-de-mudanca", "palette": "corporativa-azul", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "Comunicação às equipes", "date": "set/2026", "font_scale": 1.1},
  "slides": [
    {"type": "cover", "kicker": "Comunicação às equipes", "title": "Nova estrutura comercial a partir de outubro", "subtitle": "O que muda, o que não muda e o que esperamos de você"},
    {"type": "big_number", "kicker": "Por quê", "title": "Crescemos 40% em dois anos e a estrutura atual não acompanha", "value": "+40%", "label": "clientes ativos desde 2024", "context": "Uma única gerência comercial atende hoje 1.240 clientes em 12 estados. Decisões demoram e o cliente sente."},
    {"type": "two_column", "kicker": "Mudança", "title": "Muda a organização por região; não mudam metas, produtos nem equipes de campo", "left": {"heading": "O que muda", "bullets": ["Três regiões (Sul, Sudeste, Norte/Nordeste), cada uma com gerente próprio", "Atendimento e pré-vendas alocados por região", "Reuniões comerciais passam a ser regionais"], "status": "warning"}, "right": {"heading": "O que não muda", "bullets": ["Metas e política de comissão de 2026", "Produtos, preços e contratos vigentes", "Equipes de campo e suas carteiras", "Sistemas (CRM e ERP)"], "status": "success"}},
    {"type": "timeline", "kicker": "Quando", "title": "Transição em três fases até dezembro", "milestones": [{"date": "01/10", "label": "Anúncio e gerentes regionais", "status": "success"}, {"date": "15/10", "label": "Alocação das equipes por região", "status": "warning"}, {"date": "nov", "label": "Rituais regionais e treinamento", "status": "neutral"}, {"date": "dez", "label": "Estrutura completa; avaliação", "status": "neutral"}], "today_index": 0},
    {"type": "takeaways", "kicker": "O que esperamos", "title": "Três pedidos para as equipes", "items": [{"heading": "Continuidade", "text": "Nenhum cliente fica sem atendimento na transição: a carteira atual continua com você até a alocação formal."}, {"heading": "Participação", "text": "Traga dúvidas e sugestões nas reuniões regionais de outubro."}, {"heading": "Registro", "text": "Mantenha o CRM atualizado; ele será a base da alocação por região."}]},
    {"type": "bullets", "kicker": "Perguntas frequentes", "title": "As cinco perguntas mais frequentes", "bullets": ["**Vai ter demissão?** Não. A mudança cria três posições de gerente e não reduz equipes.", "**Meu salário ou comissão muda?** Não em 2026. A política de 2027 será discutida em novembro com as equipes.", "**Vou trocar de chefe?** Quem atende clientes fora da sua região atual pode passar a reportar ao gerente regional; cada caso será conversado individualmente até 15/10.", "**Preciso mudar de cidade?** Não. Regiões são definidas por carteira, não por local de trabalho.", "**Quem são os gerentes regionais?** Serão anunciados em 01/10 após conversa individual com as equipes envolvidas."], "callout": {"kind": "decision", "label": "Apoio", "text": "Dúvidas: canal #estrutura-comercial ou seu gestor; FAQ atualizada toda sexta-feira."}},
    {"type": "closing", "title": "Próxima comunicação: 15/10", "subtitle": "rh@empresa-exemplo.com | canal #estrutura-comercial"}
  ]
}
```
