# Relatório ESG / sustentabilidade

## Objetivo
Comunicar o desempenho ambiental, social e de governança contra metas e compromissos: emissões, energia, água, resíduos; pessoas, segurança, comunidade, diversidade (agregada); governança, ética, cadeia de fornecedores. Serve a conselho, clientes que exigem dados ESG, investidores e relatório público.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Estratégico (conselho, diretoria) e externo (clientes, investidores, público) |
| Frequência | Anual (relatório), trimestral (acompanhamento de metas) |
| Duração | 30 a 45 min |
| Tamanho | 10 a 16 slides |
| Estrutura narrativa | Compromissos, resultado por pilar, lacunas, plano |
| Paleta | `educacao-publico` ou `saude` (verdes sóbrios) ou marca |
| Exposição | Externo na versão pública: só dados verificados e autorizados; interáreas na versão de acompanhamento |

## Estrutura recomendada (slide a slide)
| # | Modelo | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `cover` | Relatório, ano | "Sustentabilidade 2026" |
| 2 | `executive_summary` | Situação vs. compromissos, 3 resultados, próxima meta | "Emissões caíram 12%; meta 2030 exige acelerar energia renovável" |
| 3 | `kpi_row` | Indicadores-chave por pilar com meta: emissões, energia renovável, água, acidentes, diversidade, treinamento em ética | "Cinco de sete indicadores no rumo das metas" |
| 4 | `chart` linha | Emissões (escopos 1 e 2, e 3 quando houver) vs. trajetória da meta | "Emissões 12% abaixo de 2024, 3 p.p. atrás da trajetória" |
| 5 | `waterfall` | Ponte de emissões: de onde veio a redução (renovável, eficiência, produção) | "Energia renovável responde por metade da redução" |
| 6 | `progress_bars` | Ambiental: energia, água, resíduos reciclados, embalagem, vs. meta | "Resíduos reciclados em 78%, meta 85%" |
| 7 | `kpi_row` | Social: segurança (taxa de frequência), diversidade agregada, treinamento, comunidade, fornecedores locais | "Zero acidentes graves; 42% de mulheres na liderança" |
| 8 | `kpi_row` ou `bullets` | Governança: conselho, ética e compliance, due diligence de fornecedores, canal de denúncias (agregado) | "100% dos fornecedores críticos com due diligence" |
| 9 | `table` | Compromissos e metas: meta, ano, situação, confiança | "Meta de 2030 exige dobrar o ritmo" |
| 10 | `table` | Lacunas e riscos: dados não verificados, escopo 3 parcial, regulação | "Escopo 3 cobre 60% da cadeia" |
| 11 | `action_plan` | Plano do próximo ano | "Cinco ações para 2027" |
| 12 | `closing` | Metodologia, verificação, contatos | - |

## Dados típicos
Emissões por escopo (tCO2e) e intensidade, energia (MWh, % renovável), água (m³), resíduos (t, % reciclado); taxa de frequência de acidentes, horas de treinamento, diversidade agregada (gênero, raça, PcD) por nível, investimento social, fornecedores locais; composição do conselho, treinamento em ética, denúncias (agregado), fornecedores com due diligence; metas e trajetórias.

## Regras específicas
- **Metodologia e limites declarados** (escopos, fronteira organizacional, ano-base, fatores de emissão) no encerramento ou anexo.
- Dados verificados externamente marcados; dados estimados marcados como estimativa.
- Metas com ano e trajetória; sem "carbono neutro" sem definição.
- Diversidade: só agregado, grupos com n mínimo.
- Versão externa: só o que a governança aprovou para publicação; consistência com o relatório anual.
- Evitar greenwashing: cada afirmação com número, fonte e limite.

## Variações
| Contexto | Ajustes |
|---|---|
| Questionário de cliente (supply chain) | Responder ao que o cliente pede: emissões, certificações, políticas, evidências |
| Investidores | Ligar ESG a risco e resultado: custo de energia, multas evitadas, acesso a crédito |
| Acompanhamento interno trimestral | 5 slides: KPIs vs. meta, desvios, ações |

## Erros comuns
- Fotos e adjetivos sem números.
- Emissões sem escopo nem ano-base.
- Metas sem trajetória nem ano.
- Comparação com ano-base diferente em slides diferentes.

