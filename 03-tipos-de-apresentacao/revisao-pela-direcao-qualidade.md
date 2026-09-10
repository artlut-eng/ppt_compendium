# Revisão pela direção do sistema de qualidade

## Objetivo
Reunião formal (exigida por normas como ISO 9001, IATF, ISO 13485, BPF) em que a direção avalia o desempenho do sistema de gestão da qualidade: indicadores, não conformidades, auditorias, reclamações, fornecedores, riscos e oportunidades, e decide recursos e melhorias. O deck vira registro do sistema.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico e tático (direção, gestores, representante da qualidade) |
| Frequência | Anual ou semestral (mínimo normativo), com pauta fixa |
| Duração | 60 a 120 min |
| Tamanho | 14 a 20 slides |
| Estrutura narrativa | Pauta normativa (entradas → análise → saídas) |
| Paleta | `corporativa-azul` |
| Exposição | Interno; auditável (o deck é evidência) |

## Estrutura recomendada (entradas e saídas da revisão)
| # | Modelo | Conteúdo (entrada normativa) | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Período, data, participantes | "Revisão pela direção 2026" |
| 2 | `agenda` | Pauta conforme a norma | - |
| 3 | `executive_summary` | Situação do sistema em 1 frase, 3 pontos, decisões | "Sistema eficaz; reclamações de cliente e fornecedor X exigem ação" |
| 4 | `action_plan` | Status das ações da revisão anterior | "8 de 10 ações concluídas" |
| 5 | `kpi_row` | Objetivos da qualidade vs. meta (refugo, retrabalho, reclamações, OTIF, custo da não qualidade) | "Quatro de cinco objetivos atingidos" |
| 6 | `chart` linha | Tendência do indicador principal (PPM, reclamações por mil) | "Reclamações caem 30% no ano" |
| 7 | `pareto` | Não conformidades internas por causa/processo | "Dois processos concentram 65% das NCs" |
| 8 | `table` | Reclamações de clientes: volume, tempo de resposta, recorrentes, ações | "Três reclamações recorrentes no produto B" |
| 9 | `table` | Auditorias internas e externas: realizadas, achados por grau, ações abertas | "Auditoria externa sem NC maior; 6 menores em tratamento" |
| 10 | `progress_bars` | Desempenho de fornecedores (IQF) e fornecedores críticos | "Fornecedor X abaixo do mínimo por 3 meses" |
| 11 | `table` | Riscos e oportunidades do SGQ: mudanças internas/externas, ações | "Nova legislação exige revisão de dois procedimentos" |
| 12 | `kpi_row` | Recursos: pessoas, treinamento, calibração, infraestrutura | "Calibrações em dia; uma vaga em metrologia" |
| 13 | `takeaways` | Conclusão da direção: adequação, eficácia, alinhamento estratégico (saída normativa) | "Sistema adequado e eficaz, com três melhorias prioritárias" |
| 14 | `action_plan` | Saídas: decisões de melhoria, recursos, mudanças no sistema, donos e prazos | "Seis ações da revisão 2026" |
| 15 | `closing` | Próxima revisão, aprovação | - |

## Dados e KPIs típicos
Objetivos da qualidade e metas; PPM/refugo/retrabalho; reclamações e devoluções; custo da não qualidade; NCs internas por processo e causa; auditorias e achados; ações corretivas abertas e atrasadas; IQF de fornecedores; calibração e manutenção; treinamentos; satisfação do cliente; mudanças de contexto (legislação, mercado).

## Regras específicas
- Cobrir **todas as entradas da norma** aplicável, mesmo que em um slide "sem ocorrências"; a auditoria verifica.
- Toda ação da revisão anterior com status; atrasada em vermelho com nova data.
- Conclusão explícita da direção sobre adequação e eficácia (saída obrigatória).
- Registrar participantes e aprovação; versionar o arquivo.

## Variações
| Norma / setor | Ajustes |
|---|---|
| Automotivo (IATF) | Adicionar custo de garantia, desempenho de campo, capacidade de processo |
| Saúde / farma (BPF, ISO 13485) | Adicionar desvios, CAPA, controle de mudanças, recall, validações |
| Segurança e ambiente (ISO 45001/14001) integrados | Combinar com `indicadores-de-seguranca` e indicadores ambientais |

## Erros comuns
- Pular entradas obrigatórias.
- Indicadores sem meta.
- Ações da revisão anterior sem status.
- Conclusão da direção ausente ou genérica.

