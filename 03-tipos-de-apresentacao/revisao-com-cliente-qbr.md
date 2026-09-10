# Revisão periódica com cliente (QBR) e saúde da carteira

## Objetivo
Duas faces do mesmo tema. **QBR (quarterly business review)**: prestar contas ao cliente do valor entregue no período, alinhar prioridades e expandir a relação. **Saúde da carteira** (visão interna de customer success): mostrar à liderança a situação da base de clientes, riscos de churn e oportunidades de expansão.

| Variante | Público | Exposição | Slides |
|---|---|---|---|
| QBR com o cliente | Externo (decisor e usuários no cliente) | Externo: só dados daquele cliente, sem comparação nominal com outros | 8 a 12 |
| Saúde da carteira | Tático/estratégico interno (CS, comercial, diretoria) | Interáreas | 8 a 12 |

## Variante A: QBR com o cliente (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` (co-branded) | Cliente, período, participantes | "Revisão trimestral: <Cliente> 3T26" |
| 2 | `executive_summary` | Valor entregue em 1 frase, 3 resultados, próximos passos | "Redução de 18% no custo de energia no trimestre, acima da meta de 15%" |
| 3 | `kpi_row` | Indicadores acordados no contrato (SLA, resultado, uso, adoção) vs. meta | "Todos os SLAs cumpridos; adoção em 84%" |
| 4 | `chart` linha | Resultado principal ao longo do tempo desde o início | "Economia acumulada de R$ 420 mil" |
| 5 | `table` | Entregas do período: o que foi combinado, o que foi entregue, status | "9 de 10 entregas concluídas" |
| 6 | `two_column` | O que funcionou / o que precisa melhorar (inclusive do nosso lado) | "Integração foi o ponto de atrito" |
| 7 | `bullets` ou `table` | Chamados e suporte: volume, tempo de resposta, pendências | "Tempo de resposta médio de 2 h" |
| 8 | `takeaways` | Prioridades do próximo trimestre acordadas com o cliente | "Três prioridades para o 4T" |
| 9 | `bullets` | Oportunidades: novos módulos, unidades, casos de uso (sem pressão de venda) | "Duas oportunidades para avaliar" |
| 10 | `action_plan` | Próximos passos dos dois lados, com dono | "Próximos passos" |
| 11 | `closing` | Contatos, próxima revisão | - |

## Variante B: saúde da carteira (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Período | "Saúde da carteira 3T26" |
| 2 | `kpi_row` | Clientes ativos, receita recorrente, churn (nº e R$), NRR/expansão, NPS, health score médio | "Churn de 2,1% no trimestre; expansão compensa" |
| 3 | `progress_bars` ou `chart` | Distribuição por health score (verde/amarelo/vermelho) e receita em risco | "12 clientes no vermelho concentram R$ 1,8 mi de receita anual" |
| 4 | `table` | Contas em risco: cliente (ou código, conforme exposição), receita, motivo, ação, dono | "Cinco contas exigem ação da diretoria" |
| 5 | `pareto` | Motivos de churn e de risco | "Adoção baixa e troca de patrocinador explicam 65% dos riscos" |
| 6 | `chart` | Evolução de churn e expansão por trimestre | "Expansão supera churn pelo segundo trimestre" |
| 7 | `table` | Oportunidades de expansão: conta, produto, valor, probabilidade | "R$ 2,4 mi em expansão qualificada" |
| 8 | `action_plan` | Plano de retenção e expansão | "Seis ações para o trimestre" |

## Dados e KPIs típicos
Contrato: SLA, uso/adoção, resultado acordado, entregas. Carteira: clientes ativos, MRR/ARR, churn (logo e receita), NRR, health score, NPS, tempo de resposta e backlog de chamados, oportunidades de expansão.

