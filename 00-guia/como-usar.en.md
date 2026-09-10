# How to use this compendium (English guide for AI agents)

Condensed translation of `como-usar.md`. File names and spec keys are the same; read the Portuguese pages for detail.

## Flow
```
Request
  0. BRIEFING      key message, objective, exposure, identity/logo  -> 00-guia/briefing.md
  1. AUDIENCE      level + decision-maker style                       -> 02-publicos/
  2. TYPE          what the deck is for                               -> 03-tipos-de-apresentacao/
  3. NARRATIVE     structure and order                                -> 01-fundamentos/storytelling-e-estrutura.md
  4. SLIDES        one slide model per point                          -> 04-modelos-de-slides/
  5. VISUAL        palette, typography, charts, numbers               -> 01-fundamentos/, 05-artefatos-visuais/
  6. GENERATE      JSON spec -> code -> .pptx                         -> schemas/, 06-codigo/
  7. VALIDATE      audit, score, checklists                           -> 07-checklists/
```

## Step 0 - Briefing
Ask (or infer) before building: the one sentence the audience must remember; what should happen after (decide, approve, align, inform, sell, teach); who decides and how they communicate; how long and in what format; whether the deck will be forwarded; **logo file, brand colours, fonts or mandatory template**. Classify **exposure**: `interno` (own area: everything can be shown, including raw risks), `interareas` (other departments: weaknesses only with an action plan, no blame, no personal data), `externo` (only what the company authorizes). Default when unknown: `interareas`. Confirm a 6-line briefing summary. Two conduction modes: **direct** (assume defaults, deliver once, list assumptions) or **guided** (one question at a time, approve the storyline before building). Template for agent instructions: `prompt-base-para-agentes.md`.

If a spreadsheet is provided, run `profile_data.py` first and follow `da-base-ao-deck.md` (cutoff date, coverage per column, future-dated records, immature cohorts, candidate KPIs).

## Step 1 - Audience
| Who decides | Level | Structure | Deck size |
|---|---|---|---|
| Board, C-level | `estrategico` | answer first (Minto), summary on slide 2, ask on the penultimate slide | 8 to 15 |
| Managers, PMO | `tatico` | situation, analysis, action; plan vs. actual; action plan table | 12 to 25 |
| Supervisors, teams | `operacional` | status, deviations, actions; 18 pt minimum; fixed panel layout | 5 to 12 |
| Clients, investors | `externo` | problem, solution, proof, call to action; brand identity | 10 to 20 |

Decision-maker style (`02-publicos/estilos-de-comunicacao.md`): **red** (direct: answer and ask up front, short deck), **yellow** (ideas and enthusiasm: open with the opportunity, leave room to discuss), **green** (people and safety: context before change, impact on the team, gradual transition), **blue** (data and method: source on everything, appendix with assumptions). Mixed audience: open for red, support for blue, contextualize for green, leave space for yellow.

## Step 2 - Deck type
Keyword table in `como-usar.md`; catalogue with slide-by-slide structures in `03-tipos-de-apresentacao/README.md`.

## Step 3 - Narrative
Write the key message; choose the structure by audience; every slide gets a **conclusion title** (full sentence with a verb and, when possible, a number). Test: reading only the titles in sequence must tell the story. Formulas and good/bad pairs: `01-fundamentos/banco-de-titulos.md`. Label facts, inferences and recommendations (`fatos-inferencias-recomendacoes.md`).

## Step 4 - Slide models
Spec keys: `cover`, `agenda`, `section`, `executive_summary`, `kpi_row`, `big_number`, `chart`, `table` (auto-paginated above 10 rows), `progress_bars`, `image`, `bullets`, `two_column`, `comparison`, `timeline`, `process` (with per-step `metrics`), `matrix_2x2`, `action_plan`, `takeaways`, `waterfall`, `pareto`, `gantt`, `quote`, `closing`. Common fields on content slides: `title`, `subtitle`, `source`, `notes`, `kicker`, `callout {kind, label, text}`. Meta: `brand`, `deck_name`, `date`, `logo`, `logo_light`, `logo_position`, `exposure`, `palette`, `template`.

## Step 5 - Visual rules
One accent colour per slide; semantic colours (green / amber / red) only for status, always with text; white background; 16:9 grid in inches with title at (0.5, 0.4, 12.33, 0.9) and content bottom at 6.7; fonts 28 pt titles, 14 to 18 pt body, 12 pt minimum (18 pt operational); one chart per slide, no internal chart title, legend only with 2+ series, source in the footer; Brazilian number formatting (`fmt.py`).

## Steps 6 and 7 - Generate and validate
```bash
python 06-codigo/python-pptx/build_from_spec.py spec.json deck.pptx
python 06-codigo/python-pptx/render_thumbnails.py            # Windows + PowerPoint
python 06-codigo/python-pptx/audit_deck.py deck.pptx --audience tatico --expect-logo
python 06-codigo/python-pptx/score_deck.py deck.pptx --audience tatico
```
Deliver: narrative summary, slide-by-slide storyline, design decisions (palette, fonts, logo, substitutions), data to confirm, audit table and rubric score. Everything committed to this public repository must be generalized (no company names or private data).
