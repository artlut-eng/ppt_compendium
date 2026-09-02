# PptxGenJS: DeckBuilder (JavaScript)

Versão em Node.js da biblioteca base, com a mesma spec JSON e as mesmas coordenadas de grid da versão Python.

## Instalação
```bash
npm install pptxgenjs
```

## Uso a partir de spec
```bash
node deckbuilder.js ../../schemas/exemplos/relatorio-de-projeto.json saida.pptx
```

## Uso programático
```js
const { DeckBuilder } = require("./deckbuilder");
const db = new DeckBuilder({ palette: "vendas-energetica" });
db.addCover({ title: "Vendas agosto/26", subtitle: "Diretoria Comercial" });
db.addKpiRow({ title: "Ticket médio subiu 8%", kpis: [
  { label: "Receita", value: "R$ 4,7 mi", delta: "94% da meta", status: "warning" },
  { label: "Ticket médio", value: "R$ 18,2 mil", delta: "+8%", status: "success" },
]});
db.addChart({ title: "Sudeste responde por todo o gap", chart_type: "bar",
  categories: ["Sul", "Nordeste", "Sudeste"],
  series: [{ name: "Meta", values: [1.2, 0.8, 2.4] }, { name: "Real", values: [1.35, 0.8, 2.0] }], source: "CRM" });
db.addClosing({ title: "Próxima revisão: 01/10" });
await db.save("vendas.pptx");
```

## Modelos implementados
`cover`, `section`, `agenda`, `executive_summary`, `kpi_row`, `big_number`, `bullets`, `two_column`, `chart`, `table`, `action_plan`, `closing`.

Ainda não implementados nesta versão (use a versão Python ou implemente seguindo `04-modelos-de-slides/`): `comparison`, `timeline`, `process`, `matrix_2x2`, `quote`, `status_columns` e `highlight_rows` em tabelas, `highlight_index` em gráficos.

## Diferenças em relação à versão Python
- PptxGenJS não usa placeholder nativo de título; o título é uma caixa de texto na mesma posição.
- Gráficos usam as opções nativas do PptxGenJS (`chartColors`, `valGridLine`, `showValue`), que cobrem o mesmo estilo (sem título interno, grade horizontal clara, legenda embaixo).
- Bullets usam `bullet: { indent: 18 }` do PptxGenJS.
