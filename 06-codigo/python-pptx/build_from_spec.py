"""
Gera um .pptx a partir de uma spec JSON (schemas/deck-spec.schema.json).

Uso:
    python build_from_spec.py spec.json saida.pptx [--template modelo.pptx] [--no-validate]

Validacao contra o schema e feita se o pacote `jsonschema` estiver instalado.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from deckbuilder import ROOT, DeckBuilder  # noqa: E402

SCHEMA_PATH = ROOT / "schemas" / "deck-spec.schema.json"


def validate(spec: dict) -> list[str]:
    """Devolve lista de erros (vazia se ok). Sem jsonschema instalado, faz checagens minimas."""
    try:
        import jsonschema  # type: ignore
    except ImportError:
        errs = []
        if "meta" not in spec or "slides" not in spec:
            errs.append("spec precisa de 'meta' e 'slides'")
        for i, sl in enumerate(spec.get("slides", [])):
            if "type" not in sl:
                errs.append(f"slide {i}: falta 'type'")
        return errs
    schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    v = jsonschema.Draft202012Validator(schema)
    return [f"{'/'.join(str(p) for p in e.path) or '<raiz>'}: {e.message}" for e in v.iter_errors(spec)]


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("spec", help="arquivo JSON da spec")
    ap.add_argument("output", help="arquivo .pptx de saida")
    ap.add_argument("--template", help=".pptx/.potx base (opcional)")
    ap.add_argument("--no-validate", action="store_true", help="pula validacao contra o schema")
    args = ap.parse_args(argv)

    spec = json.loads(Path(args.spec).read_text(encoding="utf-8"))
    if not args.no_validate:
        errs = validate(spec)
        if errs:
            print("Spec invalida:", file=sys.stderr)
            for e in errs:
                print(f"  - {e}", file=sys.stderr)
            return 2
    out = DeckBuilder.from_spec(spec, template=args.template).save(args.output)
    print(f"OK: {out} ({len(spec.get('slides', []))} slides)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
