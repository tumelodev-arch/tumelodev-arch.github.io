# Tumelo Phale — Engineering Portfolio

The public portfolio for a junior software engineer focused on .NET backend development, validation, production investigation, reliability and technical learning.

**Live site:** https://tumelodev-arch.github.io/

## Start here

- [Portfolio home](https://tumelodev-arch.github.io/)
- [Professional experience](https://tumelodev-arch.github.io/experience.html)
- [Selected work and engineering notes](https://tumelodev-arch.github.io/work.html)
- [About](https://tumelodev-arch.github.io/about.html)
- [Notes](https://tumelodev-arch.github.io/notes.html)
- [CV](https://tumelodev-arch.github.io/cv.html)

## Independent browser applications

Each interactive browser app now has its own repository, workflow, and end-to-end test.

### Randwise — cash-flow planner

Record income and expenses in South African rand, review monthly totals and category breakdowns, and export filtered transactions to CSV.

- [Demo URL](https://tumelodev-arch.github.io/Randwise/)
- [Source repository](https://github.com/tumelodev-arch/Randwise)

### Incident Atlas — incident review workspace

Record incident severity, impact and response notes, search and filter the register, resolve or reopen incidents, and export JSON.

- [Demo URL](https://tumelodev-arch.github.io/IncidentAtlas/)
- [Source repository](https://github.com/tumelodev-arch/IncidentAtlas)

### Decision Archive — architecture decision records

Capture decision context, rationale, alternatives, consequences, status and tags. Search records, export Markdown, and back up or restore JSON.

- [Demo URL](https://tumelodev-arch.github.io/DecisionArchive/)
- [Source repository](https://github.com/tumelodev-arch/DecisionArchive)

**Initial hosting note:** the app repositories include GitHub Pages deployment workflows. Their Pages source must be enabled as **GitHub Actions** in each repository's Settings → Pages before the demo URLs will go live. Until that first deployment completes, run the app locally by opening its index.html.

## Remaining portfolio code

This repository keeps the portfolio pages, engineering notes, and other project material that is still presented here. The three browser applications listed above are maintained in their own repositories and will not be checked into this portfolio repository after this migration.

## Quality checks

The portfolio workflow validates local HTML references, JavaScript syntax, the remaining TypeScript project, and the RuleTrace .NET tests. Each independent browser-app repository has its own JavaScript syntax check and Playwright end-to-end test for its main workflow.

All example records use synthetic data. The portfolio separates independent demonstrations from professional experience and does not expose employer code, customer records, internal URLs, ticket IDs or proprietary rules.
