# Contributing

Thanks for considering a contribution. Check the open issues and discuss substantial changes before starting work.

## Local workflow

1. Fork the repository and create a focused branch.
2. Install the documented .NET SDK and tools.
3. Run `dotnet restore src/App.sln`, `dotnet format src/App.sln --verify-no-changes`, and `dotnet test src/App.sln --configuration Release`.
4. Add or update tests and documentation for behavior changes.
5. Open a pull request with the problem, approach, test evidence, risks, and any deployment impact.

## Pull request checklist

- [ ] Scope is focused and linked to an issue or explained.
- [ ] Tests cover changed behavior and pass locally.
- [ ] No secrets, personal data, generated build output, or unrelated formatting changes are included.
- [ ] Public interfaces, configuration, architecture, and changelog are updated when applicable.
- [ ] Infrastructure changes include plan evidence, cost/security impact, and cleanup instructions.

Be respectful and follow the project's code of conduct. Maintainers may request changes or close work that is outside the project's scope.