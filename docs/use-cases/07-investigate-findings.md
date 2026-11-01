---
id: uc-07
title: "UC-07 — Investigate and Resolve Findings"
sidebar_position: 8
---

# UC-07 — Investigate and Resolve Findings

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Audit Staff |
| **Goal** | Review each candidate with supporting evidence, explanation, and accountable resolution. |
| **Trigger** | A rule run has produced findings. |

## Preconditions

- Auditor is authorized for the engagement.
- Finding references source evidence or explicitly missing data.

## Main success flow

1. Auditor filters and opens a candidate finding.
2. Auditor reviews the underlying transactions and considers legal applicability and exceptions.
3. Auditor requests a client explanation when necessary.
4. Auditor records supporting documents, notes and response.
5. Auditor resolves only with an explanation; privileged waivers and severity overrides require partner approval.
6. System preserves the complete finding history.

## Alternative and exception flows

- No supporting explanation: keep the finding open.
- Recurring finding after rerun: create a new open finding linked to prior history.
- Critical waiver by staff: reject; only appropriately authorized partner can consider it.

## Expected outcome

Finding has a justified disposition, evidence and responsible actor.

## Acceptance scenarios (to test)

- Resolving with neither note nor client response fails.
- Critical waiver cannot be performed by ordinary staff.
- A rerun never silently inherits an earlier resolution.

## Supporting specifications

[Module 08](../modules/08-findings-workflow). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index)
