---
id: decision-records
title: Architecture Decisions & Open Questions
sidebar_position: 4
---

# Architecture Decisions

These decisions describe the **proposed first implementation**, not deployed components. They intentionally supersede conflicting older module sketches; the implementation should not mix incompatible choices.

| ID | Decision | Why | Status |
| --- | --- | --- | --- |
| ADR-001 | Focus v1 on financial-audit evidence and analytics, not full automated audit | Test one real workflow before promising full audit coverage | Proposed |
| ADR-002 | Modular monolith + background workers, not 12 independently deployed services | Reduce distributed consistency and operational overhead | Proposed |
| ADR-003 | Global identity/membership registry; explicit per-engagement access | One authoritative membership source, enforce on every request | Proposed |
| ADR-004 | Tenant isolation to be decided by threat model and operations; schema-per-tenant is **not** automatically fail-closed | Avoid misleading guarantees from `search_path`, pooled connections or SQL permissions | Open |
| ADR-005 | Typed accounting records + versioned source snapshot, not one universal transaction entity | Prevent accounting/tax semantics from being conflated | Proposed |
| ADR-006 | Reconciling source population is distinct from parsing | Valid import can still omit records | Proposed |
| ADR-007 | Rule engine owns candidate creation; workpaper module owns human disposition | Clear data ownership and idempotent events | Proposed |
| ADR-008 | Atomic mutation + audit record + transactional outbox | A bus subscriber alone cannot guarantee a complete audit trail | Proposed |
| ADR-009 | Sign-off checks current revision, evidence coverage and required procedures | No false clearance from zero findings or stale runs | Proposed |
| ADR-010 | India is first reviewed jurisdiction pack, not global hard-coded logic | Retain focused launch plan and extensibility | Proposed |
| ADR-011 | No support impersonation of customer financial content in v1 | Preserve strong confidentiality boundary | Proposed |
| ADR-012 | Hosted payment collection; independently scope PCI DSS | Financial records and cardholder data are different obligations | Proposed |

## Conflicts in legacy module text to resolve

- [Legacy system context](./system-context.md) models independent services; **[canonical architecture](./solution-architecture.md)** proposes one deployable backend for v1.
- [Multi-Tenancy](../modules/02-multi-tenancy.md) places membership globally; [Legacy Data Model](./data-model.md) places it per tenant. **ADR-003 chooses one global membership registry.**
- The [Auth module](../modules/01-auth-identity.md) offers support impersonation, while the permissions reference forbids cross-tenant data access. **ADR-011 removes private-content impersonation for v1.**
- The [Rule Engine](../modules/07-rule-engine.md) and [Findings Workflow](../modules/08-findings-workflow.md) both imply candidate creation. **ADR-007 assigns that to Rule Engine.**
- Indian reporting calendars and INR appear in detailed modules. Treat them as **India pack examples**, not universal data constraints.
- The legacy sign-off gate considers completed rules and Critical findings. **[Sign-off contract](./signoff-contract.md)** requires procedure coverage, current evidence and reviewer approval.

## Open decisions that require auditor/business validation

- How will source-system completeness be evidenced for each export?
- Which user role may approve limited-population exceptions without presenting a complete result?
- What constitutes sufficient audit documentation for the narrow pilot?
- Which jurisdictional checks and legal exceptions can be reviewed/approved by qualified auditors?
- Which tenant isolation strategy fits contractual/regulatory restrictions and actual operating scale?
- What metrics demonstrate reduction in audit rework or review time?

See [requirements matrix](../reference/requirements-traceability.md).
