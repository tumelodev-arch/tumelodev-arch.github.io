# <Project name>

![CI](https://github.com/<owner>/<repo>/actions/workflows/dotnet-ci.yml/badge.svg)
![Coverage](https://codecov.io/gh/<owner>/<repo>/branch/main/graph/badge.svg)

> **Status:** Prototype / Active / Maintained. State what works today and what is not production-ready.

## Overview

What problem does this solve, who is it for, and what is deliberately out of scope? Include a short demo link or screenshot when useful.

## Architecture

Describe the components, trust boundaries, data flow, and key design trade-offs. Link to [ARCHITECTURE.md](ARCHITECTURE.md) and include a Mermaid diagram for non-trivial systems.

## Features

- Implemented behavior, backed by tests or a demo.
- Clearly label incomplete or experimental capabilities.

## Tech Stack

| Area | Technology | Purpose |
| --- | --- | --- |
| API | .NET | <reason> |
| Storage | <choice> | <reason> |
| Infrastructure | Terraform / AWS | <reason> |

## Local Setup

### Prerequisites

- .NET SDK 10.x
- Docker
- <other requirements>

### Run and test

```sh
dotnet restore src/App.sln
dotnet build src/App.sln --configuration Release --no-restore
dotnet test src/App.sln --configuration Release --no-build
docker build --tag <project>:local .
```

Document configuration variables in a table. Commit only `.env.example` with safe sample values; never commit credentials or real customer data.

## Cloud Deployment

Document AWS account/region prerequisites, IAM permissions, Terraform plan/apply commands, GitHub OIDC setup, environment approvals, expected monthly cost range, smoke tests, rollback, and destroy/cleanup steps. Do not deploy automatically from untrusted pull requests.

## Screenshots

Add current screenshots or an architecture/deployment view when relevant. Provide alt text and identify mock data as mock data.

## Future Improvements

- [ ] <specific measurable improvement>
- [ ] <known limitation or risk>

## Security and Support

Report vulnerabilities using `SECURITY.md` or the repository's private vulnerability reporting. See [CONTRIBUTING.md](CONTRIBUTING.md) for changes and support expectations.