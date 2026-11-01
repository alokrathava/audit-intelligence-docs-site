---
id: uc-15
title: "UC-15 — Reconcile an Imported Source Population"
sidebar_position: 16
---

# UC-15 — Reconcile an Imported Source Population

**Actor:** Audit Staff, with authorized reviewer. **Goal:** Establish whether a parsed dataset is complete and suitable for its intended procedure.

## Preconditions

An engagement defines the intended period/entity/account scope. A versioned uploaded file has completed scan and parsing. Appropriate source-system totals, export parameters, or other reconciliation evidence are available or explicitly marked absent.

## Main success flow

1. Auditor records the source system, export scope and expected record counts/totals.
2. Parser records accepted/rejected row counts and immutable source references.
3. System compares counts, debit/credit totals, relevant opening/closing balances and source coverage, with clearly stated tolerance policy.
4. Auditor investigates discrepancies and requests corrected records when necessary.
5. Reviewer records a justified `RECONCILED` or explicitly scoped `LIMITED_WITH_APPROVAL` decision; otherwise state remains `INCOMPLETE`.
6. A snapshot is versioned and dependent checks are allowed only if their data prerequisites are met.

## Failure and alternative flows

- Valid parse but expected count 100,000 vs observed 98,600 → **INCOMPLETE**, not successful.
- Expected source total unavailable → review-required; cannot silently infer completeness.
- Corrected export replaces previous version → prior run becomes stale, evidence history retained.
- Multiple entities/periods accidentally included → scope mismatch, review required.

## Acceptance criteria

No dependent full-population check may claim completion on unreconciled input; partial and rejected records remain visible; a reviewer can reconstruct source counts, scope, totals and decision.

[Back to catalogue](./index.md) · [Tuesday's story](../story/02-the-missing-records.md) · [Domain model](../architecture/domain-model-v2.md)
