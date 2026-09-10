# PptxGenJS: DeckBuilder (JavaScript)

Versão em Node.js do gerador, com a mesma spec JSON, o mesmo grid e os mesmos modelos de slide da versão Python.

## Instalação
```bash
npm install pptxgenjs
```

## Uso a partir de spec
```bash
node deckbuilder.js ../../schemas/exemplos/todos-os-modelos.json saida.pptx
```

## Uso programático
```js
const { DeckBuilder } = require("./deckbuilder");
const db = new DeckBuilder({ palette: "vendas-energetica", brand: "Empresa Exemplo", deckName: "Vendas", logo: "05-artefatos-visuais/logo-placeholder.png" });
db.addCover({ title: "Vendas agosto/26", subtitle: "Diretoria Comercial", thesis: "Sudeste explica todo o gap da meta." });
db.addKpiRow({ kicker: "Visão geral", title: "Ticket médio subiu 8%", kpis: [
  { label: "Receita", value: "R$ 4,7 mi", delta: "94% da meta", status: "warning" },
  { label: "Ticket médio", value: "R$ 18,2 mil", delta: "+8%", status: "success" } ],
  callout: { kind: "conclusion", label: "Leitura", text: "Volume caiu, valor por venda subiu." } });
db.addPareto({ title: "Preço é o motivo de 45% das perdas", categories: ["Preço", "Prazo", "Escopo", "Outros"], values: [45, 25, 20, 10], unit: "%" });
db.addClosing({ title: "Próxima revisão: 01/10" });
await db.save("vendas.pptx");
```

## Modelos implementados
Todos os 23 tipos do schema: `cover`, `agenda`, `section`, `executive_summary`, `kpi_row`, `big_number`, `chart`, `table` (com paginação, `status_columns`, `highlight_rows`, `total_row`), `bullets` (com `sub_bullets`), `two_column`, `comparison`, `timeline`, `process` (com `metrics`), `matrix_2x2`, `action_plan` (com `headers`), `quote`, `closing`, `takeaways`, `progress_bars`, `image` (com `highlights`), `waterfall`, `pareto`, `gantt`. Campos comuns `kicker` e `callout`; meta `brand`, `deck_name`, `date`, `logo`, `logo_light`, `logo_position`, `exposure` (rodapé automático), `font_scale`.

## Diferenças em relação à versão Python
- Sem suporte a template corporativo (`meta.template`): use a versão Python.
- `highlight_index` em gráficos nativos não é aplicado (PptxGenJS colore por série); para destacar uma barra use `pareto`, `waterfall` ou `progress_bars`.
- Sem placeholder nativo de título: o título é uma caixa de texto na mesma posição do grid.
- Imagens usam `sizing: contain` (proporção preservada) sem centralização exata na área.
- Formatação numérica automática de KPIs cobre inteiros e moeda (`format: "currency"` em milhões).
