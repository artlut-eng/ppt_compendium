# All-hands / Town hall

## Objetivo
Comunicar a toda a empresa (ou a uma área inteira) resultados, direção, mudanças e reconhecimentos, reforçando alinhamento e engajamento.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Misto: de estagiário a diretor. Escreva para o nível operacional, com mensagem do estratégico. |
| Frequência | Mensal, trimestral ou em eventos (mudanças, resultados anuais) |
| Duração | 30 a 60 min, com perguntas |
| Tamanho | 10 a 20 slides |
| Estrutura narrativa | Resposta primeiro + celebração + "o que muda para você" |
| Paleta | Marca própria; fallback `corporativa-azul` |

## Estrutura recomendada (slide a slide)
| # | Modelo de slide | Conteúdo | Exemplo de título-conclusão |
|---|---|---|---|
| 1 | `capa` | "All-hands <mês/trimestre>" | "All-hands 3T26" |
| 2 | `agenda` | Blocos | - |
| 3 | `kpi-dashboard` | Resultados do período em 4 a 6 números simples (receita, clientes, entregas, NPS, segurança) | "Melhor trimestre em receita; NPS subiu para 72" |
| 4 | `grafico` | Um gráfico de tendência do indicador principal | "Receita cresce pelo 5º trimestre seguido" |
| 5 | `bullets` ou `citacao-destaque` | Destaques / conquistas (com nomes de times) | "Time de logística cortou o lead time em 25%" |
| 6 | `bullets` | Onde estamos no plano estratégico (3 pilares, status) | "Dois pilares no verde, digital em amarelo" |
| 7 | `bullets` | O que muda / novidades (estrutura, políticas, produtos, pessoas) | "Nova estrutura comercial a partir de outubro" |
| 8 | `bullets` | O que isso significa para você (por área ou por todos) | "O que muda no seu dia a dia" |
| 9 | `bullets` (fotos) | Reconhecimentos, boas-vindas, aniversários de empresa | "Bem-vindos aos 8 novos colegas" |
| 10 | `bullets` | Próximos eventos e datas | "Próximos 30 dias" |
| 11 | `encerramento` | Perguntas / canal para dúvidas | "Perguntas?" |

## Regras específicas
- Linguagem simples, sem siglas financeiras não explicadas (dizer "lucro operacional" em vez de EBITDA, ou explicar).
- Números redondos e comparações fáceis ("1 em cada 4 pedidos").
- Más notícias com honestidade e com o plano; nunca esconder.
- Reconhecimento nominal quando possível (times ou pessoas).
- Mais imagem, menos texto; fontes grandes (será projetado em auditório ou transmitido).
- Slides prontos para serem compartilhados depois (sem dados confidenciais que não possam circular).

## Gráficos recomendados
- Um gráfico de tendência simples (linha ou colunas).
- KPIs grandes com delta.
- Fotos de equipes, produtos, eventos.
- Evitar: tabelas, waterfall, gráficos com múltiplas séries.

## Erros comuns
- Deck de diretoria reaproveitado sem tradução.
- Só números, sem pessoas.
- Sem "o que muda para você".
- Tempo todo em resultados e nenhum em direção.
- Ignorar más notícias que todos já sabem.

## Spec mínima
```json
{
  "meta": { "title": "All-hands 3T26", "audience": "operacional", "type": "all-hands", "palette": "corporativa-azul", "font_scale": 1.15 },
  "slides": [
    { "type": "cover", "title": "All-hands 3T26", "subtitle": "Resultados, direção e novidades" },
    { "type": "agenda", "items": ["Resultados do trimestre", "Conquistas dos times", "Onde estamos no plano", "O que muda", "Boas-vindas e reconhecimentos", "Perguntas"] },
    { "type": "kpi_row", "title": "Melhor trimestre em receita; NPS subiu para 72", "kpis": [{"label": "Receita", "value": "R$ 41 mi", "delta": "+12% vs. 3T25", "status": "success"}, {"label": "Clientes ativos", "value": "1.240", "delta": "+85", "status": "success"}, {"label": "Entregas no prazo", "value": "96%", "delta": "+3 p.p.", "status": "success"}, {"label": "NPS", "value": "72", "delta": "+6", "status": "success"}] },
    { "type": "chart", "title": "Receita cresce pelo 5º trimestre seguido", "chart_type": "column", "categories": ["3T25","4T25","1T26","2T26","3T26"], "series": [{"name": "Receita (R$ mi)", "values": [36.5, 37.2, 38.0, 39.8, 41.3]}] },
    { "type": "bullets", "title": "Time de logística cortou o lead time em 25%", "bullets": ["Projeto Atlas: de 12 para 9 dias", "Time de suporte: SLA de 98% no trimestre", "Fábrica: 142 dias sem acidente"] },
    { "type": "bullets", "title": "O que muda no seu dia a dia", "bullets": ["Nova estrutura comercial por região a partir de 01/10", "Portal de pedidos B2B em piloto com 10 clientes", "Horário flexível estendido para todas as áreas administrativas"] },
    { "type": "closing", "title": "Perguntas?", "subtitle": "Canal #all-hands para dúvidas depois" }
  ]
}
```
