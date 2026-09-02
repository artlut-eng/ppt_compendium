# Artefatos visuais

| Pasta / arquivo | Conteúdo |
|---|---|
| [`paletas/`](paletas/) | Paletas em JSON com papéis de cor (`primary`, `accent`, semânticas, `chart`). Lidas pelo código gerador via `meta.palette`. |
| [`graficos/escolha-do-grafico.md`](graficos/escolha-do-grafico.md) | Qual gráfico usar para qual pergunta, com regras de estilo. |
| [`icones-e-formas.md`](icones-e-formas.md) | Uso de ícones, formas, semáforos e imagens. |

## Estrutura de uma paleta
```json
{
  "name": "nome-da-paleta",
  "description": "quando usar",
  "use_for": ["tipos ou públicos"],
  "font": {"title": "Calibri", "body": "Calibri"},
  "font_scale": 1.0,
  "colors": {
    "primary": "RRGGBB", "primary_dark": "RRGGBB", "secondary": "RRGGBB", "accent": "RRGGBB",
    "neutral_dark": "RRGGBB", "neutral_mid": "RRGGBB", "neutral_light": "RRGGBB", "background": "RRGGBB",
    "success": "RRGGBB", "warning": "RRGGBB", "danger": "RRGGBB",
    "chart": ["RRGGBB", "..."]
  }
}
```
Regras de uso das cores: `01-fundamentos/cores-e-paletas.md`.

## Adicionar paleta de marca
1. Copie `corporativa-azul.json` para `<marca>.json`.
2. Substitua `primary`, `primary_dark`, `secondary`, `accent` pelas cores da marca.
3. Mantenha neutros e semânticas, salvo exigência da marca.
4. Verifique contraste de texto branco sobre `primary` (mínimo 4,5:1).
5. Preencha `chart` com 6 cores: primary, secondary, accent, neutral_mid e 2 variações claras.
