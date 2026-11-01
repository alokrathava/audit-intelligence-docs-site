# Audit Intelligence System — Financial Audit Use-Case Study

> **Proposed design, not a deployed, certified or independently attested product.**

## Direction: global-ready financial auditing, India-first delivery

Audit Intelligence proposes a reusable **financial audit workflow platform**: create engagements, collect digital evidence, run reproducible exception checks, document reviewer decisions, prepare query letters and obtain accountable partner sign-off.

**India is the first illustrative jurisdiction**, with Tally, GSTR-2B and Indian statutory checks. Core workflow concepts should not depend on India's fiscal calendar, INR, GST or local retention assumptions. Jurisdiction-specific laws, reporting periods, data formats and audit criteria belong in **versioned, reviewed rule packs**. Other country packs are proposed future work, not supported today.

The platform **assists qualified auditors**: a flagged record is not an audit opinion, a fraud verdict or an established statutory violation.

## Where to read

- [Use-case overview](docs/intro.md)
- [14 actor-based use cases](docs/use-cases/index.md)
- [Jurisdiction and rule-pack architecture](docs/architecture/jurisdiction-model.md)
- [Security and assurance controls](docs/architecture/assurance-design.md)
- [Framework applicability: ISO 27001/27002, SOC 2, PCI DSS, ISA](docs/reference/assurance-frameworks.md)
- [India-specific illustrative rule catalogue](docs/reference/statutory-rules.md)

## Assurance principles

Consider ISO/IEC 27001:2022, ISO/IEC 27002:2022 and AICPA SOC 2 Trust Services Criteria when designing platform security governance and evidence. Assess PCI DSS v4.0.1 **only against actual payment-account data flows and responsibilities**; financial ledger data alone does not establish PCI scope. Independent certifications, SOC 2 reports and PCI assessments require implemented controls and appropriate examination. This documentation makes **no compliance claim**.

## Boundaries

V1 focuses on **financial audit workflows**, not all management-system, environmental, quality or operational audits. The existing detailed module specifications illustrate the **India-first concept** and are not yet generalized or legally validated. Statutory thresholds, standards, retention periods and deployment locations must be reviewed for each jurisdiction and effective period.

## Documentation website

This repository contains a Docusaurus documentation site, not the application:

```bash
npm ci
npm run start
npm run build
```

**Author:** Alok Rathava.
