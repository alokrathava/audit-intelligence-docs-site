---
id: 07-rule-engine
title: "07 — Rule Engine"
sidebar_position: 7
---
# Rule Engine

> **Case-study contract.** This is the selected proposed *logical module* of one modular backend, not a deployed service. Source-specific laws and unverified performance assumptions are not implementation claims.

## Purpose

Run approved, jurisdiction-valid checks against reconciled immutable snapshots and persist candidate findings.

## Actors & permissions

Actors are the responsible firm user, engagement reviewer, authorized client uploader, or scoped background worker as applicable. Every firm-private operation requires verified membership and engagement authorization. See [Roles & Permissions](../reference/roles-permissions.md).

## Functional features

| Requirement | Selected case-study behavior |
| --- | --- |
| Ownership | Explicit per-check COMPLETED / INSUFFICIENT_DATA / FAILED / NOT_APPLICABLE / SKIPPED; input/rule/code versions. |
| Workflow | Rule engine is sole creator of candidate findings; reruns preserve prior evidence and invalidate stale dependencies. |
| Boundary | Missing inputs yielding zero candidates must never be shown as a clean passing check. |

## Business rules & constraints

- Preserve immutable evidence and document every material human decision.
- Reject unauthorized access, stale revisions and missing prerequisites rather than silently defaulting to success.
- Current design is described in [Solution Architecture](../architecture/solution-architecture.md), [Domain Model](../architecture/domain-model-v2.md) and [Sign-off Contract](../architecture/signoff-contract.md).

## Data model

Authoritative concepts and entity ownership are documented in the [canonical domain model](../architecture/domain-model-v2.md) and [shared-data design](../architecture/data-model.md). This module does not introduce a contradictory independent schema.

## API surface

Any future API must require verified firm/engagement authorization, typed versioned requests, idempotent mutations and explicit error codes. Exact endpoints are **not implemented** or finalized by this use-case study.

## DFD Level 0

```mermaid
flowchart LR
  Actor["Authorized actor / worker"] --> App["Deterministic Check Execution"]
  App --> DB[("Firm-scoped PostgreSQL")]
  App --> Audit["Atomic audit record + outbox"]
```

## Edge cases & failure modes

- **Unauthorized actor:** deny without exposing firm-private metadata.
- **Missing required input or stale version:** return a reviewable incomplete/error status; do not claim completion.
- **Worker retry:** logical idempotency ensures no duplicate evidence, findings or usage charges.

## Out of scope

Missing inputs yielding zero candidates must never be shown as a clean passing check.

## Cross references

[The end-to-end case](../reference/worked-example.md) · [Architecture alternatives](../architecture/alternatives-and-tradeoffs.md) · [Domain assumptions](../reference/domain-validation-register.md)

### DFD Level 0

The earlier detailed diagram is archived conceptually in the [architecture alternatives](../architecture/alternatives-and-tradeoffs.md). The selected DFD Level 0 and canonical documents govern this case study.

### DFD Level 1

The earlier detailed diagram is archived conceptually in the [architecture alternatives](../architecture/alternatives-and-tradeoffs.md). The selected DFD Level 0 and canonical documents govern this case study.

### DFD Level 2 — Run Orchestration

The earlier detailed diagram is archived conceptually in the [architecture alternatives](../architecture/alternatives-and-tradeoffs.md). The selected DFD Level 0 and canonical documents govern this case study.

### DFD Level 2 — Determinism & Re-run Handling

The earlier detailed diagram is archived conceptually in the [architecture alternatives](../architecture/alternatives-and-tradeoffs.md). The selected DFD Level 0 and canonical documents govern this case study.

### DFD Level 3 — CASH-002 (Sec 40A(3)) Micro-Logic

The earlier detailed diagram is archived conceptually in the [architecture alternatives](../architecture/alternatives-and-tradeoffs.md). The selected DFD Level 0 and canonical documents govern this case study.
