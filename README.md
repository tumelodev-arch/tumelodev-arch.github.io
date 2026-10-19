# Tumelo Junior Phale — Software Engineering Portfolio

A responsive, multi-page portfolio built with HTML, CSS, and vanilla JavaScript. No framework, dependency installation, build step, or Docker is required.

**Live website:** https://tumelodev-arch.github.io/

## Portfolio goals

The site positions me as an early-career full-stack application engineer with professional experience across C#/.NET, Angular/TypeScript, validation, testing, defect investigation, and delivery workflows—while clearly labelling cloud, security, and AI topics that remain in development.

It distinguishes:
- **Professional application:** skills used in product engineering and delivery.
- **Practical exposure:** guided exercises, workshops, or challenge work.
- **Currently developing:** areas where I am building independent, reproducible evidence.
- **Planned concept:** future projects that have not been represented as completed work.

Employer examples are generalized to protect customer and company information. Never add internal code, customer data, confidential business rules, private pipeline details, or proprietary screenshots to the public site.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Professional introduction, first-year skill growth, technology stack with icon/monogram tiles, engineering stories, and next steps |
| `work.html` | Generalized case studies, work filters, cloud/AI/security learning, and planned personal projects |
| `about.html` | Technical capability map, skill context, engineering approach, growth areas, and education |
| `contact.html` | Email, GitHub, LinkedIn, and location |
| `cv.html` | Portfolio CV summary, original PDF download, and print option |

## Interactions and accessibility

- Work can be filtered by professional experience, learning, or planned concepts.
- Filter controls expose `aria-pressed` and update a polite live status message.
- Pages include a skip link, one primary page heading, semantic sections, visible keyboard focus, and responsive layouts.
- Motion is limited to small hover transitions and respects reduced-motion settings.
- The page year is populated from the browser's current date.
- The CV page supports browser printing. The PDF in `assets/tumelo-phale-cv.pdf` remains a separate file and should be checked whenever CV content changes.

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a modern browser.
3. Navigate through each page and test the Work filters, navigation, CV PDF link, and print behavior.

No package installation or build command is required.

## Manual review checklist

- Review all five pages at desktop and mobile widths.
- Check navigation, anchor links, CV download, and print layout.
- Test each Work filter and confirm the status announcement updates.
- Use keyboard navigation and check visible focus.
- Check content accuracy, dates, technology labels, and current links.
- Ensure no internal or employer-restricted information has been added.
- Keep professional experience distinct from practical exposure and planned concepts.
- Before publishing, confirm the HTML CV summary and original PDF are aligned.

This is a manual review checklist, not a claim that an automated browser test suite is configured.

## Copyright and public sharing

Original written content and the site-specific design are maintained for this portfolio. Brand and technology names are used descriptively to identify tools and experience. Do not assume that employer material, third-party logos, screenshots, or other assets are free to reproduce: use assets with appropriate rights and keep employer-confidential content private.

The footer uses a dynamic year and a copyright notice for this personal portfolio. This notice does not assert ownership over third-party trademarks or the named technologies.\n\nTechnology marks shown in the stack use locally bundled Devicon SVG assets under the MIT License. The applicable notice is preserved in `assets/icons/LICENSE-Devicon.txt`; technology trademarks remain the property of their respective owners.

## Deployment and review

GitHub Pages publishes from the repository root on `main`: https://tumelodev-arch.github.io/

The `portfolio-readme-review` branch is a review branch only. Do not merge or publish its changes until they have been visually reviewed and explicitly approved.
