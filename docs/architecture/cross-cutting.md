---
id: cross-cutting
title: Cross-Cutting Concerns
sidebar_position: 3
---

# Cross-Cutting Concerns

These proposed controls apply across the platform. Older detailed modules illustrate the India launch case; core infrastructure should be jurisdiction-neutral. See [Jurisdiction Model](./jurisdiction-model.md) and [Assurance Design](./assurance-design.md).

## Security

| Concern | Behavior |
|---|---|
| Transport | TLS 1.2+ everywhere, HSTS enabled |
| Authentication | JWT access tokens (short-lived) + rotating refresh tokens, see [Auth & Identity](../modules/01-auth-identity) |
| Authorization | Role-based, evaluated per-request at the API Gateway and re-checked at the service layer | 
| Tenant isolation | Schema-per-tenant, resolved from the authenticated token, never from a client-supplied header alone |
| Secrets | Stored in a secrets manager, never in application config or source |
| Data at rest | Database and object storage encrypted at rest |
| Sensitive records | Financial documents, tax identifiers (e.g. Indian PAN/GSTIN), PII and audit evidence are isolated client/firm data; no cross-tenant analytics or model training |
| Operational controls | Privileged MFA, least privilege, access reviews, secure changes, incident response, restore drills and vendor assessments are proposed control objectives |
| Evidence integrity | Hash source versions; pin rule/config versions; retain append-only decision records with restricted privileged access |
| Payment boundary | Hosted/tokenized billing and a documented PCI DSS data-flow and third-party responsibility decision; audit uploads are scanned for unexpected sensitive payment data |

## Idempotency

Every state-changing API endpoint that can be safely retried (file upload, rule run trigger,
report generation) accepts an `Idempotency-Key` header. A repeated request with the same key
returns the original result rather than re-executing the operation — critical for uploads over
unreliable connections and for webhook delivery from the payment gateway.

## Error taxonomy

| HTTP status | Meaning | Example |
|---|---|---|
| 400 | Validation failure | Malformed file, missing required field |
| 401 | Not authenticated | Missing/expired token |
| 403 | Authenticated but not authorized | Wrong role, wrong tenant |
| 404 | Not found (or exists in a different tenant) | Prevents tenant-existence leakage |
| 409 | Conflict | Duplicate upload, concurrent edit |
| 422 | Semantically invalid | File parses but violates a business rule |
| 429 | Rate limited | Plan-tier API rate limit exceeded |
| 5xx | Server fault | Logged with a correlation ID surfaced to the caller |

## Observability

- Every request carries a correlation ID, propagated through the event bus so a `file.uploaded`
  event can be traced to its resulting `rules.completed` event and every finding it produced.
- Structured logs (JSON), one log line per state transition, not per internal step.
- Metrics: request latency per endpoint, event-bus consumer lag, rule-run duration, ingestion
  parse failure rate — surfaced to the [Dashboard & Analytics](../modules/10-dashboard-analytics)
  module for tenant-facing health, and to an internal ops dashboard for platform health.

## Determinism guarantee (audit-specific)

The ingestion → normalization → rule engine path contains no LLM and no non-deterministic
component. The same input file set, run twice, produces byte-identical findings. This is a hard
constraint, not a performance goal — a partner's sign-off depends on being able to reproduce a
finding from the same inputs at any later date. See [Rule Engine](../modules/07-rule-engine).

## Internationalization

The **reusable core** stores timestamps in UTC and handles explicit jurisdiction, locale, fiscal-calendar, timezone and ISO 4217 currency fields. **India pilot defaults** may be INR, April–March, IST and English; these are not hard-coded universal constraints. New languages and country rule packs require future validation. Never silently convert financial amounts in statutory checks.

## Related pages

- [System Context](./system-context)
- [Data Model](./data-model)
- [Non-Functional Requirements](../reference/non-functional)
- [Jurisdiction Model](./jurisdiction-model.md)
- [Assurance Design](./assurance-design.md)
