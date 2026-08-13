---
id: roles-permissions
title: Roles & Permissions
sidebar_position: 2
---

# Roles & Permissions

Three tenant-scoped roles, plus one cross-tenant platform role. A user's role is assigned per
tenant in `firm_user_role` — see [Multi-Tenancy](../modules/02-multi-tenancy#data-model) — so the
same person can hold different roles at different firms.

## Role summary

| Role | Scope | Typical holder |
|---|---|---|
| Admin | Full read/write within one tenant, including billing and settings | Firm owner, IT/ops lead |
| Partner | Full read/write within assigned engagements, sign-off authority | Engagement partner |
| Staff | Read/write within assigned engagements, no sign-off/waive authority | Audit associates |
| Platform Operator | Cross-tenant, platform administration only | Internal platform team |

## Permission matrix

| Capability | Admin | Partner | Staff | Platform Operator |
|---|---|---|---|---|
| Manage billing / subscription | ✅ | ❌ | ❌ | ❌ (view only) |
| Manage firm settings | ✅ | Read-only | ❌ | ❌ |
| Invite / deactivate users | ✅ | ❌ | ❌ | ❌ |
| Create engagement | ✅ | ✅ | ❌ | ❌ |
| Assign engagement team | ✅ | ✅ | ❌ | ❌ |
| Upload documents | ✅ | ✅ | ✅ (if assigned) | ❌ |
| Trigger rule run | ✅ | ✅ | ✅ (if assigned) | ❌ |
| Assign / comment on findings | ✅ | ✅ | ✅ (if assigned) | ❌ |
| Resolve a finding | ✅ | ✅ | ✅ (if assigned) | ❌ |
| Waive a Critical finding | ✅ | ✅ | ❌ | ❌ |
| Sign off an engagement | ✅ | ✅ | ❌ | ❌ |
| Configure rule thresholds | ✅ | Read-only | ❌ | ❌ |
| View firm-wide dashboard | ✅ | ✅ | Own engagements only | ❌ |
| Issue API keys | ✅ | ❌ | ❌ | ❌ |
| Suspend/reinstate a tenant | ❌ | ❌ | ❌ | ✅ |
| Impersonate a user | ❌ | ❌ | ❌ | ✅ (logged) |
| View another tenant's data | ❌ | ❌ | ❌ | ❌ (never, even for operators) |

## Notes

- **Staff visibility is assignment-scoped**: a Staff user sees only engagements they're on
  `engagement_team` for — see [Engagements → BR-ENG-04](../modules/04-engagements#business-rules--constraints).
- **A tenant always retains at least one Admin** — see
  [Admin & Settings → Edge cases](../modules/13-admin-settings#edge-cases--failure-modes).
- **Platform Operator never has tenant data read access** — operator tooling operates on tenant
  metadata (status, health metrics) and security events, never on engagement/transaction/finding
  content, preserving the isolation guarantee in
  [Multi-Tenancy → FEAT-MT-005](../modules/02-multi-tenancy#functional-features).
