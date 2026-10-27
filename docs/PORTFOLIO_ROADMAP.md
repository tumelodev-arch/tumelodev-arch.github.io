# Portfolio and GitHub roadmap

## Position

The portfolio should show an application engineer developing deeper capability in cloud, security and reliability. Its purpose is to help a reviewer inspect real work, understand its boundaries and follow the reasoning behind a decision.

The new presentation direction is the Engineering Field Notes: paper-like surfaces, ink typography, cobalt blue and signal orange, structured indices and small technical diagrams. The design system is recorded in DESIGN_SYSTEM.md.

## Current repository roles

| Repository | Purpose |
| --- | --- |
| [Profile README](https://github.com/tumelodev-arch/tumelodev-arch) | Concise career narrative and selected project links |
| [Portfolio site](https://github.com/tumelodev-arch/tumelodev-arch.github.io) | Main narrative, engineering notes, RuleTrace and ReleaseLens |
| [Randwise](https://github.com/tumelodev-arch/Randwise) | Cash-flow planning practice app |
| [IncidentAtlas](https://github.com/tumelodev-arch/IncidentAtlas) | Incident review practice app |
| [DecisionArchive](https://github.com/tumelodev-arch/DecisionArchive) | Architecture decision record app |

## Evidence already available

| Area | Inspectable evidence | Boundary |
| --- | --- | --- |
| Validation | RuleTrace API source, deterministic rules, health/validation routes and test source | API is local and not hosted |
| Data exploration | ReleaseLens filtering, derived metrics, run details and CSV export | Sample records only; no live CI integration |
| Application behaviour | Randwise transaction editing, monthly summaries and CSV export | Browser storage only; no bank connection |
| Incident lifecycle | Incident Atlas state changes, filters, response notes and JSON export | No monitoring, alerting, paging or shared team storage |
| Decision records | Decision Archive statuses, search, Markdown export and JSON backup/restore | No accounts or cloud sync |

## Next project: Cloud Service Router

This is a plan, not a repository or completed project.

1. Define a small .NET service boundary and request/response contracts.
2. Specify validation rules and useful error responses.
3. Add tests for expected input, invalid input and failure paths.
4. Add health reporting and structured logs that help explain request behaviour.
5. Add timeouts only where they make sense for the service design.
6. Document architecture decisions, local setup, verification results and limits.
7. Publish a portfolio case study only after the code and test evidence can be inspected.

No infrastructure component should be added without a design reason. Docker is not required for the initial build.

## Subsequent projects

1. Secure .NET API: a bounded security exercise with a threat model and tests mapped to each control.
2. Reliability exercise: a small repeatable failure scenario with diagnosis and recovery evidence.

Do not create these repositories just to fill a pin grid. Start each project when the problem, acceptance criteria and verification plan are clear.

## Quality and maintenance

- Fix broken links, failing tests and inconsistent setup instructions before adding features.
- Keep project READMEs explicit about what is implemented, verified and still planned.
- Review the desktop and mobile layout, focus visibility, contrast, keyboard flow and CV print output before publishing a redesign.
- Keep a manual review step alongside automated checks.
- Prefer a few well maintained repositories over a large collection of unfinished demonstrations.

## Confidentiality

Keep employer code, customer details, internal names, internal URLs, ticket IDs, private screenshots, secrets and proprietary business rules out of public repositories. If a real secret is exposed, revoke it before attempting any historical cleanup.
