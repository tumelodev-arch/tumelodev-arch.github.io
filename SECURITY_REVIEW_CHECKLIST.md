# Public repository security review checklist

Use this before publishing source or adding a project to a public repository. It is a review aid, not a security certification.

## Source and history
- [ ] Search current files for tokens, keys, passwords, private keys, connection strings and credential files.
- [ ] Review Git history, branches, tags and releases for previously committed secrets or private material.
- [ ] Revoke/rotate any exposed real credential first; deleting it from the latest tree is not sufficient.
- [ ] Review relevant issues, pull requests, screenshots, PDFs, generated files and Actions logs.

## Confidentiality and personal data
- [ ] Use synthetic sample data in fixtures, logs, screenshots and API payloads.
- [ ] Remove employer code, internal names, customer data, private documentation, internal URLs, ticket IDs and proprietary rules.
- [ ] Check image/PDF metadata and document exports.
- [ ] Distinguish personal learning from production ownership and planned work from implemented features.
- [ ] Publish contact details only if you are comfortable making them public.

## Application and CI
- [ ] Validate input at the boundary and handle malformed requests consistently.
- [ ] Do not expose secrets or stack traces in responses.
- [ ] Apply least privilege to CI permissions and credentials.
- [ ] Review third-party Actions and dependencies before relying on them.
- [ ] Avoid unsafe shell interpolation, untrusted HTML insertion and unnecessary outbound calls.
- [ ] Document authentication, authorisation, storage, rate limits and other missing controls.

## Release verification
- [ ] Run automated tests and static checks.
- [ ] Review the full diff including renames and deletions.
- [ ] Test desktop/mobile layouts, keyboard navigation and visible focus.
- [ ] Test passing, failing and empty states in each live demo.
- [ ] Verify the latest CI and deployment status; automated success does not replace manual review.
- [ ] Verify outbound links and the GitHub profile/pinned-repository settings.

## If an exposure is found
1. Stop the release and identify its scope.
2. Revoke affected credentials or access.
3. Preserve investigation evidence without copying secrets into reports.
4. Remove the material from source and assess history/cache exposure.
5. Follow the relevant provider or organisation incident process.
6. Re-run the review after remediation.
