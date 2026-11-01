# Audit Intelligence — A Financial Audit System Design Case Study

> **Status:** Architecture and use-case proposal. This repository contains a Docusaurus documentation site, **not** a deployed audit product. All firm/client names, events and figures in the story are fictional.

## The question that started the design

A firm receives a client's accounting exports. The files import successfully. A rules engine reports zero serious exceptions.

**Can the partner sign off?**

Not necessarily. The files may be incomplete, some checks may not have run, and there may be no documented audit procedures. That tension drives this case study: **a clean rule result is not the same as sufficient, appropriate audit evidence.**

## Read it as a story

Start with **[The Aster engagement](docs/intro.md)**, an illustrative week at a fictional audit firm.

1. [Monday — an engagement begins](docs/story/01-the-engagement.md)
2. [Tuesday — the missing records](docs/story/02-the-missing-records.md)
3. [Wednesday — a finding is a question](docs/story/03-findings-not-verdicts.md)
4. [Thursday — the review gate](docs/story/04-the-review-gate.md)
5. [Friday — proving what happened](docs/story/05-trust-and-evidence.md)
6. [The architecture behind the story](docs/story/06-from-story-to-system.md)

## System design and requirements

- [Proposed solution architecture](docs/architecture/solution-architecture.md)
- [Canonical data model and ownership](docs/architecture/domain-model-v2.md)
- [Sign-off and processing invariants](docs/architecture/signoff-contract.md)
- [Architecture decision records](docs/architecture/decision-records.md)
- [Requirements and acceptance matrix](docs/reference/requirements-traceability.md)
- [Use cases](docs/use-cases/index.md) and [supporting module specifications](docs/modules/04-engagements.md)

## Product boundary

The initial problem is **financial audit analytics, evidence collection, investigation and review**, not automatically conducting an entire statutory audit or issuing an audit opinion. The reusable architecture is jurisdiction-aware; **India is the first illustrative rule pack**, requiring professional/legal validation before real-world use.

Security controls can be designed with ISO/IEC 27001 and SOC 2 objectives in mind. PCI DSS is **scope-dependent**, not automatically applicable to financial ledgers. No certifications or attestations are claimed.

## Run the documentation

```bash
npm ci
npm run build
npm run start
```

**Author:** Alok Rathava.
