import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const base = process.cwd();
const page = readFileSync(resolve(base, 'app/page.tsx'), 'utf8');
const layout = readFileSync(resolve(base, 'app/layout.tsx'), 'utf8');
const css = readFileSync(resolve(base, 'app/globals.css'), 'utf8');
const packageJson = JSON.parse(readFileSync(resolve(base, 'package.json'), 'utf8'));
const failures = [];
const assert = (test, label) => {
  console.log(`${test ? 'PASS' : 'FAIL'}: ${label}`);
  if (!test) failures.push(label);
};

const sections = [...page.matchAll(/<section\b/g)].length;
assert(sections >= 8, `At least 8 sections (${sections} found)`);
assert(page.includes('<h1') && page.includes('hero-actions'), 'Hero headline and visible action links present');
assert(page.includes('href="https://www.tzuchi.or.id/donasi"'), 'Donation buttons link to official site');
assert(page.includes('href="https://www.tzuchi.or.id/form-relawan"'), 'Volunteer actions link to official site');
assert(!/[\u2013\u2014]/u.test(page + layout + css), 'No en dash or em dash in website source');
assert(css.includes('@media(max-width:860px)') && css.includes('@media(max-width:620px)'), 'Responsive breakpoints for tablet and mobile');
assert(css.includes('prefers-reduced-motion:reduce'), 'Reduced-motion media query');
assert(packageJson.scripts.build === 'next build', 'Vercel standard Next.js build command');
assert(existsSync(resolve(base, 'app/layout.tsx')) && existsSync(resolve(base, 'next.config.mjs')), 'Next.js App Router files and configuration present');

const localImages = [...page.matchAll(/(?:src|href)="(\/images\/[^\"]+)"/g)].map((match) => match[1]);
const missingImages = [...new Set(localImages)].filter((image) => !existsSync(resolve(base, `public${image}`)));
assert(localImages.length >= 4 && missingImages.length === 0, `Image references exist (${new Set(localImages).size} unique files)`);

const ids = new Set([...page.matchAll(/\sid="([^\"]+)"/g)].map((match) => match[1]));
const sectionAnchors = [...new Set([...page.matchAll(/href="#([^\"]+)"/g)].map((match) => match[1]))];
const missingAnchors = sectionAnchors.filter((anchor) => !ids.has(anchor));
assert(missingAnchors.length === 0, `All on-page navigation targets exist (${sectionAnchors.length} checked)`);

assert(readdirSync(resolve(base, 'public/images')).filter((name) => name.endsWith('.jpg')).length >= 4, 'All bundled images are in public/images');

if (failures.length) {
  console.error(`\n${failures.length} source check(s) failed.`);
  process.exitCode = 1;
} else {
  console.log('\nAll source checks passed. Run npm run verify after installing dependencies for a full production build check.');
}
