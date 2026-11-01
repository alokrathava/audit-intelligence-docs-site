---
id: uc-13
title: "UC-13 — Choose Jurisdiction & Rule Pack"
sidebar_position: 14
---

# UC-13 — Choose Jurisdiction & Rule Pack

> **Proposed scenario.** India is the only illustrative rule pack; no other country is supported by this repository.

| Attribute | Description |
| --- | --- |
| **Actor** | Engagement Partner, supported by a qualified local audit/legal reviewer |
| **Goal** | Use only valid, approved financial-audit checks for the engagement's governing framework |
| **Trigger** | Engagement setup, legal change, or new reporting period |

## Preconditions

- Engagement and reporting period are known.
- Jurisdiction is selected explicitly; a pack has documented legal references and effective dates.

## Main flow

1. Partner selects jurisdiction, applicable audit framework, fiscal-calendar profile and source currency.
2. System lists only approved rule packs with a valid legal effective window.
3. Partner reviews coverage, required inputs, known exceptions and limitations.
4. Partner approves the exact pack/version for the engagement and records a rationale.
5. Subsequent runs pin jurisdiction, pack version, source snapshot and configuration.
6. Later legal changes create new versions without overwriting previous findings.

## Alternative and failure flows

- **Unsupported jurisdiction:** block automated statutory checks, show *not supported*, and allow manual audit/evidence handling.
- **Pack expired or unreviewed:** block statutory execution until approved.
- **Cross-border client:** do not infer governing law from tenant office or billing location.
- **Pack changed after findings:** require authorized review, fresh run and preserved historical outputs.
- **Currency mismatch:** require documented conversion methodology or reject comparison; never silently use INR thresholds.

## Success criteria to test

- India GST rules never run on a non-India engagement.
- Unapproved or ineffective packs cannot be selected.
- Prior run evidence survives changes in law or configuration.

See [Jurisdiction Model](../architecture/jurisdiction-model.md) and [UC-06](./06-run-audit-checks.md).

[Back to catalogue](./index.md)
