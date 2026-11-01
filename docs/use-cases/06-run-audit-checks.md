---
id: uc-06
title: "UC-06 — Run Reproducible Statutory Checks"
sidebar_position: 7
---

# UC-06 — Run Reproducible Statutory Checks

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Audit Staff |
| **Goal** | Identify evidence-linked review candidates with repeatable checks, not autonomous audit opinions. |
| **Trigger** | Staff requests a rule run against available data. |

## Preconditions

- Input snapshot is identified.
- Enabled rules, taxonomy and threshold versions are recorded.

## Main success flow

1. System records the run and fixed source/configuration versions.
2. System evaluates enabled deterministic checks across the engagement's transactions.
3. System creates findings with rule ID, calculation, evidence, severity and version.
4. System reports per-rule status and any data-quality or completeness warnings.
5. Auditor reviews candidates and investigates them; historical runs remain accessible.

## Alternative and exception flows

- Required GSTR-2B data missing: mark the relevant check data-incomplete, not compliant.
- One check fails: report partial failure and preserve other completed results.
- Concurrent run: serialize rather than create inconsistent races.
- Potential statutory exception: flag for human legal/domain assessment.

## Expected outcome

Versioned rule-run result with reproducible candidate findings.

## Acceptance scenarios (to test)

- Repeated runs against the same canonical snapshot/config yield identical canonical findings, excluding timestamps and run IDs.
- Every finding traces to its source rows and rule definition.
- A partially failed run is never labelled fully successful.

## Supporting specifications

[Module 07](../modules/07-rule-engine.md). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index.md)
