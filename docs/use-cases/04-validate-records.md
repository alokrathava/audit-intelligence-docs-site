---
id: uc-04
title: "UC-04 — Validate and Ingest Financial Records"
sidebar_position: 5
---

# UC-04 — Validate and Ingest Financial Records

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Audit Staff |
| **Goal** | Convert uploads to structured transactions while preserving file provenance and rejection reasons. |
| **Trigger** | A source file is uploaded. |

## Preconditions

- File is bound to an editable engagement.
- Source format is eligible for intake.

## Main success flow

1. System stores the source file/hash and scans for malware.
2. System selects the correct structural parser for Tally XML, spreadsheet/CSV or GSTR-2B JSON.
3. System validates rows and voucher balance rules.
4. System commits valid records with references to original source rows; invalid rows are reported.
5. Auditor inspects processing status, accepted row counts and rejection report.

## Alternative and exception flows

- Infected file: reject before parsing.
- Invalid voucher: reject the affected voucher with a cited reason.
- Duplicate file in same engagement: point to original rather than count twice.
- Corrected version: supersede prior transaction set, not merge or duplicate.

## Expected outcome

Traceable accepted transaction set and explicit invalid-row report.

## Acceptance scenarios (to test)

- No malformed record is silently dropped.
- Duplicate upload cannot double count transactions.
- Each re-upload has a clear version/lineage.

## Supporting specifications

[Module 05](../modules/05-document-ingestion.md). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index.md)
