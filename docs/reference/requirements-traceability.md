---
id: requirements-traceability
title: Requirements, Evidence & Acceptance
sidebar_position: 5
---

# Requirements Traceability: What must be true?

This matrix links the [fictional engagement story](../intro.md) to testable system behaviour. **No results are claimed here**. A documented requirement is not proof that a backend enforces it.

| ID | Business problem | Design contract | Example negative acceptance test |
| --- | --- | --- | --- |
| BR-01 | Wrong team can see client records | Tenant + engagement membership authorization | Guess engagement ID of other firm: denied, no metadata leak |
| BR-02 | Staff begin checks without a plan | Required procedures and responsible reviewer | Request sign-off with no procedures: blocked |
| BR-03 | Parser succeeds but records are missing | Source population reconciliation and reviewer confirmation | 98,600 imported, 100,000 expected: incomplete |
| BR-04 | Accounting and tax records are conflated | Typed financial entities and immutable source version | GST statement row cannot silently become a general-ledger journal line |
| BR-05 | Incomplete test appears clean | Independent coverage status per check | Missing mandatory source + zero findings: no pass |
| BR-06 | Rule result cannot be reproduced | Hash/config/version-pinned run | Same canonical inputs produce identical canonical candidate set |
| BR-07 | Finding explanation disappears on rerun | Versioned finding references and human disposition | Re-run retains original notes and open issue provenance |
| BR-08 | New data arrives after sign-off review | Engagement revision and stale-dependency invalidation | Sign-off referencing old dataset revision: rejected |
| BR-09 | Unqualified role approves | Reviewer/partner authorization and separation of duties | Staff attempts partner action: denied |
| BR-10 | Event lost between database and queue | Atomic state/audit record/outbox + idempotent delivery | Kill worker after commit: event delivered exactly once logically on retry |
| BR-11 | Export checksum presented as immutable history | Source version integrity, restricted privilege, evidence manifest | Privileged alteration detected by independent verification mechanisms |
| BR-12 | India rules run for another jurisdiction | Approved pack with legal effective window | Unsupported jurisdiction cannot run India tax checks |
| BR-13 | Support accesses private books | Operator metadata-only access, no impersonation | Support role cannot fetch transaction/evidence content |
| BR-14 | Compliance terms mistaken for certification | Control ownership and evidence, correct PCI scoping | Planned control not represented as certified or attested |
| BR-15 | Pricing/quota counts are unreliable | Idempotent usage events and fit-for-format units | Duplicate parse event cannot double-bill |

## Example test dataset

Use wholly fictitious sample data with an explicitly specified export manifest containing 100,000 expected entries, a 98,600-row truncated sample, a corrected complete export, a journal-entry candidate and a missing jurisdiction-specific supporting file. Include trial-balance control amounts and expected outcomes.

Tests should cover parser counts, expected/actual reconciliation, mapping changes, deterministic rerun, evidence preservation, actor permissions, incomplete checks, sign-off blockers and recovery after worker failure.

## Pilot validation gates

- **Domain review:** Practicing qualified auditors inspect procedure and rule applicability assumptions.
- **Data review:** Source-population mismatch and rejected row errors are visible, attributable and actionable.
- **Determinism:** Same canonical snapshot and approved pack yield equivalent candidate findings.
- **Review:** Incomplete required work, stale runs or open critical blockers prevent sign-off.
- **Security:** Cross-firm data access, upload token misuse and audit-event loss are tested.
- **Usability:** Auditors can follow the end-to-end task without needing implementation knowledge.

See [solution architecture](../architecture/solution-architecture.md), [domain model](../architecture/domain-model-v2.md), [sign-off contract](../architecture/signoff-contract.md) and [ADRs](../architecture/decision-records.md).
