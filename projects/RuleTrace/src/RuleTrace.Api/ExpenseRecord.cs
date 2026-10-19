namespace RuleTrace.Api;

public sealed record ExpenseRecord(
    string RecordId,
    decimal Amount,
    string Currency,
    string Category,
    DateOnly SubmittedOn,
    bool ReceiptAttached);
