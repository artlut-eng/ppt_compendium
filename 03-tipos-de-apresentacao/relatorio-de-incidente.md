# Relatório de incidente (operacional, TI, qualidade, segurança)

## Objetivo
Registrar e comunicar um incidente relevante (parada de sistema, acidente, desvio de qualidade, falha de segurança da informação, incidente ambiental): o que aconteceu, impacto, linha do tempo de detecção e resposta, causa raiz, ações corretivas e preventivas, e o que muda. Difere de `licoes-aprendidas` (fim de projeto) pelo foco em um evento único e na resposta.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (gestores das áreas envolvidas) e estratégico quando o impacto é alto; versão externa para cliente/regulador quando exigido |
| Frequência | Por evento; prazo típico de 5 a 10 dias após o incidente |
| Duração | 15 a 30 min |
| Tamanho | 6 a 10 slides |
| Estrutura narrativa | Resumo, impacto, linha do tempo, causa, resposta, ações, mudanças |
| Paleta | `corporativa-azul` |
| Exposição | Interáreas; **sem culpa individual**; versão externa filtrada |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Incidente, data, classificação, status | "Incidente: indisponibilidade do portal B2B em 12/09" |
| 2 | `executive_summary` | O que aconteceu em 1 frase, impacto, causa raiz, status; pedido | "Portal indisponível por 3h40 por falha de certificado; sem perda de dados" |
| 3 | `kpi_row` | Duração, impacto (clientes, pedidos, R$, pessoas), tempo de detecção, tempo de resposta, severidade | "3h40 de indisponibilidade afetaram 210 clientes" |
| 4 | `timeline` | Linha do tempo: início, detecção, escalonamento, contenção, resolução, comunicação | "Detecção levou 50 min; contenção, 2h" |
| 5 | `process` ou `bullets` | Cadeia de causas: causa imediata → contribuintes → causa raiz (5 porquês / Ishikawa) | "Causa raiz: renovação de certificado sem dono nem alerta" |
| 6 | `two_column` | O que funcionou / o que falhou na resposta | "Comunicação ao cliente funcionou; monitoramento falhou" |
| 7 | `action_plan` | Ações corretivas (imediatas) e preventivas (estruturais), dono, prazo, status | "Cinco ações, três preventivas" |
| 8 | `takeaways` | O que muda: processo, monitoramento, responsabilidades | "Três mudanças permanentes" |
| 9 | `closing` | Encerramento do incidente, próxima verificação | - |

## Dados típicos
Início, detecção, contenção e resolução (horários); duração; impacto quantificado (clientes, transações, produção, R$, pessoas, ambiente); severidade; causa raiz e contribuintes; ações com status; recorrência (evento similar anterior?).

## Regras específicas
- **Fatos com hora**, inferências rotuladas ("provável causa" até a confirmação).
- **Sem nomes** de pessoas envolvidas; papéis e funções ("o operador do turno", "o time de infraestrutura").
- Causa raiz é de processo ou sistema; "erro humano" exige perguntar por que o sistema permitiu.
- Ações preventivas obrigatórias, não só corretivas; cada uma com dono e prazo.
- Versão externa (cliente, regulador): impacto para ele, ações, prazo; sem detalhes internos irrelevantes.
- Prazo do relatório definido pela política (ex.: preliminar em 48 h, final em 10 dias).

## Variações
| Tipo de incidente | Ajustes |
|---|---|
| TI (indisponibilidade, segurança da informação) | Linha do tempo em minutos, métricas MTTD/MTTR, escopo de dados afetados, notificação legal quando aplicável |
| Segurança do trabalho (acidente) | Árvore de causas, condições e atos inseguros, ligação com `indicadores-de-seguranca`; nunca nome do acidentado |
| Qualidade (desvio, recall) | Lotes afetados, avaliação de impacto, contenção no mercado, CAPA |
| Ambiental | Volume, área, órgão notificado, remediação |

## Erros comuns
- Relatório que para na causa imediata ("certificado expirou").
- Culpa nominal.
- Só ações corretivas.
- Linha do tempo sem horários (impossível medir detecção e resposta).

