---
id: assurance-frameworks
title: Assurance Frameworks & Scope
sidebar_position: 4
---

# Assurance Frameworks & Scope

**Planning reference — November 2026.** None of the frameworks below indicates that this proposed system is certified, compliant, or independently examined.

| Framework | Primary subject | Applicability |
| --- | --- | --- |
| **ISO/IEC 27001:2022** | Organizational ISMS requirements | Risk-based security governance, controls and independent certification only if pursued |
| **ISO/IEC 27002:2022** | Information security control guidance | Proposed control design; 27002 is **not** independently certifiable |
| **AICPA SOC 2** | Independent CPA report on controls against selected Trust Services Criteria | Service provider's security, availability, processing integrity, confidentiality and/or privacy; **not a 'SOC 2 certification'** |
| **PCI DSS v4.0.1** | Payment-account-data security | **Conditional** on actual payment flows, customer-file exposure and service-provider impact; outsourcing can leave merchant requirements |
| **International Standards on Auditing (ISAs)** | Financial-statement audit practice | Domain model input; national adoption, modifications and other professional requirements must be checked |
| **Local audit and tax law** | Applicable statutory and professional duties | **Versioned and reviewed jurisdiction packs**; first illustrative pack is India |
| **ISO 19011:2026** | Management-system audit guidance | Optional future **different domain**; not equivalent to ISA financial auditing |

## Suggested order

**Design now:** tenant isolation, MFA, threat modeling, least privilege, identity lifecycle, audit-event integrity, reviewer approvals, secure file intake, versioned source/rule evidence, incident response, backup restore tests, vendor oversight and a PCI scope memo.

**Before any live financial records:** implement and test these controls, independently review applicable jurisdiction rules and contracts, decide retention and hosting, and define incident response and data deletion duties.

**Before advertising assurance:** collect actual evidence of implemented and operating controls, obtain independent ISO audit or SOC 2 report as applicable, and confirm PCI validation scope with relevant payment parties.

### Version watch

The AICPA published an **October 2026 exposure draft** for proposed 2027 SOC 2 criteria; it is not the current finalized basis. ISO **19011:2026** superseded its 2018 edition. PCI SSC references **PCI DSS v4.0.1**; recheck when assessing.

### Sources

- [ISO 27001:2022](https://www.iso.org/standard/27001)
- [ISO 27002:2022](https://www.iso.org/standard/75652.html)
- [ISO 19011:2026](https://www.iso.org/standard/19011)
- [AICPA Trust Services Criteria](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-3)
- [AICPA proposed 2027 criteria](https://cpextax.aicpalearningcenter.org/resources/download/aicpa-exposure-drafts-proposed-2027-soc-2-trust-services-criteria-and-description-criteria)
- [PCI SSC document library](https://www.pcisecuritystandards.org/document_library/)
- [PCI SSC outsourced payments FAQ](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/)
- [IAASB auditing standards](https://www.iaasb.org/standards-pronouncements)
