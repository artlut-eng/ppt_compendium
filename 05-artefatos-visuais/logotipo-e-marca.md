# Logotipo e marca

## Por que importa
Um deck sem logotipo parece rascunho; um deck com logotipo gigante em todo slide parece propaganda. O compêndio adota a regra: **presente e discreto**. A IA deve **sempre** perguntar pelo logotipo e pela identidade visual no briefing, e aplicar a regra padrão quando o usuário não especificar.

## O que pedir ao usuário (bloco 4 do briefing)
1. Arquivo do logotipo em PNG com fundo transparente (ou SVG a converter). Ideal: versão colorida para fundo claro e versão branca/monocromática para fundo escuro.
2. Cores da marca (primária, secundária, destaque) em hexadecimal, ou o manual de identidade.
3. Fontes da marca e substitutas aceitáveis (as fontes precisam existir na máquina que abre o arquivo).
4. Se existe template `.pptx/.potx` corporativo obrigatório (nesse caso, usar `--template`).
5. Em decks externos co-branded: logo do cliente e regra de posição (esquerda o anfitrião, direita o convidado).

## Regra padrão de aplicação
| Situação | Regra |
|---|---|
| Capa, encerramento, divisórias (fundo escuro) | Logo claro no canto superior direito, largura 1,5 pol. |
| Slides de conteúdo | Logo colorido no rodapé direito, altura 0,3 pol. (ou no cabeçalho direito) |
| Sem arquivo de logo | Nome da empresa em caixa alta como marca-texto nas mesmas posições (`meta.brand`) |
| Deck externo para cliente | Logo do cliente na capa (esquerda) e o nosso (direita); nos slides de conteúdo, só o nosso no rodapé |
| Deck interno de área | Logo da empresa; nome da área no cabeçalho (`deck_name`) |
| Template corporativo | Não inserir logo por código; o mestre já traz |

## Não fazer
- Logo esticado ou com fundo branco sobre slide colorido.
- Logo maior que 1,8 pol. de largura fora da capa.
- Logo em cima de gráfico ou tabela.
- Logo de terceiros sem autorização.

## Paleta da marca
Crie `05-artefatos-visuais/paletas/<empresa>.json` copiando `corporativa-azul.json` e trocando `primary`, `primary_dark`, `secondary`, `accent` e `font`. Mantenha neutros e cores semânticas. Verifique contraste de texto branco sobre `primary` (mínimo 4,5:1). Exemplo de mapeamento de uma identidade típica com 5 cores:

| Cor da marca | Papel na paleta |
|---|---|
| Azul principal | `primary` e primeira cor de `chart` |
| Azul escuro | `primary_dark` (capa, divisórias, callout de decisão) |
| Cor quente (laranja, vermelho) | `accent` (um destaque por slide) e alertas |
| Cores claras (verde claro, lilás) | posições 4 a 6 de `chart`, fundos de cartão; nunca texto |
| Verde/amarelo/vermelho da marca | só se atenderem ao contraste; senão manter as semânticas padrão |

## Placeholder
`logo-placeholder.png` (escuro, para fundo claro) e `logo-placeholder-light.png` (branco, para fundo escuro) servem para testes e exemplos. Nunca entregar um deck real com o placeholder.
