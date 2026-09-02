/**
 * DeckBuilder (PptxGenJS): base em JavaScript equivalente a python-pptx/deckbuilder.py.
 * Cobre os modelos mais usados: cover, section, agenda, executive_summary, kpi_row,
 * big_number, bullets, two_column, chart, table, action_plan, closing.
 * Modelos restantes (comparison, timeline, process, matrix_2x2, quote) seguem o mesmo
 * padrao e podem ser adicionados com as coordenadas de 04-modelos-de-slides/.
 *
 * Uso:
 *   const { DeckBuilder } = require("./deckbuilder");
 *   const db = new DeckBuilder({ palette: "corporativa-azul" });
 *   db.addCover({ title: "Projeto Atlas", subtitle: "Status semana 34" });
 *   db.addKpiRow({ title: "4 de 5 no verde", kpis: [{ label: "Prazo", value: "-2 sem", status: "warning" }] });
 *   await db.save("saida.pptx");
 *
 * Ou: await DeckBuilder.fromSpec(spec).save("saida.pptx")
 *
 * Requisitos: npm install pptxgenjs
 */
"use strict";

const fs = require("fs");
const path = require("path");
const PptxGenJS = require("pptxgenjs");

const ROOT = path.resolve(__dirname, "..", "..");
const PALETTES_DIR = path.join(ROOT, "05-artefatos-visuais", "paletas");

// Grid (polegadas) - 01-fundamentos/grid-e-layout.md
const SLIDE_W = 13.333;
const SLIDE_H = 7.5;
const CONTENT_W = 12.33;
const TITLE_BOX = { x: 0.5, y: 0.4, w: 12.33, h: 0.9 };
const SUBTITLE_BOX = { x: 0.5, y: 1.3, w: 12.33, h: 0.5 };
const CONTENT_TOP_NO_SUB = 1.5;
const CONTENT_TOP_SUB = 1.9;
const CONTENT_BOTTOM = 6.7;
const FOOTER_BOX = { x: 0.5, y: 6.8, w: 12.33, h: 0.4 };
const GUTTER = 0.3;

const FS = {
  cover_title: 42, cover_sub: 22, cover_meta: 13,
  title: 28, subtitle: 16, body: 16, small: 12, footer: 10,
  kpi_label: 12, kpi_value: 40, kpi_delta: 13,
  big_number: 80, section_number: 60, section_title: 36,
  table: 12, chart: 11, closing: 38,
};

const STATUS_LABEL = { success: "Concluída", warning: "Em andamento", danger: "Atrasada", neutral: "Não iniciada" };
const REFERENCE_SERIES = new Set(["meta", "planejado", "orcado", "orçado", "orcamento", "orçamento", "budget", "target", "plan"]);

