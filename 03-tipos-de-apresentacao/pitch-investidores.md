# Pitch para investidores

## Objetivo
Convencer investidores a entrar em uma rodada: problema relevante, solução com tração, mercado grande, modelo de negócio, time capaz e pedido claro.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Externo (investidores anjo, fundos, corporate venture) |
| Frequência | Pontual (por rodada) |
| Duração | 5 a 20 min (versão curta: 3 min) |
| Tamanho | 10 a 14 slides |
| Estrutura narrativa | Problema, solução, prova, pedido |
| Paleta | Marca própria; fallback `vendas-energetica` |

## Estrutura recomendada (sequência clássica)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | Nome, tagline de uma linha, rodada | "Fabrisense - visibilidade industrial em tempo real" |
| 2 | `bullets` ou `big_number` | Problema: quem sofre, quanto custa, por que ainda não foi resolvido | "Indústrias médias perdem 8% de capacidade por falta de dados" |
| 3 | `bullets` ou `processo-fluxo` | Solução: o que é, em uma frase + como funciona | "Sensores plug-and-play + plataforma em 1 semana" |
| 4 | `big_number` ou `grafico` | Mercado: TAM/SAM/SOM ou nº de clientes potenciais × ticket | "R$ 4 bi de mercado endereçável no Brasil" |
| 5 | `bullets` | Modelo de negócio: como ganha dinheiro, ticket, margem | "Assinatura de R$ 6,5 mil/mês por planta com 78% de margem" |
| 6 | `grafico` | Tração: receita/clientes/uso mês a mês | "MRR cresceu 4x em 12 meses" |
| 7 | `comparacao` ou `matriz-2x2` | Concorrência e diferencial | "Únicos com integração nativa a MES legados" |
| 8 | `bullets` | Go-to-market: canais, CAC, LTV | "LTV/CAC de 5,2 via canal de integradores" |
| 9 | `tabela` ou `grafico` | Projeções 3 a 5 anos: receita, clientes, EBITDA | "R$ 30 mi de receita em 2029" |
| 10 | `bullets` (com fotos) | Time: fundadores, experiência relevante, advisors | "Time com 30 anos em automação industrial" |
| 11 | `bullets` | O pedido: valor, uso dos recursos (%), marcos que a rodada compra | "Captando R$ 5 mi para chegar a 100 plantas em 18 meses" |
| 12 | `encerramento` | Contato | - |

## Dados típicos
- Tamanho de mercado com fonte e método (top-down e bottom-up)
- Tração: MRR/ARR, clientes, crescimento mensal, churn, NPS
- Unit economics: CAC, LTV, payback de CAC, margem bruta
- Projeções com premissas explícitas
- Rodada: valor, valuation (se for revelar), uso dos recursos, marcos

## Gráficos recomendados
- Linha ou barras de crescimento (MRR, clientes) com 12 ou mais pontos.
- Número grande para mercado e tração.
- Matriz 2×2 de posicionamento competitivo.
- Barras de uso dos recursos (ou tabela).
- Evitar: tabelas financeiras densas, gráficos de mercado sem fonte, pizza de TAM/SAM/SOM (usar círculos ou números).

## Variações
| Contexto | Ajustes |
|---|---|
| Pitch de 3 min (demo day) | 6 slides: problema, solução, tração, mercado, time, pedido. Uma frase por slide. |
| Deck enviado por e-mail | Mais texto por slide (lido sem apresentador), anexo com financeiro detalhado. |
| Investidor estratégico (corporate) | Adicionar sinergias com o investidor e roadmap de integração. |

## Erros comuns
- Solução antes do problema.
- Mercado inflado sem bottom-up.
- Tração vaga ("vários clientes interessados").
- Pedido sem uso dos recursos.
- Time sem relação com o problema.
- Mais de 15 slides.

## Spec mínima
```json
{
  "meta": { "title": "Pitch - Série A", "audience": "externo", "type": "pitch-investidores", "palette": "vendas-energetica" },
  "slides": [
    { "type": "cover", "title": "Fabrisense", "subtitle": "Visibilidade industrial em tempo real | Série A" },
    { "type": "big_number", "title": "Indústrias médias perdem 8% de capacidade por falta de dados", "value": "8%", "label": "de capacidade perdida", "context": "Estudo com 120 plantas, 2025" },
    { "type": "process", "title": "Sensores plug-and-play + plataforma em 1 semana", "steps": ["Instala sensores", "Conecta ao MES", "Vê tudo em tempo real", "Recebe alertas"] },
    { "type": "big_number", "title": "R$ 4 bi de mercado endereçável no Brasil", "value": "R$ 4 bi", "label": "SAM", "context": "12 mil plantas × R$ 78 mil/ano (bottom-up)" },
    { "type": "chart", "title": "MRR cresceu 4x em 12 meses", "chart_type": "column",
      "categories": ["set","out","nov","dez","jan","fev","mar","abr","mai","jun","jul","ago"],
      "series": [{"name": "MRR (R$ mil)", "values": [50,58,70,82,95,110,128,145,160,175,190,205]}], "source": "Dados internos" },
    { "type": "bullets", "title": "Captando R$ 5 mi para chegar a 100 plantas em 18 meses",
      "bullets": ["40% produto e engenharia", "35% vendas e canais", "15% operações e suporte", "10% reserva"] },
    { "type": "closing", "title": "Vamos conversar", "subtitle": "fundadores@fabrisense.com" }
  ]
}
```
