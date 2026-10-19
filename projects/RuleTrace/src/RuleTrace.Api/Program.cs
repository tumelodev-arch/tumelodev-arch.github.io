using RuleTrace.Api;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls(builder.Configuration["ASPNETCORE_URLS"] ?? "http://localhost:5080");

var app = builder.Build();

app.MapGet("/health", () => Results.Ok(new { status = "ok", service = "RuleTrace" }));

app.MapPost("/api/validate", (ExpenseRecord record) =>
{
    var trace = RuleEvaluator.Evaluate(record);
    return Results.Ok(trace);
});

app.Run();

public partial class Program { }
