---
id: uc-11
title: "UC-11 — Administer Firm Access and Settings"
sidebar_position: 12
---

# UC-11 — Administer Firm Access and Settings

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Firm Admin |
| **Goal** | Control users, roles, subscriptions, and permitted configuration within the firm's isolated workspace. |
| **Trigger** | Firm needs a staffing, subscription or policy change. |

## Preconditions

- Firm has an active authorized administrator.

## Main success flow

1. Admin views users, billing and settings.
2. Admin invites/deactivates users or changes tenant-scoped roles.
3. System verifies relevant plan entitlements and seat limits.
4. Admin edits permitted branding, notification, and bounded rule settings.
5. System logs changes; the owning module applies them according to its effective-time rules.

## Alternative and exception flows

- Last Admin demotion: block.
- Seat cap exceeded: block invitation or request plan change.
- Threshold outside bounded range: reject.
- Billing suspension: protect data while enforcing the applicable access policy.

## Expected outcome

Accountable, tenant-scoped settings and membership state.

## Acceptance scenarios (to test)

- A tenant always retains an Admin.
- No setting change affects other firms.
- Invalid threshold configuration is rejected.

## Supporting specifications

[Module 03](../modules/03-subscriptions-billing), [Module 13](../modules/13-admin-settings). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index)
