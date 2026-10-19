# ReleaseLens

A TypeScript dashboard for exploring synthetic build and deployment history.

## Run

Open `index.html` in a browser. The compiled `app.js` is committed so the GitHub Pages demo works without a build step.

To rebuild the script with TypeScript 5.8 or newer installed:

```sh
tsc -p tsconfig.json
```

## Implemented

- Search by run ID, branch, commit or description.
- Filter by outcome and failure category.
- Summary metrics derived from the currently visible records.
- Failure-category breakdown and an inspectable detail view.
- No network requests, framework or package dependencies.

## Limitation

The fixture records are invented. This dashboard is not connected to a CI provider, has no authentication and does not receive live deployment data.
