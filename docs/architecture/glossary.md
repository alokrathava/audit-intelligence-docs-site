---
id: glossary
title: Glossary
sidebar_position: 4
---

# Glossary

## Domain terms

| Term | Meaning |
|---|---|
| Engagement | One audit assignment: a specific client, for a specific financial year |
| Reporting period / Financial Year (FY) | Engagement-specific dates; India-first examples commonly use 1 April–31 March. Not a universal fiscal calendar |
| Voucher | A single Tally accounting entry, with one or more debit/credit legs |
| Ledger | A named account in the client's chart of accounts (e.g. "Cash-in-Hand") |
| Standard taxonomy | The platform's fixed chart of accounts (e.g. `Assets.Current.Cash`) that every client ledger is mapped onto |
| Finding | A flagged exception produced by a statutory rule against the transaction set |
| Query letter | A pre-drafted .docx document requesting client explanation/support for a finding |
| Trial balance | The full set of ledger balances for an engagement at a point in time |
| Purchase register | The client's record of all purchase invoices |
| MSME | Micro, Small & Medium Enterprise, as registered under the MSMED Act |

## Statutory references used throughout

| Reference | Full name | Relevance |
|---|---|---|
| Sec 40A(3) | Income Tax Act 1961, Section 40A(3) | Disallows cash payments over ₹10,000 (₹35,000 for transport) to a single party in a day |
| Sec 43B(h) | Income Tax Act 1961, Section 43B(h) | Disallows MSME payables unpaid past 15/45 days unless actually paid |
| SA 240 | Standard on Auditing 240 | Auditor's responsibility relating to fraud in a financial statement audit |
| CGST Sec 16(2)(aa) | CGST Act 2017, Section 16(2)(aa) | Input Tax Credit eligibility conditional on supplier's GSTR-1/2B reporting |
| GSTR-2B | GST auto-drafted ITC statement | Monthly statement of eligible ITC, sourced from suppliers' filings |

## Platform/technical terms

| Term | Meaning |
|---|---|
| Tenant | One audit firm's isolated account on the platform |
| Schema-per-tenant | Postgres isolation strategy: each tenant's data lives in its own database schema |
| Rule Registry | The catalogue of statutory rules the Rule Engine can execute |
| Idempotency key | Client-supplied token that makes a retried request safe to repeat without duplicating effect |
| Entitlement | A feature or limit granted by a tenant's active subscription plan |
