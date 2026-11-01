---
id: domain-validation-register
title: Domain Assumptions & Validation Register
sidebar_position: 7
---

# Financial Audit Assumptions: What Is and Isn't Verified

A useful architecture study must not turn a plausible rule into a claimed legal requirement. This register separates **illustrative business assumptions** from requirements that need professional confirmation.

**Status key:** `DESIGN` = our proposed engineering behavior; `DOMAIN_REVIEW` = professional audit/legal judgment needed; `SOURCE_RESEARCH` = authoritative publication must be checked for edition and effective period; `PILOT_VALIDATION` = only representative user/workload testing can confirm suitability.

| ID | Assumption or claim | Status | Who should validate it | Why it matters |
| --- | --- | --- | --- | --- |
| V-01 | Complete input population needs independent source control evidence | DOMAIN_REVIEW | Practicing auditor + accounting software specialist | Some exports lack reliable count/totals; alternative procedures may be required |
| V-02 | Period and entity scope can be identified for each Tally/CSV export | PILOT_VALIDATION | Auditor + source system user | Wrong scope can yield misleading check results |
| V-03 | Identified risks, assertions, planned procedures and reviewed workpapers should be recorded | DOMAIN_REVIEW | Qualified financial-statement auditor | Audit methodologies vary; design must not claim sufficiency by itself |
| V-04 | Indian Sec 40A(3) cash-payment scenarios and exemptions | SOURCE_RESEARCH | Indian tax professional and auditor | Thresholds, effective periods, transport exceptions and legal interpretation may change |
| V-05 | MSME payment timing and relevant supplier categories | SOURCE_RESEARCH | Indian tax/MSME adviser | Invoice date alone may be insufficient; relevant dates, agreements and current law matter |
| V-06 | GST purchase-register ↔ statement comparisons | SOURCE_RESEARCH | GST specialist | Matching is not legal proof of ITC eligibility; amendments and exceptions apply |
| V-07 | Year-end round-number entry patterns as review candidates | DOMAIN_REVIEW | Audit partner | Indicators are not statutory violations or complete fraud testing |
| V-08 | Source count, balances and controls establish dataset suitability | DOMAIN_REVIEW | Auditor | Independent completeness/accuracy procedures still depend on source evidence |
| V-09 | A partner-level workflow sign-off maps to firm methods | DOMAIN_REVIEW | Audit firm partner / quality lead | Workflow approval does not issue a statutory audit opinion |
| V-10 | Retention, hosting and legal holds per jurisdiction | SOURCE_RESEARCH | Local counsel / firm quality or privacy officer | No worldwide retention floor can safely be assumed |
| V-11 | ISO 27001 / SOC 2 control design and PCI DSS scope | SOURCE_RESEARCH | Security/compliance specialist | Planned controls are not certification; PCI DSS depends on actual payment data flows |
| V-12 | 100 firms, 2,000 engagements and 200m lines as planning envelope | DESIGN | Engineering team when customer data available | These numbers are hypothetical sizing assumptions |
| V-13 | 100k-line check duration, peak uploads, storage and cloud cost | PILOT_VALIDATION | Performance/operations engineer | No measurements exist in this repository |

## Rule validation card template

Every jurisdiction-specific rule should have:

- Stable ID, **exact version**, jurisdiction and governing authority
- Legal/professional reference including effective-from/to and source link
- Business objective and **scope of applicability**
- Required fields, source formats, units, currency and time-zone/date conventions
- Exceptions, exclusions, exemptions and unresolved ambiguities
- Calculation and boundary tests with independently reviewed examples
- Explanation of what a flagged candidate **does not prove**
- Reviewer identity, professional qualification/context, review date and approval state
- Re-review trigger for amended legislation, standards or data format

**Execution rule:** statutory packs not approved for an effective period are unsupported. They cannot run as if validated; a manual review workflow may remain available.

## Source starting points (not validation of the example logic)

- [ICAI](https://www.icai.org/) — Indian auditing standards and professional publications
- [IAASB](https://www.iaasb.org/standards-pronouncements) — international auditing standards and supporting materials
- [India Income Tax Department](https://www.incometax.gov.in/) — current tax materials; confirm applicable statute and dates
- [GST Council](https://gstcouncil.gov.in/) and [GST Portal](https://www.gst.gov.in/) — GST policy, notices and source formats
- [Ministry of MSME](https://msme.gov.in/) — MSME framework and official notices
- [ISO](https://www.iso.org/isoiec-27001-information-security.html) — information-security management
- [AICPA](https://www.aicpa-cima.com/) — SOC 2 criteria
- [PCI Security Standards Council](https://www.pcisecuritystandards.org/document_library/) — current PCI DSS publications

Do not treat an undated link as evidence that any particular threshold or effective period is current. **This register identifies work for qualified reviewers; that work has not been performed in the repository.**

See [statutory-rule examples](./statutory-rules.md), [jurisdiction design](../architecture/jurisdiction-model.md), [worked example](./worked-example.md).
