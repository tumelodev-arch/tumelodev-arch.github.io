# GitHub profile strategy

## One coherent engineering story

**Tumelo Phale / Software Engineer / Cloud, Security, Reliability**

The portfolio describes the problems and the reasoning. GitHub contains the code, tests and setup. LinkedIn supplies professional context. These surfaces should share the same positioning without repeating the same wall of information.

## Profile README structure

1. Name and role.
2. A short, direct statement of C#/.NET and Angular/TypeScript experience.
3. Three selected projects with links to running demos and source.
4. Current direction: cloud, security and service reliability.
5. An engineering approach grounded in observable behaviour, testing and evidence.
6. A clear link to the portfolio and LinkedIn.

Avoid badge rows, stat cards, contribution artwork, skill percentages and decorative icon walls. Native Markdown should carry the content without external rendering dependencies.

## Visual identity

Use the Engineering Field Notes system:

- Warm paper, black ink, cobalt blue and signal orange.
- Large type, a compact monospace index and deliberate asymmetry.
- Technical diagrams and numbered project entries instead of generic card grids.
- Direct calls to action such as Open demo, Source code and Read project notes.
- Same visual family across the portfolio and README, while individual applications can keep interfaces suited to their specific tasks.

The visual system and accessibility requirements are described in docs/DESIGN_SYSTEM.md.

## Project standard

A substantial repository should explain the problem, implemented behaviour, architecture, setup, test commands and results, data/security boundaries, limitations and next steps. Mark plans as planned. Do not present a technology list as evidence in itself.

## Current projects

The portfolio currently features RuleTrace, ReleaseLens, Randwise, Incident Atlas and Decision Archive. The independent browser applications use synthetic data and local browser storage. RuleTrace's API is not hosted and ReleaseLens does not connect to a live CI provider.

## Planned work

Cloud Service Router is the next planned flagship. Add it after there is code to review, tests to run and architecture decisions worth explaining. Then consider a security-focused .NET API and a small reliability exercise.

## Confidentiality and truthfulness

Do not publish employer code, customer data, internal names, URLs, ticket identifiers, secrets or proprietary business rules. Distinguish professional experience, hands-on learning and independent public implementations. Each is valuable, but they are different kinds of evidence.

## Account settings to complete manually

The repository connector cannot update the GitHub account bio, website field, pinned repositories or repository About descriptions. Suggested bio: Software Engineer | Cloud, Security and Reliability. Set the website to https://tumelodev-arch.github.io/ and pin only work that a reviewer can inspect meaningfully.
