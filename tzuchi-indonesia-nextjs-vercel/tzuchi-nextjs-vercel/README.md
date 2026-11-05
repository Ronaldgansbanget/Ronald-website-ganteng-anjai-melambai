# Yayasan Buddha Tzu Chi Indonesia | Website Next.js

Responsive single-page marketing website with green and white visual identity, large editorial typography, local images, a human-centered narrative, and links to official Tzu Chi pages.

## Stack

- Next.js 15, App Router
- React 19 and TypeScript
- Plain CSS, no Tailwind configuration required
- Local images under `public/images`
- Ready for Vercel's automatic Next.js framework detection

## Run on your computer

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Check before deployment:

```bash
npm run verify
```

This runs a source audit, TypeScript typecheck, and a Next.js production build. To start the built site locally, run `npm start`.

## Upload to GitHub and publish with Vercel

1. Extract the ZIP file.
2. Create a new empty GitHub repository, e.g. `tzuchi-indonesia-web`.
3. Upload every project file and folder, including the hidden `.github` and `.gitignore` files. Put `package.json` in the repository root, not inside another folder.
4. Open [vercel.com/new](https://vercel.com/new), choose **Import Git Repository**, and select the repository.
5. The framework should be detected as **Next.js**. Leave **Root Directory** as `./` and keep the default Build Command (`next build`). No environment variables are required.
6. Click **Deploy**. Vercel will provide a public URL ending in `vercel.app`. Add a custom domain through **Project > Settings > Domains** if needed.

The included GitHub Actions workflow also runs source checks, typechecking and a production build on every push to `main` or `master`.

### Use Git command line instead of GitHub upload

Run from the extracted project directory (replace the placeholder URL with your GitHub repo):

```bash
git init
git add .
git commit -m "Initial Tzu Chi website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/tzuchi-indonesia-web.git
git push -u origin main
```

## Files

```text
app/
  globals.css            Global theme and responsive styles
  layout.tsx             Document layout and SEO metadata
  page.tsx               Complete 11-section landing page
public/
  favicon.svg            Concept-only leaf favicon
  images/                Six bundled illustrative photos
scripts/
  check.mjs              Local structural audit
.github/workflows/
  ci.yml                 GitHub Actions verification pipeline
next.config.mjs          Next.js configuration
package.json             npm dependencies and build scripts
tsconfig.json            TypeScript settings
AUDIT.md                 Design and source audit results
```

## Important before official public release

- This is a **concept website**, not the foundation's official site. Replace the typographic brand and leaf icon with an approved Tzu Chi logo and follow brand permissions.
- Generated images are conceptual illustrations, not documentary photos from real events. Use approved authentic photography for the final official launch.
- All donation and volunteering links point to `tzuchi.or.id`; this website does **not** collect donations or personal information itself.
- Verify impact numbers and copy against the latest organizational records before publication.
- `app/layout.tsx` intentionally sets `robots: { index: false, follow: false }` for this concept preview. Once authorized for public indexing, change those values to `true`.
- Fonts use a Google Fonts CSS import. If your organization requires fully local assets, replace the font import with licensed local webfonts or system fonts.

### Troubleshooting

- If Vercel asks for a root directory, make sure `package.json` sits at the top level of the GitHub repository.
- If npm install fails due to network restrictions, retry on a normal internet connection or inspect the logs on Vercel's deployment page.
- If an image is missing, make sure `public/images` was committed to GitHub. File paths are case sensitive on Vercel.
- No `.env` file or external API credentials are required.

## Sources for organizational links

- https://www.tzuchi.or.id/
- https://www.tzuchi.or.id/donasi
- https://www.tzuchi.or.id/form-relawan
- https://www.tzuchi.or.id/bedah-rumah
- https://www.tzuchi.or.id/tentang-kami/tentang-tzu-chi/1
