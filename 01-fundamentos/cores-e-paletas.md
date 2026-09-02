# Cores e paletas

## Estrutura de uma paleta
Toda paleta deste compêndio (ver `05-artefatos-visuais/paletas/`) tem os papéis abaixo. O código gerador só usa **papéis**, nunca cores soltas.

| Papel | Uso | Exemplo (paleta corporativa-azul) |
|---|---|---|
| `primary` | Títulos, barras principais, capa | `#1F3A5F` |
| `primary_dark` | Fundo de capa/divisórias | `#14273F` |
| `secondary` | Segunda série de dados, sub-elementos | `#4F81BD` |
| `accent` | **Único** destaque: o número que importa, a barra a olhar | `#F2A900` |
| `neutral_dark` | Texto corpo | `#333333` |
| `neutral_mid` | Texto secundário, linhas de grade, séries "de fundo" | `#8C8C8C` |
| `neutral_light` | Fundos de caixas, zebra de tabela | `#F2F2F2` |
| `background` | Fundo do slide | `#FFFFFF` |
| `success` | Status bom / no alvo | `#2E7D32` |
| `warning` | Atenção | `#F9A825` |
| `danger` | Crítico / fora do alvo | `#C62828` |
| `chart` | Lista ordenada de 6 cores para séries | ver JSON |

## Regras de uso
1. **Fundo branco** por padrão. Fundo escuro apenas em capa, divisórias e encerramento (ou deck inteiro para pitch/externo, se a marca pedir).
2. **Uma cor de destaque por slide.** Em gráfico: a série/barra relevante em `accent` ou `primary`, o resto em `neutral_mid`.
3. **Cores semânticas são reservadas**: verde/amarelo/vermelho só para status. Nunca como cor de série "normal".
4. Séries de gráfico: use a lista `chart` na ordem. Máximo 4 séries coloridas; acima disso, agrupe ou use cinza.
5. Texto sobre cor: branco sobre `primary`/`primary_dark`; `neutral_dark` sobre claros. Verifique contraste de pelo menos 4,5:1.
6. Não use preto puro (`#000000`) para texto; use `neutral_dark`.

## Escolha de paleta por contexto
| Contexto | Paleta sugerida | Motivo |
|---|---|---|
| Corporativo geral, projetos, tático | `corporativa-azul` | Neutra, confiável, alto contraste |
| Financeiro, conselho, auditoria | `financeira-sobria` | Azul-marinho + cinzas, destaque discreto |
| Vendas, marketing, pitch | `vendas-energetica` | Cor quente de destaque, mais energia |
| Operacional, chão de fábrica, TV | `operacional-alto-contraste` | Cores saturadas, semáforo forte, legível de longe |
| Marca do cliente | Substituir `primary`, `secondary`, `accent` pela identidade; manter neutros e semânticas |

## Daltonismo
- Nunca diferenciar séries apenas por vermelho × verde. Adicione rótulo, forma ou padrão.
- Paletas deste repositório usam azul/laranja como par principal de contraste (seguro para a maioria dos casos).
- Status semáforo sempre acompanhado de ícone ou texto ("● Crítico").
