# Business case

## Objetivo
Obter aprovação para um investimento, projeto ou mudança, demonstrando problema, alternativas, retorno esperado, riscos e o pedido concreto.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico (quem aprova o orçamento) |
| Frequência | Pontual |
| Duração | 15 a 30 min |
| Tamanho | 10 a 15 slides + anexo com premissas e cálculo |
| Estrutura narrativa | Problema, solução, prova, pedido (resposta no sumário) |
| Paleta | `financeira-sobria` ou `corporativa-azul` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | Nome da iniciativa, proponente | "Automação da linha 4" |
| 2 | `sumario-executivo` | Pedido (valor), retorno (payback/VPL), problema em 1 linha, recomendação | "Investir R$ 2,4 mi na linha 4 gera payback de 20 meses" |
| 3 | `bullets` ou `grafico` | O problema: custo atual, perda, risco, oportunidade perdida (quantificado) | "Linha 4 gera R$ 1,8 mi/ano em retrabalho e paradas" |
| 4 | `bullets` | Causa raiz e por que agora | "Equipamento de 2009 sem peças de reposição" |
| 5 | `comparacao` | Alternativas avaliadas (3 colunas): não fazer, opção A, opção B, com custo, retorno, risco | "Opção B tem melhor retorno com risco aceitável" |
| 6 | `bullets` ou `processo-fluxo` | Solução recomendada: o que será feito, escopo | "Substituir prensa e integrar ao MES" |
| 7 | `tabela` | Financeiro: investimento, economia anual, payback, VPL, TIR, cenários | "VPL de R$ 3,1 mi no cenário base" |
| 8 | `grafico` | Fluxo de caixa acumulado ao longo de 5 anos, 3 cenários | "Break-even em 20 meses; pessimista em 30" |
| 9 | `timeline-roadmap` | Plano de implantação e marcos | "Go-live em 8 meses" |
| 10 | `riscos-e-issues` | Riscos e mitigação | "Maior risco é a parada para instalação: 5 dias, mitigada com estoque" |
| 11 | `proximos-passos` | Decisão pedida, prazo, próximos passos após aprovação | "Pedimos aprovação até 30/09 para entrega em maio" |
| A | anexos | Premissas, memória de cálculo, cotações, benchmark | - |

## Dados e KPIs típicos
- Custo do problema atual (anual), quantificado
- Investimento (capex + opex de implantação), custo recorrente
- Benefícios anuais: economia, receita adicional, redução de risco
- Payback, VPL, TIR, ROI; cenários base/otimista/pessimista
- Sensibilidade às 2 ou 3 premissas mais incertas
- Cronograma e marcos

## Gráficos recomendados
- Fluxo de caixa acumulado (linha) com 3 cenários e linha zero.
- Barras: custo atual vs. custo futuro por componente.
- Tabela comparativa de alternativas.
- Tornado (sensibilidade) quando houver muitas premissas.
- Timeline de implantação.

## Variações por público
| Público | Ajustes |
|---|---|
| Estratégico | Estrutura acima; máximo 12 slides. |
| Tático (comitê de investimentos técnico) | Mais detalhe técnico na solução (slide 6 vira 2 a 3), premissas no corpo. |

## Erros comuns
- Não apresentar a alternativa "não fazer nada" e seu custo.
- Benefício sem premissa explícita (de onde vem o número).
- Só cenário otimista.
- Pedido vago ("apoio para o projeto") em vez de valor e data.
- Esconder o risco de implantação.

## Spec mínima
```json
{
  "meta": { "title": "Business case - Automação da linha 4", "audience": "estrategico", "type": "business-case", "palette": "financeira-sobria" },
  "slides": [
    { "type": "cover", "title": "Automação da linha 4", "subtitle": "Business case para aprovação" },
    { "type": "executive_summary", "headline": "Investir R$ 2,4 mi na linha 4 gera payback de 20 meses",
      "points": ["Linha 4 custa R$ 1,8 mi/ano em retrabalho e paradas", "Nova prensa reduz esse custo em 80% e libera 12% de capacidade", "VPL de R$ 3,1 mi em 5 anos no cenário base"],
      "ask": "Aprovar R$ 2,4 mi até 30/09" },
    { "type": "comparison", "title": "Opção B tem melhor retorno com risco aceitável",
      "options": [
        {"name": "Não fazer", "points": ["Custo: R$ 0", "Perda: R$ 1,8 mi/ano", "Risco: parada total em 2 anos"]},
        {"name": "A: Reforma", "points": ["Custo: R$ 0,9 mi", "Economia: R$ 0,7 mi/ano", "Risco: sem garantia de peças"]},
        {"name": "B: Prensa nova", "points": ["Custo: R$ 2,4 mi", "Economia: R$ 1,45 mi/ano", "Risco: 5 dias de parada"]}
      ] },
    { "type": "chart", "title": "Break-even em 20 meses; pessimista em 30", "chart_type": "line",
      "categories": ["Ano 0","Ano 1","Ano 2","Ano 3","Ano 4","Ano 5"],
      "series": [{"name": "Base", "values": [-2.4,-0.95,0.5,1.95,3.4,4.85]}, {"name": "Pessimista", "values": [-2.4,-1.4,-0.4,0.6,1.6,2.6]}, {"name": "Otimista", "values": [-2.4,-0.6,1.2,3.0,4.8,6.6]}],
      "source": "Memória de cálculo em anexo; taxa de desconto 12% a.a." },
    { "type": "table", "title": "Maior risco é a parada para instalação, mitigada com estoque",
      "columns": ["Risco", "Prob.", "Impacto", "Mitigação"],
      "rows": [["Parada de 5 dias", "Alta", "Médio", "Estoque de 7 dias antes da instalação"], ["Atraso de entrega do fornecedor", "Média", "Médio", "Multa contratual + janela alternativa"]] },
    { "type": "action_plan", "title": "Pedimos aprovação até 30/09 para entrega em maio",
      "actions": [{"action": "Aprovar investimento", "owner": "Diretoria", "due": "30/09", "status": "warning"}, {"action": "Emitir pedido de compra", "owner": "Compras", "due": "15/10", "status": "neutral"}] },
    { "type": "closing", "title": "Obrigado", "subtitle": "Anexo: premissas e memória de cálculo" }
  ]
}
```
