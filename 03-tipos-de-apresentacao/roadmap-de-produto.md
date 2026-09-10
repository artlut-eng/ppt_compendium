# Roadmap de produto ou tecnologia

## Objetivo
Alinhar liderança, áreas internas e, em versão filtrada, clientes sobre o que será construído, por quê, em que ordem e com que confiança: temas e objetivos, entregas por horizonte, dependências, capacidade e o que ficou de fora.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico e tático (diretoria, comercial, operações); versão externa para clientes |
| Frequência | Trimestral (revisão), anual (planejamento) |
| Duração | 30 a 45 min |
| Tamanho | 8 a 14 slides |
| Estrutura narrativa | Objetivos, o que aprendemos, o que vem (por horizonte), o que não vem, capacidade, pedidos |
| Paleta | `tecnologia` ou `corporativa-azul` |
| Exposição | Interáreas; versão externa sem datas firmes nem itens incertos |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Produto/plataforma, horizonte | "Roadmap 2027 do produto X" |
| 2 | `executive_summary` | Objetivos do ano, 3 apostas, pedido (capacidade, orçamento) | "Três apostas para dobrar a adoção em 2027" |
| 3 | `kpi_row` | Onde estamos: usuários ativos, adoção, NPS, entregas do último período, dívida técnica | "Adoção em 64%, NPS 41" |
| 4 | `takeaways` | Aprendizados do período anterior (o que entregamos, o que errou) | "Três aprendizados do 2S26" |
| 5 | `comparison` | Temas estratégicos (3 colunas): objetivo, resultado esperado, indicador | "Três temas: retenção, expansão, eficiência" |
| 6 | `gantt` | Roadmap por horizonte: agora (comprometido), próximo (planejado), depois (explorando) | "Agora, próximo, depois" |
| 7 | `table` | Iniciativas do horizonte "agora": objetivo, indicador, dependência, confiança | "Seis iniciativas comprometidas para o 1T" |
| 8 | `bullets` | O que não faremos (e por quê) | "Cinco pedidos que ficam fora deste ciclo" |
| 9 | `progress_bars` | Capacidade: alocação por tema (%), dívida técnica reservada, suporte | "20% da capacidade reservada para dívida técnica" |
| 10 | `table` | Riscos e dependências (integrações, terceiros, regulatório) | "Duas dependências externas críticas" |
| 11 | `action_plan` | Decisões e próximos passos | "Aprovar a alocação e o congelamento de escopo do 1T" |

## Dados típicos
Usuários/clientes ativos, adoção por funcionalidade, NPS/CSAT, tickets por tema, entregas vs. planejado do período anterior, velocidade/capacidade da equipe, dívida técnica, pedidos de clientes por tema (contagem e receita associada).

## Regras específicas
- **Horizontes, não datas**, quanto mais longe: "agora" com trimestre, "próximo" com semestre, "depois" sem data.
- Confiança explícita por item (alta / média / baixa).
- O slide "o que não faremos" é obrigatório; evita a pergunta na reunião seguinte.
- Versão externa: só temas e o horizonte "agora"; nada que possa virar promessa contratual; sem datas firmes.
- Ligar cada tema a um indicador de negócio, não a uma lista de funcionalidades.

## Variações
| Contexto | Ajustes |
|---|---|
| Roadmap de tecnologia / infraestrutura | Temas: confiabilidade, segurança, custo, modernização; indicadores técnicos (disponibilidade, MTTR, custo por transação) |
| Versão para clientes | 5 slides: temas, o que já saiu, o que vem em breve, como participar (beta), contato |
| Revisão trimestral | Foco em entregue vs. planejado, mudanças de prioridade e por quê |

## Erros comuns
- Lista de funcionalidades com datas exatas a 12 meses.
- Roadmap 100% alocado, sem espaço para suporte e dívida técnica.
- Sem "não faremos".
- Versão externa igual à interna.

