# Escolha do gráfico

## Pela pergunta que o slide responde
| Pergunta | Tipo de gráfico | `chart_type` | Observações |
|---|---|---|---|
| Como evoluiu ao longo do tempo? | Linha | `line` | 6 ou mais períodos; até 3 séries; meta em cinza tracejado |
| Como evoluiu em poucos períodos (até 6)? | Colunas | `column` | Real vs. ano anterior lado a lado |
| Quem é maior / ranking? | Barras horizontais ordenadas | `bar` | Ordem decrescente; destaque em `accent` para o item da mensagem |
| Real vs. meta por categoria? | Colunas ou barras agrupadas | `column` / `bar` com 2 séries | Meta em `neutral_mid`, real em `primary` |
| Quais são as principais causas? | Pareto | `bar` decrescente (+ linha acumulada quando suportado) | Até 8 causas; "outros" por último e pequeno |
| Como se compõe o total? | Colunas empilhadas | `stacked_column` | Até 5 partes; 100% quando o total não importa |
| Qual a participação de poucas partes? | Pizza / rosca | `pie` / `doughnut` | Até 4 fatias; maior fatia começando às 12h; rótulos com % |
| De onde veio a variação entre A e B? | Waterfall (ponte) | `column` com positivos/negativos (nativo quando disponível) | Início e fim em `primary`, ganhos `success`, perdas `danger` |
| Qual o funil / conversão por etapa? | Barras horizontais decrescentes | `bar` | Valor e % de conversão em cada etapa |
| Como está vs. faixa aceitável (dia a dia)? | Run chart | `line` com linha(s) de meta/limite | 10 a 30 pontos; sem suavização |
| Relação entre duas variáveis? | Dispersão | (usar imagem ou biblioteca externa) | Raro em decks executivos |
| Distribuição no tempo por item (Gantt)? | Barras por linha | formas, não gráfico nativo | Ver `04-modelos-de-slides/timeline-roadmap.md` |

## Regras gerais
1. **Um gráfico por slide** e o título do slide é a conclusão dele.
2. **Comece o eixo em zero** para barras e colunas. Linhas podem ter eixo truncado se sinalizado.
3. **Até 3 séries coloridas**; as demais em cinza. Legenda só com 2 ou mais séries.
4. **Rótulos de dados** nos pontos que importam (não em todos, se houver mais de 12).
5. **Sem grade vertical, sem 3D, sem sombra, sem gradiente.**
6. **Unidade** no subtítulo ou no eixo ("R$ mi", "%", "peças/h").
7. **Fonte dos dados** no rodapé.
8. **Ordene** categorias por valor quando não houver ordem temporal.
9. **Cores semânticas** (verde/amarelo/vermelho) só para status e waterfall.
10. **Não use pizza** para mais de 4 fatias, para comparar períodos, ou para valores próximos.

## Anti-padrões
| Anti-padrão | Problema | Correção |
|---|---|---|
| Pizza com 8 fatias | Ilegível, sem comparação | Barras ordenadas |
| Duplo eixo Y | Confunde escala | Dois gráficos ou índice base 100 |
| Linha para categorias sem ordem | Sugere continuidade inexistente | Barras |
| Cores de arco-íris | Nenhuma se destaca | Uma cor + cinza |
| Gráfico com título interno + título do slide | Redundância | Só título do slide |
| Eixo truncado em barras | Exagera diferenças | Eixo em zero |

## Por público
| Público | Preferências |
|---|---|
| Estratégico | Linha de tendência, waterfall, número grande; nunca mais de 2 séries |
| Tático | Barras agrupadas real vs. meta, tabelas com semáforo, Pareto, Gantt |
| Operacional | Run chart com meta, Pareto, semáforo; fontes 14 pt ou mais nos rótulos |
| Externo | Antes/depois, número grande, barras simples |

## Estilo padrão aplicado pelo código base
- Fonte dos rótulos: 11 a 12 pt (operacional: 14 pt).
- Grade horizontal `neutral_light`, sem grade vertical.
- Cores das séries na ordem de `chart` da paleta.
- Legenda embaixo.
- Rótulos de dados ligados por padrão quando há 1 série e até 12 categorias.
