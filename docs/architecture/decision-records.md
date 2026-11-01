---
id: decision-records
title: Architecture Decision Records — Selected Design
sidebar_position: 4
---

# Architecture Decisions for Case Study #01

**Status:** Selected *for this proposed case study*, not implemented or benchmarked. One architecture now governs the narrative, module contracts and diagrams.

| ADR | Selected design | Main rationale | Reverse the decision when |
| --- | --- | --- | --- |
| 001 | Financial-data validation, review and evidence as initial product boundary | Clear, testable audit-team problem without promising an autonomous audit | Domain experts define a broader validated workflow |
| 002 | **Modular monolith with background workers** | Simpler cross-module transactions and operations | Independent deployments/scaling produce measured gains |
| 003 | Global identity and firm-membership registry; engagement-level authorization | One membership source, explicit least privilege | Requirements for federated identities demand a new model |
| 004 | **Shared PostgreSQL data with tenant IDs and RLS** for illustrative pilot | Single migration path, DB policy as defense in depth | Residency or contractual isolation requires schema/db split |
| 005 | Typed journal, invoice and tax entities with immutable source snapshots | Avoid incompatible accounting meanings in one row | A reviewed common representation is proven safe for a specific record type |
| 006 | Source-population reconciliation **before dependent checks** | A parsed export may be incomplete | Source-native guarantees can be independently verified |
| 007 | Rule engine owns candidate persistence; human-review module owns disposition | No duplicated finding writers; clearer lifecycle | Domain boundaries materially change |
| 008 | Business mutation, audit record and transactional outbox **commit atomically** | Prevent lost event-history gaps and duplicate replay effects | A proven equivalent consistency contract exists |
| 009 | Revision-pinned, fail-closed partner approval | Cannot approve stale, incomplete or unreviewed work | Qualified auditors approve a documented alternative methodology |
| 010 | India-first *reviewed* rule packs; globally reusable workflow | Start narrow without hard-coding local law into platform | A second jurisdiction pack is independently validated |
| 011 | No platform support impersonation of client financial content | Preserve confidentiality and least privilege | Formal support threat model, consent and controls approved |
| 012 | Hosted payment collection, scope-specific PCI assessment | Minimize card data touching product infrastructure | Actual payment flows/merchant requirements change |

All decisions assume a **publication and hypothetical architecture**, not a committed company roadmap. Detailed alternatives, costs and reversal conditions: [Architecture Trade-offs](./alternatives-and-tradeoffs.md). Unverified domain claims: [Validation Register](../reference/domain-validation-register.md).

## Resolution of earlier contradictions

- No separate ingestion, identity, findings or billing **microservice deployments** in the selected design. They remain *logical modules* of one backend; parsing/checks/reporting use workers.
- Firm membership is **global** and authorization is checked server-side; firm-private records are **tenant-scoped shared tables with RLS**. The legacy schema-per-tenant approach is an **evaluated alternative**, not a concurrent requirement.
- A workflow sign-off requires current approved evidence and procedures, not simply one completed rule run or zero Critical findings.
- Rule execution **owns** initial candidate finding creation; other modules cannot recreate findings by consuming events.
- Source record types are distinct; the universal `transaction` table is not authoritative.
- Legal thresholds are never replaced by tenant-configured investigation thresholds.
- Immutable evidence and outbox event delivery require well-defined privileges and replay handling.

## Open decisions

The exact audit procedure methodology, source export/control availability, qualified validation of India-specific rules, customer-specific residency and retention requirements, and measured production SLOs are **not known**. We present these as open questions rather than contradictory implementations.

See [solution architecture](./solution-architecture.md), [review contract](./signoff-contract.md), [capacity model](./capacity-model.md) and [worked example](../reference/worked-example.md).
