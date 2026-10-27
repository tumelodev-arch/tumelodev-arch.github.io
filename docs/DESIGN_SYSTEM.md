# Design system

## Direction

The portfolio reads like a test report. The QA practice is the organising idea, not a decorative terminal theme. Case sheets show Given / When / Then, skills expose their evidence, and the command console is optional.

## Tokens

- Paper: `#F3EEE3`
- Surface: `#FBF8F1`
- Ink: `#14161A`
- Muted ink: `#5B606A`
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
| Hero | 44 to 68 px | 400 | 0.99 | -0.045em |
| Section heading | 34 to 48 px | 400 | 1.08 | -0.045em |
| Project heading | 29 to 32 px | 400 | 1.1 | -0.045em |
| Lead | 18 to 20 px | 400 | 1.6 | 0 |
| Body | 17 to 18 px | 400 | 1.6 | 0 |
| UI | 13 to 15 px | 500 | 1.4 | 0 |
| Mono label | 11 to 13 px | 400 | 1.6 | 0.04em |

Instrument Serif, IBM Plex Sans and JetBrains Mono are loaded from one Google Fonts stylesheet request with preconnect hints and `display=swap`. System fallbacks remain in place if the font request fails. The site loads no third-party scripts.

## Spacing and interaction

Use 8 px increments, with 4 px for small label spacing. Desktop rail is 240 px; reading text stays around 68 characters; controls target at least 44 px. All interactive features must be keyboard reachable, have visible focus, and respect reduced motion.

## Contrast note

Normal text must meet 4.5:1 and large text 3:1. Ink on paper, ink on surface, muted ink on paper, and terminal text on terminal pass AA by calculation. Vermilion is not used as normal-size text on light paper because it misses 4.5:1; a darker text variant is used for small links. Re-check every implemented pair with a contrast tool before release.
