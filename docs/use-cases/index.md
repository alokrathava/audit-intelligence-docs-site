---
id: use-case-catalogue
title: Use-Case Catalogue
slug: /use-cases
sidebar_position: 1
---

# Use-Case Catalogue

A use case states **what an actor wants to achieve**, the initiating event, conditions, main steps, possible exceptions and verifiable result. These are **proposed** behaviours, not implementation/test reports.

## System boundary

**Inside:** firm workspace, identity and role checks, engagements, digital intake, validation, mappings, rule execution, findings, query documents, sign-off and audit trail.

**Outside:** client accounting systems, the GST portal and payment/email providers. Clients do not need full platform accounts in the proposed v1. The platform does not issue audit opinions or conclusively determine legal violations.

## End-to-end flow

```mermaid
flowchart TD
  A["UC-01 Firm onboarding"] --> B["UC-02 Create engagement"]
  B --> C["UC-03 Client intake"]
  C --> D["UC-04 Validate records"]
  D --> E["UC-05 Normalize ledgers"]
  E --> F["UC-06 Run checks"]
  F --> G["UC-07 Investigate"]
  G --> H["UC-08 Prepare letters"]
  H --> I["UC-09 Partner sign-off"]
  I --> J["UC-10 Roll forward"]
  K["UC-11 Firm administration"] -. supports .-> B
  L["UC-12 History and evidence"] -. records .-> I
```

## Actors and scenario catalogue

| ID | Main actor | User goal | Scenario |
| --- | --- | --- | --- |
| UC-01 | Firm Admin | Establish a secure firm workspace | [Firm onboarding](./01-firm-onboarding) |
| UC-02 | Engagement Partner | Start an audit for a client and FY | [Create engagement](./02-create-engagement) |
| UC-03 | Auditor + Client Representative | Submit digital records safely | [Client intake](./03-client-intake) |
| UC-04 | Audit Staff | Identify and handle invalid records | [Validate records](./04-validate-records) |
| UC-05 | Audit Staff | Categorize heterogeneous ledgers | [Normalize ledgers](./05-normalize-ledgers) |
| UC-06 | Audit Staff | Identify reproducible review candidates | [Run audit checks](./06-run-audit-checks) |
| UC-07 | Audit Staff | Investigate and document exceptions | [Investigate findings](./07-investigate-findings) |
| UC-08 | Audit Staff | Request client clarification in writing | [Prepare query letters](./08-prepare-query-letters) |
| UC-09 | Engagement Partner | Review and authorize sign-off | [Partner sign-off](./09-partner-sign-off) |
| UC-10 | Engagement Partner | Open next-year engagement | [Roll forward](./10-roll-forward) |
| UC-11 | Firm Admin | Control team, plans and settings | [Firm administration](./11-firm-administration) |
| UC-12 | Partner/Admin | Reconstruct evidence and decisions | [Evidence and history](./12-evidence-and-audit-history) |

## Shared success conditions

1. Authorization is scoped to the authenticated firm and assigned engagements.
2. Invalid inputs are rejected with explainable reasons; they are not silently discarded.
3. Findings are traceable to an input snapshot, rule/version and supporting transactions.
4. A flag is a **candidate for human review**, not proof of a statutory violation.
5. Resolution and final sign-off have accountable human actors and durable records.
6. Retention periods, statutory thresholds, and performance targets are **proposed assumptions** subject to review and testing.

For the design behind these scenarios, see the [proposed architecture](../architecture/system-context), [detailed specifications](../modules/04-engagements), and [illustrative rule catalogue](../reference/statutory-rules).
