# willwang.me — Full Site Build

Build a complete personal website for willwang.me using Astro + Decap CMS, deployed to Cloudflare Pages.

## Site Structure

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro         # Home — 3 section cards linking to /industry, /literature, /reflections
│   │   ├── industry.astro      # Industry analysis articles listing
│   │   ├── literature.astro    # Literature articles listing
│   │   ├── reflections.astro   # Reflections articles listing
│   │   ├── contact.astro       # Contact page
│   │   └── [slug].astro        # Dynamic article page (catch-all for all articles)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout (nav, footer, SEO head)
│   └── content/
│       └── articles/           # Markdown articles (one per file)
│           ├── industry/       # Industry category
│           ├── literature/     # Literature category
│           └── reflections/    # Reflections category
├── public/
│   ├── admin/
│   │   └── index.html          # Decap CMS admin panel
│   └── config.yml              # Decap CMS config
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Design Requirements

**IMPORTANT: READ ALL DESIGN REQUIREMENTS CAREFULLY**

This is an ENGLISH language website. All UI text must be in English.

The design must be:
- **Minimal and premium** — think Linear, Stripe, Vercel level of polish
- **Dark theme** — dark background (#0a0a0f or similar very dark), white/light text
- **High-end feel** — large typography, generous whitespace, subtle animations
- **Modern** — clean sans-serif fonts (Inter), smooth transitions
- **Sophisticated** — muted accent colors (not bright), subtle borders, glass-morphism elements

### Color Palette
- Background: #0a0a0f (very dark, almost black)
- Card background: #12121a (slightly lighter)
- Text primary: #f5f5f7 (warm white)
- Text secondary: #888899 (muted gray)
- Accent: #6c5ce7 or #5b5bd7 (muted purple — not bright, not flashy)
- Border: #1e1e2a
- Hover accent: subtle glow effect on cards

### Home Page (/)
- Clean hero section: name "Will Wang" in large text, one-line tagline below
- Three large cards/panels below, each linking to a section:
  - Industry — icon/chic graphic + brief description
  - Literature — icon/chic graphic + brief description  
  - Reflections — icon/chic graphic + brief description
- Each card should have a subtle hover effect (slight lift, border glow)
- Minimal footer with copyright

### Category Pages (/industry, /literature, /reflections)
- Page title at top
- List of article cards, each showing: title, date, excerpt (first ~100 chars)
- Clicking a card goes to /[slug]
- Articles sorted by date (newest first)
- If no articles yet, show a subtle empty state: "Coming soon..."

### Article Page (/[slug])
- Clean article layout
- Title, date, category badge at top
- Content with proper typography (headings, paragraphs, code blocks)
- Back link to category page

### Contact Page (/contact)
- Simple: name "Will Wang" + email (will@willwang.me or similar)
- Minimal, elegant
- No form — just a mailto link styled nicely

### Admin (/admin)
- Decap CMS login via GitHub
- Collections:
  - Industry articles (folder: src/content/articles/industry)
  - Literature articles (folder: src/content/articles/literature)
  - Reflections articles (folder: src/content/articles/reflections)
- Each article has: title, date, category (auto), body (markdown), optional excerpt
- Preview styles matching the site design

### Navigation
- Fixed top nav bar (glass-morphism: semi-transparent background with blur)
- Logo/name "Will Wang" on left
- Links: Industry | Literature | Reflections | Contact
- Active page highlighted
- Mobile: hamburger menu

### Typography
- Font: Inter (from Google Fonts, or self-hosted subset)
- Headings: large, bold, heavy weight
- Body: comfortable reading size (16-18px), 1.7 line height
- Article body: serif font (or keep Inter but larger) for reading comfort

### Animations & Interactions
- Subtle fade-in on page load
- Card hover: scale(1.02) + border glow
- Nav link hover: color transition
- Smooth scroll behavior
- Nothing flashy, nothing that distracts

## Technical Requirements

### Framework
- Astro 5.x (latest stable)
- TypeScript (strict mode)
- Content collections for article management

### Decap CMS
- Deployed at /admin/index.html
- GitHub OAuth configured with your repo (dcdydzdf/willwang.me)
- Collections use folder: `src/content/articles/[category]`
- Preview templates that match the site design

### Cloudflare Pages Deployment
- Add a `_headers` file in public/ for proper content-type headers
- Add a `_redirects` file: `/admin/* /admin/index.html 200` (SPA fallback for admin)
- Add `staticfile: wrangler.toml` is NOT needed — Cloudflare Pages auto-detects Astro
- The build command should be: `npm run build`
- Output directory: `dist`
- NO `cloudflare` adapter — just plain static output

### Build Process
```bash
npm create astro@latest . -- --template basics --typescript strict --no-git
npm install decap-cms
# Then set up all files as described
```

Actually — SKIP `npm create astro`. Just set up the project manually with package.json and install deps. This avoids interactive prompts.

### Files I Need You to Create

1. `package.json` — with astro, decap-cms, typescript deps
2. `astro.config.mjs` — minimal config, no integrations needed
3. `tsconfig.json` — strict mode
4. `src/layouts/BaseLayout.astro` — main layout
5. `src/pages/index.astro` — home page with 3 cards
6. `src/pages/industry.astro` — industry articles listing
7. `src/pages/literature.astro` — literature articles listing
8. `src/pages/reflections.astro` — reflections articles listing
9. `src/pages/contact.astro` — contact page
10. `src/pages/[...slug].astro` — dynamic article page
11. `src/content/config.ts` — content collection schema
12. `public/admin/index.html` — Decap CMS
13. `public/admin/config.yml` — CMS collections config
14. `public/_headers` — Cloudflare headers
15. `public/_redirects` — Cloudflare redirects
16. `src/styles/global.css` — global styles

## Workflow

1. Set up the project in /opt/hermes/workspace/willwang.me
2. Create all files
3. Run `npm install`
4. Run `npm run build` — must succeed with zero errors
5. Run `npm run preview` briefly to verify it starts
6. Commit all changes and push to GitHub

## Quality Checklist (verify each before committing)
- [ ] `npm install` completes without errors
- [ ] `npm run build` completes without errors
- [ ] Site structure matches the spec
- [ ] All pages render (check dist/ for generated files)
- [ ] Design is dark, premium, minimal
- [ ] Navigation works (3 category links + contact)
- [ ] Responsive (mobile hamburger menu)
- [ ] Admin panel accessible at /admin/index.html
- [ ] Decap CMS config matches GitHub repo
- [ ] All English — no Chinese text in UI

## CRITICAL: English Only
The entire website must be in English. Navigation, labels, descriptions, empty states — everything. The content (articles) will be in various languages but the site UI is English.
