---
id: capacity-model
title: Capacity Planning & Quality Scenarios
sidebar_position: 6
---

# Capacity Planning: A Transparent Thought Experiment

**All inputs in this page are invented workload assumptions for architecture analysis, not production measurements, user counts, forecasts, quotes or proven SLAs.**

## Workload envelope

| Variable | Assumption | Derivation |
| --- | ---: | --- |
| Firms | 100 | Illustration of an initial multitenant service |
| Named users per firm | 10 | 1,000 total named seats |
| Active engagements per firm | 20 | 2,000 active engagements |
| Journal lines per engagement | 100,000 | Example review population |
| Aggregate journal lines | 200,000,000 | 100 × 20 × 100,000 |
| Average original export per engagement | 40 MB | 80 GB original files for one dataset per engagement |
| Logical normalized data per journal line | 400 bytes | 80 GB before indexes, replicas, transaction logs and backups |
| Peak concentration | 25% of engagements submitted in a ten-day deadline window | 500 submissions / ten days |

The illustrative 400 bytes/row is a planning placeholder, not a measurement of PostgreSQL physical storage. Multiple source versions, indexes, journal metadata, retention and backups could substantially increase capacity requirements.

## Average is not peak

For 500 submissions of 100,000 lines over ten eight-hour working days:

`500 × 100,000 / (10 × 8 × 3,600) ≈ 174 lines/second` **averaged across working hours**.

That number is **not** a worker throughput target or evidence that one processor will suffice. Arrivals are bursty: concurrent uploads, 200 MB files, retries, tax deadlines, mapping review and large rule runs can cause much higher instantaneous demand.

Do not infer a cloud bill or service instance count from row counts alone; first benchmark representative formats and workloads.

## Architecture implications

| Concern | Proposed v1 response | Test that would challenge it |
| --- | --- | --- |
| Bursty uploads | Object-storage direct upload using restricted presigned operations; asynchronous parse jobs | Concurrent large uploads, aborted uploads, malware quarantine |
| Rule-run CPU/memory | Bounded worker concurrency; chunked or columnar processing; run-specific limits | 100k, 1m and 10m-row representative datasets |
| Backpressure | Queue depth, job-age alarms and per-tenant fairness | One firm's backlog cannot indefinitely starve others |
| Database growth | Versioned snapshots, table/index lifecycle, measured query plans | Cross-tenant isolation and p95 searches under large datasets |
| Retry behavior | Idempotency keys, outbox and job deduplication | Kill worker before and after commit; no double findings or charges |
| Evidence retention | Object versioning, retention controls, verified backup/restore | Recover a signed-off evidence package from backup |
| User experience | Fast acknowledgement for uploads; background status reporting | Large imports do not block interactive engagement access |

## Explicit quality scenarios (goals, not accomplishments)

- **Isolation:** a valid staff token from firm A must never return firm B's resources, even when IDs or tenant headers are forged.
- **Correctness:** accepted journal-line count and source controls must reconcile or the dependent check remains incomplete.
- **Recovery:** a worker crash after persistence and before publish cannot lose the audit event or duplicate a finding.
- **Consistency:** new source or mapping versions must invalidate dependent runs before partner approval.
- **Performance:** define p95 and maximum job-age targets **after** tests on real-size synthetic fixtures, identifying hardware, dataset type and concurrency.
- **Continuity:** choose explicit RPO/RTO values only after interviewing target customers; demonstrate recovery before promising them.

## Cost drivers to revisit

File versions and retention, PostgreSQL index size and backups, CPU time for repeated full checks, malware scanning, outbound evidence transfer and observability. **Record the trade-off between incremental processing and full deterministic reruns** using measured workload data before optimizing.

## Triggers for changing the architecture

Scale workers first; profile database/index bottlenecks second. Consider separating the ingestion or rule-processing deployable only if measured resource contention, isolation obligations or deployment cadence justifies the added operational burden. Splitting services is not the goal.

Links: [solution architecture](./solution-architecture.md), [alternatives](./alternatives-and-tradeoffs.md), [acceptance matrix](../reference/requirements-traceability.md).
