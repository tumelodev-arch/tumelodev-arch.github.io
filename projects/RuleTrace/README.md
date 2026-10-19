# RuleTrace

RuleTrace is a focused ASP.NET Core minimal API that evaluates a synthetic expense record and returns a trace for each rule. It demonstrates validation decisions that can be inspected, tested and explained.

**Status:** the browser demo is hosted; the .NET API runs locally and is not deployed. The browser demo does not call the API.

## Behaviour

| Rule | Behaviour |
| --- | --- |
| RT-001 | Amount must be greater than zero |
| RT-002 | Amount must not exceed the sample limit of 10,000 |
| RT-003 | Category must be recognised |
| RT-004 | Currency must be ZAR, GBP or USD |
| RT-005 | Receipt required for amounts of 250 or more |
| RT-006 | Submission date must be present |

The sample categories, currencies and thresholds are invented for this demo, not copied from any real employer or business policy.

## Run locally

Requires the .NET 10 SDK. From the repository root:

```sh
dotnet run --project projects/RuleTrace/src/RuleTrace.Api
```

The default URL is `http://localhost:5080`.

```sh
curl http://localhost:5080/health
```

Example validation request:

```sh
curl -X POST http://localhost:5080/api/validate \
  -H "Content-Type: application/json" \
  -d '{
    "recordId": "EXP-001",
    "amount": 420,
    "currency": "ZAR",
    "category": "Travel",
    "submittedOn": "2026-10-12",
    "receiptAttached": false
  }'
```

Run tests from the repository root:

```sh
dotnet test projects/RuleTrace/tests/RuleTrace.Api.Tests/RuleTrace.Api.Tests.csproj --configuration Release
```

## Structure

- `src/RuleTrace.Api/Program.cs` — startup, URL configuration and HTTP routes.
- `src/RuleTrace.Api/ExpenseRecord.cs` — request contract.
- `src/RuleTrace.Api/RuleEvaluator.cs` — deterministic validation rules.
- `src/RuleTrace.Api/RuleCheck.cs` — trace response types.
- `tests/RuleTrace.Api.Tests/RuleEvaluatorTests.cs` — representative valid/invalid cases.
- `demo.html` and `demo.js` — independent browser example.

See [ARCHITECTURE.md](ARCHITECTURE.md) for the request flow and design boundaries.

## Decisions and limits

The evaluator is separate from HTTP routing so it can be tested without starting a server. Each outcome uses a stable rule ID and explanation. There is no authentication, persistence, external rules store, rate limiting or production deployment. Endpoint-level request validation and error handling should be expanded before real service use.
