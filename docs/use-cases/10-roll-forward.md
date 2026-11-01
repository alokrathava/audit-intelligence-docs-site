---
id: uc-10
title: "UC-10 — Roll Forward to the Next Year"
sidebar_position: 11
---

# UC-10 — Roll Forward to the Next Year

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Engagement Partner |
| **Goal** | Start the next financial year's engagement without recycling prior-year evidence. |
| **Trigger** | A new FY begins for an existing client. |

## Preconditions

- Partner can access the prior engagement.
- A next-year engagement is not already present.

## Main success flow

1. Partner selects the prior engagement and requests rollforward.
2. System proposes a new Draft engagement with the next FY.
3. System copies permitted, traceable ledger mappings but not transactions, findings or reports.
4. Partner reviews scope, assignments and mappings.
5. Team uploads the new year's books and performs new checks.

## Alternative and exception flows

- No historic mappings: create an empty Draft.
- Next-year engagement exists: prevent duplication.
- Taxonomy changed: require review of affected mappings.

## Expected outcome

Fresh engagement with optional reusable mappings and clear provenance.

## Acceptance scenarios (to test)

- Prior transactions and findings are not copied.
- Same client/FY duplicate is blocked.

## Supporting specifications

[Module 04](../modules/04-engagements), [Module 06](../modules/06-ledger-normalization). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index)
