"""
Pontua um deck pela rubrica (07-checklists/rubrica-de-qualidade.md): calcula os criterios
automatizaveis e deixa os manuais em branco na folha de pontuacao.

Uso:
    python score_deck.py deck.pptx [--audience tatico] [--out folha.md] [--manual A3=2,B3=1,...]
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from audit_deck import audit  # noqa: E402
from extract_deck import extract, is_conclusion  # noqa: E402

RANGES = {"estrategico": (6, 15), "tatico": (10, 25), "operacional": (1, 12), "externo": (8, 20)}
WEIGHTS = {"A": 0.30, "B": 0.25, "C": 0.20, "D": 0.10, "E": 0.15}
CRITERIA = {
    "A": ["A1", "A2", "A3", "A4", "A5"], "B": ["B1", "B2", "B3", "B4", "B5"],
    "C": ["C1", "C2", "C3", "C4", "C5"], "D": ["D1", "D2", "D3"], "E": ["E1", "E2", "E3", "E4"],
}
MANUAL = {"A3", "B3", "B4", "B5", "C4", "C5", "E3", "E4"}


def band(x: float, good: float, mid: float) -> int:
    return 2 if x >= good else 1 if x >= mid else 0


def score(path: Path, audience: str, manual: dict[str, int]) -> tuple[dict, dict, list[str]]:
    deck = extract(path)
    findings = audit(path, audience, expect_logo=True)
    content = [s for s in deck["slides"] if not s["fundo_escuro"]]
    n_content = max(len(content), 1)
    notes: list[str] = []
    sc: dict[str, int | None] = {}

    # A1: mensagem central (tese na capa, sumario executivo ou titulo longo no slide 2)
    first_titles = " ".join(s["titulo"] for s in deck["slides"][:2]).lower()
    texts2 = " ".join(t["texto"] for s in deck["slides"][:2] for t in s["textos"]).lower()
    a1 = 2 if ("sumário executivo" in first_titles or "sumario executivo" in first_titles or "tese" in texts2 or "pedimos" in texts2) else (1 if deck["slides"] and is_conclusion(deck["slides"][min(1, len(deck["slides"]) - 1)]["titulo"])[0] else 0)
    sc["A1"] = a1
    ok_titles = sum(1 for s in content if is_conclusion(s["titulo"])[0])
    pct = ok_titles / n_content
    sc["A2"] = band(pct, 0.85, 0.6)
    notes.append(f"A2: {ok_titles} de {n_content} títulos de conteúdo são conclusões ({pct:.0%})")
    last = [s for s in deck["slides"] if not s["fundo_escuro"]][-1:] or deck["slides"][-1:]
    last_text = " ".join([last[0]["titulo"]] + [t["texto"] for t in last[0]["textos"]]).lower() if last else ""
    sc["A4"] = 2 if any(k in last_text for k in ("decis", "pedimos", "aprov", "próximos passos", "proximos passos", "dono", "responsável", "prazo")) else 0
    multi = sum(1 for s in content if len(s["graficos"]) > 1 or any("linhas/bullets" in d for d in s["diagnostico"]))
    sc["A5"] = band(1 - multi / n_content, 0.95, 0.8)
    # B1: fonte em slides com dado
    with_data = [s for s in content if s["graficos"] or s["tabelas"]]
    if with_data:
        with_src = sum(1 for s in with_data if not any("sem fonte" in d for d in s["diagnostico"]))
        sc["B1"] = band(with_src / len(with_data), 0.9, 0.6)
        notes.append(f"B1: {with_src} de {len(with_data)} slides com dado têm fonte")
    else:
        sc["B1"] = 1
        notes.append("B1: deck sem gráficos/tabelas (pontuação neutra)")
    # B2: comparacao/cobertura (heuristica: presenca de 'vs', 'meta', 'n=', '%', 'p.p.')
    body = " ".join(t["texto"].lower() for s in content for t in s["textos"])
    hits = sum(body.count(k) for k in (" vs", "meta", "n=", "p.p.", "de "))
    sc["B2"] = 2 if hits >= n_content else 1 if hits >= n_content / 2 else 0
    # C
    errors = [f for f in findings if f.severity == "erro"]
    warnings = [f for f in findings if f.severity == "aviso"]
    sc["C1"] = 2 if not errors else 1 if len(errors) <= 2 else 0
    per_slide = len(warnings) / max(len(deck["slides"]), 1)
    sc["C2"] = 2 if per_slide < 0.5 else 1 if per_slide < 1.5 else 0
    chart_issues = sum(1 for f in warnings if "grafico" in f.issue or "gráfico" in f.issue or "series" in f.issue)
    sc["C3"] = 2 if chart_issues == 0 else 1 if chart_issues <= 2 else 0
    notes.append(f"C: {len(errors)} erros, {len(warnings)} avisos do validador ({per_slide:.2f} por slide)")
    # D
    sc["D1"] = 0 if any(f.element == "logotipo" for f in findings) else 2
    sc["D2"] = 1 if any(f.element == "fontes" for f in findings) else 2
    foot = " ".join(t["texto"].lower() for s in content for t in s["textos"] if (t["top"] or 0) >= 6.6)
    sc["D3"] = 2 if any(k in foot for k in ("uso interno", "confidencial", "interno")) else 1 if foot else 0
    # E
    lo, hi = RANGES.get(audience, (8, 25))
    n = len(content)
    sc["E1"] = 2 if lo <= n <= hi else 1 if lo * 0.7 <= n <= hi * 1.3 else 0
    notes.append(f"E1: {n} slides de conteúdo (faixa {lo} a {hi} para {audience})")
    font_err = [f for f in errors if "fonte" in f.issue and "pt" in f.issue]
    sc["E2"] = 2 if not font_err else 1 if len(font_err) <= 2 else 0
    for m in MANUAL:
        sc[m] = manual.get(m)
    # totals
    dims = {}
    for d, crits in CRITERIA.items():
        vals = [sc[c] for c in crits if sc.get(c) is not None]
        dims[d] = round(100 * sum(vals) / (2 * len(vals))) if vals else None
    total = round(sum(WEIGHTS[d] * (dims[d] or 0) for d in dims) / sum(WEIGHTS[d] for d in dims if dims[d] is not None)) if any(v is not None for v in dims.values()) else 0
    dims["total"] = total
    return sc, dims, notes


def sheet(path: Path, audience: str, sc: dict, dims: dict, notes: list[str]) -> str:
    def cell(c):
        v = sc.get(c)
        return "_" if v is None else str(v)
    names = {"A": "Narrativa", "B": "Dados", "C": "Visual", "D": "Identidade", "E": "Público"}
    out = [f"# Folha de pontuação: {path.name}", "", f"Público: {audience} | Critérios manuais em branco (`_`) devem ser preenchidos pelo revisor.", ""]
    for d, crits in CRITERIA.items():
        line = " ".join(f"{c} {cell(c)}" for c in crits)
        out.append(f"- **{d} {names[d]}** ({int(WEIGHTS[d]*100)}%): {line}  ->  {dims[d] if dims[d] is not None else '_'} /100")
    verdict = "pronto para entrega" if dims["total"] >= 85 else "aprovado com ressalvas" if dims["total"] >= 70 else "retrabalhar"
    out += ["", f"**Total (parcial, só automáticos e manuais informados): {dims['total']} /100 -> {verdict}**", "", "## Observações automáticas", ""] + [f"- {n}" for n in notes]
    out += ["", "Preencha os manuais com `--manual A3=2,B3=1,...` para o total definitivo.", ""]
    return "\n".join(out)


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("deck")
    ap.add_argument("--audience", default="tatico", choices=list(RANGES))
    ap.add_argument("--out")
    ap.add_argument("--manual", help="ex.: A3=2,B3=1,C4=2")
    a = ap.parse_args(argv)
    manual = {}
    if a.manual:
        for kv in a.manual.split(","):
            k, v = kv.split("=")
            manual[k.strip().upper()] = int(v)
    path = Path(a.deck)
    sc, dims, notes = score(path, a.audience, manual)
    md = sheet(path, a.audience, sc, dims, notes)
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    print(md)
    if a.out:
        Path(a.out).write_text(md, encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
