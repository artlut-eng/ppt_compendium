"""
Gera agent-index.json na raiz do repositorio: indice legivel por maquina de todos os documentos,
esquemas, paletas e scripts, com titulo, resumo (primeiro paragrafo) e "quando ler".

Uso:
    python 06-codigo/python-pptx/build_index.py
Rodar sempre que um arquivo .md for adicionado ou renomeado; o indice e commitado.
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from deckbuilder import ROOT  # noqa: E402

WHEN = {
    "00-guia": "Sempre: fluxo, briefing, modos de conducao, regras de dados; ler antes de qualquer deck",
    "01-fundamentos": "Ao escrever titulos, escolher fontes/cores, montar o grid ou formatar numeros",
    "02-publicos": "Ao definir nivel do publico e estilo do decisor (passo 1)",
    "03-tipos-de-apresentacao": "Ao escolher o tipo de deck (passo 2); ler apenas o arquivo do tipo escolhido",
    "04-modelos-de-slides": "Ao montar cada slide (passo 4); ler apenas os modelos usados",
    "05-artefatos-visuais": "Ao escolher paleta, grafico, logotipo ou template",
    "06-codigo": "Ao gerar, renderizar, auditar, pontuar ou extrair decks; ao perfilar uma base de dados",
    "07-checklists": "Antes da entrega (passo 7) e ao revisar um deck",
    "schemas": "Ao escrever a spec JSON de um deck",
    "examples": "Para ver o resultado renderizado de cada tipo e modelo",
}
SKIP_DIRS = {".git", "thumbnails", "__pycache__", "node_modules"}


def first_paragraph(text: str) -> tuple[str, str]:
    lines = text.splitlines()
    title = next((l.lstrip("# ").strip() for l in lines if l.startswith("# ")), "")
    body = []
    started = False
    for l in lines:
        if l.startswith("# "):
            started = True
            continue
        if not started:
            continue
        s = l.strip()
        if not s or s.startswith("#") or s.startswith("|") or s.startswith("```") or s.startswith("- ") or s.startswith("!"):
            if body:
                break
            continue
        body.append(s)
        if len(" ".join(body)) > 220:
            break
    summary = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", " ".join(body))
    summary = re.sub(r"[*`]", "", summary)
    return title, (summary[:240] + "...") if len(summary) > 240 else summary


def git_version() -> str:
    try:
        out = subprocess.run(["git", "rev-parse", "--short", "HEAD"], cwd=ROOT, capture_output=True, text=True, check=True)
        return out.stdout.strip()
    except Exception:  # noqa: BLE001
        return "unknown"


def main() -> int:
    entries = []
    for p in sorted(ROOT.rglob("*")):
        if any(part in SKIP_DIRS for part in p.parts) or not p.is_file():
            continue
        rel = p.relative_to(ROOT).as_posix()
        top = rel.split("/")[0]
        if p.suffix == ".md":
            title, summary = first_paragraph(p.read_text(encoding="utf-8", errors="replace"))
            kind = "doc"
        elif p.suffix == ".json" and top in ("schemas", "05-artefatos-visuais"):
            title, summary, kind = p.stem, ("Paleta de cores por papel" if "paletas" in rel else "Spec de exemplo" if "exemplos" in rel else "JSON Schema da spec de deck"), "data"
        elif p.suffix in (".py", ".js") and top == "06-codigo":
            src = p.read_text(encoding="utf-8", errors="replace")
            m = re.search(r'"""\s*\n?(.*?)\n\n', src, re.S) or re.search(r"/\*\*\s*\n\s*\*\s*(.*?)\n", src)
            title, summary, kind = p.name, (m.group(1).strip().replace("\n", " ")[:240] if m else ""), "code"
        elif p.suffix == ".pptx" and top == "examples":
            title, summary, kind = p.stem, "Deck de exemplo gerado a partir de schemas/exemplos", "example"
        elif p.suffix == ".png" and top == "05-artefatos-visuais":
            title, summary, kind = p.stem, "Imagem placeholder para testes", "asset"
        else:
            continue
        entries.append({"path": rel, "kind": kind, "title": title, "summary": summary, "when_to_read": WHEN.get(top, "")})

    index = {
        "name": "ppt_compendium",
        "version": git_version(),
        "generated": date.today().isoformat(),
        "language": "pt-BR (guias resumidos em ingles: README.en.md, 00-guia/como-usar.en.md)",
        "entry_points": {
            "start_here": "00-guia/como-usar.md",
            "agent_prompt": "00-guia/prompt-base-para-agentes.md",
            "agent_prompt_short": "00-guia/prompt-curto-para-agentes.md",
            "briefing": "00-guia/briefing.md",
            "deck_types": "03-tipos-de-apresentacao/README.md",
            "slide_models": "04-modelos-de-slides/README.md",
            "spec_schema": "schemas/deck-spec.schema.json",
            "generator": "06-codigo/python-pptx/build_from_spec.py",
            "audit": "06-codigo/python-pptx/audit_deck.py",
        },
        "reading_order": ["00-guia/como-usar.md", "00-guia/briefing.md", "02-publicos/README.md", "03-tipos-de-apresentacao/README.md", "04-modelos-de-slides/README.md", "07-checklists/pre-entrega.md"],
        "modes": {"direto": "premissas padrao declaradas, entrega unica", "guiado": "2 a 4 perguntas por turno com padrao proposto, maximo 8 rodadas, roteiro aprovado antes de produzir", "caminho_curto": "um slide ou ajuste, sem roteiro nem auditoria completa", "revisao": "extrair, teste dos titulos, plano por slide", "realinhamento": "listar o que muda, perguntar em blocos, sintese"},
        "files": entries,
    }
    out = ROOT / "agent-index.json"
    out.write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{out}: {len(entries)} entradas, versao {index['version']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
