---
id: uc-01
title: "UC-01 — Onboard an Audit Firm"
sidebar_position: 2
---

# UC-01 — Onboard an Audit Firm

> **Status:** Proposed use case; no implementation or test result is claimed here.

| Attribute | Details |
| --- | --- |
| **Primary actor** | Firm Admin |
| **Goal** | A new CA firm needs a protected workspace and its first administrator. |
| **Trigger** | Firm owner begins registration. |

## Preconditions

- An email address is available for verification.
- No tenant workspace has been provisioned for this firm.

## Main success flow

1. Owner enters firm and account details and selects a trial or paid plan.
2. System creates an identity awaiting verification and sends a verification challenge.
3. Owner verifies email and completes required authentication.
4. System provisions an isolated firm workspace and grants the first Admin membership.
5. Owner can invite authorized audit staff.

## Alternative and exception flows

- Expired verification challenge: allow resend; do not activate an unverified account.
- Failed provisioning: leave tenant inaccessible and avoid orphaned partial schemas.
- A forged tenant identifier: reject access to any other firm's records.

## Expected outcome

An active isolated firm workspace with its intended first Admin.

## Acceptance scenarios (to test)

- Onboarding never exposes a partially provisioned tenant.
- User cannot access a tenant for which they lack membership.

## Supporting specifications

[Module 01](../modules/01-auth-identity), [Module 02](../modules/02-multi-tenancy). These pages are proposed design details rather than evidence of deployed services.

[Back to use-case catalogue](./index)
