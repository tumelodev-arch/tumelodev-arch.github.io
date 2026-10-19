namespace RuleTrace.Api;

public static class RuleEvaluator
{
    private static readonly HashSet<string> SupportedCurrencies =
        new(StringComparer.OrdinalIgnoreCase) { "ZAR", "GBP", "USD" };

    private static readonly HashSet<string> SupportedCategories =
        new(StringComparer.OrdinalIgnoreCase) { "Travel", "Equipment", "Training", "Meals", "Other" };

    public static ValidationTrace Evaluate(ExpenseRecord record)
    {
        ArgumentNullException.ThrowIfNull(record);

        var checks = new List<RuleCheck>
        {
            Check("RT-001", "Positive amount",
                record.Amount > 0,
                record.Amount > 0
                    ? "The amount is greater than zero."
                    : "Enter an amount greater than zero."),

            Check("RT-002", "Sample amount limit",
                record.Amount <= 10000,
                record.Amount <= 10000
                    ? "The amount is within the demonstration limit of 10,000 units."
                    : "The demonstration limit is 10,000 units."),

            Check("RT-003", "Category is recognised",
                SupportedCategories.Contains(record.Category ?? string.Empty),
                SupportedCategories.Contains(record.Category ?? string.Empty)
                    ? $"The category '{record.Category}' is recognised by the sample policy."
                    : "Choose one of the sample categories: Travel, Equipment, Training, Meals or Other."),

            Check("RT-004", "Currency is supported",
                SupportedCurrencies.Contains(record.Currency ?? string.Empty),
                SupportedCurrencies.Contains(record.Currency ?? string.Empty)
                    ? $"The currency '{record.Currency}' is supported by this example."
                    : "Use one of the sample currencies: ZAR, GBP or USD."),

            Check("RT-005", "Receipt for higher amounts",
                record.Amount < 250 || record.ReceiptAttached,
                record.Amount < 250
                    ? "A receipt is not required by this sample rule for amounts below 250."
                    : record.ReceiptAttached
                        ? "A receipt is attached for an amount of 250 or more."
                        : "Attach a receipt for amounts of 250 or more under this sample policy."),

            Check("RT-006", "Submission date is present",
                record.SubmittedOn != default,
                record.SubmittedOn != default
                    ? $"A submission date is present: {record.SubmittedOn:yyyy-MM-dd}."
                    : "Provide a submission date.")
        };

        var passed = checks.Count(check => check.Passed);
        var failed = checks.Count - passed;

        return new ValidationTrace(
            record.RecordId,
            failed == 0,
            passed,
            failed,
            checks);
    }

    private static RuleCheck Check(string id, string name, bool passed, string explanation) =>
        new(id, name, passed, explanation);
}
