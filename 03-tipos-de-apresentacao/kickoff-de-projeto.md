# Kickoff de projeto

## Objetivo
Alinhar todos os envolvidos no início de um projeto: por que existe, o que entrega, quem faz o quê, como será conduzido e quais são os próximos passos.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Tático (sponsor, gerentes das áreas envolvidas) e operacional (equipe do projeto) - geralmente juntos |
| Frequência | Uma vez por projeto (ou por fase) |
| Duração | 45 a 90 min (com discussão) |
| Tamanho | 10 a 15 slides |
| Estrutura narrativa | Cronológica + alinhamento |
| Paleta | `corporativa-azul` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | Nome do projeto, data do kickoff | "Kickoff - Projeto Atlas" |
| 2 | `agenda` | Blocos da reunião | - |
| 3 | `bullets` | Por que: contexto, problema/oportunidade, ligação com a estratégia | "Atlas existe para cortar 20% do lead time de entrega" |
| 4 | `bullets` | Objetivos e critérios de sucesso (mensuráveis) | "Sucesso = lead time de 12 para 9 dias até março" |
| 5 | `tabela` ou `bullets` | Escopo: o que está dentro / fora | "Dentro: expedição e transporte. Fora: produção" |
| 6 | `bullets` | Entregas principais | "5 entregas em 3 fases" |
| 7 | `timeline-roadmap` | Cronograma macro: fases e marcos | "Go-live em 15/03" |
| 8 | `tabela` ou `processo-fluxo` | Equipe e papéis (RACI resumido) | "Quem faz o quê" |
| 9 | `bullets` | Modelo de governança: reuniões, reportes, decisões, ferramentas | "Status semanal às sextas, comitê mensal" |
| 10 | `riscos-e-issues` | Riscos iniciais e premissas | "Três premissas que precisam se confirmar" |
| 11 | `bullets` | O que precisamos de cada área (pedidos explícitos) | "Precisamos de 2 analistas de logística em 50%" |
| 12 | `proximos-passos` | Próximos 30 dias: ações, donos, prazos | "Próximas 4 semanas" |
| 13 | `encerramento` | Contatos, canais do projeto | - |

## Dados típicos
- Objetivos com indicador, baseline e meta
- Escopo (dentro/fora)
- Marcos com datas
- Papéis (RACI)
- Riscos e premissas
- Orçamento (se público tático)

## Gráficos recomendados
- Timeline/roadmap por fase.
- Tabela RACI ou organograma do projeto.
- Diagrama de processo para a abordagem (fases).
- Evitar: Gantt detalhado (vai para a ferramenta de projeto), curvas financeiras.

## Variações por público
| Público | Ajustes |
|---|---|
| Sponsor / tático | Foco em 3, 4, 7, 10, 11. Orçamento no corpo. |
| Equipe / operacional | Foco em 5, 6, 8, 9, 12. Ferramentas, canais, rituais, "o que muda no meu dia". |
| Cliente externo | Remover orçamento interno e riscos internos; adicionar responsabilidades do cliente. |

## Erros comuns
- Objetivos sem indicador.
- Escopo sem "fora do escopo".
- Papéis vagos ("time de TI apoia").
- Cronograma só com data final.
- Não pedir explicitamente os recursos das outras áreas.

## Spec mínima
```json
{
  "meta": { "title": "Kickoff - Projeto Atlas", "audience": "tatico", "type": "kickoff-de-projeto", "palette": "corporativa-azul", "date": "2026-09-08" },
  "slides": [
    { "type": "cover", "title": "Projeto Atlas", "subtitle": "Kickoff - 08/09/2026" },
    { "type": "agenda", "items": ["Por que o Atlas existe", "Objetivos e escopo", "Cronograma e equipe", "Governança e riscos", "Próximos passos"] },
    { "type": "bullets", "title": "Sucesso = lead time de 12 para 9 dias até março", "bullets": ["Baseline: 12 dias (média jan-ago/26)", "Meta: 9 dias em 31/03/2027", "OTIF de 91% para 96%", "Sem aumento de custo logístico"] },
    { "type": "two_column", "title": "Dentro: expedição e transporte. Fora: produção",
      "left": {"heading": "Dentro do escopo", "bullets": ["Processo de expedição", "Roteirização", "Integração TMS-ERP"]},
      "right": {"heading": "Fora do escopo", "bullets": ["Planejamento de produção", "Compras", "Troca de transportadora"]} },
    { "type": "timeline", "title": "Go-live em 15/03", "milestones": [{"date": "Set", "label": "Diagnóstico", "status": "neutral"}, {"date": "Nov", "label": "Desenho e piloto", "status": "neutral"}, {"date": "Jan", "label": "Implantação", "status": "neutral"}, {"date": "Mar", "label": "Go-live", "status": "neutral"}] },
    { "type": "table", "title": "Quem faz o quê", "columns": ["Papel", "Nome", "Dedicação"], "rows": [["Sponsor", "Diretor de Operações", "Comitê mensal"], ["Gerente do projeto", "Ana", "100%"], ["Líder logística", "Carlos", "50%"], ["TI / integração", "Time ERP", "30%"]] },
    { "type": "action_plan", "title": "Próximas 4 semanas", "actions": [{"action": "Mapear processo atual de expedição", "owner": "Carlos", "due": "20/09", "status": "neutral"}, {"action": "Levantar requisitos de integração", "owner": "TI", "due": "27/09", "status": "neutral"}, {"action": "Confirmar alocação de 2 analistas", "owner": "Sponsor", "due": "12/09", "status": "warning"}] },
    { "type": "closing", "title": "Canal do projeto: #atlas", "subtitle": "ana@empresa.com" }
  ]
}
```
