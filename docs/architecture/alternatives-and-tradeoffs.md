---
id: alternatives-and-tradeoffs
title: Architectural Alternatives & Trade-offs
sidebar_position: 5
---

# Decisions: What We Chose, What We Rejected

This is a **proposed** solution to a case-study workload, not a deployment benchmark. A decision is complete only when the alternative, the cost and the conditions for reversing it are explicit.

## ADR-002 — Application architecture

| Option | Strength | Cost or risk | Decision |
| --- | --- | --- | --- |
| **Modular monolith + workers** | Transaction boundaries, simpler operations, strong module ownership | Shared deployment and shared datastore coupling | **Chosen for pilot** |
| Microservices from day one | Per-service deployments and scaling | Network failure modes, distributed consistency and higher operational overhead | Rejected initially |
| Serverless-first | Managed burst elasticity | Execution limits, vendor dependence and more difficult end-to-end transactional reasoning | Selective future use |

**Trade-off accepted:** fewer independently deployed components, at the expense of eventual extractions. **Revisit when:** measured contention or separate teams justify independent deployment.

## ADR-004 — Tenant isolation

| Option | Strength | Cost or risk | Decision |
| --- | --- | --- | --- |
| Shared PostgreSQL tables with `tenant_id` + RLS | Simple migrations/analytics; tenant policy enforced in DB alongside application auth | Correct RLS policies, DB roles and request context are security-critical | **Chosen for hypothetical pilot** |
| Schema per firm | Physical namespace separation | Connection pooling, `search_path`, migrations and support tooling get harder | Possible expansion |
| Database per firm | Stronger operational isolation | More provisioning and maintenance; cross-firm control-plane complexity | Consider for contractual needs |

**Defense in depth:** authenticated global membership + engagement assignment checks in application code, PostgreSQL RLS policies on firm-private tables, tenant context scoped to each database transaction, role without `BYPASSRLS`, and negative cross-firm tests. This is a *design*, not a proven security guarantee. The actual threat model, privileges and migration roles must be reviewed.

**Revisit when:** contract/data-residency requirements, scale or enterprise isolation demands change.

## ADR-005 — Financial data representation

| Option | Benefit | Risk | Decision |
| --- | --- | --- | --- |
| One generic `transaction` table | Simple early prototype | Conflates journal lines, invoice records and tax statements | Rejected |
| **Typed records and immutable source snapshots** | Clear accounting semantics and evidence lineage | More adapters, joins and schema complexity | **Chosen** |

**Revisit when:** a domain review demonstrates a safe, well-defined common representation for a *specific* record family, without losing original semantics.

## ADR-006 — Reconciliation boundary

Parsing verifies readability, not completeness. A **separate population/scope reconciliation gate** makes absent records and missing control reports visible.

**Cost:** extra reviewer work and source-specific adapters. **Benefit:** no silent interpretation of incomplete exports as clean inputs. **Revisit:** if a source offers independently verified manifests, while retaining the same assurance objective.

## ADR-007 — Rule and finding ownership

Rule execution atomically persists the candidate and its run result; a separate human workflow owns assignment/disposition. A `rules.completed` event **does not create duplicate candidates**.

**Cost:** additional bounded interfaces and version semantics. **Benefit:** one writer of candidate truth; replayable notifications.

## ADR-008 — Event delivery and audit history

An event subscriber cannot guarantee every business transaction was captured. Store business state + audit record + outbox row in one transaction; dispatch with at-least-once, idempotent handling.

**Cost:** outbox maintenance, dedupe and retries. **Benefit:** recovery without silent missing events. **Revisit:** only with a proven alternative that preserves the same atomicity guarantees.

## ADR-009 — Sign-off

An approval must evaluate **current source version, reconciled prerequisites, required procedure coverage, outstanding blockers and authorized reviewer**, not zero critical findings.

**Cost:** an explicit dependency graph and staleness tracking. **Benefit:** auditable, fail-closed workflow approval.

## Explicitly unresolved

Source-system availability and reliability of control totals; financially meaningful audit procedure templates; regulatory applicability; what constitutes adequate reviewer separation under different firm sizes; precise performance SLOs and production cost.

Unresolved facts belong in the [domain validation register](../reference/domain-validation-register.md), not disguised as finalized engineering choices.

See the [ADR summary](./decision-records.md), [capacity model](./capacity-model.md) and [worked example](../reference/worked-example.md).
