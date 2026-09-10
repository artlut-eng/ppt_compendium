/**
 * DeckBuilder (PptxGenJS): versao JavaScript do gerador, com a mesma spec JSON e o mesmo grid
 * de python-pptx/deckbuilder.py. Cobre todos os tipos de slide do schema:
 * cover, agenda, section, executive_summary, kpi_row, big_number, chart, table, bullets, two_column,
 * comparison, timeline, process, matrix_2x2, action_plan, quote, closing, takeaways, progress_bars,
 * image, waterfall, pareto, gantt; campos comuns kicker/callout; meta brand/deck_name/date/logo/
 * logo_light/logo_position/exposure.
 *
 * Diferencas em relacao a versao Python: sem template corporativo; highlight_index em graficos
 * nativos nao e suportado (use waterfall/pareto/progress_bars para destaque por barra).
 *
 * Uso:
 *   node deckbuilder.js spec.json saida.pptx
 *   const { DeckBuilder } = require("./deckbuilder"); await DeckBuilder.fromSpec(spec).save("saida.pptx");
 *
 * Requisitos: npm install pptxgenjs
 */
"use strict";

const fs = require("fs");
const path = require("path");
const PptxGenJS = require("pptxgenjs");

const ROOT = path.resolve(__dirname, "..", "..");
const PALETTES_DIR = path.join(ROOT, "05-artefatos-visuais", "paletas");

const SLIDE_W = 13.333, SLIDE_H = 7.5, CONTENT_W = 12.33, MARGIN = 0.5, GUTTER = 0.3;
const TITLE_BOX = { x: 0.5, y: 0.4, w: 12.33, h: 0.9 };
const SUBTITLE_BOX = { x: 0.5, y: 1.3, w: 12.33, h: 0.5 };
const KICKER_BOX = { x: 0.5, y: 0.42, w: 12.33, h: 0.28 };
const TITLE_BOX_K = { x: 0.5, y: 0.68, w: 12.33, h: 0.9 };
const SUBTITLE_BOX_K = { x: 0.5, y: 1.55, w: 12.33, h: 0.45 };
const CONTENT_TOP = { plain: 1.5, sub: 1.9, kicker: 1.8, kickerSub: 2.1 };
const CONTENT_BOTTOM = 6.7;
const FOOTER_BOX = { x: 0.5, y: 6.8, w: 12.33, h: 0.4 };
const CALLOUT_H = 0.8;
const CALLOUT_STYLE = {
  conclusion: ["neutral_light", "primary", "primary", "neutral_dark"],
  warning: ["FFF3D6", "warning", "warning", "neutral_dark"],
  recommendation: ["EAF5EA", "success", "success", "neutral_dark"],
  decision: ["primary_dark", null, "accent", "FFFFFF"],
};
const FS = {
  cover_title: 42, cover_sub: 22, cover_meta: 13, title: 28, subtitle: 16, body: 16, small: 12, footer: 10,
  kpi_label: 12, kpi_value: 40, kpi_delta: 13, big_number: 80, section_number: 60, section_title: 36,
  table: 12, chart: 11, quote: 28, closing: 38,
};
const STATUS_LABEL = { success: "Concluída", warning: "Em andamento", danger: "Atrasada", neutral: "Não iniciada" };
const STATUS_WORDS = {
  success: ["verde", "ok", "concluido", "concluído", "baixa", "baixo", "sim", "success"],
  warning: ["amarelo", "atenção", "atencao", "media", "média", "medio", "médio", "em risco", "em andamento", "warning"],
  danger: ["vermelho", "critico", "crítico", "alta", "alto", "atrasado", "atrasada", "danger", "não", "nao"],
};
const REFERENCE_SERIES = new Set(["meta", "planejado", "orcado", "orçado", "orcamento", "orçamento", "budget", "target", "plan"]);

function loadPalette(p) {
  if (p && typeof p === "object") return p;
  const name = p || "corporativa-azul";
  let f = name;
  if (!fs.existsSync(f)) f = path.join(PALETTES_DIR, `${name}.json`);
  if (!fs.existsSync(f)) throw new Error(`Paleta nao encontrada: ${name}`);
  return JSON.parse(fs.readFileSync(f, "utf-8"));
}
function resolvePath(p) {
  if (!p) return null;
  for (const c of [p, path.join(ROOT, p)]) if (fs.existsSync(c)) return c;
  return null;
}
function statusKey(v) {
  if (v == null) return null;
  const s = String(v).trim().toLowerCase();
  for (const [k, words] of Object.entries(STATUS_WORDS)) if (words.includes(s)) return k;
  return null;
}
function fmtNumber(v, d = 0) {
  return Number(v).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
}
function columns(n, x0 = MARGIN, totalW = CONTENT_W, gutter = GUTTER) {
  const w = (totalW - gutter * (n - 1)) / n;
  return Array.from({ length: n }, (_, i) => ({ x: x0 + i * (w + gutter), w }));
}

class DeckBuilder {
  constructor({ palette = "corporativa-azul", fontScale = null, confidentiality = null, logo = null, logoLight = null,
    logoPosition = "footer", brand = null, deckName = null, date = null } = {}) {
    this.pptx = new PptxGenJS();
    this.pptx.defineLayout({ name: "WIDE", width: SLIDE_W, height: SLIDE_H });
    this.pptx.layout = "WIDE";
    this.pal = loadPalette(palette);
    this.colors = this.pal.colors;
    this.fontTitle = (this.pal.font && this.pal.font.title) || "Calibri";
    this.fontBody = (this.pal.font && this.pal.font.body) || "Calibri";
    this.scale = fontScale != null ? fontScale : (this.pal.font_scale || 1.0);
    this.confidentiality = confidentiality;
    this.logo = resolvePath(logo);
    this.logoLight = resolvePath(logoLight);
    this.logoPosition = logoPosition || "footer";
    this.brand = brand; this.deckName = deckName; this.date = date;
    this.page = 0;
    this.bottom = CONTENT_BOTTOM;
  }

