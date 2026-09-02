# Bullets (`bullets`) e duas colunas (`two_column`)

## Bullets: quando usar
3 a 6 pontos de texto que sustentam o título. Contexto, objetivos, escopo, "o que muda para você". Se os pontos são dados, prefira `kpi_row`, `chart` ou `table`.

### Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão |
| Subtítulo (opcional) | 0,5 | 1,3 | 12,33 | 0,5 | 16 a 18 pt, `neutral_mid` |
| Lista | 0,5 | 1,9 | 8,0 (ou 12,33 se sem coluna direita) | 4,8 | 16 a 18 pt; marcador `primary`; espaço entre itens 8 pt |
| Coluna direita (opcional) | 8,8 | 1,9 | 4,03 | 4,8 | imagem, número grande ou caixa de destaque |

### Regras
- Máximo 6 bullets, 2 linhas cada. Sem sub-sub-níveis (1 nível de sub-bullet permitido, no máximo 2 por item).
- Paralelismo: todos começam com verbo, ou todos com substantivo.
- Sem ponto final nos bullets curtos; frases completas só se forem frases.
- Palavra-chave em **negrito** no início do bullet ajuda a leitura ("**Prazo:** go-live em 15/03").

### Spec
```json
{ "type": "bullets", "title": "Sucesso = lead time de 12 para 9 dias até março",
  "bullets": ["Baseline: 12 dias (jan a ago/26)", "Meta: 9 dias em 31/03/2027", "OTIF de 91% para 96%", "Sem aumento de custo logístico"],
  "sub_bullets": {"1": ["Medido na expedição", "Média móvel de 4 semanas"]} }
```

## Duas colunas: quando usar
Contraste ou pareamento: antes/depois, certo/errado, dentro/fora do escopo, funcionou/não funcionou, prós/contras.

### Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão |
| Cabeçalho esquerdo | 0,5 | 1,6 | 6,02 | 0,6 | 18 pt bold, `primary` (ou `success`/`danger` em certo/errado); linha inferior 2 pt |
| Bullets esquerdos | 0,5 | 2,4 | 6,02 | 4,3 | 14 a 16 pt |
| Cabeçalho direito | 6,82 | 1,6 | 6,02 | 0,6 | idem |
| Bullets direitos | 6,82 | 2,4 | 6,02 | 4,3 | idem |

### Regras
- Mesma quantidade de itens nos dois lados quando possível (pareamento linha a linha).
- Cores semânticas nos cabeçalhos só em certo/errado ou funcionou/não funcionou.
- Cada coluna com 3 a 5 itens.

### Spec
```json
{ "type": "two_column", "title": "Dentro: expedição e transporte. Fora: produção",
  "left": {"heading": "Dentro do escopo", "bullets": ["Processo de expedição", "Roteirização", "Integração TMS-ERP"], "status": "success"},
  "right": {"heading": "Fora do escopo", "bullets": ["Planejamento de produção", "Compras", "Troca de transportadora"], "status": "danger"} }
```
