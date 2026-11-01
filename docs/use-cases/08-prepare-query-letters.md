---
id: uc-08
title: "UC-08 — Prepare Query Letters"
sidebar_position: 9
---

# UC-08 — Prepare Query Letters

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Audit Staff |
| **Goal** | Generate a reviewable request for client clarification about flagged items. |
| **Trigger** | Auditor chooses a finding requiring clarification. |

## Preconditions

- Finding exists and is accessible.
- A suitable query-letter template is available.

## Main success flow

1. Auditor selects one or more open findings.
2. System populates rule reference, source detail and firm letterhead into a DOCX template.
3. Auditor reviews and approves the draft for external communication.
4. System stores an immutable version of the generated document.
5. Auditor sends the letter outside the platform and later records the client's response.

## Alternative and exception flows

- No suitable template: state that automatic generation is unavailable.
- Missing mandatory merge field: reject broken document creation.
- Finding waived: exclude from open-finding batch.
- Data changes: generate a new version; retain prior letters.

## Expected outcome

Versioned, evidence-linked query letter ready for an auditor to send.

## Acceptance scenarios (to test)

- Generated DOCX contains no unresolved placeholders.
- Regeneration preserves prior documents.
- The proposed system does not claim to send letters directly in v1.

## Supporting specifications

[Module 09](../modules/09-reporting-query-letters.md). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index.md)
