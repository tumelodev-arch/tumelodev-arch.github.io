# Architecture

## Context and goals

Describe users, primary use cases, scale assumptions, constraints, and non-goals.

## System context

Add a Mermaid context diagram and identify external systems, trust boundaries, and data classification.

## Components and data flow

Describe runtime components, synchronous requests, asynchronous events, persistence, and ownership. Add a sequence or deployment diagram for important flows.

## Reliability and security

Document timeouts, retries, idempotency, failure handling, availability expectations, authentication/authorization, least-privilege IAM, encryption, retention, and recovery procedures.

## Observability

Define service-level indicators, traces/metrics/logs, correlation identifiers, dashboards, alerts, and runbooks. State what is intentionally not logged.

## Decisions

Link to `docs/adr/` records. For each significant choice, record context, alternatives, decision, and consequences.

## Deployment and operations

Link Terraform modules and workflows. Record environments, cost assumptions, manual approvals, rollback, and teardown procedure.