---
id: non-functional
title: Non-Functional Requirements
sidebar_position: 3
---

# Non-Functional Requirements

Proposed cross-cutting requirements: performance, availability, legal retention and security targets are **not proven outcomes**. Avoid applying India-specific obligations automatically to other jurisdictions.

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

## Data retention — jurisdiction-aware proposal

| Data class | Policy approach |
|---|---|
| Engagements, uploads, findings and reports | Retain according to applicable jurisdiction, professional standards, contracts and legal holds; record trigger date and disposition decision |
| Activity logs and control evidence | Maintain distinct justified retention periods and tamper-evident export capabilities |
| Security/notification telemetry | Minimize data, control access and set documented purpose-based periods |

**Caution:** The earlier **8-year India floor** was an **unverified design assumption**, not a universal or confirmed Indian statutory requirement. Qualified local professionals must verify retention and disposal duties per engagement before production. A legal hold may prevent deletion.

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

- Data residency and subprocessors must be selected and documented based on **jurisdictional and contractual obligations**, not assumed universally. An India launch environment may choose India-region hosting if required by applicable policy.
- No client PII/financial data used for cross-tenant analytics, model training, or benchmarking.
- Privileged MFA, periodic access review, secure change approval, incident response, vulnerability remediation, controlled keys, backup-restore testing, and evidence collection for external assurance are **proposed controls**.
- The PCI DSS scope decision must evaluate hosted billing, third parties and unexpected cardholder data in uploaded client files; financial ledgers alone do not imply PCI DSS applicability.

See [Assurance Frameworks](./assurance-frameworks.md) and [Assurance Design](../architecture/assurance-design.md).
