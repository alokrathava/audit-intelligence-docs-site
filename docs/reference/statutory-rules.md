---
id: statutory-rules
title: Statutory Rule Catalogue
sidebar_position: 1
---

# Statutory Rule Catalogue

**India-specific illustrative rule pack.** The rules below are not a globally applicable registry or verified legal advice. Effective dates, exceptions, thresholds and applicability must be assessed by qualified Indian audit/legal professionals before actual use. **Never apply them automatically outside a validated India engagement.** The [proposed engine](../modules/07-rule-engine.md) should pin a reviewed [jurisdiction pack](../architecture/jurisdiction-model.md), use deterministic checks and treat results as candidates for human review.

## Summary

| Rule ID | Legal Reference | Severity | Default Threshold |
|---|---|---|---|
| CASH-002 | Income Tax Act 1961, Sec 40A(3) | Critical | ₹10,000/day/party (₹35,000 for transport) |
| CASH-001 | Basic cash-book integrity (internal control, not a statute) | Critical | Cumulative cash balance < ₹0 |
| JOUR-001 | SA 240 — auditor's responsibility relating to fraud | High | Round-sum entries, final week of FY |
| MSME-001 | Income Tax Act 1961, Sec 43B(h) | High | 15 days default / 45 days with agreement |
| GST-ITC-001 | CGST Act 2017, Sec 16(2)(aa) | Medium | ±₹1 tolerance on 3-way match |

## CASH-002 — Sec 40A(3) cash payment disallowance

Flags same-day cash payments to one party exceeding ₹10,000 (₹35,000 for payments to transport
operators). Boundary-tested: exactly ₹10,000 passes, ₹10,001 fails. Full logic:
[Rule Engine → DFD Level 3](../modules/07-rule-engine#dfd-level-3--cash-002-sec-40a3-micro-logic).

## CASH-001 — Negative cash balance

Flags any point where the cumulative running cash balance goes negative — not a statutory rule,
but a basic integrity check every statutory auditor performs manually today. Boundary-tested: a
balance of exactly ₹0 is not a violation.

**Logic:** sort all cash-account transactions by date, compute a running balance, flag the first
transaction where the running balance crosses below zero.

## JOUR-001 — Round-sum journal entries near year-end

Flags round-sum (e.g. exact multiples of ₹1,000 or ₹10,000) journal entries posted in the final
week of the financial year, above a materiality floor — a classic SA 240 fraud-risk indicator
(manual adjustment to hit a target number). Boundary-tested on both the date-window edge (last 7
calendar days of the FY) and the materiality floor (configurable per tenant within bounds).

**Logic:** filter journal-type vouchers within the date window, filter for round-sum amounts above
the materiality floor, flag each as a finding referencing the voucher and amount.

## MSME-001 — Sec 43B(h) MSME payable overdue

Flags MSME payables unpaid past 15 days (default, no written agreement) or 45 days (with a written
agreement). Boundary-tested at exactly 15 and exactly 45 days — both are within the allowed
window, 16 and 46 are violations.

**Logic:** for each payable to a ledger tagged as an MSME supplier, compute days outstanding from
invoice date to payment date (or to period-end if still unpaid), compare against the applicable
threshold based on whether a supply agreement exists.

## GST-ITC-001 — 3-way match against GSTR-2B

3-way matches the purchase register against GSTR-2B, with a ±₹1 tolerance for rounding. Missing-
from-2B and value-mismatch cases are both flagged; matched invoices produce no finding.

**Logic:** join purchase-register rows to GSTR-2B rows on supplier GSTIN + invoice number, compare
invoice value within tolerance, flag unmatched purchase-register rows as "missing from 2B" and
mismatched-value rows as "value mismatch."

## Rule lifecycle

Every rule in this catalogue is:

1. Registered in `rule_definition` with its legal reference, default severity, and default
   thresholds — see [Rule Engine → Data Model](../modules/07-rule-engine#data-model).
2. Configurable per tenant within bounded ranges — see
   [Rule Engine → BR-RULE-03](../modules/07-rule-engine#business-rules--constraints).
3. Run vectorized across the full transaction set on every rule run — see
   [Rule Engine → DFD Level 2](../modules/07-rule-engine#dfd-level-2--run-orchestration).
4. Mapped to a query-letter template (where applicable) — see
   [Reporting & Query Letters](../modules/09-reporting-query-letters).
