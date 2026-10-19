# Portfolio makeover — implementation record

## Goal

Present a focused, credible portfolio of working software and evidence. Prefer a few explainable projects with reliable checks over a large list of unfinished exercises.

## Repository inventory

| Repository | Disposition | Next action |
| --- | --- | --- |
| [tumelodev-arch](https://github.com/tumelodev-arch/tumelodev-arch) | Keep | Maintain an employer-neutral profile README that links to demonstrable work. |
| [tumelodev-arch.github.io](https://github.com/tumelodev-arch/tumelodev-arch.github.io) | Keep and improve | Keep demos, source paths, tests, setup and limitations aligned. |

No repository was archived or deleted. There are only two confirmed public repositories; no repositories were invented to fill pinned slots.

## Evidence map

| Claim | Evidence | Boundary |
| --- | --- | --- |
| Validation design | RuleTrace evaluator, API routes, xUnit source and architecture | API is local and not deployed; CI must verify the tests. |
| Interactive data exploration | ReleaseLens filters, derived metrics, run detail and CSV export | Invented fixture data only; no live CI provider. |
| Static web delivery | HTML/CSS/JS portfolio and Pages URLs | Deployment success does not replace manual responsive/accessibility review. |
| Engineering communication | Project docs, architecture notes and field notes | Notes describe an approach, not a claim of seniority. |

## Work order

1. Keep the quality workflow green and fix broken references, type errors or failed tests before adding features.
2. Add ReleaseLens tests for filtering, metrics and CSV escaping.
3. Add RuleTrace API integration tests for valid JSON, malformed requests and response contracts.
4. Revisit TracePad only after defining a distinct problem and tests; do not feature it until it adds new evidence.
5. Consider deploying RuleTrace only after its security model, structured logging, config, request validation and release process are ready.
6. Extract a nested project into a standalone repository only if that materially improves setup and review.

## Sustainable cadence

Aim for three focused sessions per week and roughly 3–5 hours total. Keep one flagship project active, one documentation/quality task, two evenings free and one protected rest day. Make small, reviewable changes. A maintenance week each month is better than starting another project to maintain an activity streak.

## Manual account actions

- [ ] Update GitHub bio to: “Software engineer working with .NET and TypeScript, building towards cloud-native services and reliability.”
- [ ] Set profile website to `https://tumelodev-arch.github.io/`.
- [ ] Set the profile repo description to: “Software engineering profile and learning roadmap focused on .NET application development, testing and cloud-native growth.”
- [ ] Set the portfolio repo description to: “Personal engineering portfolio featuring a validation API and browser demo, a TypeScript delivery-history dashboard and technical notes.”
- [ ] Pin only repos a reviewer can inspect meaningfully; do not create empty repos to fill six slots.
- [ ] Open the live site on desktop and mobile, test both demo flows and confirm the latest Actions run.

## Safety boundaries

Do not delete repositories, rewrite Git history, or change visibility under this plan. If a real secret is found in history, revoke it and follow the relevant incident process before cleanup.
