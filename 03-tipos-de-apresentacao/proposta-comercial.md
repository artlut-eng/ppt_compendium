# Proposta comercial

## Objetivo
Convencer um cliente a contratar: mostrar entendimento da dor, a solução, o escopo, evidências de resultado, cronograma, investimento e o próximo passo.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Externo (decisor e influenciadores no cliente) |
| Frequência | Pontual |
| Duração | 20 a 40 min |
| Tamanho | 10 a 15 slides + anexo (escopo detalhado, termos) |
| Estrutura narrativa | Problema, solução, prova, chamada |
| Paleta | Marca própria; fallback `vendas-energetica` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | Nome do cliente + nome da proposta, data, validade | "Proposta para <Cliente>: monitoramento de energia" |
| 2 | `sumario-executivo` | O que entendemos, o que propomos, resultado esperado, investimento | "Reduzir 15% do custo de energia em 12 meses com investimento de R$ 180 mil" |
| 3 | `bullets` | Seu desafio (o que ouvimos do cliente, com números dele) | "Você gasta R$ 2,1 mi/ano em energia sem visibilidade por máquina" |
| 4 | `bullets` ou `processo-fluxo` | Nossa solução: o que é, como funciona | "Sensores + plataforma + alertas em 3 semanas de implantação" |
| 5 | `comparacao` | Antes vs. depois, ou o que muda para o cliente | "De fatura mensal para custo por máquina em tempo real" |
| 6 | `tabela` | Escopo: entregas, quantidades, o que está incluído / excluído | "Escopo: 40 sensores, plataforma, treinamento" |
| 7 | `grafico` ou `citacao-destaque` | Prova: caso similar com resultado medido, depoimento | "Cliente do mesmo setor reduziu 18% em 9 meses" |
| 8 | `timeline-roadmap` | Cronograma de implantação | "Operando em 3 semanas" |
| 9 | `tabela` | Investimento: opções/planos, valores, condições | "Duas opções: R$ 180 mil ou R$ 6,5 mil/mês" |
| 10 | `bullets` | Por que nós (diferenciais, credenciais) | "Única solução com integração nativa ao seu MES" |
| 11 | `proximos-passos` | Próximos passos, validade, contato | "Assinatura até 30/09 garante início em outubro" |
| A | anexos | Termos, SLA, especificações técnicas, referências | - |

## Dados típicos
- Números do cliente (dor quantificada) obtidos na descoberta
- Resultado esperado (faixa, com premissas)
- Escopo em quantidades
- Investimento e condições (opções, prazo, forma de pagamento)
- Casos de referência com métricas
- Cronograma com marcos

## Gráficos recomendados
- Antes/depois (2 colunas ou barras lado a lado).
- Número grande com resultado esperado.
- Timeline curta.
- Tabela de opções de investimento (2 ou 3 colunas, recomendada destacada).
- Evitar: organograma da própria empresa, lista de todos os produtos, slides sobre a história da empresa antes do slide 10.

## Erros comuns
- Começar com "quem somos".
- Proposta genérica sem o nome e os números do cliente.
- Escopo ambíguo (sem exclusões explícitas).
- Preço sem opções ou escondido no anexo.
- Sem validade e sem próximo passo com data.

## Spec mínima
```json
{
  "meta": { "title": "Proposta - Monitoramento de energia", "audience": "externo", "type": "proposta-comercial", "palette": "vendas-energetica", "date": "2026-09-01" },
  "slides": [
    { "type": "cover", "title": "Proposta para Metalúrgica XYZ", "subtitle": "Monitoramento de energia por máquina - válida até 30/09/2026" },
    { "type": "executive_summary", "headline": "Reduzir 15% do custo de energia em 12 meses",
      "points": ["Hoje: R$ 2,1 mi/ano sem visibilidade por máquina", "Solução: 40 sensores + plataforma + alertas, implantação em 3 semanas", "Resultado esperado: R$ 300 mil/ano de economia"],
      "ask": "Investimento de R$ 180 mil ou R$ 6,5 mil/mês" },
    { "type": "big_number", "title": "Você gasta R$ 2,1 mi por ano em energia sem saber onde", "value": "R$ 2,1 mi", "label": "custo anual de energia", "context": "Fatura única, sem rateio por máquina ou turno" },
    { "type": "process", "title": "Sensores, plataforma e alertas em 3 semanas", "steps": ["Instalação de 40 sensores", "Integração com o MES", "Painéis por máquina e turno", "Alertas de consumo anômalo"] },
    { "type": "table", "title": "Escopo: 40 sensores, plataforma, treinamento",
      "columns": ["Item", "Quantidade", "Incluído"], "rows": [["Sensores de energia", "40", "Sim"], ["Plataforma (licença anual)", "1", "Sim"], ["Treinamento", "8 h", "Sim"], ["Infraestrutura de rede", "-", "Não (cliente)"]] },
    { "type": "timeline", "title": "Operando em 3 semanas", "milestones": [{"date": "Sem 1", "label": "Instalação", "status": "neutral"}, {"date": "Sem 2", "label": "Integração", "status": "neutral"}, {"date": "Sem 3", "label": "Treinamento e go-live", "status": "neutral"}] },
    { "type": "comparison", "title": "Duas opções de investimento",
      "options": [{"name": "Compra", "points": ["R$ 180 mil", "Licença anual R$ 24 mil a partir do ano 2", "Suporte incluído 12 meses"]}, {"name": "Assinatura (recomendada)", "points": ["R$ 6,5 mil/mês", "Contrato de 24 meses", "Suporte e atualizações incluídos"]}] },
    { "type": "action_plan", "title": "Assinatura até 30/09 garante início em outubro",
      "actions": [{"action": "Visita técnica de validação", "owner": "Nós", "due": "10/09", "status": "neutral"}, {"action": "Assinatura do contrato", "owner": "Cliente", "due": "30/09", "status": "neutral"}] },
    { "type": "closing", "title": "Obrigado", "subtitle": "contato@empresa.com | (11) 99999-9999" }
  ]
}
```
