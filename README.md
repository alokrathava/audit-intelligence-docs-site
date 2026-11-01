# Audit Intelligence System — Use-Case Study

> **Project status: proposed concept and use-case documentation.** This repository is not a working audit SaaS product and does not claim real customer outcomes.

## Problem

Indian Chartered Accountant (CA) firms receive a client's records in different formats—Tally XML, spreadsheets, and GSTR-2B exports. Audit teams must reconcile, investigate, document, and review exceptions across financial years while preserving evidence.

## Proposed use case

A CA firm creates an audit engagement for one client and financial year. Staff collect digital books through a limited upload link, review validation errors and ledger mappings, execute repeatable statutory *checks*, investigate the results, draft client query letters, and route the engagement to a partner for sign-off.

**Audit findings are review candidates, not proven legal violations or autonomous audit opinions.** Applicability, statutory exceptions, and conclusions stay with qualified auditors.

## Start here

- [Use-case study and actors](docs/intro.md)
- [12 actor-based use cases](docs/use-cases/index.md)
- [Proposed architecture](docs/architecture/system-context.md)
- [Detailed functional specifications](docs/modules/04-engagements.md)
- [Illustrative rule catalogue](docs/reference/statutory-rules.md)

### Proposed boundaries

In scope: firm/workspace separation, engagements, digital file intake, validation, taxonomy mapping, deterministic rule checks, investigation, reporting, partner-controlled sign-off, and event history.

Out of scope: replacing auditors, generating audit opinions, live bookkeeping/POS, scanned voucher OCR, automated fraud judgments, and customer-facing bookkeeping.

**Compliance caveat:** The rule references, thresholds, exceptions, retention requirements, and performance targets in these documents are design assumptions—not validated legal advice. A CA/domain expert must review them against the law and standards effective for each engagement before production use.

## View documentation locally

This repository is a Docusaurus documentation website, not an implementation of the proposed services.

```bash
npm install
npm run start
```

Use `npm run build` to build the documentation. This change does not publish the site.

**Author:** Alok Rathava.
