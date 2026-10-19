# Tumelo Phale | Personal Engineering Notebook

A small, multi-page portfolio built with semantic HTML, modern CSS and vanilla JavaScript. The site runs on GitHub Pages without a framework or a build step.

## Pages

- `index.html`: short introduction, two featured implementations, technical foundation and a recent engineering note.
- `work.html`: project case studies for RuleTrace and ReleaseLens.
- `about.html`: experience context, technical foundation and current learning areas.
- `notes.html`: short notes about debugging, validation and investigation.
- `cv.html`: print-friendly CV summary. Use the browser print dialog to save a PDF.
- `contact.html`: contact and public profile links.

## Projects

The portfolio describes implementations that exist in this branch.

- **RuleTrace** is an ASP.NET Core API that evaluates synthetic expense records and returns a rule-by-rule explanation. It includes an xUnit test project. The API is not deployed. Its browser demo illustrates the trace format separately and does not call the API.
- **ReleaseLens** is a TypeScript dashboard for filtering a checked-in synthetic build and deployment dataset. It is not connected to a live CI provider.

Screenshots under `assets/projects/` were captured from the local project demos. They use synthetic example data, not production systems.

## Run locally

Open `index.html` in a browser to inspect the site and browser demos.

RuleTrace API:
1. Install the .NET 10 SDK.
2. From the repository root, run `dotnet run --project projects/RuleTrace/src/RuleTrace.Api`.
3. Open `http://localhost:5080/health` or POST a sample record to `/api/validate`.
4. Run tests with `dotnet test projects/RuleTrace/tests/RuleTrace.Api.Tests/RuleTrace.Api.Tests.csproj`.

ReleaseLens has a compiled browser script committed in `projects/ReleaseLens/app.js`. If TypeScript is installed, rebuild it from `projects/ReleaseLens/` with `tsc -p tsconfig.json`.

## Accessibility and maintenance

The main site has semantic page structure, skip links, visible keyboard focus, responsive layouts and reduced-motion support. The demos use native controls and do not need external scripts. Check desktop and mobile widths before publishing.

## Copyright and public sharing

Original site copy and layout are maintained by Tumelo Phale. Third-party technology icons and their licensing information are kept under `assets/icons/`. Technology names and marks belong to their respective owners. Their use is descriptive and does not imply endorsement.

All project records are synthetic. Do not add employer code, internal product names, customer data, private documentation, internal screenshots, URLs, ticket numbers or proprietary rules.

## Deployment and review

GitHub Pages publishes from the repository root on `main`: https://tumelodev-arch.github.io/

The first release features only the portfolio, RuleTrace and ReleaseLens. TracePad is excluded from the featured project list until it has working code ready for review.

This work remains on `portfolio-readme-review`. Do not merge or publish it until visual testing and explicit approval.
