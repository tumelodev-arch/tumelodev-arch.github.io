# Portfolio makeover — implementation record

## Goal

Present a focused, credible portfolio of working software and evidence. Prefer a few explainable projects with reliable checks over a large list of unfinished exercises.

## Repository inventory

| Repository | Disposition | Next action |
| --- | --- | --- |
| [tumelodev-arch](https://github.com/tumelodev-arch/tumelodev-arch) | Keep | Maintain an employer-neutral profile README that links to demonstrable work. |
| [tumelodev-arch.github.io](https://github.com/tumelodev-arch/tumelodev-arch.github.io) | Keep and improve | Portfolio pages, RuleTrace source/demo, ReleaseLens dashboard, quality checks and technical notes. |
| [Randwise](https://github.com/tumelodev-arch/Randwise) | Keep | Independent local-first cash-flow planner. |
| [IncidentAtlas](https://github.com/tumelodev-arch/IncidentAtlas) | Keep | Independent local-first incident review workspace. |
| [DecisionArchive](https://github.com/tumelodev-arch/DecisionArchive) | Keep | Independent local-first architecture decision register. |

Five public repositories are currently confirmed. The three app repositories hold substantive extracted applications, not empty placeholders. No repository was archived or deleted.

## Evidence map

| Claim | Evidence | Boundary |
| --- | --- | --- |
| Validation design | RuleTrace evaluator, API routes, xUnit source and architecture | API is local and not deployed; CI must verify the tests. |
| Interactive data exploration | ReleaseLens filters, derived metrics, run detail and CSV export | Invented fixture data only; no live CI provider. |
| Static web delivery | Hosted portfolio, source repositories and GitHub Actions workflows | The three standalone app demos are not live until Pages is enabled in each repository and deployment succeeds. Deployment success does not replace manual responsive/accessibility review. |
| Engineering communication | Project docs, architecture notes and field notes | Notes describe an approach, not a claim of seniority. |

## Work order

1. Keep the quality workflow green and fix broken references, type errors or failed tests before adding features.
2. Add ReleaseLens tests for filtering, metrics and CSV escaping.
3. Add RuleTrace API integration tests for valid JSON, malformed requests and response contracts.
4. Revisit TracePad only after defining a distinct problem and tests; do not feature it until it adds new evidence.
5. Consider deploying RuleTrace only after its security model, structured logging, config, request validation and release process are ready.
6. Randwise, Incident Atlas and Decision Archive have been extracted into their own repositories. Avoid further splits unless they materially improve setup, maintenance or review.

## Sustainable cadence

Aim for three focused sessions per week and roughly 3–5 hours total. Keep one flagship project active, one documentation/quality task, two evenings free and one protected rest day. Make small, reviewable changes. A maintenance week each month is better than starting another project to maintain an activity streak.

## Manual account actions

- [ ] Update GitHub bio to: “Software engineer working with .NET and TypeScript, building towards cloud-native services and reliability.”
- [ ] Set profile website to `https://tumelodev-arch.github.io/`.
- [ ] Set the profile repo description to: “Software engineering profile and learning roadmap focused on .NET application development, testing and cloud-native growth.”
- [ ] Set the portfolio repo description to: “Personal engineering portfolio featuring a validation API and browser demo, a TypeScript delivery-history dashboard and technical notes.”
- [ ] Pin only repos a reviewer can inspect meaningfully; do not create empty repos to fill six slots.
- [ ] Review the portfolio branch on desktop and mobile after merge; enable Pages in each app repository and test the hosted flows only after successful deployment.

## Safety boundaries

Do not delete repositories, rewrite Git history, or change visibility under this plan. If a real secret is found in history, revoke it and follow the relevant incident process before cleanup.

## Additional projects implemented

Three standalone browser applications have been extracted from the portfolio into independent source repositories. Their hosted demos are not active yet; enable GitHub Pages with GitHub Actions in each app repository and confirm a successful deployment before listing the URLs as live.

| Project | Source / setup | Core workflow | Boundary |
| --- | --- | --- | --- |
| Randwise | [Repository](https://github.com/tumelodev-arch/Randwise) · [Local setup](https://github.com/tumelodev-arch/Randwise/blob/main/README.md) | Income/expense records, monthly metrics, spending categories and CSV export | Local browser storage; no bank or financial service integration; hosted demo pending Pages activation |
| Incident Atlas | [Repository](https://github.com/tumelodev-arch/IncidentAtlas) · [Local setup](https://github.com/tumelodev-arch/IncidentAtlas/blob/main/README.md) | Incident intake, severity/state, mitigation notes, resolution metrics and JSON export | Incident log only; no monitoring, paging or alert delivery; hosted demo pending Pages activation |
| Decision Archive | [Repository](https://github.com/tumelodev-arch/DecisionArchive) · [Local setup](https://github.com/tumelodev-arch/DecisionArchive/blob/main/README.md) | Decision records, statuses, tags, search, Markdown export and JSON backup/restore | Local archive; no shared team account or cloud sync; hosted demo pending Pages activation |

Each app includes a standalone README. Use synthetic starter records when demoing. Data entered into a public demo is stored in the current browser, not the repository; do not use confidential or sensitive information. Static CI checks confirm internal links, JavaScript syntax and existing RuleTrace/ReleaseLens quality checks, but they do not replace manual end-to-end testing of every browser interaction.
