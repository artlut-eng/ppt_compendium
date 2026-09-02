# Exemplos gerados

Decks `.pptx` produzidos automaticamente pelo código base a partir das specs em `schemas/exemplos/` (que por sua vez são os blocos JSON de `03-tipos-de-apresentacao/*.md`).

| Arquivo | Origem |
|---|---|
| `<tipo>.pptx` | `python 06-codigo/python-pptx/build_examples.py` |
| `todos-os-modelos.pptx` | `schemas/exemplos/todos-os-modelos.json`: um slide de cada modelo (23 slides) |
| `relatorio-financeiro-js.pptx` | Gerado pela versão JavaScript (`06-codigo/pptxgenjs/deckbuilder.js`) |

Regere tudo com:
```bash
python 06-codigo/python-pptx/build_examples.py
python 06-codigo/python-pptx/build_from_spec.py schemas/exemplos/todos-os-modelos.json examples/todos-os-modelos.pptx
```
