# ReleaseLens

ReleaseLens is a dependency-light TypeScript dashboard for exploring synthetic build and deployment history.

**Live demo:** https://tumelodev-arch.github.io/projects/ReleaseLens/index.html

## Features

- Search runs by ID, branch, commit or summary.
- Filter by outcome and failure category.
- Derive total runs, failures, success rate and category breakdown from visible results.
- Inspect a selected run and its sample steps.
- Export the currently filtered records as CSV, including steps.
- Keyboard-operable run selection, visible focus styles and no runtime dependencies or network calls.

## Run locally

Open `index.html` in a browser. The checked-in `app.js` means the demo works without building.

Rebuild and type-check with TypeScript 5.8+:

```sh
tsc -p tsconfig.json
```

`tsconfig.json` compiles `src/app.ts` into `app.js`.

## Data and limits

The records are invented fixture data, not real deployments. Filters and CSV export both use the same visible record set. There is no live CI integration, authentication, backend or real-time refresh. Metrics describe only this small sample and are not operational service-level indicators.

## Next improvements

1. Add unit tests for filter logic, summary calculations and CSV escaping.
2. Separate fixture data from rendering.
3. Add date-range filtering and robust loading/error states if a data source is introduced.
4. Introduce any CI provider connection only with a documented least-privilege, read-only permission boundary.
