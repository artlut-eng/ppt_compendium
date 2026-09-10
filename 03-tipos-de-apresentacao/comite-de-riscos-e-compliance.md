# Comitê de riscos, compliance e auditoria interna

## Objetivo
Dar ao comitê (ou à diretoria/conselho) a visão dos riscos corporativos, do programa de compliance e dos achados de auditoria interna: mapa de riscos com evolução, planos de tratamento, incidentes e denúncias (agregado), achados abertos e as decisões sobre apetite a risco e recursos.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico (comitê de riscos/auditoria, diretoria, conselho) |
| Frequência | Trimestral |
| Duração | 45 a 60 min |
| Tamanho | 10 a 14 slides |
| Estrutura narrativa | Resposta primeiro; mapa, mudanças, tratamento, compliance, auditoria, decisões |
| Paleta | `financeira-sobria` |
| Exposição | Interno restrito; denúncias e investigações só agregadas |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Comitê, período | "Comitê de riscos e compliance 3T26" |
| 2 | `executive_summary` | Situação do risco geral, 3 mudanças, decisões | "Exposição estável; risco cibernético subiu para crítico" |
| 3 | `kpi_row` | Riscos críticos/altos, planos no prazo, incidentes, denúncias recebidas/tratadas, achados abertos, treinamento de compliance | "3 riscos críticos; 85% dos planos no prazo" |
| 4 | `matrix_2x2` | Mapa de riscos (probabilidade × impacto) com os top 10 numerados; quadrante crítico destacado | "Três riscos no quadrante crítico" |
| 5 | `table` | Mudanças no período: riscos que subiram, desceram, novos, encerrados, com motivo | "Cibernético sobe; câmbio desce com hedge" |
| 6 | `table` | Planos de tratamento dos riscos críticos: ação, dono, prazo, status, risco residual esperado | "Dois planos atrasados" |
| 7 | `kpi_row` ou `chart` | Compliance: treinamentos, due diligence de terceiros, conflitos declarados, canal de denúncias (volume, tipos, prazo de tratamento, agregado) | "Canal de denúncias: 9 relatos, todos tratados em 30 dias" |
| 8 | `table` | Auditoria interna: trabalhos concluídos, achados por criticidade, ações abertas e atrasadas | "12 achados abertos, 3 de alta criticidade atrasados" |
| 9 | `bullets` | Contexto regulatório e externo: novas exigências, prazos, impacto | "Duas novas exigências com prazo em 2027" |
| 10 | `action_plan` | Decisões: apetite a risco, recursos, escalonamentos | "Três decisões para o comitê" |

## Dados típicos
Registro de riscos (categoria, probabilidade, impacto, controles, dono, risco residual), evolução trimestral, planos de tratamento e status, incidentes por categoria, indicadores de compliance (treinamento, due diligence, conflitos, denúncias por tipo e status, agregados), achados de auditoria por criticidade e status, mudanças regulatórias.

## Regras específicas
- Escala de probabilidade e impacto definida uma vez (anexo) e mantida entre trimestres.
- Todo risco crítico com dono e plano; sem plano é decisão pendente para o comitê.
- Denúncias e investigações: nunca casos individuais identificáveis; volume, categoria, prazo, resultado agregado.
- Achados de auditoria atrasados escalados nominalmente por área (não por pessoa).
- Mudanças no mapa sempre com motivo (evento, novo controle, mudança de contexto).

## Variações
| Contexto | Ajustes |
|---|---|
| Conselho (resumo) | Slides 2, 4, 6, 10; 5 a 6 slides |
| Segurança da informação (comitê específico) | Riscos cibernéticos, incidentes, vulnerabilidades, conformidade com LGPD e frameworks |
| Auditoria interna (relatório de um trabalho) | Escopo, método, achados com evidência, recomendação, resposta da gestão, prazo |

## Erros comuns
- Mapa de riscos igual ao do trimestre passado sem explicar por quê.
- Risco crítico sem plano nem dono.
- Denúncia descrita com detalhes que identificam pessoas.
- Achados de auditoria sem prazo nem escalonamento.

