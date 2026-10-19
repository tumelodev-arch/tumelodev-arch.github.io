# RuleTrace

RuleTrace is a small ASP.NET Core API that applies a deliberately small set of validation rules to a synthetic expense record and returns an explanation for each rule.

## Scope

- Uses synthetic expense records only.
- Returns a stable rule identifier, pass/fail result, and a plain-language explanation.
- Separates the rule evaluation from the HTTP endpoint.
- Includes unit tests for valid and invalid cases.

## Run locally

Requires the .NET 10 SDK.

```sh
dotnet run --project src/RuleTrace.Api
```

By default, the API listens at `http://localhost:5080`.

Health check:

```sh
curl http://localhost:5080/health
```

Evaluate a synthetic record:

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

Run tests:

```sh
dotnet test tests/RuleTrace.Api.Tests/RuleTrace.Api.Tests.csproj
```

## Example rules

- Amount is positive.
- Amount is within the sample limit.
- Category is supplied.
- Currency is one of the sample supported values.
- Receipts are required at or above the sample threshold.
- The submitted date is present.

These are invented rules for demonstrating an implementation pattern. They do not represent a real finance or employer policy.

## Limitation

The API has not been deployed. The separate `demo.html` page is a browser-side illustration of the trace format and does not call the API. There is no authentication, persistence or external rules store.