## Regras específicas
- QBR: **começa pelo valor entregue ao cliente**, não pela lista de atividades. Reconhecer problemas do próprio lado antes que o cliente aponte.
- QBR: nada de outros clientes (nem "um cliente do mesmo setor" com detalhes identificáveis) sem autorização.
- Carteira interna: contas nominais só quando o público age sobre elas; em deck amplo, códigos.
- Health score: explicar a composição (uso, suporte, relacionamento, financeiro) uma vez, no anexo.

## Erros comuns
- QBR que é relatório de atividades ("fizemos 40 reuniões").
- Esconder o atrito; o cliente já sabe.
- Oportunidades apresentadas como pitch de venda no meio da prestação de contas.
- Carteira sem receita em risco em R$; só contagem de clientes.

## Spec mínima (variante A)
```json
{
  "meta": {"title": "Revisão trimestral 3T26", "audience": "externo", "type": "revisao-com-cliente-qbr", "palette": "vendas-energetica", "exposure": "externo", "brand": "Empresa Exemplo", "deck_name": "Revisão trimestral", "date": "out/2026", "confidentiality": "Confidencial - preparado para Cliente Exemplo"},
  "slides": [
    {"type": "cover", "kicker": "Cliente Exemplo", "title": "Revisão trimestral 3T26", "subtitle": "Resultados, entregas e prioridades do próximo trimestre", "thesis": "Redução de 18% no custo de energia no trimestre, acima da meta de 15% acordada."},
    {"type": "kpi_row", "kicker": "Indicadores do contrato", "title": "Todos os SLAs cumpridos; adoção em 84%", "kpis": [{"label": "Economia de energia", "value": "18%", "delta": "meta 15%", "status": "success"}, {"label": "Disponibilidade", "value": "99,7%", "delta": "SLA 99,5%", "status": "success"}, {"label": "Tempo de resposta", "value": "2 h", "delta": "SLA 4 h", "status": "success"}, {"label": "Adoção (usuários ativos)", "value": "84%", "delta": "meta 80%", "status": "success"}], "source": "Plataforma, jul a set/26"},
    {"type": "chart", "kicker": "Resultado", "title": "Economia acumulada de R$ 420 mil desde o início", "subtitle": "R$ mil por mês", "chart_type": "column", "categories": ["abr", "mai", "jun", "jul", "ago", "set"], "series": [{"name": "Economia", "values": [38, 52, 61, 74, 92, 103]}], "source": "Faturas de energia e medição da plataforma"},
    {"type": "two_column", "kicker": "Balanço", "title": "Integração com o MES foi o ponto de atrito do trimestre", "left": {"heading": "Funcionou", "bullets": ["Alertas de consumo anômalo evitaram 3 paradas", "Treinamento dos turnos concluído", "Relatório mensal automatizado"], "status": "success"}, "right": {"heading": "Precisa melhorar", "bullets": ["Integração com o MES atrasou 3 semanas (nossa responsabilidade)", "Dois chamados acima do SLA em agosto", "Painel de turno ainda manual"], "status": "danger"}},
    {"type": "takeaways", "kicker": "Próximo trimestre", "title": "Três prioridades para o 4T", "items": [{"heading": "Fechar a integração", "text": "MES integrado até 15/11, com validação conjunta."}, {"heading": "Painel de turno automático", "text": "Substituir o painel manual pela tela de gestão à vista."}, {"heading": "Estender para a planta 2", "text": "Avaliar piloto em janeiro, se o cliente tiver interesse."}]},
    {"type": "action_plan", "kicker": "Próximos passos", "title": "Próximos passos dos dois lados", "actions": [{"action": "Concluir integração MES", "owner": "Nós", "due": "15/11", "status": "warning"}, {"action": "Liberar acesso ao MES de homologação", "owner": "Cliente (TI)", "due": "20/10", "status": "neutral"}, {"action": "Definir escopo do piloto na planta 2", "owner": "Ambos", "due": "dez/26", "status": "neutral"}]},
    {"type": "closing", "title": "Próxima revisão: janeiro/27", "subtitle": "gerente.conta@empresa-exemplo.com"}
  ]
}
```
