# Painel de KPIs (`kpi_row`)

## Quando usar
Visão geral de 3 a 6 indicadores com valor, comparação e status. Slide 3 típico de relatórios; slide 1 de revisões operacionais.

## Anatomia (4 KPIs)
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão do painel ("3 de 4 no verde; churn preocupa") |
| Cartão i (i = 0..3) | 0,5 + i × 3,16 | 1,7 | 2,86 | 2,6 | fundo `neutral_light`, sem borda, cantos retos; barra superior de 0,08 na cor do status |
| Rótulo | +0,2 | +0,25 | 2,46 | 0,4 | 12 a 14 pt, `neutral_mid`, caixa alta opcional |
| Valor | +0,2 | +0,7 | 2,46 | 1,0 | 40 a 48 pt, bold, `neutral_dark` |
| Delta / comparação | +0,2 | +1,75 | 2,46 | 0,5 | 12 a 14 pt, na cor do status, com sinal ou texto ("+6% vs. orç.", "meta 75%") |
| Área inferior (opcional) | 0,5 | 4,6 | 12,33 | 2,0 | gráfico pequeno, tabela curta ou bullets de contexto |

Para 3 KPIs: width 3,91, passo 4,21. Para 5: width 2,24, passo 2,52. Para 6: width 1,84, passo 2,1 (fonte do valor 32 pt).

## Regras
- Status obrigatório: `success`, `warning`, `danger`, `neutral`. Cor + texto no delta (não só cor).
- Valor com unidade curta ("R$ 8,2 mi", "68%", "4.120 pç").
- Delta sempre com referência ("vs. meta", "vs. ano anterior").
- Ordem: do mais importante para o menos, ou na ordem fixa do painel (operacional).
- Mesma ordem e mesmos KPIs em todos os períodos.

## Spec
```json
{
  "type": "kpi_row", "title": "4 de 5 dimensões no verde; prazo em amarelo",
  "kpis": [
    {"label": "Escopo", "value": "OK", "delta": "sem mudanças", "status": "success"},
    {"label": "Prazo", "value": "-2 sem", "delta": "marco 3", "status": "warning"},
    {"label": "Custo", "value": "-3%", "delta": "vs. orçamento", "status": "success"},
    {"label": "Riscos", "value": "1 crítico", "delta": "fornecedor X", "status": "danger"}
  ],
  "source": "PMO, base 01/09/2026"
}
```
