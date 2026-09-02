# Código gerador

Bibliotecas base para transformar uma **spec JSON** (`schemas/deck-spec.schema.json`) em `.pptx`, aplicando automaticamente grid, paleta, tipografia e modelos de slide do compêndio.

| Pasta | Linguagem | Estado |
|---|---|---|
| [`python-pptx/`](python-pptx/README.md) | Python 3.10+, `python-pptx` | Completo: todos os 17 modelos de slide, validação de spec, geração dos exemplos |
| [`pptxgenjs/`](pptxgenjs/README.md) | Node 18+, `pptxgenjs` | Base: capa, seção, bullets, KPIs, gráfico, tabela, plano de ação, encerramento |

## Fluxo
```
spec.json  ->  build_from_spec.py  ->  deck.pptx
   ^                 |
   |                 +-- valida contra schemas/deck-spec.schema.json (jsonschema)
   |                 +-- DeckBuilder (deckbuilder.py): 1 metodo por modelo de slide
   +-- escrita pela IA a partir de 02-publicos + 03-tipos + 04-modelos
```

## Princípios do código
1. **Só papéis de cor** (`primary`, `accent`, `success`...), nunca hex solto. Trocar paleta = trocar 1 string.
2. **Coordenadas do grid** em constantes (`TITLE_BOX`, `FOOTER_BOX`, `CONTENT_W`...). Todo slide de conteúdo usa título no placeholder nativo, rodapé com fonte e número de página.
3. **Um método por modelo de slide**, com a mesma assinatura da spec (`add_kpi_row(title, kpis, ...)`).
4. **Escala de fonte** única (`font_scale`) para adaptar ao público (operacional/TV = 1,25).
5. **Estender, não copiar**: novo modelo = novo método `add_<tipo>` + entrada no `dispatch` de `add_from_spec` + definição no schema + arquivo em `04-modelos-de-slides/`.

## Teste de fumaça
```bash
python 06-codigo/python-pptx/build_examples.py
```
Extrai o bloco JSON de cada arquivo em `03-tipos-de-apresentacao/`, valida contra o schema, salva em `schemas/exemplos/` e gera um `.pptx` por tipo em `examples/`. Se um exemplo da documentação quebrar, a documentação está errada.
