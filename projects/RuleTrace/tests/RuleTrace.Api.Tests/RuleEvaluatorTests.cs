using RuleTrace.Api;
using Xunit;

namespace RuleTrace.Api.Tests;

public sealed class RuleEvaluatorTests
{
    [Fact]
    public void Valid_sample_record_passes_every_rule()
    {
        var input = new ExpenseRecord(
            "EXP-001", 120m, "ZAR", "Travel",
            new DateOnly(2026, 10, 12), true);

        var trace = RuleEvaluator.Evaluate(input);

        Assert.True(trace.Passed);
        Assert.Equal(6, trace.RulesPassed);
        Assert.Equal(0, trace.RulesFailed);
        Assert.All(trace.Checks, check => Assert.True(check.Passed));
    }

    [Fact]
    public void Missing_receipt_returns_a_specific_failed_rule()
    {
        var input = new ExpenseRecord(
            "EXP-002", 420m, "ZAR", "Travel",
            new DateOnly(2026, 10, 12), false);

        var trace = RuleEvaluator.Evaluate(input);
        var receiptCheck = Assert.Single(trace.Checks.Where(check => check.RuleId == "RT-005"));

        Assert.False(trace.Passed);
        Assert.False(receiptCheck.Passed);
        Assert.Contains("Attach a receipt", receiptCheck.Explanation);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(-1)]
    public void Zero_or_negative_amount_fails_the_positive_amount_rule(decimal amount)
    {
        var input = new ExpenseRecord(
            "EXP-003", amount, "ZAR", "Other",
            new DateOnly(2026, 10, 12), false);

        var trace = RuleEvaluator.Evaluate(input);
        var amountCheck = Assert.Single(trace.Checks.Where(check => check.RuleId == "RT-001"));

        Assert.False(amountCheck.Passed);
    }
}