  // ------------------------------------------------------------------ util
  c(role) { return String(this.colors[role] || role).replace("#", "").toUpperCase(); }
  chartColor(i) { const seq = this.colors.chart || [this.colors.primary, this.colors.secondary, this.colors.accent]; return seq[i % seq.length]; }
  pt(k) { return (typeof k === "string" ? FS[k] : k) * this.scale; }
  _slide(bg) { const s = this.pptx.addSlide(); this.page += 1; if (bg) s.background = { color: this.c(bg) }; return s; }
  _text(s, box, text, { size = "body", bold = false, color = "neutral_dark", align = "left", valign = "top", italic = false, font = null, rotate = 0, charSpacing = 0 } = {}) {
    s.addText(String(text == null ? "" : text), { ...box, fontSize: this.pt(size), bold, italic, color: this.c(color), align, valign, fontFace: font || this.fontBody, margin: 0.05, rotate, charSpacing });
  }
  _rich(s, box, runs, opts = {}) {
    s.addText(runs.map((r) => ({ text: r.text, options: { bold: !!r.bold, color: this.c(r.color || "neutral_dark"), fontSize: this.pt(r.size || "body"), fontFace: this.fontBody, breakLine: !!r.breakLine } })), { ...box, margin: 0.05, ...opts });
  }
  _rect(s, box, { fill = "neutral_light", line = null, lineWidth = 1, shape = null, hex = null } = {}) {
    const o = { ...box, fill: fill || hex ? { color: hex || this.c(fill) } : { type: "none" }, line: line ? { color: this.c(line), width: lineWidth } : { type: "none" } };
    s.addShape(shape || this.pptx.ShapeType.rect, o);
  }
  _line(s, x1, y1, x2, y2, { color = "neutral_mid", width = 1, dash = false } = {}) {
    const o = { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1), line: { color: this.c(color), width, dashType: dash ? "dash" : "solid" } };
    if ((x2 - x1) * (y2 - y1) < 0) o.flipV = true;
    s.addShape(this.pptx.ShapeType.line, o);
  }
  _bullets(s, box, items, { size = "body", color = "neutral_dark", spaceAfter = 8, subBullets = null } = {}) {
    const runs = [];
    (items || []).forEach((t, i) => {
      const parts = String(t).split("**");
      parts.forEach((p, j) => { if (p) runs.push({ text: p, options: { bold: j % 2 === 1, fontSize: this.pt(size), color: this.c(color), fontFace: this.fontBody, bullet: j === 0 ? { indent: 18 } : false, paraSpaceAfter: spaceAfter, breakLine: j === parts.length - 1 } }); });
      ((subBullets || {})[String(i)] || []).forEach((sb) => runs.push({ text: String(sb), options: { fontSize: this.pt(size) - 2, color: this.c(color), fontFace: this.fontBody, bullet: { indent: 18, characterCode: "2013" }, indentLevel: 1, paraSpaceAfter: spaceAfter / 2, breakLine: true } }));
    });
    if (runs.length) s.addText(runs, { ...box, valign: "top", margin: 0.05 });
  }
  _header(s) {
    const left = [this.brand, this.deckName].filter(Boolean).join("  |  ");
    if (left) this._text(s, { x: 0.5, y: 0.1, w: 8, h: 0.25 }, left.toUpperCase(), { size: 9, bold: true, color: "neutral_mid", valign: "middle" });
    if (this.logoPosition === "header" && this.logo) s.addImage({ path: this.logo, x: 11.6, y: 0.1, h: 0.32, sizing: { type: "contain", w: 1.2, h: 0.32 } });
    else if (this.date) this._text(s, { x: 8.5, y: 0.1, w: 4.33, h: 0.25 }, this.date, { size: 9, color: "neutral_mid", align: "right", valign: "middle" });
  }
  _placeLogo(s, x, y, w, dark) {
    const src = dark ? (this.logoLight || this.logo) : this.logo;
    if (src) s.addImage({ path: src, x, y, w, h: w / 3, sizing: { type: "contain", w, h: w / 3 } });
    else if (this.brand) this._text(s, { x: x - 1.0, y, w: w + 1.0, h: 0.4 }, this.brand.toUpperCase(), { size: 10, bold: true, color: dark ? "FFFFFF" : "primary", align: "right", valign: "middle" });
  }
  _title(s, title, subtitle, kicker) {
    this._header(s);
    const tb = kicker ? TITLE_BOX_K : TITLE_BOX, sb = kicker ? SUBTITLE_BOX_K : SUBTITLE_BOX;
    if (kicker) this._text(s, KICKER_BOX, String(kicker).toUpperCase(), { size: 10, bold: true, color: "secondary", valign: "bottom" });
    if (title != null) this._text(s, tb, title, { size: "title", bold: true, color: "primary", font: this.fontTitle });
    if (subtitle) { this._text(s, sb, subtitle, { size: "subtitle", color: "neutral_mid" }); return kicker ? CONTENT_TOP.kickerSub : CONTENT_TOP.sub; }
    return kicker ? CONTENT_TOP.kicker : CONTENT_TOP.plain;
  }
  _footer(s, source) {
    let left = source ? `Fonte: ${source}` : "";
    if (this.confidentiality) left = left ? `${left}   |   ${this.confidentiality}` : this.confidentiality;
    if (left) this._text(s, { x: FOOTER_BOX.x, y: FOOTER_BOX.y, w: FOOTER_BOX.w - 3, h: FOOTER_BOX.h }, left, { size: "footer", color: "neutral_mid", valign: "middle" });
    this._text(s, { x: FOOTER_BOX.x + FOOTER_BOX.w - 1, y: FOOTER_BOX.y, w: 1, h: FOOTER_BOX.h }, String(this.page), { size: "footer", color: "neutral_mid", align: "right", valign: "middle" });
    if (this.logoPosition === "footer") {
      if (this.logo) s.addImage({ path: this.logo, x: 10.6, y: 6.83, w: 0.9, h: 0.3, sizing: { type: "contain", w: 0.9, h: 0.3 } });
      else if (this.brand) this._text(s, { x: 9.8, y: FOOTER_BOX.y, w: 2, h: FOOTER_BOX.h }, this.brand.toUpperCase(), { size: 9, bold: true, color: "primary", align: "right", valign: "middle" });
    }
  }
  _callout(s, co) {
    const [fill, bar, labelColor, textColor] = CALLOUT_STYLE[co.kind || "conclusion"] || CALLOUT_STYLE.conclusion;
    const y = CONTENT_BOTTOM - CALLOUT_H - 0.05;
    this._rect(s, { x: 0.5, y, w: CONTENT_W, h: CALLOUT_H }, { fill });
    if (bar) this._rect(s, { x: 0.5, y, w: 0.08, h: CALLOUT_H }, { fill: bar });
    let tx = 0.75;
    if (co.label) { this._text(s, { x: 0.75, y, w: 2.3, h: CALLOUT_H }, String(co.label).toUpperCase(), { size: 10, bold: true, color: labelColor, valign: "middle" }); tx = 3.05; }
    this._text(s, { x: tx, y, w: 12.83 - tx - 0.2, h: CALLOUT_H }, co.text || "", { size: 14, bold: true, color: textColor, valign: "middle" });
  }
  _content({ title, subtitle, source, notes, kicker, callout }) {
    const s = this._slide();
    const top = this._title(s, title, subtitle, kicker);
    this._footer(s, source);
    if (notes) s.addNotes(notes);
    this.bottom = CONTENT_BOTTOM;
    if (callout) { this._callout(s, callout); this.bottom = CONTENT_BOTTOM - CALLOUT_H - 0.2; }
    return { s, top };
  }
  _numCircle(s, x, y, d, n, size = 13) {
    s.addShape(this.pptx.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: this.c("primary") }, line: { type: "none" } });
    this._text(s, { x, y, w: d, h: d }, String(n), { size, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
  }

  // ---------------------------------------------------------------- slides
  addCover({ title, subtitle, author, date, notes, kicker, thesis }) {
    const s = this._slide("primary_dark");
    this._rect(s, { x: 0, y: 6.9, w: SLIDE_W, h: 0.6 }, { fill: "accent" });
    if (this.brand) this._text(s, { x: 0.8, y: 0.5, w: 6, h: 0.4 }, this.brand.toUpperCase(), { size: 11, bold: true, color: "D9E1EA", valign: "middle" });
    if (kicker) this._text(s, { x: 0.8, y: 1.7, w: 11.7, h: 0.4 }, String(kicker).toUpperCase(), { size: 11, bold: true, color: "accent", valign: "bottom" });
    const tw = thesis ? 8.0 : 11.7;
    this._text(s, { x: 0.8, y: 2.1, w: tw, h: 1.9 }, title, { size: "cover_title", bold: true, color: "FFFFFF", valign: "bottom", font: this.fontTitle });
    if (subtitle) this._text(s, { x: 0.8, y: 4.1, w: tw, h: 0.8 }, subtitle, { size: "cover_sub", color: "D9E1EA" });
    if (thesis) {
      this._rect(s, { x: 9.2, y: 2.1, w: 3.63, h: 2.7 }, { fill: "FFFFFF" });
      this._rect(s, { x: 9.2, y: 2.1, w: 0.08, h: 2.7 }, { fill: "accent" });
      this._text(s, { x: 9.45, y: 2.25, w: 3.25, h: 0.4 }, "TESE CENTRAL", { size: 9, bold: true, color: "neutral_mid" });
      this._text(s, { x: 9.45, y: 2.65, w: 3.25, h: 2.05 }, thesis, { size: 15, bold: true, color: "primary" });
    }
    const meta = [author, date || this.date, this.confidentiality].filter(Boolean).join(" | ");
    if (meta) this._text(s, { x: 0.8, y: 6.2, w: 11.7, h: 0.5 }, meta, { size: "cover_meta", color: "BFC9D4" });
    this._placeLogo(s, 11.3, 0.5, 1.5, true);
    if (notes) s.addNotes(notes);
    return s;
  }
  addSection({ title, number, subtitle, notes }) {
    const s = this._slide("primary");
    if (number) this._text(s, { x: 0.8, y: 2.2, w: 2, h: 1 }, number, { size: "section_number", bold: true, color: "accent", font: this.fontTitle });
    this._text(s, { x: 0.8, y: 3.3, w: 11.7, h: 1.2 }, title, { size: "section_title", bold: true, color: "FFFFFF", font: this.fontTitle });
    if (subtitle) this._text(s, { x: 0.8, y: 4.5, w: 11.7, h: 0.8 }, subtitle, { size: 18, color: "D9E1EA" });
    this._placeLogo(s, 11.6, 0.5, 1.2, true);
    if (notes) s.addNotes(notes);
    return s;
  }
  addAgenda({ items, title = "Agenda", durations, notes, kicker, callout }) {
    const { s, top } = this._content({ title, notes, kicker, callout });
    const step = Math.min(0.75, (this.bottom - top - 0.2) / Math.max(items.length, 1));
    items.forEach((it, i) => {
      const y = top + 0.2 + i * step;
      this._numCircle(s, 0.5, y, 0.5, i + 1, 14);
      this._text(s, { x: 1.2, y, w: 7.5, h: 0.5 }, it, { size: 20, valign: "middle" });
      if (durations && durations[i]) this._text(s, { x: 8.8, y, w: 4, h: 0.5 }, durations[i], { size: 16, color: "neutral_mid", valign: "middle" });
    });
    return s;
  }
  addExecutiveSummary({ headline, points, ask, title = "Sumário executivo", source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, source, notes, kicker, callout });
    this._rect(s, { x: 0.5, y: top, w: 12.33, h: 1.1 }, { fill: "neutral_light" });
    this._rect(s, { x: 0.5, y: top, w: 0.08, h: 1.1 }, { fill: "accent" });
    this._text(s, { x: 0.75, y: top, w: 11.9, h: 1.1 }, headline, { size: 22, bold: true, color: "primary", valign: "middle" });
    const y0 = top + 1.4, rowH = Math.min(0.9, (this.bottom - y0 - (ask ? 0.9 : 0)) / Math.max(points.length, 1));
    points.forEach((p, i) => { const y = y0 + i * rowH; this._numCircle(s, 0.6, y + 0.05, 0.45, i + 1); this._text(s, { x: 1.25, y, w: 11.5, h: rowH }, p, { size: 17 }); });
    if (ask) {
      const ya = this.bottom - 0.8;
      this._rect(s, { x: 0.5, y: ya, w: 12.33, h: 0.75 }, { fill: "FFFFFF", line: "accent", lineWidth: 1.5 });
      this._rich(s, { x: 0.7, y: ya, w: 12, h: 0.75 }, [{ text: "Pedimos:  ", bold: true, color: "accent", size: 16 }, { text: ask, bold: true, size: 16 }], { valign: "middle" });
    }
    return s;
  }
  addKpiRow({ title, kpis, subtitle, bullets, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const n = Math.max(2, Math.min(kpis.length, 6)), cols = columns(n);
    const hasDesc = kpis.some((k) => k.description);
    const cardH = hasDesc ? 2.9 : (n <= 4 ? 2.6 : 2.4);
    const valueSize = { 2: 48, 3: 44, 4: 40, 5: 34, 6: 30 }[n];
    const y = top + 0.2;
    kpis.slice(0, n).forEach((k, i) => {
      const { x, w } = cols[i];
      const st = k.status || "neutral", bar = st !== "neutral" ? st : "neutral_mid";
      const val = typeof k.value === "number" ? (k.format === "currency" ? `R$ ${fmtNumber(k.value / 1e6, 1)} mi` : fmtNumber(k.value)) : String(k.value == null ? "" : k.value);
      const vsize = val.length <= 6 ? valueSize : Math.max(20, Math.round(valueSize * 6 / val.length * 1.15));
      this._rect(s, { x, y, w, h: cardH }, { fill: "neutral_light" });
      this._rect(s, { x, y, w, h: 0.08 }, { fill: bar });
      this._text(s, { x: x + 0.15, y: y + 0.25, w: w - 0.3, h: 0.4 }, String(k.label || "").toUpperCase(), { size: "kpi_label", color: "neutral_mid" });
      this._text(s, { x: x + 0.15, y: y + 0.65, w: w - 0.3, h: 1.1 }, val, { size: vsize, bold: true, valign: "middle" });
      if (k.delta) this._text(s, { x: x + 0.15, y: y + 1.75, w: w - 0.3, h: 0.45 }, k.delta, { size: "kpi_delta", bold: true, color: bar });
      if (k.description) this._text(s, { x: x + 0.15, y: y + 2.15, w: w - 0.3, h: 0.7 }, k.description, { size: 10, color: "neutral_mid" });
    });
    if (bullets) this._bullets(s, { x: 0.5, y: y + cardH + 0.3, w: 12.33, h: this.bottom - (y + cardH + 0.3) }, bullets, { size: 15 });
    return s;
  }
  addBigNumber({ title, value, label, context, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    this._text(s, { x: 0.5, y: top + 0.4, w: 12.33, h: 2 }, value, { size: "big_number", bold: true, color: "primary", align: "center", valign: "middle", font: this.fontTitle });
    if (label) this._text(s, { x: 0.5, y: top + 2.5, w: 12.33, h: 0.6 }, label, { size: 20, color: "neutral_mid", align: "center" });
    if (context) this._text(s, { x: 1.5, y: top + 3.3, w: 10.33, h: 1.4 }, context, { size: 16, align: "center" });
    return s;
  }
  addBullets({ title, bullets, sub_bullets, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    this._bullets(s, { x: 0.5, y: top + 0.1, w: 12.33, h: this.bottom - top - 0.1 }, bullets, { spaceAfter: 10, subBullets: sub_bullets });
    return s;
  }
  addTwoColumn({ title, left, right, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const cols = columns(2);
    [left, right].forEach((col, i) => {
      const { x, w } = cols[i];
      const head = ["success", "warning", "danger"].includes(col.status) ? col.status : "primary";
      this._text(s, { x, y: top + 0.1, w, h: 0.6 }, col.heading || "", { size: 18, bold: true, color: head, valign: "bottom" });
      this._rect(s, { x, y: top + 0.75, w, h: 0.03 }, { fill: head });
      this._bullets(s, { x, y: top + 0.95, w, h: this.bottom - top - 0.95 }, col.bullets || [], { size: 15 });
    });
    return s;
  }
  addComparison({ title, options, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const n = Math.max(2, Math.min(options.length, 4)), cols = columns(n), cardH = this.bottom - top - 0.2;
    options.slice(0, n).forEach((opt, i) => {
      const { x, w } = cols[i], rec = !!opt.recommended;
      this._rect(s, { x, y: top + 0.1, w, h: cardH }, { fill: "neutral_light", line: rec ? "accent" : null, lineWidth: 2 });
      this._rect(s, { x, y: top + 0.1, w, h: 0.7 }, { fill: "primary" });
      this._text(s, { x, y: top + 0.1, w, h: 0.7 }, opt.name || "", { size: n <= 3 ? 17 : 15, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
      if (rec) { this._rect(s, { x: x + w - 1.6, y: top - 0.1, w: 1.5, h: 0.35 }, { fill: "accent" }); this._text(s, { x: x + w - 1.6, y: top - 0.1, w: 1.5, h: 0.35 }, "Recomendada", { size: 10, bold: true, color: "FFFFFF", align: "center", valign: "middle" }); }
      this._bullets(s, { x: x + 0.15, y: top + 1.0, w: w - 0.3, h: cardH - 1.0 }, opt.points || [], { size: n <= 3 ? 15 : 13 });
    });
    return s;
  }
  addTable({ title, columns: cols, rows, subtitle, align, col_widths, total_row, highlight_rows, status_columns, max_rows = 10, paginate = true, source, notes, kicker, callout }) {
    if (paginate && rows.length > max_rows) {
      const chunks = []; for (let i = 0; i < rows.length; i += max_rows) chunks.push(rows.slice(i, i + max_rows));
      let last = null;
      chunks.forEach((chunk, i) => { last = this.addTable({ title: `${title} (${i + 1}/${chunks.length})`, columns: cols, rows: chunk, subtitle, align, col_widths, status_columns, paginate: false, source, notes, kicker, callout }); });
      return last;
    }
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const fs = this.pt("table"), hl = new Set(highlight_rows || []), sc = new Set(status_columns || []);
    const head = cols.map((c, j) => ({ text: String(c), options: { bold: true, color: "FFFFFF", fill: { color: this.c("primary") }, align: sc.has(j) ? "center" : ((align && align[j]) || "left"), fontSize: fs, fontFace: this.fontBody } }));
    const body = rows.map((r, i) => r.map((v, j) => {
      const isTotal = total_row && i === rows.length - 1;
      let fill = (i + 1) % 2 === 0 ? this.c("neutral_light") : "FFFFFF";
      if (hl.has(i)) fill = "FFF3D6";
      const st = sc.has(j) ? statusKey(v) : null;
      if (st) return { text: String(v), options: { fill: { color: this.c(st) }, color: "FFFFFF", bold: true, align: "center", fontSize: fs, fontFace: this.fontBody } };
      return { text: v == null ? "" : String(v), options: { fill: { color: fill }, color: this.c("neutral_dark"), fontSize: fs, fontFace: this.fontBody, align: sc.has(j) ? "center" : ((align && align[j]) || (typeof v === "number" ? "right" : "left")), bold: !!(isTotal || hl.has(i)) } };
    }));
    const rowH = Math.min(0.5, (this.bottom - top - 0.1) / (rows.length + 1));
    s.addTable([head, ...body], { x: 0.5, y: top + 0.1, w: CONTENT_W, colW: col_widths || undefined, rowH, border: { type: "solid", pt: 0.5, color: this.c("neutral_light") }, valign: "middle", margin: 0.06 });
    return s;
  }
  addChart({ title, chart_type, categories, series, subtitle, commentary, number_format, show_labels, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const T = this.pptx.ChartType;
    const typeMap = { bar: T.bar, column: T.bar, line: T.line, pie: T.pie, doughnut: T.doughnut, stacked_column: T.bar, stacked_bar: T.bar, area: T.area };
    const multi = series.length > 1, isPie = chart_type === "pie" || chart_type === "doughnut";
    const data = series.map((sr) => ({ name: sr.name, labels: categories, values: sr.values }));
    const cw = commentary ? 8.0 : CONTENT_W, h = this.bottom - top - 0.1;
    const colors = series.map((sr, i) => (multi && REFERENCE_SERIES.has(String(sr.name).toLowerCase()) ? this.c("neutral_mid") : this.chartColor(i)));
    const opts = {
      x: 0.5, y: top + 0.1, w: cw, h,
      chartColors: isPie ? categories.map((_, i) => this.chartColor(i)) : colors,
      showLegend: multi || isPie, legendPos: "b", legendFontSize: this.pt("chart"), showTitle: false,
      catAxisLabelFontSize: this.pt("chart"), valAxisLabelFontSize: this.pt("chart"), catAxisLabelColor: this.c("neutral_mid"), valAxisLabelColor: this.c("neutral_mid"),
      valGridLine: { color: this.c("neutral_light"), size: 0.5 }, catGridLine: { style: "none" }, valAxisLineShow: false,
      showValue: show_labels != null ? show_labels : (!multi && categories.length <= 12), dataLabelFontSize: this.pt("chart"), dataLabelColor: this.c("neutral_dark"),
      dataLabelFormatCode: number_format || undefined,
      barDir: chart_type === "bar" || chart_type === "stacked_bar" ? "bar" : "col", barGrouping: chart_type.startsWith("stacked") ? "stacked" : "clustered", barGapWidthPct: 60,
      lineDataSymbol: "circle", lineSize: 2.5, lineSmooth: false, showPercent: isPie, altText: title,
    };
    if (chart_type === "bar" || chart_type === "stacked_bar") { opts.catAxisOrientation = "maxMin"; opts.valAxisCrossesAt = "max"; }
    s.addChart(typeMap[chart_type], data, opts);
    if (commentary) this._bullets(s, { x: 8.8, y: top + 0.2, w: 4.03, h: h - 0.2 }, commentary, { size: 14 });
    return s;
  }
  addTimeline({ title, milestones, subtitle, today_index, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const n = milestones.length, yl = top + (this.bottom - top) / 2;
    this._rect(s, { x: 0.8, y: yl - 0.03, w: 11.7, h: 0.06 }, { fill: "neutral_mid" });
    const xs = milestones.map((_, i) => 1.3 + i * (10.7 / Math.max(n - 1, 1)));
    milestones.forEach((m, i) => {
      const x = xs[i], st = m.status || "neutral", color = st !== "neutral" ? st : "primary";
      s.addShape(this.pptx.ShapeType.ellipse, { x: x - 0.2, y: yl - 0.2, w: 0.4, h: 0.4, fill: { color: this.c(color) }, line: { color: "FFFFFF", width: 1.5 } });
      const above = i % 2 === 0 || n <= 6;
      if (above) { this._text(s, { x: x - 0.9, y: yl - 1.0, w: 1.8, h: 0.4 }, m.date || "", { size: 13, color: "neutral_mid", align: "center", valign: "bottom" }); this._text(s, { x: x - 0.9, y: yl + 0.35, w: 1.8, h: 1.2 }, m.label || "", { size: 13, align: "center" }); }
      else { this._text(s, { x: x - 0.9, y: yl + 0.35, w: 1.8, h: 0.4 }, m.date || "", { size: 13, color: "neutral_mid", align: "center" }); this._text(s, { x: x - 0.9, y: yl - 1.55, w: 1.8, h: 1.2 }, m.label || "", { size: 13, align: "center", valign: "bottom" }); }
    });
    if (today_index != null && today_index >= 0 && today_index < n) {
      const xt = today_index < n - 1 ? xs[today_index] + (10.7 / Math.max(n - 1, 1)) * 0.5 : xs[today_index] + 0.3;
      this._rect(s, { x: xt, y: yl - 0.7, w: 0.03, h: 1.4 }, { fill: "accent" });
      this._text(s, { x: xt - 0.5, y: yl - 1.05, w: 1, h: 0.3 }, "Hoje", { size: 11, bold: true, color: "accent", align: "center" });
    }
    const used = new Set(milestones.map((m) => m.status || "neutral"));
    let lx = 0.5;
    [["success", "Concluído"], ["warning", "Em risco"], ["danger", "Atrasado"], ["primary", "Planejado"]].forEach(([role, lab]) => {
      if (!used.has(role === "primary" ? "neutral" : role)) return;
      s.addShape(this.pptx.ShapeType.ellipse, { x: lx, y: this.bottom - 0.3, w: 0.2, h: 0.2, fill: { color: this.c(role) }, line: { type: "none" } });
      this._text(s, { x: lx + 0.25, y: this.bottom - 0.35, w: 1.5, h: 0.3 }, lab, { size: 11, color: "neutral_mid", valign: "middle" });
      lx += 1.7;
    });
    return s;
  }
  addProcess({ title, steps, descriptions, metrics, current_index, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const n = steps.length, w = CONTENT_W / n, y = top + 0.6;
    steps.forEach((st, i) => {
      const x = 0.5 + i * w, shape = i === 0 ? this.pptx.ShapeType.homePlate : this.pptx.ShapeType.chevron;
      s.addShape(shape, { x, y, w: w - 0.1, h: 1.4, fill: { color: this.c(current_index === i ? "accent" : "primary") }, line: { type: "none" } });
      this._text(s, { x: x + (i ? 0.35 : 0.15), y, w: w - 0.1 - (i ? 0.65 : 0.45), h: 1.4 }, `${i + 1}. ${st}`, { size: n <= 4 ? 14 : 12, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
      let dy = y + 1.6;
      if (metrics && metrics[i]) { this._text(s, { x: x + 0.1, y: dy, w: w - 0.3, h: 0.6 }, metrics[i], { size: 26, bold: true, color: current_index === i ? "accent" : "primary" }); dy += 0.65; }
      if (descriptions && descriptions[i]) this._text(s, { x: x + 0.1, y: dy, w: w - 0.3, h: 1.4 }, descriptions[i], { size: 13 });
    });
    return s;
  }
  addMatrix2x2({ title, quadrants, x_label, y_label, highlight, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const mx = 1.6, my = top + 0.1, mw = 9.0, mh = this.bottom - top - 0.6, qw = mw / 2 - 0.05, qh = mh / 2 - 0.05;
    const pos = { tl: [mx, my], tr: [mx + qw + 0.1, my], bl: [mx, my + qh + 0.1], br: [mx + qw + 0.1, my + qh + 0.1] };
    for (const [key, [qx, qy]] of Object.entries(pos)) {
      const q = (quadrants || {})[key] || {};
      this._rect(s, { x: qx, y: qy, w: qw, h: qh }, highlight === key ? { hex: "FFF3D6" } : { fill: "neutral_light" });
      if (q.label) this._text(s, { x: qx + 0.1, y: qy + 0.05, w: qw - 0.2, h: 0.35 }, String(q.label).toUpperCase(), { size: 11, bold: true, color: "neutral_mid" });
      this._bullets(s, { x: qx + 0.1, y: qy + 0.45, w: qw - 0.2, h: qh - 0.5 }, q.items || [], { size: 13, spaceAfter: 4 });
    }
    if (x_label) this._text(s, { x: mx, y: my + mh + 0.05, w: mw, h: 0.4 }, `${x_label}  →`, { size: 13, bold: true, color: "neutral_mid", align: "center" });
    if (y_label) this._text(s, { x: mx - 1.1, y: my + mh / 2 - 0.2, w: 1.0, h: 0.4 }, `${y_label}  →`, { size: 13, bold: true, color: "neutral_mid", align: "center", rotate: 270 });
    return s;
  }
  addActionPlan({ title, actions, decision, headers, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const fs = this.pt("table");
    const hdr = (headers || ["Ação", "Dono", "Prazo", "Status"]).map((t, j) => ({ text: t, options: { bold: true, color: "FFFFFF", fill: { color: this.c("primary") }, fontSize: fs, fontFace: this.fontBody, align: j >= 2 ? "center" : "left" } }));
    const body = actions.map((a, i) => {
      const base = (i + 1) % 2 === 0 ? this.c("neutral_light") : "FFFFFF", st = a.status || "neutral";
      const cell = (extra = {}) => ({ fill: { color: base }, color: this.c("neutral_dark"), fontSize: fs, fontFace: this.fontBody, ...extra });
      let last;
      if (headers) last = { text: STATUS_LABEL[st] ? (a.note || "") : String(st || ""), options: cell() };
      else if (st === "neutral") last = { text: STATUS_LABEL.neutral, options: cell({ align: "center", color: this.c("neutral_mid") }) };
      else if (STATUS_LABEL[st]) last = { text: STATUS_LABEL[st], options: { fill: { color: this.c(st) }, color: "FFFFFF", bold: true, align: "center", fontSize: fs, fontFace: this.fontBody } };
      else last = { text: String(st), options: cell({ align: "center" }) };
      return [{ text: a.action || (headers ? String(i + 1).padStart(2, "0") : ""), options: cell() }, { text: a.owner || "", options: cell() }, { text: a.due || "", options: cell({ align: "center" }) }, last];
    });
    const avail = this.bottom - top - 0.1 - (decision ? 0.95 : 0), rowH = Math.min(0.5, avail / (actions.length + 1));
    s.addTable([hdr, ...body], { x: 0.5, y: top + 0.1, w: CONTENT_W, colW: [6.5, 2.0, 1.5, 2.33], rowH, border: { type: "solid", pt: 0.5, color: this.c("neutral_light") }, valign: "middle", margin: 0.06 });
    if (decision) {
      const yd = this.bottom - 0.8;
      this._rect(s, { x: 0.5, y: yd, w: 12.33, h: 0.75 }, { hex: "FFF3D6" });
      this._rect(s, { x: 0.5, y: yd, w: 0.08, h: 0.75 }, { fill: "accent" });
      this._rich(s, { x: 0.75, y: yd, w: 11.9, h: 0.75 }, [{ text: "Decisão pedida:  ", bold: true, color: "accent", size: 16 }, { text: decision, bold: true, size: 16 }], { valign: "middle" });
    }
    return s;
  }
  addQuote({ text, author, dark, notes }) {
    const s = this._slide(dark ? "primary" : null);
    this._text(s, { x: 1.0, y: 1.2, w: 1.2, h: 1.4 }, "“", { size: 110, bold: true, color: "accent", font: this.fontTitle });
    this._text(s, { x: 1.5, y: 2.2, w: 10.33, h: 2.6 }, text, { size: "quote", italic: true, color: dark ? "FFFFFF" : "primary", valign: "middle" });
    if (author) this._text(s, { x: 1.5, y: 5.0, w: 10.33, h: 0.5 }, `— ${author}`, { size: 15, color: dark ? "D9E1EA" : "neutral_mid" });
    if (notes) s.addNotes(notes);
    return s;
  }
  addClosing({ title, subtitle, notes }) {
    const s = this._slide("primary_dark");
    this._text(s, { x: 0.8, y: 2.6, w: 11.7, h: 1.4 }, title, { size: "closing", bold: true, color: "FFFFFF", valign: "bottom", font: this.fontTitle });
    if (subtitle) this._text(s, { x: 0.8, y: 4.1, w: 11.7, h: 0.9 }, subtitle, { size: 19, color: "D9E1EA" });
    this._rect(s, { x: 0, y: 6.9, w: SLIDE_W, h: 0.6 }, { fill: "accent" });
    this._placeLogo(s, 11.3, 0.5, 1.5, true);
    if (notes) s.addNotes(notes);
    return s;
  }
  addTakeaways({ title, items, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const n = Math.max(2, Math.min(items.length, 4)), cols = columns(n), cardH = this.bottom - top - 0.3;
    const [hs, ts] = n <= 3 ? [18, 14] : [15, 12];
    items.slice(0, n).forEach((it, i) => {
      const { x, w } = cols[i], color = this.chartColor(i);
      this._rect(s, { x, y: top + 0.2, w, h: cardH }, { fill: "neutral_light" });
      this._rect(s, { x, y: top + 0.2, w, h: 0.06 }, { hex: color });
      if (it.tag) { const pw = Math.min(2.4, w - 0.5); this._rect(s, { x: x + 0.25, y: top + 0.45, w: pw, h: 0.32 }, { hex: color }); this._text(s, { x: x + 0.25, y: top + 0.45, w: pw, h: 0.32 }, String(it.tag).toUpperCase(), { size: 9, bold: true, color: "FFFFFF", align: "center", valign: "middle" }); }
      else this._text(s, { x: x + 0.25, y: top + 0.4, w: 1.5, h: 0.5 }, String(i + 1).padStart(2, "0"), { size: 22, bold: true, color });
      this._text(s, { x: x + 0.25, y: top + 1.0, w: w - 0.5, h: 0.75 }, it.heading || "", { size: hs, bold: true });
      this._text(s, { x: x + 0.25, y: top + 1.75, w: w - 0.5, h: cardH - 1.7 }, it.text || "", { size: ts });
    });
    return s;
  }
  addProgressBars({ title, items, subtitle, max, columns: ncols = 1, highlight_index, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const vmax = Number(max || 100), nc = ncols === 2 ? 2 : 1, perCol = Math.ceil(items.length / nc);
    const rowH = Math.min(0.55, (this.bottom - top - 0.2) / Math.max(perCol, 1));
    items.forEach((it, i) => {
      const c = Math.floor(i / perCol), r = i % perCol, x0 = 0.5 + c * 6.32, y = top + 0.15 + r * rowH;
      const [lw, bx, bw, vx, vw] = nc === 1 ? [3.0, 3.6, 7.0, 10.7, 2.13] : [1.9, x0 + 2.0, 3.0, x0 + 5.1, 0.9];
      const st = it.status, color = ["success", "warning", "danger"].includes(st) ? st : (highlight_index === i ? "accent" : "primary");
      this._text(s, { x: x0, y, w: lw, h: 0.45 }, it.label || "", { size: nc === 1 ? 14 : 12, valign: "middle" });
      this._rect(s, { x: bx, y: y + 0.1, w: bw, h: 0.25 }, { fill: "neutral_light" });
      const frac = Math.min(1, Math.max(0, Number(it.value || 0) / vmax));
      if (frac > 0) this._rect(s, { x: bx, y: y + 0.1, w: bw * frac, h: 0.25 }, { fill: color });
      this._text(s, { x: vx, y, w: vw, h: 0.45 }, it.display != null ? it.display : String(it.value), { size: nc === 1 ? 13 : 11, bold: true, color: st ? color : "neutral_dark", valign: "middle" });
    });
    return s;
  }
  addImage({ title, image, caption, layout = "full", bullets, highlights, alt, subtitle, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const src = resolvePath(image);
    if (!src) throw new Error(`Imagem nao encontrada: ${image}`);
    const capH = caption ? 0.45 : 0, availH = this.bottom - top - 0.1 - capH;
    const box = layout === "left" ? { x: 0.5, y: top + 0.1, w: 8.0, h: availH } : layout === "right" ? { x: 4.83, y: top + 0.1, w: 8.0, h: availH } : { x: 0.5, y: top + 0.1, w: CONTENT_W, h: availH };
    const tb = layout === "left" ? { x: 8.8, y: top + 0.1, w: 4.03, h: availH } : layout === "right" ? { x: 0.5, y: top + 0.1, w: 4.03, h: availH } : null;
    s.addImage({ path: src, ...box, sizing: { type: "contain", w: box.w, h: box.h }, altText: alt || caption || title });
    (highlights || []).forEach((hl, i) => {
      const hx = box.x + Number(hl.x || 0) * box.w, hy = box.y + Number(hl.y || 0) * box.h, hw = Number(hl.w || 0.2) * box.w, hh = Number(hl.h || 0.2) * box.h;
      this._rect(s, { x: hx, y: hy, w: hw, h: hh }, { fill: null, line: "accent", lineWidth: 2.25 });
      s.addShape(this.pptx.ShapeType.ellipse, { x: hx - 0.18, y: hy - 0.18, w: 0.36, h: 0.36, fill: { color: this.c("accent") }, line: { color: "FFFFFF", width: 1 } });
      this._text(s, { x: hx - 0.18, y: hy - 0.18, w: 0.36, h: 0.36 }, String(hl.number != null ? hl.number : i + 1), { size: 11, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
    });
    if (caption) this._text(s, { x: box.x, y: box.y + box.h + 0.05, w: box.w, h: 0.4 }, caption, { size: 11, italic: true, color: "neutral_mid", align: "center" });
    if (tb && bullets) this._bullets(s, tb, bullets, { size: 14 });
    return s;
  }
  addWaterfall({ title, items, subtitle, decimals = 1, unit = "", source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const n = items.length, px = 0.5, py = top + 0.35, pw = CONTENT_W, ph = this.bottom - top - 1.15;
    const levels = []; let cum = 0;
    items.forEach((it) => { const v = Number(it.value || 0); if (it.total) { levels.push([0, v]); cum = v; } else { levels.push([cum, cum + v]); cum += v; } });
    const lo = Math.min(0, ...levels.map((l) => Math.min(...l))), hi = Math.max(...levels.map((l) => Math.max(...l))), span = (hi - lo) || 1;
    const yOf = (v) => py + ph - (v - lo) / span * ph;
    const slot = pw / n, bw = slot * 0.62;
    this._line(s, px, yOf(0), px + pw, yOf(0), { width: 0.75 });
    let prevTop = null;
    items.forEach((it, i) => {
      const [a, b] = levels[i], v = Number(it.value || 0), x = px + i * slot + (slot - bw) / 2;
      const color = it.total ? "primary" : v >= 0 ? "success" : "danger";
      const y1 = yOf(Math.max(a, b)), y2 = yOf(Math.min(a, b));
      this._rect(s, { x, y: y1, w: bw, h: Math.max(y2 - y1, 0.03) }, { fill: color });
      const label = `${v > 0 && !it.total ? "+" : ""}${fmtNumber(v, decimals)}${unit ? " " + unit : ""}`;
      this._text(s, { x: x - 0.3, y: y1 - 0.38, w: bw + 0.6, h: 0.35 }, label, { size: 12, bold: true, color: it.total ? "neutral_dark" : color, align: "center", valign: "bottom" });
      this._text(s, { x: px + i * slot, y: py + ph + 0.08, w: slot, h: 0.6 }, it.label || "", { size: 11, align: "center" });
      if (prevTop != null) this._line(s, x - (slot - bw), prevTop, x, prevTop, { width: 0.75, dash: true });
      prevTop = yOf(b);
    });
    return s;
  }
  addPareto({ title, categories, values, subtitle, sort = true, threshold = 80, unit = "", source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    let pairs = categories.map((c, i) => [c, Number(values[i] || 0)]);
    if (sort) pairs.sort((a, b) => b[1] - a[1]);
    const total = pairs.reduce((a, p) => a + p[1], 0) || 1, n = pairs.length;
    const px = 0.5, py = top + 0.4, pw = CONTENT_W - 1.2, ph = this.bottom - top - 1.3, vmax = Math.max(...pairs.map((p) => p[1])) || 1, slot = pw / n, bw = slot * 0.6;
    this._line(s, px, py + ph, px + pw, py + ph, { width: 0.75 });
    let cum = 0, reached = false; const pts = [];
    pairs.forEach(([cat, v], i) => {
      const x = px + i * slot + (slot - bw) / 2, h = v / vmax * ph;
      this._rect(s, { x, y: py + ph - h, w: bw, h }, { fill: reached ? "primary" : "accent" });
      this._text(s, { x: x - 0.2, y: py + ph - h - 0.32, w: bw + 0.4, h: 0.3 }, fmtNumber(v) + (unit ? " " + unit : ""), { size: 11, bold: true, align: "center", valign: "bottom" });
      this._text(s, { x: px + i * slot, y: py + ph + 0.06, w: slot, h: 0.7 }, cat, { size: 11, align: "center" });
      cum += v; const pct = 100 * cum / total; pts.push([x + bw / 2, py + ph - pct / 100 * ph, pct]); if (pct >= threshold) reached = true;
    });
    for (let i = 1; i < pts.length; i++) this._line(s, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], { color: "neutral_dark", width: 1.75 });
    pts.forEach(([x, y, pct]) => { s.addShape(this.pptx.ShapeType.ellipse, { x: x - 0.07, y: y - 0.07, w: 0.14, h: 0.14, fill: { color: this.c("neutral_dark") }, line: { type: "none" } }); this._text(s, { x: x - 0.5, y: y - 0.4, w: 1, h: 0.3 }, `${fmtNumber(pct)}%`, { size: 10, align: "center", valign: "bottom" }); });
    const ty = py + ph - threshold / 100 * ph;
    this._line(s, px, ty, px + pw, ty, { width: 0.75, dash: true });
    this._text(s, { x: px + pw + 0.05, y: ty - 0.15, w: 1.1, h: 0.3 }, `${fmtNumber(threshold)}% acum.`, { size: 10, color: "neutral_mid", valign: "middle" });
    return s;
  }
  addGantt({ title, periods, tasks, subtitle, today, source, notes, kicker, callout }) {
    const { s, top } = this._content({ title, subtitle, source, notes, kicker, callout });
    const nameW = 3.0, gx = 0.5 + nameW, gy = top + 0.15, gw = CONTENT_W - nameW, np = Math.max(periods.length, 1), cw = gw / np, headH = 0.4;
    const rowH = Math.min(0.5, (this.bottom - gy - headH - 0.1) / Math.max(tasks.length, 1)), gh = headH + rowH * tasks.length;
    this._rect(s, { x: gx, y: gy, w: gw, h: headH }, { fill: "primary" });
    periods.forEach((p, i) => this._text(s, { x: gx + i * cw, y: gy, w: cw, h: headH }, String(p), { size: 11, bold: true, color: "FFFFFF", align: "center", valign: "middle" }));
    tasks.forEach((tk, j) => {
      const y = gy + headH + j * rowH;
      if (j % 2 === 1) this._rect(s, { x: 0.5, y, w: CONTENT_W, h: rowH }, { fill: "neutral_light" });
      this._text(s, { x: 0.55, y, w: nameW - 0.1, h: rowH }, tk.name || "", { size: 12, valign: "middle" });
      const color = ["success", "warning", "danger"].includes(tk.status) ? tk.status : "primary";
      const start = Number(tk.start || 0), end = Number(tk.end != null ? tk.end : start + 1);
      if (tk.milestone) s.addShape(this.pptx.ShapeType.diamond, { x: gx + start * cw - 0.14, y: y + rowH / 2 - 0.14, w: 0.28, h: 0.28, fill: { color: this.c(color) }, line: { type: "none" } });
      else {
        this._rect(s, { x: gx + start * cw, y: y + rowH * 0.25, w: Math.max((end - start) * cw, 0.05), h: rowH * 0.5 }, { fill: color });
        if (tk.label) this._text(s, { x: gx + start * cw + 0.05, y, w: (end - start) * cw, h: rowH }, tk.label, { size: 9, bold: true, color: "FFFFFF", valign: "middle" });
      }
    });
    for (let i = 0; i <= np; i++) this._line(s, gx + i * cw, gy + headH, gx + i * cw, gy + gh, { color: "neutral_light", width: 0.5 });
    if (today != null) { const tx = gx + Number(today) * cw; this._line(s, tx, gy, tx, gy + gh, { color: "accent", width: 1.5, dash: true }); this._text(s, { x: tx - 0.4, y: gy + gh + 0.02, w: 0.8, h: 0.3 }, "Hoje", { size: 10, bold: true, color: "accent", align: "center" }); }
    return s;
  }

  // ------------------------------------------------------------ spec API
  addFromSpec(sl) {
    const map = {
      cover: "addCover", section: "addSection", agenda: "addAgenda", executive_summary: "addExecutiveSummary", kpi_row: "addKpiRow", big_number: "addBigNumber",
      bullets: "addBullets", two_column: "addTwoColumn", comparison: "addComparison", table: "addTable", chart: "addChart", timeline: "addTimeline", process: "addProcess",
      matrix_2x2: "addMatrix2x2", action_plan: "addActionPlan", quote: "addQuote", closing: "addClosing", takeaways: "addTakeaways", progress_bars: "addProgressBars",
      image: "addImage", waterfall: "addWaterfall", pareto: "addPareto", gantt: "addGantt",
    };
    const m = map[sl.type];
    if (!m) throw new Error(`Tipo de slide desconhecido: ${sl.type}`);
    return this[m](sl);
  }
  static fromSpec(spec) {
    const meta = spec.meta || {};
    let confidentiality = meta.confidentiality;
    if (!confidentiality && meta.exposure) confidentiality = { interno: "Uso interno", interareas: "Uso interno", externo: "Confidencial" }[meta.exposure];
    const db = new DeckBuilder({ palette: meta.palette, fontScale: meta.font_scale, confidentiality, logo: meta.logo, logoLight: meta.logo_light, logoPosition: meta.logo_position, brand: meta.brand, deckName: meta.deck_name, date: meta.date });
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
  if (!specPath || !outPath) { console.error("Uso: node deckbuilder.js spec.json saida.pptx"); process.exit(1); }
  const spec = JSON.parse(fs.readFileSync(specPath, "utf-8"));
  DeckBuilder.fromSpec(spec).save(outPath).then((f) => console.log(`OK: ${f} (${spec.slides.length} slides)`)).catch((e) => { console.error(e); process.exit(1); });
}
