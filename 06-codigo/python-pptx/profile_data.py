"""
Perfil de uma base de dados (xlsx, csv) para orientar a construcao de um deck.

Gera um relatorio (Markdown e JSON) com: colunas e tipos, cobertura (% preenchido), periodo
coberto por cada coluna de data, registros com data futura, cardinalidade e top valores das
categoricas, resumo das numericas, alertas de qualidade (coortes imaturas, campos vazios,
duplicatas, outliers) e sugestoes de KPIs, segmentacoes e graficos.

Opcionalmente emite um esqueleto de spec (schemas/deck-spec.schema.json) com placeholders
para a IA preencher.

Uso:
    python profile_data.py base.xlsx [--sheet NOME] [--out perfil.md] [--json perfil.json]
                           [--cutoff AAAA-MM-DD] [--spec esqueleto.json] [--title "Titulo"]

Requisitos: pandas, openpyxl.
"""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path

import pandas as pd

sys.path.insert(0, str(Path(__file__).resolve().parent))
from fmt import fmt_number, fmt_pct  # noqa: E402

KPI_HINTS = {
    "prazo": ["% dentro do prazo", "atraso medio (dias)", "mediana de atraso"],
    "status": ["distribuicao por status", "% concluido", "itens em espera/revisao"],
    "aprov": ["taxa de aprovacao", "reprovacoes por causa"],
    "valor": ["total", "media por item", "saving/variacao vs. orcado"],
    "orcad": ["realizado vs. orcado", "variacao %"],
    "risco": ["% em risco alto", "riscos por categoria"],
    "priorid": ["eficacia da priorizacao (atraso por prioridade)"],
    "respons": ["carga por responsavel (balanceamento, nao avaliacao)"],
    "meta": ["atingimento da meta (real / meta)"],
}


def load(path: Path, sheet: str | None) -> tuple[pd.DataFrame, str]:
    if path.suffix.lower() in (".csv", ".tsv", ".txt"):
        sep = "\t" if path.suffix.lower() == ".tsv" else None
        return pd.read_csv(path, sep=sep, engine="python"), path.name
    xl = pd.ExcelFile(path)
    name = sheet or xl.sheet_names[0]
    return xl.parse(name), name


def coerce_dates(df: pd.DataFrame) -> pd.DataFrame:
    for c in df.columns:
        if df[c].dtype == object:
            sample = df[c].dropna().astype(str).head(20)
            if len(sample) and sample.str.match(r"^\d{4}-\d{2}-\d{2}|^\d{2}/\d{2}/\d{4}").mean() > 0.7:
                df[c] = pd.to_datetime(df[c], errors="coerce", dayfirst=True)
    return df