## Spec mínima
```json
{
  "meta": {"title": "Comitê de riscos e compliance 3T26", "audience": "estrategico", "type": "comite-de-riscos-e-compliance", "palette": "financeira-sobria", "exposure": "interno", "brand": "Empresa Exemplo", "deck_name": "Riscos e compliance", "date": "out/2026", "confidentiality": "Confidencial - comitê de riscos"},
  "slides": [
    {"type": "cover", "kicker": "Comitê de riscos e compliance", "title": "Comitê de riscos e compliance 3T26", "subtitle": "Mapa de riscos, tratamento, compliance e auditoria interna", "thesis": "Exposição geral estável; o risco cibernético subiu para crítico e dois planos de tratamento estão atrasados."},
    {"type": "kpi_row", "kicker": "Painel", "title": "3 riscos críticos; 85% dos planos de tratamento no prazo", "kpis": [{"label": "Riscos críticos", "value": "3", "delta": "+1 no trimestre", "status": "danger"}, {"label": "Riscos altos", "value": "7", "delta": "estável", "status": "warning"}, {"label": "Planos no prazo", "value": "85%", "delta": "2 atrasados", "status": "warning"}, {"label": "Denúncias tratadas", "value": "9 de 9", "delta": "prazo médio 21 dias", "status": "success"}, {"label": "Achados de auditoria abertos", "value": "12", "delta": "3 altos atrasados", "status": "danger"}, {"label": "Treinamento de compliance", "value": "94%", "delta": "meta 95%", "status": "warning"}], "source": "Registro de riscos, canal de denúncias e auditoria interna, set/26"},
    {"type": "matrix_2x2", "kicker": "Mapa de riscos", "title": "Três riscos no quadrante crítico", "x_label": "Probabilidade", "y_label": "Impacto", "quadrants": {"tl": {"label": "Alto impacto, baixa prob.", "items": ["4. Concentração de clientes", "6. Falha de fornecedor crítico"]}, "tr": {"label": "Crítico", "items": ["1. Ataque cibernético", "2. Câmbio (novo hedge em curso)", "3. Perda de licença regulatória"]}, "bl": {"label": "Monitorar", "items": ["8. Rotatividade de talentos", "10. Inadimplência"]}, "br": {"label": "Alta prob., baixo impacto", "items": ["5. Atraso em projetos de TI", "7. Multas trabalhistas", "9. Interrupção logística"]}}, "highlight": "tr", "source": "Registro de riscos (escala no anexo)"},
    {"type": "table", "kicker": "Mudanças", "title": "Cibernético sobe; câmbio desce com o hedge", "columns": ["Risco", "Trimestre anterior", "Atual", "Motivo da mudança"], "rows": [["Ataque cibernético", "Alto", "Crítico", "Dois incidentes no setor e teste de intrusão com falhas"], ["Câmbio", "Crítico", "Alto", "Hedge de 60% da exposição contratado"], ["Perda de licença regulatória", "Alto", "Crítico", "Nova exigência com prazo em mar/27"], ["Interrupção logística", "Médio", "Médio", "Sem mudança"]], "status_columns": [1, 2], "source": "Registro de riscos"},
    {"type": "table", "kicker": "Tratamento", "title": "Dois planos de tratamento atrasados", "columns": ["Risco", "Ação", "Dono", "Prazo", "Status", "Residual esperado"], "rows": [["Ataque cibernético", "Autenticação multifator e segmentação de rede", "TI", "dez/26", "Em andamento", "Alto"], ["Ataque cibernético", "Resposta a incidentes testada", "TI + Jurídico", "set/26", "Atrasado", "Alto"], ["Licença regulatória", "Adequação ao novo requisito", "Regulatório", "fev/27", "Em andamento", "Médio"], ["Concentração de clientes", "Plano de diversificação comercial", "Comercial", "ago/26", "Atrasado", "Médio"]], "status_columns": [4, 5], "source": "Planos de tratamento"},
    {"type": "action_plan", "kicker": "Decisões", "title": "Três decisões para o comitê", "actions": [{"action": "Aprovar investimento em segurança cibernética (R$ 600 mil)", "owner": "Comitê", "due": "hoje", "status": "warning"}, {"action": "Escalar plano de diversificação comercial à diretoria", "owner": "Comitê", "due": "hoje", "status": "warning"}, {"action": "Confirmar apetite a risco cambial (hedge de 60% para 80%)", "owner": "CFO", "due": "nov/26", "status": "neutral"}], "decision": "Aprovar o investimento em segurança e o novo apetite cambial"}
  ]
}
```
