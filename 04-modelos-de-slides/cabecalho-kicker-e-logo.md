# Cabeçalho, kicker e logotipo (campos comuns)

Três elementos que dão identidade e navegação a todos os slides de conteúdo sem competir com o título.

## Cabeçalho (`meta.brand`, `meta.deck_name`, `meta.date`)
Linha discreta no topo: "MARCA | NOME DO DECK" à esquerda e data à direita (ou logotipo, se `logo_position: header`).

| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Marca e deck | 0,5 | 0,1 | 8,0 | 0,25 | 9 pt bold, caixa alta, `neutral_mid` |
| Data ou logo | 8,5 | 0,1 | 4,33 | 0,25 | 9 pt, `neutral_mid`, alinhado à direita; logo com 0,32 de altura em (11,6 / 0,1) |

## Kicker (`kicker`, por slide)
Rótulo curto em caixa alta acima do título que nomeia a seção ou o tipo de leitura ("VISÃO GERAL", "FLUXO", "QUALIDADE DO DADO", "RECOMENDAÇÃO"). Ajuda quem lê sem apresentador e substitui divisórias em decks de 8 a 12 slides.

| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Kicker | 0,5 | 0,42 | 12,33 | 0,28 | 10 pt bold, caixa alta, `secondary` |
| Título (com kicker) | 0,5 | 0,68 | 12,33 | 0,9 | 28 pt bold `primary` |
| Subtítulo (com kicker) | 0,5 | 1,55 | 12,33 | 0,45 | 16 pt `neutral_mid` |

Com kicker, a área de conteúdo começa em 1,8 (sem subtítulo) ou 2,1 (com subtítulo). Sem kicker, vale o grid padrão.

Regras: 1 a 3 palavras; consistente ao longo do deck (mesmo vocabulário); não repetir o título.

## Logotipo (`meta.logo`, `meta.logo_light`, `meta.logo_position`)
| Slide | Posição | Tamanho | Versão |
|---|---|---|---|
| Capa e encerramento (fundo escuro) | canto superior direito (11,3 / 0,5) | largura 1,5 | `logo_light` (branca/monocromática); se ausente, `logo` |
| Divisória de seção | canto superior direito (11,6 / 0,5) | largura 1,2 | `logo_light` |
| Conteúdo, `logo_position: footer` (padrão) | rodapé direito, antes do número (10,6 / 6,83) | altura 0,3 | `logo` |
| Conteúdo, `logo_position: header` | cabeçalho direito (11,6 / 0,1) | altura 0,32 | `logo` |
| `logo_position: cover_only` | só capa, seções e encerramento | | |

Sem arquivo de logo mas com `meta.brand`: o nome da empresa aparece como marca-texto (wordmark) 9 a 10 pt bold nas mesmas posições. Arquivo recomendado: PNG com fundo transparente, 600 px ou mais de largura, proporção horizontal. Área de respiro: mínimo 0,15 pol. em volta. Caminhos relativos são resolvidos a partir da raiz do repositório.

**Regra para a IA:** sempre perguntar pelo logotipo no briefing (bloco 4). Se o usuário não tiver o arquivo, usar `brand` como marca-texto e registrar na entrega que o logo pode ser inserido depois. Placeholder para testes: `05-artefatos-visuais/logo-placeholder.png` e `logo-placeholder-light.png`.

## Spec
```json
{ "meta": {"title": "...", "brand": "Empresa Exemplo", "deck_name": "Aquisições", "date": "set/2026",
           "logo": "05-artefatos-visuais/logo-placeholder.png", "logo_light": "05-artefatos-visuais/logo-placeholder-light.png", "logo_position": "footer"},
  "slides": [ {"type": "chart", "kicker": "Evolução", "title": "...", "chart_type": "column", "categories": [], "series": []} ] }
```
