# Da base de dados ao deck

A maioria dos pedidos começa com uma planilha ("aqui estão os dados, faça a apresentação"). Este guia descreve o caminho da base até a spec, com os controles que evitam os erros mais comuns (ler coorte imatura como melhora, somar programação futura ao realizado, média sem cobertura). Ferramenta: `06-codigo/python-pptx/profile_data.py`.

## Passo 1 - Perfil da base (automático)
```bash
python 06-codigo/python-pptx/profile_data.py base.xlsx --cutoff 2026-09-10 --spec esqueleto.json --title "Eficiência de aquisições"
```
Produz `base_perfil.md` com colunas, tipos, cobertura, período, registros futuros, top valores, alertas e sugestões de KPIs, segmentações e gráficos; e um esqueleto de spec com placeholders `[...]`.

Leia o perfil antes de qualquer cálculo. Quatro perguntas:
1. **Qual é a unidade de análise?** (uma linha = uma solicitação, um ensaio, um projeto, um mês). Define o que é "n".
2. **Qual é o corte temporal?** Registros com data após o corte são programação, não realizado.
3. **Quais colunas têm cobertura abaixo de 90%?** Toda média sobre elas carrega "n=..." no slide.
4. **Há coortes imaturas?** Os últimos períodos ainda não tiveram tempo de atrasar, concluir ou ser aprovados.

## Passo 2 - Escolher o indicador principal e 4 a 6 KPIs
| Tipo de base | Indicador principal | KPIs de apoio |
|---|---|---|
| Solicitações / chamados / pedidos com prazo | % fora do prazo | atraso médio e mediano, % risco alto, volume, resultado financeiro |
| Ensaios / testes / lotes com resultado | taxa de aprovação | realizado vs. planejado, em revisão, causas de reprovação |
| Projetos / portfólio | conclusão vs. consumo | nº projetos, orçamento, saldo, risco alto, marcos próximos |
| KPIs mensais de área | indicador da meta principal | investimento vs. orçamento, entregas, maturidade, capacidade |
| Vendas / pipeline | atingimento da meta | ticket médio, conversão, cobertura de pipeline, churn |

Regra: o indicador principal ganha o gráfico de evolução; os KPIs ganham a `kpi_row`; o restante vai para anexo ou notas.

## Passo 3 - Análises padrão (na ordem)
1. **Situação**: KPIs do período com comparação (meta, período anterior, benchmark) e cobertura.
2. **Evolução**: indicador principal por período, com ressalva de coorte quando o período é curto.
3. **Decomposição**: por etapa (tempos entre datas), por segmento (modalidade, categoria, região), por responsável (balanceamento).
4. **Eficácia de regras**: prioridade declarada protege o prazo? Meta é cumprida onde há contrato?
5. **Causas**: Pareto de motivos; "outros" pequeno.
6. **Qualidade do dado**: campos sem registro e regra mínima de registro.
7. **Ações**: controles com dono, cadência e indicador; decisão esperada.

Nem toda base sustenta todas; pule as que não têm dado e diga por quê nas notas.

## Passo 4 - Do dado ao gráfico
| Forma do dado | Modelo |
|---|---|
| Um valor por período (6 a 30 períodos) | `chart` line ou column |
| Um valor por categoria (3 a 8) | `chart` bar ordenado com `highlight_index` |
| Um valor por categoria com status | `progress_bars` |
| Parte de um todo (até 4) | `chart` doughnut ou stacked_column 100% |
| Tempo por etapa | `process` com `metrics` |
| Causas | `pareto` ou `chart` bar decrescente |
| Variação entre dois totais | `waterfall` |
| Lista de itens com atributos | `table` (até 10 linhas; o resto pagina em anexo) |
| Cronograma | `gantt` ou `timeline` |
| Um número | `big_number` |

## Passo 5 - Mensagem e títulos
Com as análises feitas, escreva a mensagem central (o "apesar de" costuma ser a melhor forma: "Apesar de X, Y"). Depois, um título-conclusão por slide usando `01-fundamentos/banco-de-titulos.md`. Rotule fato, inferência e recomendação (`fatos-inferencias-recomendacoes.md`).

## Passo 6 - Números no slide
Use `06-codigo/python-pptx/fmt.py` (ou as regras de `01-fundamentos/formatacao-numerica.md`): R$ em mil/mi, percentuais com 1 casa (0 casas acima de 10%), "x de y (z%)" para bases pequenas, sinal explícito em variações, p.p. para diferença de percentuais.

## Passo 7 - Preencher a spec e gerar
Substitua os placeholders `[...]` do esqueleto, valide (`build_from_spec.py` valida contra o schema), gere, renderize e audite (`audit_deck.py`). Entregue com a lista de "dados a confirmar" (registros futuros, campos vazios, proxies).

## Armadilhas frequentes
| Armadilha | Como evitar |
|---|---|
| Média de tempo entre datas com metade das datas vazias | Mostrar n de cada média; não comparar médias com coberturas muito diferentes |
| Melhora nos últimos 2 meses | Ressalva de coorte; comparar só períodos maduros |
| Percentual com base de 5 itens | "2 de 5 (40%)" |
| Ranking por pessoa | Balanceamento de carga, anonimizar em público amplo |
| "Outros" com 40% no Pareto | Reclassificar antes de apresentar; se não der, dizer que a classificação é fraca |
| Somar categorias que se sobrepõem | Conferir se a unidade de análise é única por linha |
| Saving/benefício sobre subconjunto | Declarar "sobre os n itens com valor contratado" |
