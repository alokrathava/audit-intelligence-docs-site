---
id: uc-09
title: "UC-09 — Partner Review and Sign-Off"
sidebar_position: 10
---

# UC-09 — Partner Review and Sign-Off

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Engagement Partner |
| **Goal** | Authorize completion after reviewing evidence, open critical findings and checks. |
| **Trigger** | Fieldwork is submitted for review. |

## Preconditions

- Partner has sign-off permission.
- At least one rule run has completed.
- Engagement is Under Review.

## Main success flow

1. Partner reviews rule-run completeness, rejected/unmapped data and finding status.
2. Partner examines critical items and supporting resolutions.
3. System verifies there are no unresolved Critical findings under the specified gate.
4. Partner explicitly approves the engagement transition.
5. System records actor/reason/time and locks the signed-off engagement against normal edits.

## Alternative and exception flows

- Open Critical findings: block with the associated IDs.
- No completed rule run: block.
- Unauthorized staff: reject sign-off.
- Reopen requested: require a partner-supplied reason and preserve previous history.

## Expected outcome

Approved, read-only engagement with attributable partner sign-off.

## Acceptance scenarios (to test)

- No run or unresolved Critical finding blocks sign-off.
- Signed-off engagement rejects ordinary uploads/edits.
- Only an authorized partner/admin can approve.

## Supporting specifications

[Module 04](../modules/04-engagements.md), [Module 08](../modules/08-findings-workflow.md). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index.md)