def profile(df: pd.DataFrame, cutoff: datetime | None) -> dict:
    n = len(df)
    cutoff = cutoff or datetime.now()
    cols = []
    alerts = []
    date_cols, num_cols, cat_cols = [], [], []
    for c in df.columns:
        s = df[c]
        filled = int(s.notna().sum())
        info = {"coluna": str(c), "tipo": str(s.dtype), "preenchido": filled, "cobertura_pct": round(100 * filled / n, 1) if n else 0}
        if pd.api.types.is_datetime64_any_dtype(s):
            date_cols.append(c)
            d = s.dropna()
            if len(d):
                info.update({"min": d.min().date().isoformat(), "max": d.max().date().isoformat(),
                             "futuros": int((d > cutoff).sum())})
                if info["futuros"]:
                    alerts.append(f"'{c}': {info['futuros']} registros com data posterior ao corte ({cutoff.date()}); tratar como programacao, nao como realizado.")
                # coorte imatura: ultimos 2 periodos mensais com volume < 60% da mediana
                monthly = d.dt.to_period("M").value_counts().sort_index()
                if len(monthly) >= 4:
                    med = monthly.iloc[:-2].median()
                    tail = monthly.iloc[-2:]
                    weak = [str(p) for p, v in tail.items() if v < 0.6 * med]
                    if weak:
                        alerts.append(f"'{c}': periodos {weak} com volume bem abaixo da mediana; coortes recentes podem estar imaturas ou incompletas.")
        elif pd.api.types.is_numeric_dtype(s):
            num_cols.append(c)
            d = s.dropna()
            if len(d):
                q1, q3 = d.quantile(0.25), d.quantile(0.75)
                iqr = q3 - q1
                outliers = int(((d < q1 - 3 * iqr) | (d > q3 + 3 * iqr)).sum()) if iqr > 0 else 0
                info.update({"min": float(d.min()), "max": float(d.max()), "media": float(d.mean()), "mediana": float(d.median()), "soma": float(d.sum()), "outliers": outliers})
                if outliers:
                    alerts.append(f"'{c}': {outliers} valores extremos (fora de 3x IQR); conferir antes de calcular medias.")
        else:
            cat_cols.append(c)
            vc = s.dropna().astype(str).value_counts()
            info.update({"cardinalidade": int(vc.shape[0]), "top": [{"valor": k, "n": int(v)} for k, v in vc.head(8).items()]})
            if vc.shape[0] and vc.shape[0] <= 12 and "outro" in " ".join(vc.index[:3]).lower():
                alerts.append(f"'{c}': categoria 'Outros' entre as mais frequentes; classificacao pode estar fraca para um Pareto.")
        if 0 < info["cobertura_pct"] < 70:
            alerts.append(f"'{c}': apenas {info['cobertura_pct']}% preenchido; toda media sobre esta coluna precisa declarar a cobertura (n={filled}).")
        cols.append(info)

    dups = int(df.duplicated().sum())
    if dups:
        alerts.append(f"{dups} linhas duplicadas.")
    id_cols = [c for c in df.columns if str(c).lower() in ("id", "codigo", "código") or str(c).lower().startswith("id ")]
    for c in id_cols:
        d = int(df[c].duplicated().sum())
        if d:
            alerts.append(f"'{c}': {d} identificadores repetidos.")

    # sugestoes
    kpis = []
    for c in df.columns:
        lc = str(c).lower()
        for key, hints in KPI_HINTS.items():
            if key in lc:
                kpis += [f"{h} (a partir de '{c}')" for h in hints]
    if len(date_cols) >= 2:
        kpis.append(f"tempo entre etapas: {', '.join(str(c) for c in date_cols)} (declarar cobertura de cada par)")
    segs = [str(c) for c in cat_cols if 2 <= next((x["cardinalidade"] for x in cols if x["coluna"] == str(c)), 0) <= 12]
    charts = []
    if date_cols:
        charts.append("evolucao mensal do indicador principal: `chart` column/line, com ressalva de coorte (`callout` warning)")
    if segs:
        charts.append(f"comparacao por {segs[0]}: `chart` bar ordenado com `highlight_index`, ou `progress_bars`")
    if any(x["cobertura_pct"] < 90 for x in cols):
        charts.append("qualidade do dado: `progress_bars` com % sem registro por campo")
    if any("causa" in str(c).lower() or "motivo" in str(c).lower() for c in cat_cols):
        charts.append("causas: Pareto (`chart` bar decrescente ou `pareto`)")
    if len(date_cols) >= 2:
        charts.append("fluxo por etapa: `process` com `metrics` (tempo medio por etapa)")

    return {
        "linhas": n, "colunas": len(df.columns), "corte": cutoff.date().isoformat(),
        "colunas_detalhe": cols, "colunas_data": [str(c) for c in date_cols], "colunas_numericas": [str(c) for c in num_cols],
        "colunas_categoricas": [str(c) for c in cat_cols], "segmentacoes_sugeridas": segs,
        "kpis_sugeridos": sorted(set(kpis)), "graficos_sugeridos": charts, "alertas": alerts,
    }


def to_markdown(pr: dict, source: str) -> str:
    out = [f"# Perfil da base: {source}", "",
           f"- Linhas: {fmt_number(pr['linhas'])} | Colunas: {pr['colunas']} | Corte: {pr['corte']}", ""]
    out += ["## Colunas", "", "| Coluna | Tipo | Cobertura | Resumo |", "|---|---|---|---|"]
    for c in pr["colunas_detalhe"]:
        if "top" in c:
            res = f"{c['cardinalidade']} valores; top: " + ", ".join(f"{t['valor']} ({t['n']})" for t in c["top"][:4])
        elif "media" in c:
            res = f"min {fmt_number(c['min'])} | mediana {fmt_number(c['mediana'])} | media {fmt_number(c['media'])} | max {fmt_number(c['max'])}"
        elif "min" in c:
            res = f"{c['min']} a {c['max']}" + (f" | {c['futuros']} futuros" if c.get("futuros") else "")
        else:
            res = ""
        out.append(f"| {c['coluna']} | {c['tipo']} | {fmt_pct(c['cobertura_pct'], 0)} (n={c['preenchido']}) | {res} |")
    out += ["", "## Alertas de qualidade", ""] + ([f"- {a}" for a in pr["alertas"]] or ["- Nenhum alerta automatico."])
    out += ["", "## KPIs candidatos", ""] + ([f"- {k}" for k in pr["kpis_sugeridos"]] or ["- (nenhum nome de coluna reconhecido; definir manualmente)"])
    out += ["", "## Segmentacoes sugeridas", "", "- " + (", ".join(pr["segmentacoes_sugeridas"]) or "nenhuma categorica com 2 a 12 valores")]
    out += ["", "## Graficos e modelos sugeridos", ""] + [f"- {g}" for g in pr["graficos_sugeridos"]]
    out += ["", "## Proximos passos", "", "1. Confirmar o corte temporal e o tratamento dos registros futuros.",
            "2. Escolher 4 a 6 KPIs e o indicador principal da evolucao.", "3. Escrever a mensagem central (00-guia/briefing.md).",
            "4. Preencher o esqueleto de spec (--spec) e gerar com build_from_spec.py.", ""]
    return "\n".join(out)


