# Decision Archive

Decision Archive is a local-first Architecture Decision Record (ADR) tool for documenting context, alternatives, the chosen decision and its consequences.

## Live demo

https://tumelodev-arch.github.io/projects/DecisionArchive/

## Implemented

- Create, edit and delete decision records.
- Track status: proposed, accepted, superseded or rejected.
- Record context, rationale, alternatives, consequences, date and tags.
- Search records and filter by status or engineering area.
- Export visible records as Markdown suitable for a repository.
- Back up and restore the complete archive as JSON with basic record validation.
- Persist the archive in browser local storage.

## Run locally

Open `index.html` in a modern browser. No build step, account or external dependency is needed. The app creates three synthetic example decisions on first use.

## Boundaries

The archive is local to the current browser; it has no sign-in, shared workspace, synchronization or access control. Markdown export is intended for manual review before adding a record to a public repository. Do not store credentials, customer data or employer-confidential decisions in the demo.
