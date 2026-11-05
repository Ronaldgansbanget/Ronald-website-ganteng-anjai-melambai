# Website audits

## Em dash and en dash audit

PASS: The website source uses no U+2014 or U+2013 punctuation.

## Section and layout repetition audit

1. Hero: asymmetrical two-column headline and photographic composition.
2. Mission ticker: horizontal typographic band.
3. About: editorial copy with left-side abstract illustration.
4. Four missions: asymmetrical photographic bento grid.
5. Impact: dark split-panel with stacked statistics.
6. Housing spotlight: portrait image and narrative side panel.
7. Audience pathways: color-coded full-width row list.
8. Stories: three-column editorial article cards.
9. Education and values: image-led split section with dark background.
10. FAQ: two-column text and native expanding details.
11. Closing: gradient CTA panel and decorative orbital artwork.

PASS: At least four layout families are represented; no adjacent sections repeat the same overall composition.

## Hero discipline audit

- PASS: Headline contains three intentional lines.
- PASS: Hero supporting paragraph has 25 words (short and scannable).
- PASS: The primary and secondary hero CTAs appear immediately below the supporting paragraph.
- PASS: Mobile CSS retains a visible hero CTA without requiring hover.

## Pre-flight checklist (Section 14 equivalent)

Note: No separate Section 14 checklist was supplied. The following practical website checks were used instead.

- PASS: Next.js App Router files `app/page.tsx` and `app/layout.tsx` included.
- PASS: `next build` production command configured in `package.json`.
- PASS: Node.js runtime requirement specified (Node 20.9 or newer).
- PASS: Source assets load through bundled `public/images` paths, not random remote image servers.
- PASS: Internal anchor targets and local image references checked by `scripts/check.mjs`.
- PASS: Desktop, tablet, and mobile layouts covered by CSS media queries.
- PASS: Mobile navigation uses native HTML `details` and `summary` elements.
- PASS: FAQ uses native accessible expand/collapse elements.
- PASS: Reduced motion support is implemented in CSS.
- PASS: Primary donation and volunteering buttons lead to the official Tzu Chi website.
- PASS: All used page images have descriptive `alt` text.
- PASS: No simulated checkout or sensitive-information collection.
- PASS: GitHub Actions verification workflow provided.
- UNVERIFIED: Actual production `next build` in this environment because npm registry DNS lookup failed (`EAI_AGAIN`). GitHub Actions and Vercel will run the real build after repository import.

## Release gate

Source and structural checks passed, but a production build has not been executed locally. Treat deployment as unverified until the GitHub Actions and Vercel build complete successfully. The GitHub workflow requires a real build to pass before merging if the repository owner enables branch protection.
