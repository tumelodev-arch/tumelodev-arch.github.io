# Tumelo Phale — Engineering Portfolio

A static, multi-page engineering portfolio focused on backend development, production investigation, validation, reliability and clear technical writing.

**Live site:** https://tumelodev-arch.github.io/

## Start here

- [Portfolio home](https://tumelodev-arch.github.io/)
- [Professional experience](https://tumelodev-arch.github.io/experience.html)
- [Selected work and engineering notes](https://tumelodev-arch.github.io/work.html)
- [Independent browser applications](https://tumelodev-arch.github.io/lab.html)
- [About](https://tumelodev-arch.github.io/about.html) · [Notes](https://tumelodev-arch.github.io/notes.html) · [CV](https://tumelodev-arch.github.io/cv.html)

## Independent applications

### Randwise — cash-flow planner
Track income and expenses in South African rand, edit or remove transactions, review monthly totals and category breakdowns, and export filtered transactions to CSV.

- [Open application](https://tumelodev-arch.github.io/projects/Randwise/)
- Source: `projects/Randwise/`

### Incident Atlas — incident review workspace
Record incident severity, impact and response notes; search and filter the register; resolve or reopen incidents; review duration metrics and export JSON.

- [Open application](https://tumelodev-arch.github.io/projects/IncidentAtlas/)
- Source: `projects/IncidentAtlas/`

### Decision Archive — architecture decision records
Capture decision context, rationale, alternatives, consequences, status and tags. Search records, export Markdown, and back up or restore validated JSON.

- [Open application](https://tumelodev-arch.github.io/projects/DecisionArchive/)
- Source: `projects/DecisionArchive/`

## Data and privacy boundaries

The applications are browser-based demos. They begin with synthetic example records, let visitors clear the data and add their own entries, and save changes in the current browser using local storage. They do not provide accounts, cloud sync, bank connections, live monitoring or shared workspaces. Avoid entering confidential or sensitive information. Export files are saved to the visitor's device.

## Run locally

Open `index.html` in a browser, or serve the repository root using any static file server. The three applications are under `projects/` and can be opened directly.

## Quality checks

GitHub Actions validates site links, JavaScript syntax, TypeScript compilation and automated application flows. CI checks are useful evidence, but they do not replace manual responsive, keyboard-accessibility and cross-browser review.

All example data is synthetic. Portfolio descriptions distinguish independent demos from professional experience and do not expose employer code, customer records, internal URLs, ticket IDs or proprietary rules.