function loadPalette(nameOrPath) {
  if (nameOrPath && typeof nameOrPath === "object") return nameOrPath;
  const name = nameOrPath || "corporativa-azul";
  let p = name;
  if (!fs.existsSync(p)) p = path.join(PALETTES_DIR, `${name}.json`);
  if (!fs.existsSync(p)) throw new Error(`Paleta nao encontrada: ${name}`);
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

function columns(n, x0 = 0.5, totalW = CONTENT_W, gutter = GUTTER) {
  const w = (totalW - gutter * (n - 1)) / n;
  return Array.from({ length: n }, (_, i) => ({ x: x0 + i * (w + gutter), w }));
}

class DeckBuilder {
  constructor({ palette = "corporativa-azul", fontScale = null, confidentiality = null, logo = null } = {}) {
    this.pptx = new PptxGenJS();
    this.pptx.defineLayout({ name: "WIDE", width: SLIDE_W, height: SLIDE_H });
    this.pptx.layout = "WIDE";
    this.pal = loadPalette(palette);
    this.colors = this.pal.colors;
    this.fontTitle = (this.pal.font && this.pal.font.title) || "Calibri";
    this.fontBody = (this.pal.font && this.pal.font.body) || "Calibri";
    this.scale = fontScale != null ? fontScale : (this.pal.font_scale || 1.0);
    this.confidentiality = confidentiality;
    this.logo = logo;
    this.page = 0;
  }

  // ---------------------------------------------------------------- util
  c(role) { return (this.colors[role] || role).replace("#", "").toUpperCase(); }
  chartColor(i) { const seq = this.colors.chart || [this.colors.primary, this.colors.secondary, this.colors.accent]; return seq[i % seq.length]; }
  pt(keyOrSize) { return (typeof keyOrSize === "string" ? FS[keyOrSize] : keyOrSize) * this.scale; }

  _slide(bg) {
    const s = this.pptx.addSlide();
    this.page += 1;
    if (bg) s.background = { color: this.c(bg) };
    return s;
  }

  _text(s, box, text, { size = "body", bold = false, color = "neutral_dark", align = "left", valign = "top", italic = false, font = null, bullet = false } = {}) {
    s.addText(String(text), {
      ...box, fontSize: this.pt(size), bold, italic, color: this.c(color), align, valign,
      fontFace: font || this.fontBody, margin: 0.05, bullet,
    });
  }

  _rect(s, box, { fill = "neutral_light", line = null, lineWidth = 1, shape = null } = {}) {
    const opts = { ...box, fill: fill ? { color: this.c(fill) } : { type: "none" } };
    opts.line = line ? { color: this.c(line), width: lineWidth } : { type: "none" };
    s.addShape(shape || this.pptx.ShapeType.rect, opts);
  }

  _bullets(s, box, items, { size = "body", color = "neutral_dark", spaceAfter = 8 } = {}) {
    const runs = items.map((t) => ({
      text: String(t),
      options: { bullet: { indent: 18 }, fontSize: this.pt(size), color: this.c(color), fontFace: this.fontBody, paraSpaceAfter: spaceAfter, breakLine: true },
    }));
    s.addText(runs, { ...box, valign: "top", margin: 0.05 });
  }

  _title(s, title, subtitle) {
    if (title) this._text(s, TITLE_BOX, title, { size: "title", bold: true, color: "primary", font: this.fontTitle, valign: "top" });
    if (subtitle) { this._text(s, SUBTITLE_BOX, subtitle, { size: "subtitle", color: "neutral_mid" }); return CONTENT_TOP_SUB; }
    return CONTENT_TOP_NO_SUB;
  }

  _footer(s, source) {
    let left = source ? `Fonte: ${source}` : "";
    if (this.confidentiality) left = left ? `${left}   |   ${this.confidentiality}` : this.confidentiality;
    if (left) this._text(s, { ...FOOTER_BOX, w: FOOTER_BOX.w - 1 }, left, { size: "footer", color: "neutral_mid", valign: "middle" });
    this._text(s, { x: FOOTER_BOX.x + FOOTER_BOX.w - 1, y: FOOTER_BOX.y, w: 1, h: FOOTER_BOX.h }, String(this.page), { size: "footer", color: "neutral_mid", align: "right", valign: "middle" });
  }

  _content(title, subtitle, source, notes) {
    const s = this._slide();
    const top = this._title(s, title, subtitle);
    this._footer(s, source);
    if (notes) s.addNotes(notes);
    return { s, top };
  }

  // -------------------------------------------------------------- slides
  addCover({ title, subtitle, author, date, notes }) {
    const s = this._slide("primary_dark");
    this._rect(s, { x: 0, y: 6.9, w: SLIDE_W, h: 0.6 }, { fill: "accent" });
    this._text(s, { x: 0.8, y: 2.4, w: 11.7, h: 1.6 }, title, { size: "cover_title", bold: true, color: "FFFFFF", valign: "bottom", font: this.fontTitle });
    if (subtitle) this._text(s, { x: 0.8, y: 4.1, w: 11.7, h: 0.8 }, subtitle, { size: "cover_sub", color: "D9E1EA" });
    const meta = [author, date, this.confidentiality].filter(Boolean).join(" | ");
    if (meta) this._text(s, { x: 0.8, y: 6.2, w: 11.7, h: 0.5 }, meta, { size: "cover_meta", color: "BFC9D4" });
    if (notes) s.addNotes(notes);
    return s;
  }

  addSection({ title, number, subtitle, notes }) {
    const s = this._slide("primary");
    if (number) this._text(s, { x: 0.8, y: 2.2, w: 2, h: 1 }, number, { size: "section_number", bold: true, color: "accent", font: this.fontTitle });
    this._text(s, { x: 0.8, y: 3.3, w: 11.7, h: 1.2 }, title, { size: "section_title", bold: true, color: "FFFFFF", font: this.fontTitle });
    if (subtitle) this._text(s, { x: 0.8, y: 4.5, w: 11.7, h: 0.8 }, subtitle, { size: 18, color: "D9E1EA" });
    if (notes) s.addNotes(notes);
    return s;
  }

  addAgenda({ items, title = "Agenda", durations, notes }) {
    const { s, top } = this._content(title, null, null, notes);
    const step = Math.min(0.75, (CONTENT_BOTTOM - top - 0.2) / Math.max(items.length, 1));
    items.forEach((item, i) => {
      const y = top + 0.2 + i * step;
      s.addShape(this.pptx.ShapeType.ellipse, { x: 0.5, y, w: 0.5, h: 0.5, fill: { color: this.c("primary") }, line: { type: "none" } });
      this._text(s, { x: 0.5, y, w: 0.5, h: 0.5 }, String(i + 1), { size: 14, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
      this._text(s, { x: 1.2, y, w: 7.5, h: 0.5 }, item, { size: 20, valign: "middle" });
      if (durations && durations[i]) this._text(s, { x: 8.8, y, w: 4, h: 0.5 }, durations[i], { size: 16, color: "neutral_mid", valign: "middle" });
    });
    return s;
  }

  addExecutiveSummary({ headline, points, ask, title = "Sumário executivo", source, notes }) {
    const { s, top } = this._content(title, null, source, notes);
    this._rect(s, { x: 0.5, y: top, w: 12.33, h: 1.1 }, { fill: "neutral_light" });
    this._rect(s, { x: 0.5, y: top, w: 0.08, h: 1.1 }, { fill: "accent" });
    this._text(s, { x: 0.75, y: top, w: 11.9, h: 1.1 }, headline, { size: 22, bold: true, color: "primary", valign: "middle" });
    const y0 = top + 1.4;
    const rowH = Math.min(0.9, (CONTENT_BOTTOM - y0 - (ask ? 0.9 : 0)) / Math.max(points.length, 1));
    points.forEach((p, i) => {
      const y = y0 + i * rowH;
      s.addShape(this.pptx.ShapeType.ellipse, { x: 0.6, y: y + 0.05, w: 0.45, h: 0.45, fill: { color: this.c("primary") }, line: { type: "none" } });
      this._text(s, { x: 0.6, y: y + 0.05, w: 0.45, h: 0.45 }, String(i + 1), { size: 13, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
      this._text(s, { x: 1.25, y, w: 11.5, h: rowH }, p, { size: 17 });
    });
    if (ask) {
      const ya = CONTENT_BOTTOM - 0.8;
      this._rect(s, { x: 0.5, y: ya, w: 12.33, h: 0.75 }, { fill: "FFFFFF", line: "accent", lineWidth: 1.5 });
      s.addText([
        { text: "Pedimos:  ", options: { bold: true, color: this.c("accent"), fontSize: this.pt(16), fontFace: this.fontBody } },
        { text: ask, options: { bold: true, color: this.c("neutral_dark"), fontSize: this.pt(16), fontFace: this.fontBody } },
      ], { x: 0.7, y: ya, w: 12, h: 0.75, valign: "middle", margin: 0.05 });
    }
    return s;
  }

  addKpiRow({ title, kpis, subtitle, bullets, source, notes }) {
    const { s, top } = this._content(title, subtitle, source, notes);
    const n = Math.max(2, Math.min(kpis.length, 6));
    const cols = columns(n);
    const cardH = n <= 4 ? 2.6 : 2.4;
    const valueSize = { 2: 48, 3: 44, 4: 40, 5: 34, 6: 30 }[n];
    const y = top + 0.2;
    kpis.slice(0, n).forEach((k, i) => {
      const { x, w } = cols[i];
      const st = k.status || "neutral";
      const bar = st !== "neutral" ? st : "neutral_mid";
      this._rect(s, { x, y, w, h: cardH }, { fill: "neutral_light" });
      this._rect(s, { x, y, w, h: 0.08 }, { fill: bar });
      this._text(s, { x: x + 0.15, y: y + 0.25, w: w - 0.3, h: 0.4 }, String(k.label || "").toUpperCase(), { size: "kpi_label", color: "neutral_mid" });
      this._text(s, { x: x + 0.15, y: y + 0.65, w: w - 0.3, h: 1.1 }, k.value, { size: valueSize, bold: true, valign: "middle" });
      if (k.delta) this._text(s, { x: x + 0.15, y: y + cardH - 0.65, w: w - 0.3, h: 0.5 }, k.delta, { size: "kpi_delta", bold: true, color: bar });
    });
    if (bullets) this._bullets(s, { x: 0.5, y: y + cardH + 0.3, w: 12.33, h: CONTENT_BOTTOM - (y + cardH + 0.3) }, bullets, { size: 15 });
    return s;
  }

  addBigNumber({ title, value, label, context, subtitle, source, notes }) {
    const { s, top } = this._content(title, subtitle, source, notes);
    this._text(s, { x: 0.5, y: top + 0.4, w: 12.33, h: 2 }, value, { size: "big_number", bold: true, color: "primary", align: "center", valign: "middle", font: this.fontTitle });
    if (label) this._text(s, { x: 0.5, y: top + 2.5, w: 12.33, h: 0.6 }, label, { size: 20, color: "neutral_mid", align: "center" });
    if (context) this._text(s, { x: 1.5, y: top + 3.3, w: 10.33, h: 1.4 }, context, { size: 16, align: "center" });
    return s;
  }

  addBullets({ title, bullets, subtitle, source, notes }) {
    const { s, top } = this._content(title, subtitle, source, notes);
    this._bullets(s, { x: 0.5, y: top + 0.1, w: 12.33, h: CONTENT_BOTTOM - top - 0.1 }, bullets, { spaceAfter: 10 });
    return s;
  }

  addTwoColumn({ title, left, right, subtitle, source, notes }) {
    const { s, top } = this._content(title, subtitle, source, notes);
    const cols = columns(2);
    [left, right].forEach((col, i) => {
      const { x, w } = cols[i];
      const head = ["success", "warning", "danger"].includes(col.status) ? col.status : "primary";
      this._text(s, { x, y: top + 0.1, w, h: 0.6 }, col.heading || "", { size: 18, bold: true, color: head, valign: "bottom" });
      this._rect(s, { x, y: top + 0.75, w, h: 0.03 }, { fill: head });
      this._bullets(s, { x, y: top + 0.95, w, h: CONTENT_BOTTOM - top - 0.95 }, col.bullets || [], { size: 15 });
    });
    return s;
  }

  addChart({ title, chart_type, categories, series, subtitle, commentary, source, notes, show_labels }) {
    const { s, top } = this._content(title, subtitle, source, notes);
    const typeMap = {
      bar: this.pptx.ChartType.bar, column: this.pptx.ChartType.bar, line: this.pptx.ChartType.line,
      pie: this.pptx.ChartType.pie, doughnut: this.pptx.ChartType.doughnut,
      stacked_column: this.pptx.ChartType.bar, stacked_bar: this.pptx.ChartType.bar, area: this.pptx.ChartType.area,
    };
    const multi = series.length > 1;
    const isPie = chart_type === "pie" || chart_type === "doughnut";
    const data = series.map((sr) => ({ name: sr.name, labels: categories, values: sr.values }));
    const cw = commentary ? 8.0 : CONTENT_W;
    const h = CONTENT_BOTTOM - top - 0.1;
    const colors = series.map((sr, i) => (multi && REFERENCE_SERIES.has(String(sr.name).toLowerCase()) ? this.c("neutral_mid") : this.chartColor(i)));
    const opts = {
      x: 0.5, y: top + 0.1, w: cw, h,
      chartColors: isPie ? categories.map((_, i) => this.chartColor(i)) : colors,
      showLegend: multi || isPie, legendPos: "b", legendFontSize: this.pt("chart"),
      showTitle: false,
      catAxisLabelFontSize: this.pt("chart"), valAxisLabelFontSize: this.pt("chart"),
      catAxisLabelColor: this.c("neutral_mid"), valAxisLabelColor: this.c("neutral_mid"),
      valGridLine: { color: this.c("neutral_light"), size: 0.5 }, catGridLine: { style: "none" },
      valAxisLineShow: false,
      showValue: show_labels != null ? show_labels : (!multi && categories.length <= 12),
      dataLabelFontSize: this.pt("chart"), dataLabelColor: this.c("neutral_dark"),
      barDir: chart_type === "bar" || chart_type === "stacked_bar" ? "bar" : "col",
      barGrouping: chart_type.startsWith("stacked") ? "stacked" : "clustered",
      barGapWidthPct: 60,
      lineDataSymbol: "circle", lineSize: 2.5, lineSmooth: false,
      showPercent: isPie,
    };
    s.addChart(typeMap[chart_type], data, opts);
    if (commentary) this._bullets(s, { x: 8.8, y: top + 0.2, w: 4.03, h: h - 0.2 }, commentary, { size: 14 });
    return s;
  }

  addTable({ title, columns: cols, rows, subtitle, align, col_widths, total_row, source, notes }) {
    const { s, top } = this._content(title, subtitle, source, notes);
    const fs = this.pt("table");
    const head = cols.map((c, j) => ({ text: String(c), options: { bold: true, color: "FFFFFF", fill: { color: this.c("primary") }, align: (align && align[j]) || "left", fontSize: fs, fontFace: this.fontBody } }));
    const body = rows.map((r, i) => r.map((v, j) => ({
      text: v == null ? "" : String(v),
      options: {
        fill: { color: (i + 1) % 2 === 0 ? this.c("neutral_light") : "FFFFFF" },
        color: this.c("neutral_dark"), fontSize: fs, fontFace: this.fontBody,
        align: (align && align[j]) || (typeof v === "number" ? "right" : "left"),
        bold: Boolean(total_row && i === rows.length - 1),
      },
    })));
    const rowH = Math.min(0.5, (CONTENT_BOTTOM - top - 0.1) / (rows.length + 1));
    s.addTable([head, ...body], {
      x: 0.5, y: top + 0.1, w: CONTENT_W, colW: col_widths || undefined, rowH,
      border: { type: "solid", pt: 0.5, color: this.c("neutral_light") }, valign: "middle", margin: 0.06,
    });
    return s;
  }

  addActionPlan({ title, actions, decision, subtitle, source, notes }) {
    const { s, top } = this._content(title, subtitle, source, notes);
    const fs = this.pt("table");
    const hdr = ["Ação", "Dono", "Prazo", "Status"].map((t, j) => ({ text: t, options: { bold: true, color: "FFFFFF", fill: { color: this.c("primary") }, fontSize: fs, fontFace: this.fontBody, align: j >= 2 ? "center" : "left" } }));
    const body = actions.map((a, i) => {
      const base = (i + 1) % 2 === 0 ? this.c("neutral_light") : "FFFFFF";
      const st = a.status || "neutral";
      const cellOpt = (extra = {}) => ({ fill: { color: base }, color: this.c("neutral_dark"), fontSize: fs, fontFace: this.fontBody, ...extra });
      const statusCell = st === "neutral"
        ? { text: STATUS_LABEL[st], options: cellOpt({ align: "center", color: this.c("neutral_mid") }) }
        : { text: STATUS_LABEL[st] || st, options: { fill: { color: this.c(st) }, color: "FFFFFF", bold: true, align: "center", fontSize: fs, fontFace: this.fontBody } };
      return [
        { text: a.action || "", options: cellOpt() },
        { text: a.owner || "", options: cellOpt() },
        { text: a.due || "", options: cellOpt({ align: "center" }) },
        statusCell,
      ];
    });
    const avail = CONTENT_BOTTOM - top - 0.1 - (decision ? 0.95 : 0);
    const rowH = Math.min(0.5, avail / (actions.length + 1));
    s.addTable([hdr, ...body], { x: 0.5, y: top + 0.1, w: CONTENT_W, colW: [6.5, 2.0, 1.5, 2.33], rowH, border: { type: "solid", pt: 0.5, color: this.c("neutral_light") }, valign: "middle", margin: 0.06 });
    if (decision) {
      const yd = CONTENT_BOTTOM - 0.8;
      this._rect(s, { x: 0.5, y: yd, w: 12.33, h: 0.75 }, { fill: "FFF3D6" });
      this._rect(s, { x: 0.5, y: yd, w: 0.08, h: 0.75 }, { fill: "accent" });
      s.addText([
        { text: "Decisão pedida:  ", options: { bold: true, color: this.c("accent"), fontSize: this.pt(16), fontFace: this.fontBody } },
        { text: decision, options: { bold: true, color: this.c("neutral_dark"), fontSize: this.pt(16), fontFace: this.fontBody } },
      ], { x: 0.75, y: yd, w: 11.9, h: 0.75, valign: "middle", margin: 0.05 });
    }
    return s;
  }

  addClosing({ title, subtitle, notes }) {
    const s = this._slide("primary_dark");
    this._text(s, { x: 0.8, y: 2.6, w: 11.7, h: 1.4 }, title, { size: "closing", bold: true, color: "FFFFFF", valign: "bottom", font: this.fontTitle });
    if (subtitle) this._text(s, { x: 0.8, y: 4.1, w: 11.7, h: 0.9 }, subtitle, { size: 19, color: "D9E1EA" });
    this._rect(s, { x: 0, y: 6.9, w: SLIDE_W, h: 0.6 }, { fill: "accent" });
    if (notes) s.addNotes(notes);
    return s;
  }

  // ------------------------------------------------------------ spec API
  addFromSpec(sl) {
    const map = {
      cover: "addCover", section: "addSection", agenda: "addAgenda", executive_summary: "addExecutiveSummary",
      kpi_row: "addKpiRow", big_number: "addBigNumber", bullets: "addBullets", two_column: "addTwoColumn",
      chart: "addChart", table: "addTable", action_plan: "addActionPlan", closing: "addClosing",
    };
    const m = map[sl.type];
    if (!m) throw new Error(`Tipo de slide nao suportado na versao JS: ${sl.type}. Use a versao python-pptx ou implemente add_${sl.type}.`);
    return this[m](sl);
  }

  static fromSpec(spec) {
    const meta = spec.meta || {};
    const db = new DeckBuilder({ palette: meta.palette, fontScale: meta.font_scale, confidentiality: meta.confidentiality, logo: meta.logo });
    (spec.slides || []).forEach((sl) => db.addFromSpec(sl));
    return db;
  }

  async save(file) {
    fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
    await this.pptx.writeFile({ fileName: file });
    return file;
  }
}

module.exports = { DeckBuilder, loadPalette, FS, TITLE_BOX, FOOTER_BOX, CONTENT_W };

if (require.main === module) {
  const [specPath, outPath] = process.argv.slice(2);
  if (!specPath || !outPath) {
    console.error("Uso: node deckbuilder.js spec.json saida.pptx");
    process.exit(1);
  }
  const spec = JSON.parse(fs.readFileSync(specPath, "utf-8"));
  DeckBuilder.fromSpec(spec).save(outPath).then((f) => console.log(`OK: ${f} (${spec.slides.length} slides)`));
}
