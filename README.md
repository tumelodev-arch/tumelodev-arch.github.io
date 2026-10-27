# Tumelo Phale | Engineering Field Notes

A software engineering portfolio documenting working examples, technical decisions and the limits of each project. My professional foundation is C#/.NET backend development and Angular/TypeScript frontend work, with cloud, security and reliability as the next areas of depth.

**Live portfolio:** https://tumelodev-arch.github.io/

## Start here

- [Overview](https://tumelodev-arch.github.io/)
- [Projects and implementation boundaries](https://tumelodev-arch.github.io/work.html)
- [About and technical foundation](https://tumelodev-arch.github.io/about.html)
- [Professional experience](https://tumelodev-arch.github.io/experience.html)
- [Engineering notes](https://tumelodev-arch.github.io/notes.html)
- [CV](https://tumelodev-arch.github.io/cv.html)

## Projects

| Project | What it demonstrates | Boundary |
| --- | --- | --- |
| [RuleTrace](https://github.com/tumelodev-arch/tumelodev-arch.github.io/tree/main/projects/RuleTrace) | .NET validation API, deterministic rules and test source | API runs locally, is not hosted and has no authentication or persistence |
| [ReleaseLens](https://github.com/tumelodev-arch/tumelodev-arch.github.io/tree/main/projects/ReleaseLens) | TypeScript dashboard with filters, derived metrics, run details and CSV export | Uses invented build records and does not connect to a live CI provider |
| [Randwise](https://github.com/tumelodev-arch/Randwise) | Local-first cash-flow planner with monthly summaries and CSV export | No bank integration, server or financial advice |
| [Incident Atlas](https://github.com/tumelodev-arch/IncidentAtlas) | Local incident register with lifecycle actions, filters and JSON export | Not a monitoring, paging or on-call system |
| [Decision Archive](https://github.com/tumelodev-arch/DecisionArchive) | Architecture decision records, Markdown export and JSON backup/restore | No accounts, shared storage or cloud sync |

Randwise, Incident Atlas and Decision Archive are deployed as static browser applications. They store records in the current browser and do not send them to a backend. Use synthetic or non-sensitive data.

## Next planned build

**Cloud Service Router** is planned, not implemented. The aim is a small .NET service with explicit request contracts, validation, meaningful error responses, health reporting, automated tests and documented failure behaviour. It will be added as a project only after the implementation and test evidence exist.

## How this site is built

The portfolio uses static HTML and CSS with a small JavaScript file for the current year and CV print action. It is intended to remain lightweight and easy to review.

The visual system is documented in docs/DESIGN_SYSTEM.md. The portfolio workflow checks internal HTML references, JavaScript syntax, ReleaseLens TypeScript and the RuleTrace test suite.

## Public sharing boundaries

Examples use invented data and generic terminology. This repository does not publish employer source code, customer information, internal URLs, ticket identifiers, secrets or proprietary business rules. Notes describe an engineering approach, not a claim of seniority.