## Spec mínima
```json
{
  "meta": {"title": "Roadmap 2027 do produto X", "audience": "estrategico", "type": "roadmap-de-produto", "palette": "tecnologia", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "Roadmap de produto", "date": "dez/2026"},
  "slides": [
    {"type": "cover", "kicker": "Produto X", "title": "Roadmap 2027", "subtitle": "Temas, horizontes, capacidade e o que fica de fora", "thesis": "Três apostas (retenção, expansão, eficiência) para dobrar a adoção, com 20% da capacidade reservada para dívida técnica."},
    {"type": "kpi_row", "kicker": "Onde estamos", "title": "Adoção em 64%, NPS 41", "kpis": [{"label": "Clientes ativos", "value": "312", "delta": "+18% no ano", "status": "success"}, {"label": "Adoção (funcionalidades-chave)", "value": "64%", "delta": "meta 80%", "status": "warning"}, {"label": "NPS", "value": "41", "delta": "+9", "status": "success"}, {"label": "Entregas 2S26", "value": "14 de 18", "delta": "78% do planejado", "status": "warning"}, {"label": "Dívida técnica", "value": "Alta", "delta": "3 sistemas legados", "status": "danger"}], "source": "Analytics do produto e backlog, nov/26"},
    {"type": "comparison", "kicker": "Temas", "title": "Três temas: retenção, expansão, eficiência", "options": [{"name": "Retenção", "points": ["Objetivo: reduzir churn de 8% para 5%", "Onboarding guiado e alertas proativos", "Indicador: churn e adoção em 90 dias"]}, {"name": "Expansão", "points": ["Objetivo: 30% da receita em novos módulos", "Módulo de energia e integrações ERP", "Indicador: receita de expansão"], "recommended": true}, {"name": "Eficiência", "points": ["Objetivo: -25% no custo por cliente", "Migração dos 3 legados", "Indicador: custo de infra por cliente"]}]},
    {"type": "gantt", "kicker": "Horizontes", "title": "Agora comprometido, próximo planejado, depois em exploração", "periods": ["1T27", "2T27", "3T27", "4T27"], "tasks": [{"name": "Onboarding guiado", "start": 0, "end": 1, "status": "success", "label": "alta confiança"}, {"name": "Alertas proativos", "start": 0.5, "end": 1.5, "status": "success"}, {"name": "Módulo de energia", "start": 1, "end": 2.5, "status": "warning", "label": "média"}, {"name": "Integração ERP (2 sistemas)", "start": 1.5, "end": 3}, {"name": "Migração legado 1", "start": 0, "end": 2}, {"name": "App mobile", "start": 3, "end": 4, "label": "explorando"}], "today": 0, "source": "Planejamento de produto, dez/26"},
    {"type": "bullets", "kicker": "Fora do ciclo", "title": "Cinco pedidos que ficam fora deste ciclo", "bullets": ["**Relatórios personalizados por cliente:** baixo volume de pedidos (12) e alto custo de manutenção", "**Integração com marketplace Y:** parceiro sem API estável", "**Versão em espanhol:** depende da decisão de expansão internacional (2028)", "**Modo offline:** exige rearquitetura; reavaliar após migração dos legados", "**Chat interno:** existem ferramentas de mercado melhores"], "callout": {"kind": "conclusion", "label": "Regra", "text": "Pedidos fora do ciclo voltam à avaliação na revisão trimestral com volume e receita associada."}},
    {"type": "progress_bars", "kicker": "Capacidade", "title": "20% da capacidade reservada para dívida técnica", "items": [{"label": "Retenção", "value": 30, "display": "30%"}, {"label": "Expansão", "value": 30, "display": "30%"}, {"label": "Eficiência / dívida técnica", "value": 20, "display": "20%", "status": "warning"}, {"label": "Suporte e correções", "value": 15, "display": "15%"}, {"label": "Exploração", "value": 5, "display": "5%"}], "source": "Alocação planejada de 6 squads"},
    {"type": "action_plan", "kicker": "Decisões", "title": "Aprovar a alocação e o congelamento de escopo do 1T", "actions": [{"action": "Aprovar alocação por tema", "owner": "Diretoria", "due": "15/12", "status": "warning"}, {"action": "Congelar escopo do 1T27", "owner": "Produto", "due": "20/12", "status": "neutral"}, {"action": "Contratar 2 engenheiros para integrações", "owner": "RH + Engenharia", "due": "1T27", "status": "neutral"}, {"action": "Versão externa do roadmap para clientes", "owner": "Produto + Marketing", "due": "jan/27", "status": "neutral"}]}
  ]
}
```
