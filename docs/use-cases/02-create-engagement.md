---
id: uc-02
title: "UC-02 — Create an Audit Engagement"
sidebar_position: 3
---

# UC-02 — Create an Audit Engagement

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Engagement Partner |
| **Goal** | The firm needs one work area for a specific client and financial year. |
| **Trigger** | Partner receives a new audit assignment. |

## Preconditions

- Partner belongs to an active tenant.
- Client record is available or can be created.

## Main success flow

1. Partner selects or registers the client.
2. Partner selects the Indian financial year by its starting date.
3. System checks for an existing engagement for that client and FY.
4. Partner assigns audit staff and a reviewing partner.
5. System creates a Draft engagement and displays the engagement dashboard.

## Alternative and exception flows

- Duplicate client/FY: show the existing engagement rather than silently creating another.
- No assigned partner: allow Draft but block entry into Fieldwork.
- Staff not assigned: deny engagement visibility.

## Expected outcome

Unique Draft engagement, owned by one firm, client and FY.

## Acceptance scenarios (to test)

- Duplicate client/FY is rejected with a conflict.
- Only authorized team members can view the engagement.

## Supporting specifications

[Module 04](../modules/04-engagements.md). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index.md)
