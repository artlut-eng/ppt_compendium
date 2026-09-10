# Fatos, inferências e recomendações

Todo deck analítico mistura três naturezas de informação. Misturá-las sem sinalizar destrói a credibilidade quando alguém pergunta "de onde veio isso?". Regra: **o público deve conseguir distinguir, em cada slide, o que é dado, o que é interpretação e o que é proposta.**

## As três naturezas
| Natureza | Definição | Como sinalizar | Exemplo |
|---|---|---|---|
| **Fato** | Está registrado na base, com período, cobertura e fonte | Número + fonte no rodapé + cobertura ("n=71") | "76% das solicitações estão fora do prazo (54 de 71, mar a set)" |
| **Inferência** | Conclusão derivada dos fatos por raciocínio ou proxy | Rótulo "Inferência" ou "Leitura", verbos "sugere", "indica" | "A concentração de atrasos após o pedido sugere gargalo no fornecedor" |
| **Recomendação** | Proposta de ação, sujeita à decisão do público | Rótulo "Recomendação" ou "Proposta", verbos "propomos", "recomendamos" | "Propomos SLA por fornecedor e confirmação de data no pedido" |

Um quarto caso frequente: **estimativa por proxy**, quando o dado necessário não existe (ex.: potencial financeiro de um projeto) e é aproximado por outros campos (maturidade, saldo, risco). Sinalizar sempre como "estimado por proxies; premissas no anexo".

## Onde sinalizar no slide
- **Título**: pode ser inferência ou recomendação, desde que o corpo mostre o fato que a sustenta.
- **Callout rotulado** (`callout` na spec): `conclusion` para leitura/inferência, `recommendation` para proposta, `warning` para ressalva de dado, `decision` para o que se pede.
- **Rodapé**: fonte, período (recorte) e cobertura ("médias calculadas sobre registros com data preenchida: n=40").
- **Notas do apresentador**: premissas, exclusões e cálculos.
- **Anexo**: metodologia, pesos, memória de cálculo.

## Ressalvas obrigatórias
| Situação | Ressalva a incluir |
|---|---|
| Registros recentes "imaturos" (coorte que ainda não teve tempo de atrasar ou concluir) | "Meses recentes têm menor tempo de exposição; a melhora não deve ser lida isoladamente" |
| Campos vazios relevantes (datas, valores) | Slide ou callout de qualidade de dado: campo, % preenchido, impacto no cálculo |
| Registros com data futura na base | Tratar como programação, não como realizado; pedir confirmação |
| Média calculada sobre subconjunto | "Cobertura: n=27 de 71" ao lado do número |
| Benefício/retorno estimado vs. realizado | "Benefício estimado, não retorno financeiro realizado" |
| Métrica por pessoa (carga por comprador, aprovação por analista) | "Instrumento de balanceamento de carga, não avaliação individual"; em público amplo, anonimizar |
| Score ou ranking com pesos definidos pelo usuário | Explicitar pesos e que a categoria ou peso não determina isoladamente a recomendação |
| Dados de mock ou teste | Marcar o deck como exemplo; nunca apresentar como resultado real |

## Slide de qualidade de dado
Quando lacunas afetam a análise, dedique um slide (modelo `progress_bars` ou `kpi_row`) mostrando, por campo: quantidade sem registro, % preenchido e a regra mínima de registro proposta. Isso transforma a limitação em ação em vez de esconder a fragilidade.

## Checklist rápido
- [ ] Todo número tem fonte, período e cobertura.
- [ ] Inferências e recomendações rotuladas (callout, rótulo ou verbo).
- [ ] Proxies e pesos explicitados; premissas no anexo ou nas notas.
- [ ] Ressalvas de maturidade, lacunas e registros futuros incluídas quando aplicável.
- [ ] Métricas por pessoa tratadas como balanceamento, não como avaliação.
- [ ] Lista de "dados a confirmar" entregue junto com o deck.
