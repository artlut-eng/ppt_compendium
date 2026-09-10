# Rubrica de qualidade de um deck

Pontuação para comparar saídas de agentes diferentes, versões do mesmo deck ou o efeito de mudanças no compêndio. Cada critério vale 0 (ausente), 1 (parcial) ou 2 (pleno). A parte automatizável é calculada por `06-codigo/python-pptx/score_deck.py`; os critérios marcados (manual) exigem leitura humana ou da IA revisora.

## Dimensões e critérios

### A. Narrativa (peso 30%)
| # | Critério | Como avaliar | Auto |
|---|---|---|---|
| A1 | Mensagem central identificável em uma frase | Sumário executivo, tese na capa ou título do slide 2 | parcial |
| A2 | Títulos são conclusões (frase com verbo/número) | % de slides de conteúdo aprovados no teste de título | sim |
| A3 | Ordem coerente com o público (resposta primeiro para estratégico etc.) | Leitura dos títulos em sequência | manual |
| A4 | Deck termina com pedido, decisão ou próximos passos com dono | Último slide de conteúdo é `action_plan`/`takeaways`/callout `decision` ou equivalente | parcial |
| A5 | Uma ideia por slide | Slides com mais de um gráfico ou mais de 8 bullets penalizam | sim |

### B. Dados e rigor (peso 25%)
| # | Critério | Como avaliar | Auto |
|---|---|---|---|
| B1 | Fonte e período em todo slide com dado | % de slides com gráfico/tabela que têm "Fonte:" | sim |
| B2 | Números com comparação (meta, período anterior, cobertura) | Presença de delta/n nos KPIs | parcial |
| B3 | Fato, inferência e recomendação distinguíveis | Callouts rotulados ou verbos adequados | manual |
| B4 | Ressalvas de dado (coorte, lacunas, registros futuros) quando aplicável | Callout `warning` ou nota | manual |
| B5 | Consistência numérica entre slides | Mesmo indicador, mesmo valor | manual |

### C. Visual e legibilidade (peso 20%)
| # | Critério | Como avaliar | Auto |
|---|---|---|---|
| C1 | Sem erros do validador (fora do slide, fonte abaixo do mínimo, placeholder vazio) | `audit_deck.py` erros = 0 | sim |
| C2 | Poucos avisos do validador | avisos por slide < 0,5 | sim |
| C3 | Um gráfico por slide, sem título interno, até 4 séries | audit | sim |
| C4 | Grid e alinhamento consistentes (título na mesma posição) | inspeção das miniaturas | manual |
| C5 | Sem decoração sem função | inspeção | manual |

### D. Identidade (peso 10%)
| # | Critério | Como avaliar | Auto |
|---|---|---|---|
| D1 | Logotipo ou marca-texto presente e discreto | audit `--expect-logo` | sim |
| D2 | Paleta e fontes conforme identidade/paleta escolhida | audit `--fonts`; inspeção | parcial |
| D3 | Rodapé com confidencialidade coerente com a exposição | texto de rodapé | parcial |

### E. Adequação ao público e exposição (peso 15%)
| # | Critério | Como avaliar | Auto |
|---|---|---|---|
| E1 | Tamanho do deck dentro da faixa do público | nº de slides de conteúdo vs. `02-publicos/README.md` | sim |
| E2 | Fonte mínima do público respeitada | audit com `--audience` | sim |
| E3 | Densidade e vocabulário adequados (siglas, detalhe) | manual | manual |
| E4 | Nada incompatível com o nível de exposição | `nivel-de-exposicao.md` | manual |

## Cálculo
Pontuação da dimensão = média dos critérios (0 a 2) ÷ 2 × 100. Total = soma ponderada. Faixas: **≥ 85 pronto para entrega**; **70 a 84 aprovado com ressalvas**; **< 70 retrabalhar**.

## Folha de pontuação
```
Deck: ______________________  Público: ________  Avaliador: ________  Data: ______
A Narrativa      A1 _ A2 _ A3 _ A4 _ A5 _   -> ___ /100
B Dados          B1 _ B2 _ B3 _ B4 _ B5 _   -> ___ /100
C Visual         C1 _ C2 _ C3 _ C4 _ C5 _   -> ___ /100
D Identidade     D1 _ D2 _ D3 _             -> ___ /100
E Público        E1 _ E2 _ E3 _ E4 _         -> ___ /100
Total ponderado: ___ /100   Veredito: pronto | ressalvas | retrabalhar
Principais ocorrências: ...
```
`score_deck.py` gera esta folha com os critérios automáticos preenchidos e os manuais em branco.
