# GitHub profile and portfolio strategy

## Public positioning

**Tumelo Phale | Software Engineer | Cloud · Security · Reliability**

The profile, portfolio and LinkedIn should tell one coherent story:

1. **Portfolio:** what problems the work addresses, how it is structured, and where its limits are.
2. **GitHub:** how the implementation, tests and decisions can be inspected.
3. **LinkedIn:** the professional context and direction of continued development.

The emphasis is dependable software, not a claim of seniority or production ownership that public examples cannot prove.

## Profile README standard

- Lead with professional experience across C#/.NET backends and Angular/TypeScript frontends.
- Feature only projects with source links and honest scope boundaries.
- Separate existing evidence from planned work.
- Describe cloud, security and reliability as areas of active learning unless an implementation proves more.
- Avoid generated contribution calendars, activity graphs, stat cards, badge rows, proficiency percentages and large technology icon walls.
- Keep the structure readable in GitHub's native Markdown view.

## Portfolio structure

The top-level navigation is Home, Projects, About, Notes, CV and Contact. The homepage carries the summary and selected work. Projects hold implementation details and limitations. About describes engineering approach, technical foundation and additional learning. Notes record reasoning rather than presenting themselves as tutorials.

The site remains static HTML, CSS and a small JavaScript file. Keep semantic HTML, visible keyboard focus, responsive layouts, reduced-motion support, meaningful links and a small dependency footprint. Do not add a framework or deployment stack unless it solves a real problem.

## Repository roles

| Repository | Role |
| --- | --- |
| [Profile repository](https://github.com/tumelodev-arch/tumelodev-arch) | Professional entry point and selected project links |
| [Portfolio site](https://github.com/tumelodev-arch/tumelodev-arch.github.io) | Portfolio pages, technical notes, RuleTrace and ReleaseLens examples |
| [Randwise](https://github.com/tumelodev-arch/Randwise) | Independent local-first cash-flow planner |
| [IncidentAtlas](https://github.com/tumelodev-arch/IncidentAtlas) | Independent local incident review tool |
| [DecisionArchive](https://github.com/tumelodev-arch/DecisionArchive) | Independent Architecture Decision Record workspace |

The three browser apps have separate source repositories and successful GitHub Pages deployment runs. Their READMEs must distinguish live static demos from local storage and must not imply server-side processing, authentication or synchronization.

## Planned project sequence

### 1. Cloud Service Router

Planned, not implemented. Use a small .NET service to demonstrate request contracts, validation, health reporting, logs, timeouts and meaningful failure behaviour. Include tests and architecture notes. Avoid infrastructure components without a clear design reason. Docker is not required for the initial version.

### 2. Secure .NET API

After the first service has a stable implementation, add a bounded security exercise with a threat model, control-to-test mapping and documented limitations. Do not call an API secure merely because it includes validation.

### 3. Reliability exercise

Demonstrate failure paths, diagnosis and recovery in a small, reproducible service scenario. Document what is measured and what remains outside the exercise.

Build these projects before writing polished case studies. Do not display a plan as an implemented system.

## Project README standard

Every substantial repository should cover problem, scope, implemented behaviour, architecture, local setup, test commands and results, security/data boundaries, limitations and next steps. Use synthetic fixtures and record what has actually been verified.

## Security and confidentiality

Do not publish employer code, internal names, customer details, private screenshots, internal URLs, ticket IDs, proprietary business rules, credentials or connection strings. Removing a secret from the latest commit does not remove it from history; revoke exposed credentials first and follow a deliberate cleanup process.

## Account settings still requiring GitHub UI

The connected repository tools do not expose account bio, website, pins or About description editing. Suggested bio: **Software Engineer | Cloud, Security and Reliability**. Set the website to the live portfolio. Pin only work a reviewer can inspect meaningfully, not repositories created to meet a quota.
