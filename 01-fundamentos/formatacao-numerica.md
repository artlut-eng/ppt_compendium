# Formatação numérica (pt-BR)

Números inconsistentes entre slides ("R$ 1.234.567", "1,2 mi", "1.23M") destroem a credibilidade. Regras únicas para todo o deck, implementadas em `06-codigo/python-pptx/fmt.py`.

| Caso | Regra | Exemplo |
|---|---|---|
| Separadores | milhar `.`, decimal `,` | 1.234.567,8 |
| Inteiros grandes em texto/KPI | escala automática: mil (a partir de 10 mil), mi (1 milhão), bi | R$ 68,6 mil; R$ 1,2 mi; R$ 4 bi |
| Casas decimais na escala | 1 casa abaixo de 100; 0 acima | R$ 8,2 mi; R$ 120 mi |
| Moeda | símbolo, espaço, valor | R$ 8,2 mi (não R$8,2mi) |
| Negativos financeiros | parênteses em tabelas; sinal em texto | (0,8); -R$ 0,8 mi |
| Percentual | 1 casa abaixo de 10%, 0 casas acima; sempre com % colado | 4,3%; 76% |
| Diferença entre percentuais | pontos percentuais | +1,8 p.p. |
| Variações | sinal explícito | +6,5%; -2 sem |
| Base pequena (< 30) | "x de y (z%)" | 2 de 5 (40%) |
| Cobertura de média | n ao lado | 39,9 dias (n=13) |
| Dias, horas | unidade abreviada com espaço | 62 d; 4 h; 310 min |
| Datas | dd/mm ou mês abreviado | 15/09; set/26 |
| Períodos | trimestre + ano curto | 3T26; jan a ago/26 |
| Múltiplos | x minúsculo | 2,1x; 1,40x |
| Tabelas | alinhar à direita, mesma quantidade de casas por coluna, unidade no cabeçalho | "R$ mi" no cabeçalho, não em cada célula |
| Gráficos | unidade no subtítulo ou eixo; rótulos com o mesmo formato da tabela | subtítulo "R$ mi, jan a ago/26" |

## Funções
```python
from fmt import fmt_number, fmt_currency, fmt_pct, fmt_pp, fmt_delta, fmt_ratio, auto
fmt_currency(1234567)            # 'R$ 1,2 mi'
fmt_pct(0.0431, ratio=True)      # '4,3%'
fmt_delta(41.3, 42.1)            # '-1,9%'
fmt_ratio(54, 71)                # '54 de 71 (76%)'
fmt_pp(1.8)                      # '+1,8 p.p.'
```
Em `kpi_row`, um `value` numérico é formatado automaticamente com `auto()`; para moeda, passe a string já formatada ou use `fmt_currency`.