def spec_skeleton(pr: dict, title: str, source: str) -> dict:
    gaps = [c for c in pr["colunas_detalhe"] if c["cobertura_pct"] < 90][:6]
    slides = [
        {"type": "cover", "kicker": "[AREA / TEMA]", "title": title, "subtitle": f"Leitura da base {source} | corte {pr['corte']}", "thesis": "[TESE CENTRAL EM UMA FRASE]"},
        {"type": "kpi_row", "kicker": "Visao geral", "title": "[CONCLUSAO SOBRE OS KPIS]",
         "kpis": [{"label": k.split(" (")[0][:28], "value": "[valor]", "delta": "[cobertura / comparacao]", "status": "neutral"} for k in pr["kpis_sugeridos"][:4]] or [{"label": "[KPI]", "value": "[valor]"}],
         "source": f"{source}, corte {pr['corte']} (n={pr['linhas']})", "callout": {"kind": "conclusion", "label": "Conclusao", "text": "[LEITURA EXECUTIVA]"}},
    ]
    if pr["colunas_data"]:
        slides.append({"type": "chart", "kicker": "Evolucao", "title": "[CONCLUSAO SOBRE A TENDENCIA]", "chart_type": "column", "categories": ["[mes 1]", "[mes 2]", "[mes 3]"],
                       "series": [{"name": "[indicador]", "values": [0, 0, 0]}], "source": source,
                       "callout": {"kind": "warning", "label": "Cuidado de leitura", "text": "Periodos recentes tem menor tempo de exposicao; a variacao nao deve ser lida isoladamente."}})
    if pr["segmentacoes_sugeridas"]:
        seg = pr["segmentacoes_sugeridas"][0]
        slides.append({"type": "chart", "kicker": "Segmentacao", "title": f"[CONCLUSAO POR {seg.upper()}]", "chart_type": "bar", "categories": ["[a]", "[b]", "[c]"],
                       "series": [{"name": "[indicador]", "values": [0, 0, 0]}], "highlight_index": 0, "source": source})
    if gaps:
        slides.append({"type": "progress_bars", "kicker": "Qualidade do dado", "title": "[ONDE FALTAM REGISTROS]",
                       "items": [{"label": g["coluna"], "value": round(100 - g["cobertura_pct"], 1), "display": f"{pr['linhas'] - g['preenchido']} sem registro ({round(100 - g['cobertura_pct'])}%)",
                                  "status": "danger" if g["cobertura_pct"] < 50 else "warning"} for g in gaps],
                       "callout": {"kind": "decision", "label": "Controle minimo", "text": "[REGRA DE REGISTRO PROPOSTA]"}})
    slides.append({"type": "takeaways", "kicker": "Proximos passos", "title": "[O QUE FAZER E QUANDO]",
                   "items": [{"tag": "Agora", "heading": "[acao]", "text": "[detalhe]"}, {"tag": "Proximas semanas", "heading": "[acao]", "text": "[detalhe]"}, {"tag": "Apos 30 dias", "heading": "[acao]", "text": "[detalhe]"}],
                   "callout": {"kind": "decision", "label": "Decisao esperada", "text": "[O QUE SE PEDE AO PUBLICO]"}})
    return {"meta": {"title": title, "audience": "tatico", "type": "analise-de-processo", "palette": "corporativa-azul", "exposure": "interareas",
                     "brand": "[EMPRESA]", "deck_name": "[DECK]", "date": pr["corte"]}, "slides": slides}


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("file")
    ap.add_argument("--sheet")
    ap.add_argument("--out", help="relatorio Markdown (padrao: <base>_perfil.md)")
    ap.add_argument("--json", help="perfil em JSON")
    ap.add_argument("--cutoff", help="data de corte AAAA-MM-DD (padrao: hoje)")
    ap.add_argument("--spec", help="gera esqueleto de spec neste caminho")
    ap.add_argument("--title", default="[TITULO DO DECK]")
    a = ap.parse_args(argv)
    path = Path(a.file)
    df, sheet = load(path, a.sheet)
    df = coerce_dates(df)
    cutoff = datetime.fromisoformat(a.cutoff) if a.cutoff else None
    pr = profile(df, cutoff)
    source = f"{path.name} ({sheet})"
    md = to_markdown(pr, source)
    out = Path(a.out) if a.out else path.with_name(path.stem + "_perfil.md")
    out.write_text(md, encoding="utf-8")
    print(md)
    if a.json:
        Path(a.json).write_text(json.dumps(pr, ensure_ascii=False, indent=2, default=str), encoding="utf-8")
    if a.spec:
        Path(a.spec).write_text(json.dumps(spec_skeleton(pr, a.title, path.name), ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"\nEsqueleto de spec: {a.spec}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
