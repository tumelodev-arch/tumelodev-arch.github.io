# Portfolio and GitHub roadmap

## Positioning

Tumelo Phale is a software engineer with professional experience across C#/.NET backends and Angular/TypeScript frontends. The portfolio emphasises application behaviour, validation, testing and evidence-led investigation, with cloud, application security and service reliability as the next areas of depth.

The rule for each public claim is simple: show the implementation, document its limits, and keep planned work visibly separate from completed work.

## Repository inventory

| Repository | Purpose | Current role |
| --- | --- | --- |
| [Profile README](https://github.com/tumelodev-arch/tumelodev-arch) | Professional summary and project entry point | Keep concise, project-led and evidence-based |
| [Portfolio site](https://github.com/tumelodev-arch/tumelodev-arch.github.io) | Portfolio pages, engineering notes, RuleTrace and ReleaseLens examples | Main narrative and case-study layer |
| [Randwise](https://github.com/tumelodev-arch/Randwise) | Local-first cash-flow planner | Independent source and Pages demo |
| [IncidentAtlas](https://github.com/tumelodev-arch/IncidentAtlas) | Local incident review workspace | Independent source and Pages demo |
| [DecisionArchive](https://github.com/tumelodev-arch/DecisionArchive) | Local-first ADR workspace | Independent source and Pages demo |

## Evidence and boundaries

| Work | What can be inspected | What it does not claim |
| --- | --- | --- |
| RuleTrace | .NET validation API source, deterministic rule evaluation, health/validation routes and test source | The API is not hosted and has no authentication or persistence |
| ReleaseLens | TypeScript dashboard, filtering, derived metrics, run details and CSV export | Fixture data is invented; no live CI integration |
| Randwise | Browser-side transaction editing, monthly summaries and CSV export | No bank connection, backend or financial advice |
| Incident Atlas | Incident lifecycle, search, response notes, summary metrics and JSON export | No monitoring agent, paging, alerting or shared team system |
| Decision Archive | Decision records, search/filtering, Markdown export and JSON backup/restore | No sign-in, access control, team sync or cloud storage |

GitHub Pages deployment workflows for the three independent applications have reported success. Their public URLs are listed on the portfolio and in each repository README. A successful deployment check is not a replacement for manual end-to-end and accessibility review.

## Next build: Cloud Service Router

This is a plan, not an existing repository or a completed project.

1. Define the service boundary and request/response contracts.
2. Add explicit validation and useful error responses.
3. Add timeout and failure behaviour only where the design requires it.
4. Cover expected and invalid paths with automated tests.
5. Add health reporting, structured logs and correlation identifiers.
6. Document architecture decisions, run instructions, test results and remaining limits.
7. Review the service from a security and operational perspective before publishing a case study.

Do not add cloud services or infrastructure tooling without a clear design reason. Docker is not required for the initial build.

## Suggested sequence

1. Review the portfolio redesign branch at desktop and mobile widths.
2. Keep the profile README linked to real, inspectable work and remove unused visual activity widgets.
3. Build the Cloud Service Router as the flagship implementation.
4. Add a bounded secure .NET API exercise with a threat model and tests for the controls it implements.
5. Build a reliability exercise that demonstrates failure, diagnosis and recovery.
6. Write case studies after the code and test evidence exist.

Three strong repositories are better than six partially maintained ones. Add another repository only when it offers a distinct problem and engineering evidence that a reviewer can inspect.

## Public sharing boundaries

Use invented data and generic domain language. Do not publish employer code, internal system or team names, customer details, private screenshots, internal URLs, ticket identifiers, secrets or proprietary rules. A clean current tree does not establish that the full Git history is clean. Revoke any exposed credential before dealing with historical cleanup.

## Manual GitHub settings

The connected repository tools can create branches, commits and pull requests, but do not expose account bio, website field, pinned repositories or repository About description editing. After reviewing the profile README, update those settings in GitHub:

- Bio: Software Engineer | Cloud, Security and Reliability
- Website: https://tumelodev-arch.github.io/
- Pin only repositories that a reviewer can inspect meaningfully.
