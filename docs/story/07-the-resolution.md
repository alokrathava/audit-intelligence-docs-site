---
id: story-resolution
title: "Epilogue — The Decision"
sidebar_position: 7
---

# Epilogue: Was the engagement ready?

On Friday afternoon, the audit team returns to the problem that started the week: the initial export contained **98,600** records when the source-system control report expected **100,000**.

The conclusion is not that the software has completed a statutory audit. The conclusion is that **the proposed workflow now gives the auditor enough visibility to know what is complete, what is outstanding, and why**.

## Closing the same example

| Time | Action | Proposed platform response | Auditor responsibility |
| --- | --- | --- | --- |
| Tuesday | 98,600 records arrive against 100,000 expected | Mark source population **INCOMPLETE**, preserve upload A | Confirm export scope and request source evidence |
| Wednesday | Corrected export B contains 100,000 records with matching control totals | Version A remains retained; version B is reviewed and accepted as a new dataset snapshot | Inspect reconciliation and approve suitability for the planned procedures |
| Wednesday | A reproducible journal-entry check flags an unusual entry | Store check status, rule and input versions, evidence references and candidate finding | Assess the entry's context, request an explanation and record professional judgment |
| Thursday | Another source correction arrives after a check ran | Increment engagement revision and mark affected results **STALE** | Review the correction and authorize a fresh run |
| Friday | Required procedures and re-runs are reviewed | Show **READY FOR PARTNER REVIEW** only if all prerequisites and required review actions are satisfied | Partner reviews evidence and may approve the workflow, or decline with reasons |

**Illustrative resolution for this case:** The team supplies and reconciles the last correction; dependent checks run again; the flagged entry is documented in a workpaper with its evidence and reviewer conclusion. No required procedure remains incomplete or stale, and the partner records a **workflow sign-off tied to that specific revision**.

This is a **proposed expected outcome**, not a claim about a real audit or a financial-statement opinion. A different professional judgment or material evidence gap could legitimately keep the engagement open.

## What the design achieved—and did not

**Expected outcomes if implemented and verified:** catch a missing-record population despite valid parsing; preserve original and corrected uploads; distinguish an alert from an audit conclusion; prevent approval using stale checks; reconstruct the who/what/when of a decision.

**Not established by this study:** that a specific firm has adopted it, that every relevant risk was tested, that all statutory rules are legally accurate, that performance targets are achieved, or that an auditor's opinion can be automated.

## The architect's retrospective

The first design tempted us to equate *zero critical findings* with *ready for approval*. The revised design replaces that shortcut with **three independent forms of evidence**:

1. **Input suitability:** did the supplied records cover the intended population?
2. **Procedure coverage:** did the appropriate planned work execute and receive human review?
3. **Decision accountability:** which current data, rules, workpapers and approvals support the outcome?

The cost is a more involved domain model, additional workflow states and explicit review duties. The benefit is that the application cannot quietly present *unknown* as *clean*.

## What I want reviewers to challenge

- Is the proposed reconciliation evidence realistic for Tally and other source exports?
- Does the procedure-coverage model fit how audit teams actually work?
- Is the revision-and-invalidation mechanism too conservative or not conservative enough?
- Would the proposed tenant isolation and worker model remain understandable to a small engineering team?

Read the [full worked example](../reference/worked-example.md), [architecture trade-offs](../architecture/alternatives-and-tradeoffs.md) and [assumptions requiring domain review](../reference/domain-validation-register.md).

**Case-study end.** [Back to the start](../intro.md).
