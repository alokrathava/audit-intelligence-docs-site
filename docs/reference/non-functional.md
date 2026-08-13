---
id: non-functional
title: Non-Functional Requirements
sidebar_position: 3
---

# Non-Functional Requirements

Requirements that apply across every module rather than belonging to any one of them.

## Performance

| Operation | Target |
|---|---|
| Rule run across a 100,000-row trial balance | < 3 seconds |
| API response, non-bulk endpoints | < 300ms p95 |
| File upload → `data.parsed` event | < 30 seconds for a 10MB file |
| Notification delivery after triggering event | < 1 minute under normal load |
| Dashboard load | < 1 second for cached/aggregated views |

## Availability

| Component | Target |
|---|---|
| API Gateway / core services | 99.9% monthly uptime |
| Event bus processing | No data loss; at-least-once delivery, idempotent consumers |
| Scheduled jobs (dunning, retention, digests) | Missed run retried at next scheduled interval, not silently skipped |

## Data retention

| Data class | Default retention | Floor |
|---|---|---|
| Engagement data (transactions, findings, reports) | Per tenant config | 8 years (Indian statutory audit documentation requirement) |
| Audit trail log | Per tenant config | 8 years, regulatory floor enforced regardless of tenant setting |
| Uploaded source files | Same as engagement data | 8 years |
| Notification history | 1 year | None |

## Limits (plan-tier dependent, illustrative defaults)

| Resource | Trial | Standard | Enterprise |
|---|---|---|---|
| Seats | 2 | 10 | Custom |
| Concurrent engagements | 1 | 25 | Unlimited |
| Document pages/month | 500 | 10,000 | Custom |
| API rate limit | Not available | 60 req/min | 600 req/min |
| File upload size | 10MB | 50MB | 200MB |

## Security baseline

Covered in full in [Architecture → Cross-Cutting Concerns](../architecture/cross-cutting); summary
requirements:

- TLS 1.2+ everywhere.
- Schema-per-tenant isolation, never a shared-table `tenant_id` filter as the sole boundary.
- No LLM or non-deterministic component anywhere in the ingestion → normalization → rule →
  finding path.
- Every state-changing action logged to an append-only audit trail.

## Compliance posture

- Data residency: India (server infrastructure and backups within Indian data centers), matching
  the target market's regulatory expectation for audit-firm client data.
- No client PII/financial data used for cross-tenant analytics, model training, or benchmarking.
