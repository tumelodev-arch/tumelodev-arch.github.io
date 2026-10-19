# Tumelo Junior Phale — Portfolio

A multi-page personal portfolio built with HTML, CSS, and vanilla JavaScript. The site has no framework, package dependencies, or build step.

**Live website:** https://tumelodev-arch.github.io/

## Overview

This repository contains my personal portfolio, presenting my background, professional experience, technical interests, and CV.

The project is intentionally lightweight: the website uses standard browser technologies and can be reviewed without installing a JavaScript framework or running a build pipeline. The refreshed design uses a restrained dark palette, clear typography, responsive layouts, and small purposeful interactions rather than animation-heavy effects.

## Site Pages

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio home page |
| `work.html` | Employment background, selected technical work, interactive category filters, and a clearly labelled planned-project roadmap |
| `about.html` | Engineering approach, technical toolkit, strengths, and education |
| `contact.html` | Contact details and profile links |
| `cv.html` | CV page with PDF download and print option |

## Interactions and project status

- The Work page can be filtered by professional work, learning exercises, or planned work.
- Planned concepts use explicit **Planned** labels and expandable next-step notes; they are not presented as finished or in-progress implementations.
- The homepage previews the roadmap and links to the Work page for details.
- Reduced-motion preferences are respected, and the filter controls expose their selected state to assistive technology.

## CV

The downloadable CV is stored at:

`assets/tumelo-phale-cv.pdf`

The CV page links to the PDF and provides a print option. Before publishing changes, check that the PDF is current and that its contents are appropriate for public access.

## Run Locally

1. Open or clone this repository.
2. Open `index.html` in a modern web browser.
3. Navigate through the site pages and check that links, styles, and assets load correctly.

No package installation or build command is required for the current static-site setup.

## Quality Checklist

Before proposing a portfolio update, manually verify:

- All five pages open and navigation works.
- Layouts remain readable at desktop and mobile widths.
- Links to the CV, LinkedIn, GitHub, and other pages work.
- The PDF downloads and the print option behaves as expected.
- Images, fonts, stylesheets, and JavaScript load correctly.
- Keyboard navigation, visible focus, and page headings remain usable.
- Professional claims, dates, links, and CV details are accurate.
- No private, confidential, or employer-restricted information has been added.

These are manual review steps, not a claim that an automated test suite is configured.

## Deployment

The site is published using GitHub Pages from the repository root on the `main` branch:

https://tumelodev-arch.github.io/

The current site uses relative file links and has no build step. Changes should be reviewed on a separate branch before they are merged into `main`, because changes to the published branch may affect the live website.

## Related Resources

- [GitHub profile](https://github.com/tumelodev-arch)
- [Profile README repository](https://github.com/tumelodev-arch/tumelodev-arch)
- [Portfolio source repository](https://github.com/tumelodev-arch/tumelodev-arch.github.io)

Additional planning documents and templates are available in this repository:

- `docs/github-profile-strategy.md` — profile strategy and project roadmap.
- `templates/repository-standard/` — reusable repository standards and workflow templates.

Before changing work-related details, confirm they comply with the employer's public-disclosure policy.

## Project Status

This repository is the source for my personal portfolio website. It presents my background and learning direction; it should not be interpreted as evidence that planned cloud or AI projects are already implemented.

I intend to improve the portfolio as I build and document reproducible engineering projects.