## Spec mínima
```json
{
  "meta": {"title": "Revisão pela direção 2026", "audience": "estrategico", "type": "revisao-pela-direcao-qualidade", "palette": "corporativa-azul", "exposure": "interno", "brand": "Empresa Exemplo", "deck_name": "Sistema de gestão da qualidade", "date": "nov/2026"},
  "slides": [
    {"type": "cover", "kicker": "Sistema de gestão da qualidade", "title": "Revisão pela direção 2026", "subtitle": "Período: nov/25 a out/26 | registro do sistema", "thesis": "O sistema é adequado e eficaz; reclamações recorrentes do produto B e o fornecedor X exigem ação da direção."},
    {"type": "action_plan", "kicker": "Revisão anterior", "title": "8 de 10 ações da revisão anterior concluídas", "actions": [{"action": "Implantar controle estatístico na linha 2", "owner": "Qualidade", "due": "mar/26", "status": "success"}, {"action": "Requalificar fornecedor de embalagens", "owner": "Compras", "due": "jun/26", "status": "success"}, {"action": "Treinar auditores internos", "owner": "RH", "due": "ago/26", "status": "danger"}, {"action": "Revisar procedimento de reclamações", "owner": "Qualidade", "due": "out/26", "status": "warning"}]},
    {"type": "kpi_row", "kicker": "Objetivos da qualidade", "title": "Quatro de cinco objetivos atingidos", "kpis": [{"label": "Refugo", "value": "1,6%", "delta": "meta 2%", "status": "success"}, {"label": "Reclamações / mil", "value": "0,8", "delta": "meta 1,0", "status": "success"}, {"label": "OTIF", "value": "95%", "delta": "meta 95%", "status": "success"}, {"label": "Custo da não qualidade", "value": "1,9% da receita", "delta": "meta 1,5%", "status": "danger"}, {"label": "Ações corretivas no prazo", "value": "88%", "delta": "meta 85%", "status": "success"}], "source": "Indicadores do SGQ, nov/25 a out/26"},
    {"type": "pareto", "kicker": "Não conformidades", "title": "Dois processos concentram 65% das não conformidades internas", "categories": ["Envase", "Recebimento", "Mistura", "Expedição", "Laboratório", "Outros"], "values": [38, 24, 12, 9, 7, 5], "source": "Registros de NC (n=95)"},
    {"type": "table", "kicker": "Reclamações", "title": "Três reclamações recorrentes no produto B", "columns": ["Produto", "Reclamações", "Recorrentes", "Tempo médio de resposta", "Ação"], "rows": [["Produto B", "14", "3", "6 dias", "CAPA aberta, revisão do envase"], ["Produto A", "6", "0", "4 dias", "-"], ["Produto C", "3", "1", "5 dias", "Investigação em curso"]], "align": ["left", "right", "right", "right", "left"], "source": "Sistema de reclamações"},
    {"type": "progress_bars", "kicker": "Fornecedores", "title": "Fornecedor X abaixo do mínimo por 3 meses", "items": [{"label": "Fornecedor A", "value": 94, "display": "94"}, {"label": "Fornecedor B", "value": 91, "display": "91"}, {"label": "Fornecedor C", "value": 86, "display": "86"}, {"label": "Fornecedor X", "value": 68, "display": "68 (mínimo 75)", "status": "danger"}], "source": "Índice de qualificação de fornecedores (IQF), média 12 meses"},
    {"type": "takeaways", "kicker": "Conclusão da direção", "title": "Sistema adequado e eficaz, com três melhorias prioritárias", "items": [{"heading": "Adequação", "text": "Escopo, política e processos cobrem os requisitos e o contexto atual."}, {"heading": "Eficácia", "text": "Quatro de cinco objetivos atingidos; custo da não qualidade acima da meta."}, {"heading": "Alinhamento", "text": "Objetivos 2027 revisados para incluir custo da não qualidade e fornecedores críticos."}]},
    {"type": "action_plan", "kicker": "Saídas da revisão", "title": "Seis ações da revisão 2026", "actions": [{"action": "CAPA do produto B com validação do envase", "owner": "Qualidade + Produção", "due": "jan/27", "status": "warning"}, {"action": "Plano de desenvolvimento ou substituição do fornecedor X", "owner": "Compras", "due": "fev/27", "status": "warning"}, {"action": "Concluir treinamento de auditores internos", "owner": "RH", "due": "dez/26", "status": "danger"}, {"action": "Contratar analista de metrologia", "owner": "Direção", "due": "mar/27", "status": "neutral"}, {"action": "Revisar procedimentos afetados pela nova legislação", "owner": "Regulatório", "due": "abr/27", "status": "neutral"}, {"action": "Meta de custo da não qualidade 1,5% em 2027", "owner": "Direção", "due": "jan/27", "status": "neutral"}], "decision": "Aprovar as ações e os recursos (1 vaga em metrologia, R$ 80 mil em validação)"}
  ]
}
```
