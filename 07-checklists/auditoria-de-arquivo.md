# Auditoria de arquivo (antes da entrega)

Motivação: arquivos gerados por código podem abrir com "reparo", ter texto cortado, fontes ausentes ou elementos fora da área útil sem que o gerador acuse erro. A auditoria é obrigatória e deve ser **registrada** na entrega.

## Passos
1. **Integridade**: reabrir o `.pptx` com python-pptx e, quando possível, no PowerPoint/LibreOffice. Se pedir reparo, regenerar; nunca entregar "reparado".
2. **Renderização**: exportar todos os slides em PNG (`06-codigo/python-pptx/render_thumbnails.py`) e inspecionar um a um.
3. **Validação automática**: rodar `06-codigo/python-pptx/audit_deck.py deck.pptx --audience <nível> --expect-logo` e tratar todo item `erro`; justificar os `aviso` que permanecerem.
4. **Inspeção visual** (por slide): cortes, sobreposições, quebras de linha feias, texto fora da zona segura, contraste, alinhamento do título, gráfico legível, tabela sem célula estourada, logo presente e proporcional.
5. **Conteúdo**: números iguais entre slides, fonte e período em todo dado, fatos/inferências/recomendações rotulados, ortografia, nomes e datas.
6. **Fontes**: se a fonte da identidade não existe no ambiente, registrar a substituição na entrega.
7. **Correção e repetição**: corrigir, regenerar, renderizar de novo, até zero erros críticos.

## Registro (tabela na entrega)
| Slide | Elemento | Ocorrência | Causa | Correção | Status |
|---|---|---|---|---|---|
| 5 | Tabela | Texto cortado na coluna Resposta | col_widths pequeno | Larguras 0,5/4/1/1/4,5/1,33 | Aprovado |
| 8 | Gráfico | Rótulos sobrepostos | 12 categorias com rótulo | Rótulos só nos destaques | Aprovado com ressalva |

Resumo por dimensão (narrativa, conteúdo, identidade visual, legibilidade, integridade, precisão analítica, qualidade dos dados): **aprovado / aprovado com ressalva / reprovado** + observação.

## O que o validador automático verifica
- Tamanho do slide 16:9; formas dentro do slide e da zona segura.
- Fonte mínima por público (12 pt tático/estratégico/externo, 18 pt operacional; rodapé 9 pt).
- Estimativa de estouro de texto (caracteres × tamanho vs. área da caixa).
- Slides de conteúdo sem título; títulos longos (mais de 2 linhas estimadas) ou curtos demais para serem conclusão.
- Slides com gráfico/tabela sem "Fonte:" no rodapé.
- Gráfico com título interno ou mais de 4 séries; tabela com mais de 10 linhas.
- Mais de 8 parágrafos em uma caixa de texto.
- Presença de logotipo quando `--expect-logo`; fontes fora da lista `--fonts`.
- Placeholders vazios.
