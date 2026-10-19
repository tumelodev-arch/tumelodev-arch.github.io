# Tumelo Phale — Engineering Portfolio

A multi-page engineering portfolio with independent case studies, hosted interactive browser demos and notes on debugging, validation and delivery. The site is static HTML/CSS/JavaScript and publishes through GitHub Pages.

**Live site:** https://tumelodev-arch.github.io/

## Start here

- [Portfolio](https://tumelodev-arch.github.io/)
- [Projects and case studies](https://tumelodev-arch.github.io/work.html)
- [RuleTrace browser demo](https://tumelodev-arch.github.io/projects/RuleTrace/demo.html)
- [ReleaseLens dashboard](https://tumelodev-arch.github.io/projects/ReleaseLens/index.html)
- [About](https://tumelodev-arch.github.io/about.html) · [Notes](https://tumelodev-arch.github.io/notes.html) · [CV](https://tumelodev-arch.github.io/cv.html)

## Projects

### RuleTrace
A .NET 10 minimal API evaluates synthetic expense records and returns six rule-level outcomes with explanations. The source separates HTTP routing from rule evaluation and includes xUnit tests. The hosted browser demo implements the illustrative policy independently; it does **not** call the API.

- API: `projects/RuleTrace/src/RuleTrace.Api/`
- Tests: `projects/RuleTrace/tests/RuleTrace.Api.Tests/`
- [Architecture](projects/RuleTrace/ARCHITECTURE.md) · [README](projects/RuleTrace/README.md)
- **Deployment:** browser demo hosted; API runs locally and is not deployed.

### ReleaseLens
A TypeScript dashboard for exploring invented build/deployment records. Search and filters drive the derived metrics and run detail; filtered records can be exported to CSV.

- Source: `projects/ReleaseLens/src/app.ts`
- [README](projects/ReleaseLens/README.md)
- **Deployment:** interactive static dashboard hosted; no live CI-provider connection.

## Independent applications

Three working browser applications have their own setup notes and feature boundaries:

- **[Randwise — cash-flow planner](https://tumelodev-arch.github.io/projects/Randwise/)** — add/edit/remove income and expense entries, monthly metrics, category breakdown and filtered CSV export. Uses local browser storage.
- **[Incident Atlas — incident coordination log](https://tumelodev-arch.github.io/projects/IncidentAtlas/)** — incident severity/state, response notes, resolve/reopen workflow, duration metrics and JSON export. It is not an alerting or monitoring service.
- **[Decision Archive — architecture decisions](https://tumelodev-arch.github.io/projects/DecisionArchive/)** — searchable decision records, status and tag filters, Markdown export and JSON backup/restore.

These are functional local-first browser applications. Each demo persists in the visitor's browser, uses synthetic starter records, has no account or server, and should not be used for confidential or sensitive data.

## Run locally

Open `index.html` in a browser.

From the repository root, run RuleTrace:

```sh
dotnet run --project projects/RuleTrace/src/RuleTrace.Api
dotnet test projects/RuleTrace/tests/RuleTrace.Api.Tests/RuleTrace.Api.Tests.csproj --configuration Release
```

The API defaults to `http://localhost:5080`; its health endpoint is `/health`.

Rebuild ReleaseLens with TypeScript 5.8+ installed:

```sh
cd projects/ReleaseLens
tsc -p tsconfig.json
```

The committed `app.js` allows the live dashboard to run without a build step.

## Quality and boundaries

GitHub Actions checks local HTML references, JavaScript syntax, TypeScript compilation and RuleTrace tests. A separate Playwright/Chromium workflow exercises transaction create/edit/persistence/export, incident resolve/persistence/export and decision save/persistence/export. These checks do not replace broader manual responsive and keyboard-accessibility review.

All demo records and rule thresholds are synthetic. RuleTrace has no authentication or persistence, its API is not deployed, and ReleaseLens does not consume live CI data. Do not add credentials, employer code, customer data, private screenshots, internal URLs, ticket IDs or proprietary rules.

Technology names and marks belong to their respective owners; use does not imply endorsement.
