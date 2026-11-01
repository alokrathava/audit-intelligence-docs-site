---
id: uc-03
title: "UC-03 — Collect Client Books Through a Limited Link"
sidebar_position: 4
---

# UC-03 — Collect Client Books Through a Limited Link

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Audit Staff and Client Representative |
| **Goal** | Request digital financial records without creating a client login. |
| **Trigger** | Auditor requests books for an active engagement. |

## Preconditions

- Engagement accepts uploads.
- Auditor is assigned or otherwise authorized.

## Main success flow

1. Auditor creates an expiring, engagement-bound intake link.
2. Client follows the link and optionally downloads a standard spreadsheet template.
3. Client uploads the requested Tally XML, Excel/CSV or GSTR-2B data.
4. System scans and validates the submission through the normal ingestion pipeline.
5. Client receives an upload receipt; auditor sees file status.

## Alternative and exception flows

- Expired/revoked link: show a plain-language unavailable notice.
- Incorrect file or size: reject with reason and allow a corrected submission.
- Signed-off engagement: deactivate the intake link.
- Token used to read findings: deny; token grants upload-only access.

## Expected outcome

Source files are linked to exactly one engagement without granting full client access.

## Acceptance scenarios (to test)

- The link cannot upload to any other engagement.
- Client cannot read the firm's findings or other files.

## Supporting specifications

[Module 15](../modules/15-client-intake), [Module 05](../modules/05-document-ingestion). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index)
