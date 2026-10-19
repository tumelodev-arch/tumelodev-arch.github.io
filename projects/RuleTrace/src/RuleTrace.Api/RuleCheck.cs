namespace RuleTrace.Api;

public sealed record RuleCheck(
    string RuleId,
    string Name,
    bool Passed,
    string Explanation);

public sealed record ValidationTrace(
    string RecordId,
    bool Passed,
    int RulesPassed,
    int RulesFailed,
    IReadOnlyList<RuleCheck> Checks);
