---
id: assurance-design
title: Platform Security & Assurance Design
sidebar_position: 6
---

# Platform Security & Assurance Design

> **Proposed controls; not proof of operation, certification, attestation, or PCI DSS validation.**

## Separate two audit contexts

- **Customer audit:** a qualified audit firm investigates source financial records and issues its own conclusions.
- **Platform assurance:** security/privacy/operations controls that protect the SaaS service, potentially assessed through ISO/IEC 27001 certification or a SOC 2 report in the future.

## Proposed control register

| ID | Control objective | Evidence to collect and verify |
| --- | --- | --- |
| CTRL-01 | Risk ownership and data classification | Risk register, information asset inventory, approval history |
| CTRL-02 | Privileged MFA and least privilege | Access approvals, role-change records, periodic access reviews |
| CTRL-03 | Tenant and engagement isolation | Automated negative authorization tests and independent review |
| CTRL-04 | Encryption and key lifecycle | TLS config, KMS access controls, rotation and restore evidence |
| CTRL-05 | Evidence integrity and reproducible findings | File hashes, run/config versions, append-only logs, replay tests |
| CTRL-06 | Separation of duties and partner sign-off | Signed approvals, waiver reasons and reviewer identity |
| CTRL-07 | Secure SDLC and patch management | PR approvals, vulnerability remediation, release tracking |
| CTRL-08 | Monitoring and incident response | Redacted security logs, incident exercises, response records |
| CTRL-09 | Availability, continuity and recovery | Restore tests, RPO/RTO targets, failure simulations |
| CTRL-10 | Privacy, residency, retention and legal holds | Country/contract policies, deletion approvals, processors |
| CTRL-11 | Vendor and third-party risk | Security reviews, DPA/contract responsibility, periodic reassessment |
| CTRL-12 | Payment-account-data boundary | Data-flow diagram, provider obligations, PCI scoping decision |

For each control: assign `owner`, `scope`, `risk`, `status` (planned/implemented/tested/evidence collected), `last_tested_at`, `evidence_reference`, `exception_owner` and `next_review_at`. An empty evidence link is **not** proof of operation.

## Security engineering consequences

- Treat financial uploads as untrusted: scanning, content/type validation, bounded size, short-lived scoped links, access logging and sensitive-data detection.
- Avoid cross-tenant support backdoors; privileged operations require independent review, attribution and minimal scope.
- Preserve file version hashes, immutable references, rule-pack/config version, timestamps and the sequence of human decisions. Check event-store permissions, immutable-storage behaviour and backup restore integrity; an 'append-only' claim must be tested.
- Do not log raw documents, credentials, session tokens, full payment card numbers or security codes; redact telemetry and limit access.
- Design for disaster recovery and incident response before processing real client records.

## PCI DSS: determine scope, do not assume

1. **Financial ledgers do not automatically mean PCI DSS scope.** It concerns payment-account data and systems/services affecting its security.
2. Prefer a hosted payment processor/hosted collection for SaaS subscriptions to avoid handling full card details in the platform. This can **reduce but not remove** merchant obligations.
3. Assess the payment page/scripts, processor agreements, provider compliance status and shared responsibilities with the appropriate acquirer/payment brand.
4. Evaluate potential **unexpected** cardholder data in client-uploaded documents. Establish detection, restricted/quarantine processing, incident handling and PCI re-scoping where necessary.
5. Use current **PCI DSS v4.0.1** and confirm applicable validation route with a qualified adviser.

## ISO and SOC 2

- **ISO/IEC 27001:2022:** requirements for an organizational information security management system; **ISO/IEC 27002:2022:** detailed control guidance, not a certification.
- **SOC 2:** independent CPA examination of selected AICPA Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy. Type 1 assesses design at a point in time; Type 2 assesses operation over a period.
- As of November 2026, AICPA's **proposed 2027 SOC 2 criteria** are an **exposure draft**, not the currently adopted criteria.

No technology feature checklist alone satisfies an external assurance engagement.

Read [UC-14](../use-cases/14-control-evidence-review.md), [Framework Matrix](../reference/assurance-frameworks.md), and [Jurisdiction Model](./jurisdiction-model.md).

Sources: [ISO 27001](https://www.iso.org/standard/27001), [ISO 27002](https://www.iso.org/standard/75652.html), [AICPA](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-3), [PCI SSC v4.0.1](https://www.pcisecuritystandards.org/document_library/), [PCI outsourcing FAQ](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).
