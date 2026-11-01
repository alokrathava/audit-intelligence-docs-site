---
id: roles-permissions
title: Roles & Permissions
sidebar_position: 2
---

# Actors, Roles & Permissions

This is the **selected logical authorization model** for the case study, not a deployed RBAC service.

## Role and trust boundaries

| Actor | Scope | Allowed |
| --- | --- | --- |
| Firm Admin | One firm | Manage members, policies and billing-related configuration; no automatic authority to issue an auditor's professional conclusion |
| Engagement Partner | Assigned engagement | Define and approve work, make documented workflow approval decisions |
| Audit Staff | Assigned engagement | Upload, reconcile, execute candidate checks, investigate and propose resolutions |
| Client uploader | One expiring intake token | Upload source records only; **no read access** to findings, data or other engagements |
| Platform operator | Platform metadata | Operate health, billing infrastructure and security metadata; **no impersonation of customer-content users** |
| Background worker | Scoped job | Read only the firm/engagement objects needed for a named job |

## Canonical enforcement order

1. Authenticate a real user/service actor or narrowly scoped client-intake token.
2. Check active membership in the **global firm-membership registry**, never from a forged tenant header.
3. Check engagement assignment or partner/admin action-specific policy.
4. Enforce shared-table firm isolation with PostgreSQL RLS under a non-bypass application role.
5. Enforce action-level separation of duties, version checks, and audit attribution.

A role name alone does not grant another firm's access. The DB has **shared, firm-keyed tables with RLS for the hypothetical pilot**; schema-per-firm is an evaluated alternative.

## Review-specific rules

- Staff may document resolution suggestions but cannot bypass critical/mandatory review gates.
- Partner workflow approval requires current reviewed procedures, reconciled source evidence and no blockers; it is **not a statutory audit opinion**.
- A person may hold roles at multiple firms, but each request selects and verifies exactly one firm context.
- Firms retain at least one authorized administrator.
- Every role/membership change is attributable and invalidates inappropriate active access; verification must be performed with negative authorization tests.

See [Identity module](../modules/01-auth-identity.md), [sign-off contract](../architecture/signoff-contract.md), [isolation trade-offs](../architecture/alternatives-and-tradeoffs.md).
