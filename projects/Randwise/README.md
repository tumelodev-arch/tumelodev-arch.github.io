# Randwise

Randwise is a local-first monthly cash-flow planner for tracking income, expenses and spending categories in South African rand.

## Live demo

https://tumelodev-arch.github.io/projects/Randwise/

## Implemented

- Add, edit and delete income/expense entries.
- Filter by month, type, category and search terms.
- Calculate monthly income, expenses, net cash flow and savings rate.
- Compare spending by category.
- Export the visible filtered transactions to CSV.
- Persist entries in the current browser using local storage.
- Restore synthetic starter data for demonstration.

## Run and data

Open `index.html` directly in a modern browser; there is no build step or external dependency. A synthetic starter dataset is created on first use. Data is stored in local browser storage only and is not uploaded to a server. Clearing site data or changing browsers does not migrate it.

## Boundaries

This is a budgeting utility, not financial advice or a bank-connected product. It has no account system, cloud sync, bank integration or encryption beyond the browser's own storage facilities. Never enter bank credentials, account numbers or information you would not want saved in this browser.
