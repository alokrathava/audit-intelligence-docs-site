---
id: uc-12
title: "UC-12 — Inspect Evidence and Decision History"
sidebar_position: 13
---

# UC-12 — Inspect Evidence and Decision History

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Engagement Partner / Firm Admin |
| **Goal** | Reconstruct how a finding or sign-off was reached without permitting global operators to view client financial data. |
| **Trigger** | An authorized reviewer needs a historical record. |

## Preconditions

- Engagement events and evidence are retained.
- Reviewer is authorized for the firm and engagement.

## Main success flow

1. Reviewer opens the engagement or finding history.
2. System lists uploads, mapping decisions, rule runs, notes, letters and sign-off transitions.
3. Reviewer examines related source/version references.
4. Reviewer exports permitted evidence or activity records with an integrity mechanism.
5. System records the export as a separate auditable action.

## Alternative and exception flows

- Duplicate bus event: create one logical audit entry by event ID.
- Cross-tenant request: reject without revealing foreign resources.
- Retention minimum or legal hold: prevent conflicting deletion.
- Platform operator: show service health metadata but not client records.

## Expected outcome

A traceable chronological record available to permitted reviewers.

## Acceptance scenarios (to test)

- Duplicate delivery does not duplicate logical events.
- Exports include verifiable integrity data.
- Platform operators never receive tenant financial content.

## Supporting specifications

[Module 12](../modules/12-audit-trail-compliance), [Module 14](../modules/14-integrations-api). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index)
