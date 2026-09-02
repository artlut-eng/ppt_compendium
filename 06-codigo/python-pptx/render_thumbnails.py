"""
Renderiza cada .pptx de uma pasta em PNGs (um por slide) usando o PowerPoint instalado
(automacao COM, Windows). Saida: <out>/<nome-do-deck>/slide-01.png ...

Uso:
    python render_thumbnails.py [--src examples] [--out examples/thumbnails] [--width 1280]

Requisitos: Windows + Microsoft PowerPoint + pywin32 (pip install pywin32).
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from deckbuilder import ROOT  # noqa: E402


def render(src: Path, out: Path, width: int) -> int:
    import win32com.client  # type: ignore

    app = win32com.client.Dispatch("PowerPoint.Application")
    files = sorted(src.glob("*.pptx"))
    n = 0
    try:
        for f in files:
            dest = out / f.stem
            dest.mkdir(parents=True, exist_ok=True)
            for old in dest.glob("*.png"):
                old.unlink()
            pres = app.Presentations.Open(str(f.resolve()), ReadOnly=True, Untitled=False, WithWindow=False)
            try:
                height = int(width * pres.PageSetup.SlideHeight / pres.PageSetup.SlideWidth)
                for i, slide in enumerate(pres.Slides, start=1):
                    slide.Export(str((dest / f"slide-{i:02d}.png").resolve()), "PNG", width, height)
                    n += 1
                print(f"[ok] {f.name}: {pres.Slides.Count} slides -> {dest}")
            finally:
                pres.Close()
    finally:
        app.Quit()
    return n


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", default=str(ROOT / "examples"))
    ap.add_argument("--out", default=str(ROOT / "examples" / "thumbnails"))
    ap.add_argument("--width", type=int, default=1280)
    a = ap.parse_args(argv)
    n = render(Path(a.src), Path(a.out), a.width)
    print(f"{n} imagens geradas")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
