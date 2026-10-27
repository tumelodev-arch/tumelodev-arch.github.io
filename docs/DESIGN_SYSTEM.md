# Design system

## Direction

The portfolio reads like a test report. The QA practice is the organising idea, not a decorative terminal theme. Case sheets show Given / When / Then, skills expose their evidence, and the command console is optional.

## Tokens

- Paper: `#F3EEE3`
- Surface: `#FBF8F1`
- Ink: `#14161A`
- Muted ink: `#555A63`
- Rules: `#D9D2C3`
- Accent: `#E4572E`
- Terminal: `#101314`
- Terminal text: `#E8E4D8`
- Terminal dim: `#7C8582`
- Status only: pass `#3F8F5B`, fail `#C23B3B`, in progress `#B88A1E`

Dark mode uses paper `#17191B`, surface `#222528`, text `#F3EEE3`, secondary text `#B8B9BA` and rules `#414448`. The accent remains vermilion. Status text uses accessible variants where required.

## Type

| Role | Size | Weight | Line height | Tracking |
| --- | ---: | ---: | ---: | ---: |
| Hero | `clamp(2.75rem, 5vw, 4rem)` | 700 | 1.05 | -0.02em |
| Section heading | `clamp(2rem, 3.5vw, 2.5rem)` | 600 | 1.15 | -0.01em |
| Project heading | 29 to 32 px | 600 | 1.1 | -0.01em |
| Lead | 18 to 20 px | 400 | 1.6 | 0 |
| Body | 17 to 18 px | 400 | 1.6 | 0 |
| UI | 13 to 15 px | 500 | 1.4 | 0 |
| Mono label | 11 to 13 px | 400 | 1.6 | 0.04em |

Bricolage Grotesque (600, 700, 800), IBM Plex Sans (400, 500, 600) and JetBrains Mono (400, 500) are loaded from Google Fonts with `display=swap`. Display headings use a system sans fallback stack; body text keeps IBM Plex Sans with system sans fallbacks; console, labels and status text use JetBrains Mono. No custom `@font-face` rules are used.

## Spacing and interaction

Use 8 px increments, with 4 px for small label spacing. Desktop rail is 240 px; reading text stays around 68 characters; controls target at least 44 px. All interactive features must be keyboard reachable, have visible focus, and respect reduced motion.

## Contrast note

Normal text must meet 4.5:1 and large text 3:1. Ink on paper, ink on surface, muted ink on paper, and terminal text on terminal pass AA by calculation. Vermilion `#E4572E` is used for emphasis and decorative accents, not normal-size text on light paper. Small text links and heading emphasis use darker vermilion `#A73516` on light surfaces; dark mode uses `#FF8A6B`. Re-check all implemented pairs before release.
