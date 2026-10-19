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
| `tumelodev-arch.github.io` | Keep and improve | Static portfolio with RuleTrace source/demo and ReleaseLens dashboard. |

There are two confirmed public repositories. Do not delete, archive, privatise or create repositories merely to optimise appearance.

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

Pin only projects a reviewer can run or inspect. The portfolio is the strongest existing project pin; avoid empty repos or vanity badges.

Recommended descriptions:
- Profile repo: “Software engineering profile and learning roadmap focused on .NET application development, testing and cloud-native growth.”
- Portfolio repo: “Personal engineering portfolio featuring a validation API and browser demo, a TypeScript delivery-history dashboard and technical notes.”

The GitHub bio, website field, pinned repository order and About descriptions are account/repository settings. Update them in the GitHub UI if the connected API does not expose the required write permission.

## Quality workflow

The portfolio quality workflow checks local HTML references, JavaScript syntax, TypeScript compilation and RuleTrace tests. A green job confirms those automated checks only; manually review responsive layout, keyboard navigation and live-demo behaviour.
