# Revisão de um deck existente

Fluxo para quando o pedido é "melhore esta apresentação" em vez de "crie uma". Ferramentas: `06-codigo/python-pptx/extract_deck.py` (estrutura e diagnóstico), `audit_deck.py` (validação visual), `score_deck.py` (rubrica).

## Passo 1 - Extrair e diagnosticar
```bash
python 06-codigo/python-pptx/extract_deck.py deck.pptx --out outline.md --to-spec spec_aprox.json
python 06-codigo/python-pptx/audit_deck.py deck.pptx --audience tatico
python 06-codigo/python-pptx/score_deck.py deck.pptx --audience tatico
```
O outline traz o **teste dos títulos** (lista dos títulos em sequência), o conteúdo de cada slide com tamanhos de fonte, dados dos gráficos e tabelas, notas e um diagnóstico automático: título genérico ou sem verbo, texto denso, muitos bullets, gráfico sem fonte, fonte pequena, mais de um gráfico por slide.

## Passo 2 - Briefing reverso
Antes de propor mudanças, responda (ou pergunte) o mesmo que no briefing de criação: qual a mensagem central, para quem, com que objetivo, qual exposição, qual identidade. Muitos decks ruins são decks sem mensagem, não decks mal desenhados. Ver `briefing.md`.

## Passo 3 - Diagnóstico de narrativa
1. Leia só os títulos. Se não contam a história, o problema é de estrutura, não de layout.
2. Marque cada slide como: **mantém**, **reescreve título**, **funde com outro**, **move para anexo**, **remove**, **falta** (slide que não existe e deveria: sumário executivo, pedido, próximos passos).
3. Reescreva os títulos como conclusão (`01-fundamentos/banco-de-titulos.md`) e reordene conforme a estrutura do público (`01-fundamentos/storytelling-e-estrutura.md`).

## Passo 4 - Diagnóstico de conteúdo e dados
- Números sem fonte, período ou cobertura; números diferentes para o mesmo indicador.
- Fatos, inferências e recomendações misturados (`fatos-inferencias-recomendacoes.md`).
- Informação incompatível com o nível de exposição (`07-checklists/nivel-de-exposicao.md`).
- Texto que deveria ser nota do apresentador ou anexo.

## Passo 5 - Diagnóstico visual
Saída do `audit_deck.py` mais inspeção das miniaturas: fontes abaixo do mínimo, elementos fora da zona segura, mais de 6 bullets, gráficos com título interno ou mais de 4 séries, ausência de logotipo, paleta inconsistente, decoração sem função.

## Passo 6 - Escolher a estratégia de correção
| Situação | Estratégia |
|---|---|
| Estrutura boa, acabamento ruim | **Editar no lugar**: reescrever títulos, ajustar fontes e cores, inserir fonte e logo (python-pptx sobre o arquivo original) |
| Estrutura ruim, dados bons | **Reconstruir**: usar `--to-spec` como ponto de partida, corrigir tipos de slide e títulos, gerar no padrão do compêndio |
| Identidade obrigatória do cliente | Reconstruir com `--template` (`06-codigo/python-pptx/README.md`, seção template) |
| Só falta o pedido/sumário | Editar no lugar e inserir 1 a 2 slides gerados |

Reconstruir costuma ser mais barato que editar quando há mais de 30% dos slides a mudar.

## Passo 7 - Entrega da revisão
```
Diagnóstico geral: <2 a 3 frases: mensagem, público, principais problemas>
Teste dos títulos: antes -> depois (tabela)
Plano por slide: nº | ação (mantém/reescreve/funde/anexo/remove) | motivo
Slides faltantes: <lista>
Correções visuais aplicadas: <lista do audit>
Rubrica: pontuação antes e depois (score_deck.py)
Pendências: <dados a confirmar, decisões do usuário>
```

## O que não fazer
- Redesenhar tudo quando o problema é um título ruim.
- Mudar a mensagem do autor sem avisar; a revisão propõe, o autor decide.
- Remover ressalvas e notas de rodapé para "limpar" o slide.
- Aplicar a paleta do compêndio em cima de uma identidade obrigatória.
