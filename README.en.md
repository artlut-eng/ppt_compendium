# PPT Compendium (English overview)

A knowledge base that lets AI agents (and people) build PowerPoint decks consistently: **audience → deck type → narrative → slide models → visual rules → generated .pptx → audit**. Content is written in Brazilian Portuguese; this page and [`00-guia/como-usar.en.md`](00-guia/como-usar.en.md) summarize the method in English so non-Portuguese agents can navigate the repository. Slide type keys, JSON spec fields and code are language-neutral.

## How an AI should use this repository
1. **Brief first** (`00-guia/briefing.md`): one-sentence key message, what should happen afterwards, audience level and decision-maker style, **exposure level** (internal / cross-department / external) and visual identity (**always ask for the logo**).
2. If the request comes with a spreadsheet, profile it (`06-codigo/python-pptx/profile_data.py`) and follow `00-guia/da-base-ao-deck.md`: cutoff date, coverage, immature cohorts, candidate KPIs and charts.
3. Pick the **audience** (`02-publicos/`): strategic, tactical, operational, external; plus the decision-maker's communication style (red / yellow / green / blue).
4. Pick the **deck type** (`03-tipos-de-apresentacao/`): 30 types, each with a slide-by-slide structure and a JSON spec example.
5. Assemble slides from the **slide models** (`04-modelos-de-slides/`): 23 types, with common fields `kicker` (section label above the title) and `callout` (labelled box: conclusion / warning / recommendation / decision).
6. Write titles as **conclusions** (`01-fundamentos/banco-de-titulos.md`), apply palettes, typography and number formatting (`01-fundamentos/`, `05-artefatos-visuais/`).
7. Generate the file from a JSON spec (`schemas/deck-spec.schema.json`) with `06-codigo/python-pptx/build_from_spec.py` or the JavaScript builder.
8. Audit: render thumbnails (`render_thumbnails.py`, needs PowerPoint), run `audit_deck.py` and `score_deck.py`, then go through `07-checklists/`.
9. To improve an existing deck: `00-guia/revisao-de-deck-existente.md` (`extract_deck.py` outline, title test, rebuild via spec).

## Repository map
| Folder | Content |
|---|---|
| `00-guia/` | Decision flow, briefing, agent system-prompt template (direct vs. guided mode), data-to-deck, deck review, facts vs. inferences vs. recommendations, glossary |
| `01-fundamentos/` | Design principles, typography, colour roles, 16:9 grid in inches, storytelling structures, accessibility, title bank, number formatting |
| `02-publicos/` | Audience levels and communication styles |
| `03-tipos-de-apresentacao/` | 30 deck types across departments: board meeting, annual budget, financial and sales reports, marketing results, QBR, operational review, process efficiency, supplier review, safety, incident report, project status, portfolio, product roadmap, people indicators, survey results, change communication, quality management review, risk and compliance committee, ESG, and more |
| `04-modelos-de-slides/` | Slide models with anatomy and coordinates; header/kicker/logo conventions |
| `05-artefatos-visuais/` | Palettes (JSON, by role and by sector), chart choice, icons, logo rules, corporate template |
| `06-codigo/` | Python (python-pptx) and JavaScript (PptxGenJS) builders, data profiler, number formatting, thumbnails, audit, scoring, extraction |
| `07-checklists/` | Pre-delivery, per audience, exposure level, file audit, quality rubric (0 to 100) |
| `schemas/` | JSON Schema of the deck spec and example specs |
| `examples/` | Generated decks and PNG thumbnails |

## Core rules
- Title = conclusion; one idea per slide; numbers with unit, period, comparison and source.
- Colours only through palette roles (`primary`, `accent`, `success`...); never loose hex codes.
- Logo present and discreet (cover and closing top-right, content slides in the footer); wordmark when no file exists.
- Label facts, inferences and recommendations; flag immature cohorts, future-dated records and coverage.
- Nothing enters the deck that cannot be seen by everyone who will receive it (exposure level).
- Generalize: this public repository contains no company-specific content; brand identity lives in your fork or a palette JSON.

## Quick start
```bash
pip install python-pptx jsonschema pandas openpyxl pillow pywin32
python 06-codigo/python-pptx/build_from_spec.py schemas/exemplos/relatorio-de-projeto.json out.pptx
python 06-codigo/python-pptx/audit_deck.py out.pptx --audience tatico --expect-logo
```
