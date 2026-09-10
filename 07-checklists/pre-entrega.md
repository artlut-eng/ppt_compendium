# Checklist pré-entrega

Percorra antes de entregar qualquer deck. Itens marcados com (auto) podem ser verificados por script.

## Narrativa
- [ ] A mensagem central cabe em uma frase e aparece no sumário executivo (ou no primeiro slide, em decks operacionais).
- [ ] Lendo só os títulos em sequência, a história faz sentido.
- [ ] Todo título é uma conclusão (frase afirmativa), não um assunto. (auto: título sem verbo ou com menos de 4 palavras = suspeito)
- [ ] O deck termina com pedido/decisão ou próximos passos com dono e data.
- [ ] Nenhum slide "e também": uma ideia por slide.
- [ ] Contexto e detalhe que o público já conhece foram removidos ou movidos para anexo.

## Dados
- [ ] Todo número tem unidade, período e comparação (meta, período anterior ou benchmark).
- [ ] O mesmo indicador tem o mesmo valor em todos os slides.
- [ ] Fonte dos dados no rodapé de todo slide com números. (auto)
- [ ] Data-base explícita na capa ou no sumário.
- [ ] Percentuais com base pequena acompanhados do valor absoluto.
- [ ] Fatos, inferências e recomendações distinguíveis; cobertura (n) e ressalvas de maturidade/lacunas incluídas (`00-guia/fatos-inferencias-recomendacoes.md`).
- [ ] Casas decimais consistentes por coluna/série.

## Visual
- [ ] Uma paleta, uma família tipográfica, título sempre na mesma posição. (auto)
- [ ] Fonte mínima respeitada: 12 pt (conteúdo), 10 pt (rodapé); 18 pt para operacional/TV. (auto)
- [ ] Máximo 6 bullets por slide, 2 linhas cada. (auto)
- [ ] Um gráfico por slide; sem 3D, sem grade vertical, sem título interno. (auto)
- [ ] Cores semânticas usadas só para status; um destaque por slide.
- [ ] Status sempre com cor + texto/ícone.
- [ ] Tabelas com até 8 a 10 linhas no corpo. (auto)
- [ ] Nada fora da zona segura (margens de 0,5 pol.). (auto)
- [ ] Sem elementos decorativos (clip-art, gradientes, sombras, transições).
- [ ] Imagens nítidas e sem distorção.
- [ ] Logotipo presente na capa, encerramento e rodapé dos slides de conteúdo (ou marca-texto), discreto e proporcional.
- [ ] Kicker consistente entre slides quando usado; callouts com rótulo e no máximo um por slide.

## Público e exposição
- [ ] Nível de detalhe e tamanho do deck coerentes com o público (ver `revisao-por-publico.md`).
- [ ] Estrutura e redação coerentes com o estilo do decisor, se conhecido (`02-publicos/estilos-de-comunicacao.md`).
- [ ] Filtro de exposição aplicado conforme `meta.exposure` (ver `nivel-de-exposicao.md`).
- [ ] Siglas expandidas no primeiro uso ou em glossário (obrigatório para externo e all-hands).
- [ ] Deck faz sentido sem apresentador (se for distribuído).

## Arquivo
- [ ] Nome do arquivo: `<tipo>_<assunto>_<AAAA-MM-DD>_v<n>.pptx`.
- [ ] Notas do apresentador preenchidas onde há explicação necessária.
- [ ] Anexos depois do encerramento, com divisória "Anexos".
- [ ] Dados confidenciais removidos ou marcados quando o deck circula externamente.
- [ ] Números de página nos slides de conteúdo. (auto)
- [ ] Pontuação da rubrica (`score_deck.py` + critérios manuais) igual ou acima de 85, ou ressalvas justificadas (`rubrica-de-qualidade.md`).
- [ ] Ortografia revisada; datas e nomes conferidos.
