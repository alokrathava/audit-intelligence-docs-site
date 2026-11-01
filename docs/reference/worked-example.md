---
id: worked-example
title: Worked Example — From Upload to Decision
sidebar_position: 6
---

# Worked Example: One Dataset, Two Revisions, One Review

This is a **synthetic, illustrative test fixture**, not customer data, a statutory-rule validation or an executed performance benchmark. It makes the [Monday–Friday narrative](../intro.md) inspectable end to end.

## Inputs and evidence controls

| Evidence | Example value | Why it exists |
| --- | --- | --- |
| Engagement | `ENG-ASTER-2025` | Joins work to a single firm, client and reporting period |
| Scope | One illustrative entity, 1 Apr 2025–31 Mar 2026 | Prevents mixing reporting periods or entities |
| Expected journal lines | `100,000` | Independently sourced control total **assumed** available in this fixture |
| Export A | `98,600` parsed / `0` malformed | Shows parsing alone can succeed |
| Reconciliation A | `INCOMPLETE`, count delta `1,400` | Blocks procedures requiring the full ledger |
| Export B | `100,000` parsed / `0` malformed | Re-upload replaces active dataset pointer, not source history |
| Reconciliation B | `RECONCILED` (count, scope and representative totals reviewed) | Provides one prerequisite for dependent rule execution |
| Rule | `JOUR-ILLUSTRATIVE-01` | A sample **review filter**, not a legal finding |
| Finding | `F-001` unusual period-end manual entry | Workpaper investigation required |
| Final revision | `R3` | Links accepted evidence, checks and approval to one snapshot |

**Important:** Matching row counts alone is not proof of a complete population. The scenario also presumes source export parameters, period scope and relevant control totals were independently checked; real exports need source-specific procedures.

## Sample records (not an entire accounting population)

| Record | Posting date | Example journal description | Debit | Credit | Interpretation |
| --- | --- | --- | ---: | ---: | --- |
| J-1042 / line 1 | 2026-03-29 | Year-end adjustment / expense | 250,000.00 | 0.00 | A candidate line for review |
| J-1042 / line 2 | 2026-03-29 | Year-end adjustment / accrual | 0.00 | 250,000.00 | Balancing leg in same journal |
| J-1043 / line 1 | 2026-03-29 | Cash posting | 5,000.00 | 0.00 | No conclusion without whole voucher and opening balance |

The data is **example-only**; it is not enough to run a real cash-balance or tax eligibility test. Currency and accounting treatment must be defined by the engagement.

## Walkthrough: expected transitions

```mermaid
sequenceDiagram
  actor Client
  actor Auditor
  actor Partner
  participant API as Case-study backend
  participant Worker as Ingestion / checks worker
  participant Store as Versioned evidence store
  Client->>API: Upload A (98,600 rows)
  API->>Store: Persist source version A
  API->>Worker: Parse and reconcile
  Worker-->>Auditor: PARSED, population INCOMPLETE (1,400 missing)
  Client->>API: Upload corrected B
  API->>Store: Retain A; persist B
  API->>Worker: Parse / reconcile B
  Worker-->>Auditor: RECONCILED pending reviewer acceptance
  Auditor->>API: Approve source suitability; request checks
  Worker->>Store: Persist pinned run and candidate F-001
  Auditor->>API: Review F-001 and attach workpaper
  Partner->>API: Request approval for current engagement revision
  API-->>Partner: Approve only if all current procedure gates pass
```

## What if the data changes after the check?

A new upload C or mapping change increments the engagement revision. The existing check references B and becomes **STALE** if its dependencies change. Even if its previously generated finding was resolved, the application must not let a stale result satisfy the review gate.

## Result matrix

| Scenario | Parse | Population | Check | Sign-off |
| --- | --- | --- | --- | --- |
| Export A: 98,600 of 100,000 | Success | **INCOMPLETE** | `INSUFFICIENT_DATA` where full population required | **Blocked** |
| Export B: 100,000, controls reviewed | Success | `RECONCILED` | `COMPLETED`, candidate F-001 | Pending human review |
| Rule fails midway | Success | `RECONCILED` | `FAILED` | **Blocked** for required procedure |
| Export C supersedes B | Success | Pending reconciliation | Previous check `STALE` | **Blocked** |
| Corrected current revision, all required work reviewed | Success | Accepted | Current, reviewed | **May be approved** by authorized partner |

## Illustrative final evidence manifest

```json
{
  "engagement": "ENG-ASTER-2025",
  "approved_revision": "R3",
  "source_versions": ["A: superseded", "B: accepted", "C: current"],
  "source_integrity": "sha256 hashes stored per version",
  "reconciliation": "reviewed for current source scope",
  "rule_runs": "current versions and coverage status referenced",
  "workpapers": "F-001 explanation, evidence and reviewer decision",
  "approval": "partner ID, time, decision and frozen evidence manifest"
}
```

This JSON is a **conceptual schema example**, not output collected from a running system. An actual manifest would include concrete immutable IDs, hashes, algorithm identifiers and verifiable references—not the explanatory strings shown above.

**Success criterion:** a reviewer can distinguish *parsed*, *reconciled*, *checked*, *reviewed* and *approved* without relying on a single green status.

See [sign-off contract](../architecture/signoff-contract.md), [data model](../architecture/domain-model-v2.md) and [domain validation register](./domain-validation-register.md).