## Spec mínima
```json
{
  "meta": {"title": "Sustentabilidade 2026", "audience": "estrategico", "type": "relatorio-esg", "palette": "educacao-publico", "exposure": "externo", "brand": "Empresa Exemplo", "deck_name": "Relatório de sustentabilidade", "date": "mar/2027"},
  "slides": [
    {"type": "cover", "kicker": "Sustentabilidade", "title": "Sustentabilidade 2026", "subtitle": "Desempenho ambiental, social e de governança vs. compromissos 2030", "thesis": "Emissões 12% abaixo de 2024; a meta de 2030 exige acelerar energia renovável e eficiência."},
    {"type": "kpi_row", "kicker": "Indicadores-chave", "title": "Cinco de sete indicadores no rumo das metas", "kpis": [{"label": "Emissões (escopos 1+2)", "value": "18,4 mil tCO2e", "delta": "-12% vs. 2024", "status": "success"}, {"label": "Energia renovável", "value": "46%", "delta": "meta 2030: 100%", "status": "warning"}, {"label": "Água por tonelada", "value": "2,9 m³", "delta": "-8%", "status": "success"}, {"label": "Resíduos reciclados", "value": "78%", "delta": "meta 85%", "status": "warning"}, {"label": "Taxa de frequência", "value": "1,8", "delta": "meta 2,0", "status": "success"}, {"label": "Mulheres na liderança", "value": "42%", "delta": "meta 45%", "status": "success"}], "source": "Inventário de emissões verificado; indicadores internos 2026"},
    {"type": "chart", "kicker": "Emissões", "title": "Emissões 12% abaixo de 2024, 3 p.p. atrás da trajetória", "subtitle": "mil tCO2e, escopos 1 e 2", "chart_type": "line", "categories": ["2024", "2025", "2026", "2027", "2028", "2029", "2030"], "series": [{"name": "Real", "values": [20.9, 19.8, 18.4, 0, 0, 0, 0]}, {"name": "Meta", "values": [20.9, 19.4, 17.8, 16.0, 14.0, 12.0, 10.5]}], "show_labels": false, "source": "Inventário de emissões (ano-base 2024; valores futuros zerados por falta de dado)", "callout": {"kind": "warning", "label": "Leitura", "text": "Escopo 3 cobre 60% da cadeia e não entra neste gráfico; valores de 2027 em diante são meta, não realizado."}},
    {"type": "waterfall", "kicker": "Ponte de emissões", "title": "Energia renovável responde por metade da redução", "subtitle": "mil tCO2e, 2024 para 2026", "items": [{"label": "2024", "value": 20.9, "total": true}, {"label": "Energia renovável", "value": -1.3}, {"label": "Eficiência", "value": -0.8}, {"label": "Frota", "value": -0.3}, {"label": "Aumento de produção", "value": 0.4}, {"label": "Outros", "value": -0.5}, {"label": "2026", "value": 18.4, "total": true}], "decimals": 1, "source": "Inventário de emissões"},
    {"type": "table", "kicker": "Compromissos", "title": "Meta de 2030 exige dobrar o ritmo de redução", "columns": ["Compromisso", "Meta", "Ano", "Situação 2026", "Confiança"], "rows": [["Reduzir emissões (escopos 1+2)", "-50% vs. 2024", "2030", "-12%", "Média"], ["Energia renovável", "100%", "2030", "46%", "Média"], ["Resíduos reciclados", "85%", "2027", "78%", "Alta"], ["Zero acidentes graves", "0", "anual", "0", "Alta"], ["Fornecedores críticos com due diligence", "100%", "2026", "100%", "Alta"]], "status_columns": [4], "source": "Plano de sustentabilidade"},
    {"type": "action_plan", "kicker": "Plano 2027", "title": "Cinco ações para 2027", "actions": [{"action": "Contrato de energia renovável para 80% do consumo", "owner": "Suprimentos", "due": "jun/27", "status": "warning"}, {"action": "Projeto de eficiência térmica (caldeiras)", "owner": "Engenharia", "due": "dez/27", "status": "neutral"}, {"action": "Inventário de escopo 3 completo", "owner": "Sustentabilidade", "due": "set/27", "status": "neutral"}, {"action": "Programa de reciclagem de embalagens", "owner": "Operações", "due": "mar/27", "status": "neutral"}, {"action": "Verificação externa dos indicadores sociais", "owner": "Sustentabilidade", "due": "abr/27", "status": "neutral"}]},
    {"type": "closing", "title": "Metodologia e verificação", "subtitle": "Inventário conforme protocolo reconhecido, ano-base 2024, verificado por terceira parte | sustentabilidade@empresa-exemplo.com"}
  ]
}
```
