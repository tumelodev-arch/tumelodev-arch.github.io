# Engineering Field Notes design system

## Intent

The portfolio should feel like a field notebook for an engineer: precise, editorial, practical, and willing to show incomplete answers. It should not look like a default SaaS template or a technology badge board.

## Visual language

- **Paper:** warm ivory (#F4F0E7).
- **Ink:** near-black (#141822).
- **Cobalt:** primary navigation, focus elements and links (#2445F4).
- **Signal orange:** small markers, warnings and secondary emphasis (#F75E3B).
- **Typography:** heavy system sans for large statements, system body text for readability, monospace for field labels and indexes.
- **Composition:** asymmetrical editorial grids, ruled sections, large numbered entries and small technical diagrams.
- **Imagery:** prefer diagrams made from the actual system concepts over stock photography.

## Components

- **Masthead:** compact TP mark, a two-line wordmark and six navigation destinations.
- **Front page:** one clear statement, short professional context, two primary actions and a hand-drawn style request-to-response diagram.
- **Project index:** numbered rows with the question being explored, a short implementation summary, status and direct links.
- **Case notes:** explicit problem, what exists, evidence and boundaries.
- **Field notes:** numbered articles that explain the observation, the hypothesis and the way to test it.
- **CV:** print-aware layout with no decorative profile metrics or project list.

## Interaction rules

- Links state what opens: Open demo, Source code, Setup and boundaries, or Read notes.
- Keep keyboard focus clearly visible.
- Use semantic headings and meaningful link text.
- Respect reduced-motion preferences.
- Keep tap targets comfortable on mobile.
- Do not use an online/availability indicator unless there is a real source for it.
- No interaction should depend on colour alone.
- Do not call a project live, secure, cloud-connected or production-ready unless the implementation and deployment evidence support the claim.

## Layout breakpoints

The layout moves from two-column editorial sections to a single column at tablet widths. Navigation wraps into a six-item, three-column grid on narrow mobile screens. Project action links move underneath their description rather than squeezing into a narrow side column.

## Maintenance

A new component should first solve an actual reading, navigation or explanation problem. Keep the site static unless a new requirement needs client-side behaviour. The existing JavaScript is limited to the current year and CV print action.

## Verification checklist

- [ ] Check widths around 1440 px, 1024 px, 768 px and 375 px.
- [ ] Use the keyboard to reach every link and button.
- [ ] Confirm focus is visible on the light background and the cobalt panel.
- [ ] Confirm reduced-motion settings are respected.
- [ ] Print the CV and inspect page breaks.
- [ ] Open each live demo and test its main workflow.
- [ ] Re-run static local-reference validation and all automated checks.
