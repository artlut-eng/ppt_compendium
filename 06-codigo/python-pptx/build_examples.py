"""
Extrai os blocos ```json das paginas de 03-tipos-de-apresentacao/*.md, salva em
schemas/exemplos/<tipo>.json e gera um .pptx de cada um em examples/.

Serve como teste de fumaca do compendio: se um exemplo da documentacao nao gera
um deck, a documentacao esta errada.

Uso:
    python build_examples.py [--out examples]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_from_spec import validate  # noqa: E402
from deckbuilder import ROOT, DeckBuilder  # noqa: E402

TYPES_DIR = ROOT / "03-tipos-de-apresentacao"
EXAMPLES_JSON_DIR = ROOT / "schemas" / "exemplos"
FENCE = re.compile(r"```json\s*\n(.*?)\n```", re.S)


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=str(ROOT / "examples"))
    args = ap.parse_args(argv)
    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)
    EXAMPLES_JSON_DIR.mkdir(parents=True, exist_ok=True)

    failures = 0
    for md in sorted(TYPES_DIR.glob("*.md")):
        if md.name == "README.md":
            continue
        blocks = FENCE.findall(md.read_text(encoding="utf-8"))
        if not blocks:
            print(f"[skip] {md.name}: sem bloco json")
            continue
        try:
            spec = json.loads(blocks[-1])
        except json.JSONDecodeError as e:
            print(f"[FAIL] {md.name}: JSON invalido ({e})")
            failures += 1
            continue
        errs = validate(spec)
        if errs:
            print(f"[FAIL] {md.name}: spec invalida")
            for e in errs:
                print(f"       - {e}")
            failures += 1
            continue
        (EXAMPLES_JSON_DIR / f"{md.stem}.json").write_text(json.dumps(spec, ensure_ascii=False, indent=2), encoding="utf-8")
        try:
            path = DeckBuilder.from_spec(spec).save(out_dir / f"{md.stem}.pptx")
            print(f"[ok]   {md.name} -> {path.name} ({len(spec['slides'])} slides)")
        except Exception as e:  # noqa: BLE001
            print(f"[FAIL] {md.name}: erro ao gerar ({type(e).__name__}: {e})")
            failures += 1
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
