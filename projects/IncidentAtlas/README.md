# Incident Atlas

Incident Atlas is a local incident coordination and review log. It lets a developer or small team record an incident, track its state and severity, capture impact and response notes, and review resolution durations.

## Live demo

https://tumelodev-arch.github.io/projects/IncidentAtlas/

## Implemented

- Create, edit and delete incident records.
- Record service, severity, start time, impact and response notes.
- Mark incidents resolved or reopen them.
- Search and filter by state and severity.
- Calculate open/P1 counts, current-month resolutions and median resolution duration.
- Export the incident log to JSON.
- Persist data in browser local storage.

## Run locally

Open `index.html` in a modern browser. No build command, account or external dependency is required. Synthetic example incidents are loaded on first use.

## Boundaries

This is an incident-log practice tool, not a monitoring agent, alert router or on-call platform. It has no server, integrations, notifications, authentication or shared team storage. Do not paste credentials, customer information, production hostnames or sensitive incident details into this public demo.
