---
id: uc-05
title: "UC-05 — Normalize Ledger Names"
sidebar_position: 6
---

# UC-05 — Normalize Ledger Names

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Audit Staff |
| **Goal** | Make varying accounting ledger names comparable against a versioned taxonomy. |
| **Trigger** | Parsed transactions have raw ledger descriptions. |

## Preconditions

- A taxonomy and mapping policy have known versions.

## Main success flow

1. System applies the firm's previously confirmed ledger mappings.
2. System applies rule/regex mappings to remaining names.
3. System performs deterministic similarity comparison where needed.
4. Low-confidence names remain unmapped and appear in a review queue.
5. Auditor confirms or overrides mappings; the system records method, actor and version.

## Alternative and exception flows

- Score below cutoff: leave unmapped rather than guess.
- Mapping conflicts with a taxonomy update: surface review, not silent overwrite.
- Unmapped names remain: display coverage warning before permitted rule run.

## Expected outcome

Inspectable mapping for known ledger names and explicit queue of unknowns.

## Acceptance scenarios (to test)

- Same inputs/configuration produce the same categories.
- Unmapped count is prominent; overrides remain attributable.

## Supporting specifications

[Module 06](../modules/06-ledger-normalization). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index)
