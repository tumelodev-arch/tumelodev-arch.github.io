# GitHub profile and portfolio strategy

**Positioning:** software engineer working mainly with .NET and TypeScript, building stronger end-to-end capability in service design, testing, cloud delivery and reliability.

## Suggested profile copy

- **Bio:** Software engineer working with .NET and TypeScript, building towards cloud-native services and reliability.
- **Website:** https://tumelodev-arch.github.io/
- **LinkedIn:** https://www.linkedin.com/in/tumelo-junior-phale-a6579527b/
- **Profile README:** root `README.md` in the `tumelodev-arch` profile repository.

## Public repositories

| Repository | Decision | Rationale |
| --- | --- | --- |
| `tumelodev-arch` | Keep | Main GitHub profile README; focus on skills and evidence. |
| `tumelodev-arch.github.io` | Keep and improve | Portfolio pages, RuleTrace source/demo, ReleaseLens dashboard and engineering notes. |
| `Randwise` | Keep | Standalone local-first cash-flow planner with CSV export. |
| `IncidentAtlas` | Keep | Standalone incident review log with search, lifecycle actions and JSON export. |
| `DecisionArchive` | Keep | Standalone architecture decision records with Markdown and JSON portability. |

Five public repositories are currently confirmed: the profile README, the portfolio, Randwise, Incident Atlas and Decision Archive. Keep repository boundaries intentional; do not delete, archive, privatise or create repositories merely to optimise appearance.

## Project boundaries

### RuleTrace
The source contains a .NET 10 minimal API, deterministic rules, health/validation routes and xUnit test source. The static browser demo is independent from the API. The API is not deployed; there is no authentication or persistence. Next: verify tests in CI, add endpoint-level integration tests and improve malformed-request errors before deployment.

### ReleaseLens
The static TypeScript dashboard supports search, filters, derived metrics, run details and browser-side CSV export. Its data is synthetic, and it does not connect to a CI provider. Next: add tests for filter logic, metrics and CSV escaping.

## Repository README standard

A substantive project README should state the problem, scope, implemented behaviour, architecture, setup, tests, verification status, security boundaries, limitations and roadmap. Use `templates/PROJECT_README_TEMPLATE.md`.

## Public sharing rules

Use synthetic fixtures. Do not publish employer code, internal names, customer details, private screenshots, internal URLs, ticket IDs, proprietary rules, credentials or connection strings. A clean current tree does not prove the complete Git history is clean; review history and revoke exposed secrets.

See `SECURITY_REVIEW_CHECKLIST.md` before release.

## Pins and descriptions

Pin only projects a reviewer can run or inspect. The portfolio is the main landing page. Consider pinning a balanced set of substantive repositories—portfolio, RuleTrace/ReleaseLens source, and the strongest standalone browser apps—rather than pinning every repository automatically.

Recommended descriptions:
- Profile repo: “Software engineering profile and learning roadmap focused on .NET application development, testing and cloud-native growth.”
- Portfolio repo: “Personal engineering portfolio featuring a validation API and browser demo, a TypeScript delivery-history dashboard and technical notes.”
- Randwise: “Local-first ZAR cash-flow planner with transaction editing, monthly summaries and CSV export.”
- IncidentAtlas: “Local-first incident review workspace with severity tracking, resolution metrics and JSON export.”
- DecisionArchive: “Local-first architecture decision register with search, Markdown export and validated JSON backup.”

The GitHub bio, website field, pinned repository order and About descriptions are account/repository settings. Update them in the GitHub UI if the connected API does not expose the required write permission.

## Quality workflow

The portfolio quality workflow checks local HTML references, JavaScript syntax, TypeScript compilation and RuleTrace tests. A green job confirms those automated checks only; manually review responsive layout, keyboard navigation and live-demo behaviour.

## Terminal-style profile presentation

The published profile README now uses a terminal-inspired header, compact technology icons, command-prompt sections for skills and project links, public GitHub statistics, an activity graph and a generated 3D/isometric contribution calendar. The profile repo contains the banner SVG and a scheduled GitHub Actions workflow for refreshing the calendar. The generator action is pinned to a specific commit and uses the repository-scoped `GITHUB_TOKEN`; it commits only generated calendar SVGs.

- [Published profile README](https://github.com/tumelodev-arch/tumelodev-arch)
- [Profile contribution-calendar workflow](https://github.com/tumelodev-arch/tumelodev-arch/blob/main/.github/workflows/profile-3d.yml)
- [Terminal banner source](https://github.com/tumelodev-arch/tumelodev-arch/blob/main/assets/profile-terminal.svg)

## New independent tools

Three additional independent browser applications have their own source repositories. Their GitHub Pages deployments are not live yet; enable Pages with GitHub Actions in each repository and confirm a successful deployment before calling these demos live:

- **Randwise** — a ZAR cash-flow planner with transaction CRUD, month/type/category filters, savings-rate calculation, spending breakdown and filtered CSV export.
- **Incident Atlas** — an incident log with severity, service, impact/response notes, open/resolved state changes, median resolution duration and JSON export.
- **Decision Archive** — an ADR-style decision register with lifecycle statuses, tags, search/filter, Markdown export and validated JSON backup/restore.

All three run as static browser apps and persist data in local storage. They do not have a server, accounts, cloud sync or third-party service integrations. Do not describe them as cloud-connected or production-operated services. The source links and local setup instructions are listed on [the tools hub](https://tumelodev-arch.github.io/lab.html); the hosted URLs remain pending until Pages deployment succeeds.
