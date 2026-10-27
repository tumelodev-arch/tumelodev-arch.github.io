# GitHub profile setup and project release checklist

This document records the manual settings that are not available through the connected GitHub actions. The profile README is under 25 lines and deliberately marks projects as in progress.

## Bio options

All options are under 160 characters.

1. Graduate software engineer working with C#/.NET, Angular and software testing. I reproduce bugs, test fixes and explain the evidence.
2. Software engineer in Johannesburg. Building small tools for negative testing, secure coding practice and careful AI-assisted debugging.
3. Graduate software engineer. .NET, Angular, testing and security practice. I prefer a reproducible bug report to a confident guess.

## Profile settings

- **Location:** Johannesburg, South Africa
- **Website:** https://tumelodev-arch.github.io/
- **Avatar:** typographic TP monogram on paper, vermilion full stop. No photograph.
- **Topics:** use only relevant plain topics, at most five per repository.
- **Pins:** pin exactly `negative-test-lab`, `bug-spotter` and `ticket-reader` after those repositories exist and have been reviewed. Do not pin missing or empty repositories.

## Repository descriptions and topics

- `negative-test-lab`: Generate boundary and negative test cases from field rules, with safe CSV and Markdown export.
  Topics: `testing`, `qa`, `typescript`, `vitest`, `education`
- `bug-spotter`: Original secure-coding examples with explanations, fixes and tests.
  Topics: `security`, `education`, `csharp`, `typescript`, `testing`
- `ticket-reader`: A reviewed prompt workflow for turning synthetic bug reports into testable questions.
  Topics: `testing`, `ai`, `qa`, `documentation`, `education`

## Starter commit plans

These are suggested work increments, not a fabricated history. Make each commit only when that work has actually been done.

### negative-test-lab

1. Add project scope and known boundaries.
2. Add the static page structure.
3. Add field type definitions.
4. Add required and length rule parsing.
5. Add empty and whitespace boundary cases.
6. Add Unicode and look-alike examples.
7. Add Vitest tests for deterministic generation.
8. Add CSV escaping and formula-leading value protection.
9. Add Markdown export and accessible result table.
10. Add CI, usage instructions and manual test results.

### bug-spotter

1. Add project scope and original-content statement.
2. Add the JSON snippet schema.
3. Add the snippet rendering page.
4. Add keyboard-accessible line selection.
5. Add first injection example and fix explanation.
6. Add authorisation and CSRF examples.
7. Add SSRF, CSV and password-storage examples.
8. Add tests for snippet shape and required explanation fields.
9. Add contribution guide and snippet template.
10. Add CI, known limits and a short review checklist.

### ticket-reader

1. Add the project scope and prompt placeholder.
2. Add the sanitised prompt only after Tumelo supplies it.
3. Add a fully synthetic ticket example.
4. Add a prompt revision changelog tied to actual changes.
5. Add 3 to 5 more synthetic examples with expected output structure.
6. Add the static prompt assembly interface without network calls.
7. Add copy assembled prompt and graceful clipboard fallback.
8. Add AI-answer review checklist.
9. Add Markdown export and tests for checklist output.
10. Add CI, failure cases and documentation.

## Pull request practice

Use one branch per change. Open a pull request even for solo work, and write what changed, how it was tested, what remains unknown, and whether any public-facing claim changed. Merge only after checks and a manual review. Do not manufacture empty commits or retroactively split one upload into fake history.

## Public-safety checklist

Before making any project public:

- [ ] Enable two-factor authentication and save recovery codes somewhere separate from the device.
- [ ] Review current files, old branches, tags, issues, pull requests, Actions logs, releases and Git history for secrets or employer-specific strings.
- [ ] Enable secret scanning and push protection where available for the account and repository.
- [ ] Confirm all sample records, tickets, URLs and names are invented.
- [ ] Confirm every code sample was written independently and is not copied from employer material or security training challenges.
- [ ] Check that the README accurately states what runs, what is tested and what does not exist.
- [ ] Inspect the built page and keyboard flow before publishing a demo.

### PowerShell history and file searches

Run from each local repository. Replace the sample terms with exact internal strings you know must not appear, without pasting those strings into public issues or documentation.

```powershell
# Search current tracked files for common secret markers and sensitive wording.
git grep -n -i -E "api[_-]?key|client[_-]?secret|password|token|private key|internal|customer|ticket|payroll"

# Search every commit for a known string that should never have been published.
git log --all --oneline -S"EXACT_SENSITIVE_STRING" -- .

# Inspect all refs and branches, not only the current checkout.
git log --all --full-history --oneline --decorate

# Search tracked filenames for likely local configuration and secret files.
git ls-files | Select-String -Pattern '(^|/)(\.env|secrets?\.|appsettings\..*\.json|.*\.pfx|.*\.key|.*\.pem)$'
```

These commands are a first pass, not a complete secret scanner. A secret removed from the latest file may still exist in history. If a credential was exposed, revoke or rotate it first. History rewriting and force-pushing require a separate deliberate review because they affect collaborators and forks.

## Current blockers

- The real sanitised ticket-reader prompt has not been supplied. Do not replace its placeholder with invented prompt text.
- The connected GitHub actions can edit existing repositories and open pull requests, but cannot create new repositories or change profile bio, avatar, website, location or pins.
- The three project repositories must be created by the account owner before their independent source, tests and Pages demos can be pushed.
- A custom domain is optional. If one is purchased, update the canonical URL, sitemap, Open Graph URL and GitHub Pages domain setting together.
