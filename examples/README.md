# Exemplos gerados

Decks `.pptx` produzidos automaticamente pelo código base a partir das specs em `schemas/exemplos/` (que por sua vez são os blocos JSON de `03-tipos-de-apresentacao/*.md`).

| Arquivo | Origem |
|---|---|
| `<tipo>.pptx` | `python 06-codigo/python-pptx/build_examples.py` |
| `todos-os-modelos.pptx` | `schemas/exemplos/todos-os-modelos.json`: um slide de cada modelo, com kicker, callouts, logo, tabela paginada em anexo (36 slides) |
| `todos-os-modelos-js.pptx` | O mesmo catálogo gerado pela versão JavaScript (`06-codigo/pptxgenjs/deckbuilder.js`) |
| `template-exemplo.pptx` | Subconjunto gerado sobre o template corporativo de exemplo (`meta.template`, `template_branding`) |

Miniaturas PNG (1280 px) de cada slide em `thumbnails/<deck>/slide-NN.png`, geradas pelo PowerPoint via `06-codigo/python-pptx/render_thumbnails.py`. Use-as para revisar visualmente um modelo sem abrir o arquivo.

Regere tudo com:
```bash
python 06-codigo/python-pptx/build_examples.py
python 06-codigo/python-pptx/build_from_spec.py schemas/exemplos/todos-os-modelos.json examples/todos-os-modelos.pptx
python 06-codigo/python-pptx/render_thumbnails.py
```