## Spec mínima
```json
{
  "meta": {"title": "Incidente: indisponibilidade do portal B2B", "audience": "tatico", "type": "relatorio-de-incidente", "palette": "corporativa-azul", "exposure": "interareas", "brand": "Empresa Exemplo", "deck_name": "Relatório de incidente", "date": "18/09/2026"},
  "slides": [
    {"type": "cover", "kicker": "Relatório final de incidente", "title": "Indisponibilidade do portal B2B em 12/09", "subtitle": "Severidade 2 | relatório final (6 dias após o evento)", "thesis": "Portal indisponível por 3h40 por certificado expirado sem dono nem alerta; sem perda de dados; três mudanças permanentes."},
    {"type": "kpi_row", "kicker": "Impacto", "title": "3h40 de indisponibilidade afetaram 210 clientes", "kpis": [{"label": "Duração", "value": "3h40", "delta": "09:10 a 12:50", "status": "danger"}, {"label": "Clientes afetados", "value": "210", "delta": "38% da base ativa", "status": "danger"}, {"label": "Pedidos represados", "value": "126", "delta": "todos processados até 14h", "status": "warning"}, {"label": "Perda de dados", "value": "Nenhuma", "delta": "verificado", "status": "success"}, {"label": "Tempo de detecção", "value": "50 min", "delta": "meta 10 min", "status": "danger"}], "source": "Logs do portal e registro do incidente"},
    {"type": "timeline", "kicker": "Linha do tempo", "title": "Detecção levou 50 min; contenção, 2 h", "milestones": [{"date": "09:10", "label": "Certificado expira; portal fora", "status": "danger"}, {"date": "10:00", "label": "Cliente reporta; chamado aberto", "status": "warning"}, {"date": "10:20", "label": "Escalonado para infraestrutura", "status": "warning"}, {"date": "12:10", "label": "Novo certificado emitido", "status": "success"}, {"date": "12:50", "label": "Portal restabelecido", "status": "success"}, {"date": "14:00", "label": "Pedidos represados processados", "status": "success"}], "today_index": 5},
    {"type": "process", "kicker": "Causas", "title": "Causa raiz: renovação de certificado sem dono nem alerta", "steps": ["Sintoma", "Causa imediata", "Contribuinte", "Causa raiz"], "descriptions": ["Portal retorna erro de segurança", "Certificado TLS expirado às 09:10", "Monitoramento não cobre validade de certificados", "Inventário de certificados sem responsável e sem rotina de renovação"], "current_index": 3},
    {"type": "two_column", "kicker": "Resposta", "title": "Comunicação ao cliente funcionou; monitoramento falhou", "left": {"heading": "Funcionou", "bullets": ["Comunicado aos clientes em 25 min após detecção", "Pedidos represados processados sem retrabalho", "Registro completo do incidente"], "status": "success"}, "right": {"heading": "Falhou", "bullets": ["Detecção por cliente, não por monitoramento", "Escalonamento levou 20 min sem dono claro", "Emissão do certificado dependeu de uma pessoa"], "status": "danger"}},
    {"type": "action_plan", "kicker": "Ações", "title": "Cinco ações, três preventivas", "actions": [{"action": "Renovar certificados com menos de 60 dias de validade", "owner": "Infraestrutura", "due": "20/09", "status": "success"}, {"action": "Alerta automático de validade (30 dias)", "owner": "Infraestrutura", "due": "30/09", "status": "warning"}, {"action": "Inventário de certificados com dono por sistema", "owner": "TI", "due": "15/10", "status": "neutral"}, {"action": "Rotina de escalonamento de severidade 1 e 2 revisada", "owner": "Suporte", "due": "10/10", "status": "neutral"}, {"action": "Segundo emissor autorizado (backup)", "owner": "TI", "due": "31/10", "status": "neutral"}], "decision": "Aprovar a ferramenta de monitoramento de certificados (R$ 12 mil/ano)"},
    {"type": "takeaways", "kicker": "O que muda", "title": "Três mudanças permanentes", "items": [{"heading": "Monitoramento", "text": "Validade de certificados entra no painel de disponibilidade com alerta de 30 dias."}, {"heading": "Responsabilidade", "text": "Cada certificado tem dono e data de renovação no inventário."}, {"heading": "Resposta", "text": "Severidade 2 escala em 10 minutos para o plantão de infraestrutura."}]}
  ]
}
```
