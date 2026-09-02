# Grid e layout (16:9)

Dimensões do slide: **13,333 × 7,5 pol.** (33,867 × 19,05 cm; 1920 × 1080 px a 144 dpi).

## Zonas fixas

```
+----------------------------------------------------------+ 0,0
| margem 0,5                                               |
|  +----------------------------------------------------+  | 0,4
|  | TITULO (12,33 x 0,9)                               |  |
|  +----------------------------------------------------+  | 1,3
|  | subtitulo / mensagem de apoio (12,33 x 0,5) opc.   |  |
|  +----------------------------------------------------+  | 1,9
|  |                                                    |  |
|  | AREA DE CONTEUDO (12,33 x 4,8)                     |  |
|  |                                                    |  |
|  +----------------------------------------------------+  | 6,8
|  | rodape: fonte | confidencialidade | n  (12,33x0,4) |  |
|  +----------------------------------------------------+  | 7,1
+----------------------------------------------------------+ 7,5
   0,5                                               12,83
```

| Zona | left | top | width | height |
|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 |
| Subtítulo (opcional) | 0,5 | 1,3 | 12,33 | 0,5 |
| Conteúdo | 0,5 | 1,9 | 12,33 | 4,8 |
| Rodapé | 0,5 | 6,8 | 12,33 | 0,4 |

Se não houver subtítulo, a área de conteúdo começa em `top = 1,5` e tem `height = 5,2`.

## Divisão da área de conteúdo

Gutter (espaço entre colunas) padrão: **0,3 pol.**

| Layout | Colunas (left, width) |
|---|---|
| 1 coluna | (0,5 / 12,33) |
| 2 colunas iguais | (0,5 / 6,02) (6,82 / 6,02) |
| 2 colunas 2/3 + 1/3 | (0,5 / 8,0) (8,8 / 4,03) |
| 3 colunas | (0,5 / 3,91) (4,71 / 3,91) (8,92 / 3,91) |
| 4 colunas (KPIs) | (0,5 / 2,86) (3,66 / 2,86) (6,82 / 2,86) (9,98 / 2,86) |

## Regras
- Nada fora da zona segura (margens 0,5) exceto fundos de capa e faixas decorativas de divisória.
- Título sempre na mesma posição em todos os slides de conteúdo.
- Gráficos ocupam a área de conteúdo inteira ou uma coluna; nunca "flutuam" em tamanho arbitrário.
- Caixas de texto sem borda por padrão; borda ou fundo `neutral_light` apenas para destacar.
- Espaçamento vertical entre blocos: múltiplos de 0,15 pol.

## Layouts de capa e divisória (fora do grid de conteúdo)
- **Capa**: fundo `primary_dark` total; título em (left 0,8 / top 2,4 / width 11,7 / height 1,6); subtítulo em (0,8 / 4,1 / 11,7 / 0,8); data/autor em (0,8 / 6,3 / 11,7 / 0,5).
- **Divisória de seção**: fundo `primary`; número da seção em (0,8 / 2,2 / 2 / 1) tamanho 60 pt; título em (0,8 / 3,3 / 11,7 / 1,2).
