# Audit Intelligence Platform — Certification Program

**Future go-to-market idea, not a current or assessed certification program.** Do not award or imply professional qualifications from a proposed software workflow. Pilot usability and domain validation take priority.

Not part of the build spec in `docs/`. This is a go-to-market artifact: a free certification that
turns the product documentation into an adoption channel among CAs and their articles, who rotate
through firms every ~3 years and carry tooling habits with them.

## Audience

Chartered Accountants and their articles (trainees) at audit firms — not retailers, not end
clients. The certification proves someone can run an engagement on the platform, not that they can
do bookkeeping.

## Curriculum

One track per product area, each mapped directly to an existing module page so the curriculum
never drifts from the spec:

| Track | Source pages | Covers |
|---|---|---|
| Platform fundamentals | `docs/architecture/*`, `docs/architecture/glossary.md` | Tenancy model, service topology, determinism guarantee |
| Engagement lifecycle | `docs/modules/04-engagements.md` | Draft → Signed Off states, sign-off gate, rollforward |
| Data intake & normalization | `docs/modules/05-document-ingestion.md`, `06-ledger-normalization.md`, `15-client-intake.md` | Upload formats, rejection handling, taxonomy mapping, client intake links |
| Statutory rule engine | `docs/modules/07-rule-engine.md`, `docs/reference/statutory-rules.md` | The five rules, threshold bounds, determinism |
| Findings & reporting | `docs/modules/08-findings-workflow.md`, `09-reporting-query-letters.md` | Finding lifecycle, query letters, waivers |
| Admin & roles | `docs/modules/13-admin-settings.md`, `docs/reference/roles-permissions.md` | Role matrix, firm settings, rule config |

## Format

- Free, self-paced, hosted alongside (not inside) the docs site.
- Each track: read the mapped module pages, then a short scored quiz (10–15 questions,
  scenario-based off the module's acceptance criteria and edge-case tables — those tables already
  read like exam items).
- Pass all six tracks → "Certified Platform Practitioner" badge, firm-visible, LinkedIn-shareable.
- No cost gate, no seat limit — the return is adoption and lower support load, not certification
  revenue.

## Explicitly not in scope here

- Any bookkeeping/billing certification for retailers — rejected alongside the retailer-facing
  product itself (see project decision log / conversation history).
- Grading infrastructure, LMS build, proctoring — pick an existing free quiz tool (e.g. Google
  Forms, a static quiz page) rather than building one. Revisit only if volume justifies it.
