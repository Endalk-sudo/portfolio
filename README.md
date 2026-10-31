# dev@dev-box — Endalkachew Yaregal Portfolio

A minimalist, responsive, retro-futuristic terminal portfolio for Endalkachew Yaregal.
**Zero frameworks. Zero dependencies. Zero build steps.** Pure HTML, CSS, and modern JavaScript.

---

## ⚡ Features

- **Interactive Terminal UI**: Fully functional command-line interface with history (`↑` / `↓`), tab autocompletion, and deep-link routing (`#about`, `#projects`, `#stack`, `#contact`, `#cv`).
- **Zero Build Step**: Pure static files. No Webpack, Vite, or bundle pipeline required — ready to host anywhere instantly.
- **Config-Driven Architecture**: All personal profile data, skills, and projects live in `config.js`.
- **Responsive & Mobile Optimized**:
  - `100dvh` viewport handling with notch and safe-area support (`viewport-fit=cover`).
  - Touch targets sized to 34–40px on mobile.
  - On-screen keyboard scroll protection (no unwanted focus zoom on touch devices).
  - Breakpoints tested from Galaxy Fold (280px) to 4K desktop screens.
- **Full SEO & Social Sharing (OG)**:
  - High-resolution Open Graph image (`og.png`, 1200×630).
  - Apple touch icon (`apple-touch-icon.png`) & PWA web app manifest (`site.webmanifest`).
  - Search engine crawlers ready (`robots.txt` and `sitemap.xml`).
  - Google Schema.org JSON-LD Person metadata.
  - Dedicated custom terminal-themed `404.html` error page with auto-redirect.
- **Accessibility & Performance**:
  - Full keyboard navigation with clear `:focus-visible` rings.
  - Respects `prefers-reduced-motion` globally.
  - 100/100 Lighthouse-ready performance.

---

## 💻 Terminal Commands

| Command | Aliases | Description |
|---|---|---|
| `help` | — | Show the list of all available commands |
| `about` | `whoami` | Personal background, education, and internship availability |
| `projects` | `ls` | Browse all featured engineering projects |
| `open <slug>` | `project <slug>`, `cat <slug>` | View in-depth architecture, description & highlights for a project |
| `stack` | `skills` | Core technical stack grouped by domain |
| `contact` | `email` | Reach out via email, GitHub, LinkedIn, or copy email to clipboard |
| `cv` | — | Open resume (`Endalkachew_Yaregal_CV.pdf`) in a new tab |
| `clear` | — | Clear terminal screen history |

> **Pro Tip**: Use `Tab` for autocompletion (e.g. type `open f` + `Tab` to autocomplete `open feedwise`) and `↑` / `↓` to recall command history.

---

## 🛠️ Local Development

To run and preview locally, you only need any local HTTP server:

```sh
# Using Python:
python3 -m http.server 8000

# Or using Node:
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

Direct section deep links work out of the box:
- `http://localhost:8000/#about`
- `http://localhost:8000/#projects`
- `http://localhost:8000/#stack`
- `http://localhost:8000/#contact`
- `http://localhost:8000/#cv`

---

## ⚙️ Content Configuration

All site content is maintained in `config.js`:

### 1. Personal Profile & Links
```javascript
window.SITE = {
  profile: {
    name: 'Endalkachew Yaregal',
    role: 'software engineering student',
    email: 'endalkachewyaregal747@gmail.com',
    github: 'https://github.com/Endalk-sudo',
    linkedin: 'https://www.linkedin.com/in/endalkachew-yaregal-swe',
    cv: './Endalkachew_Yaregal_CV.pdf',
    location: 'Addis Ababa, Ethiopia',
    tagline: 'I build production full-stack systems — background queues (BullMQ + Redis), AI integrations (Gemini), payment webhooks, and performant APIs.',
    availability: 'Open to a 4-month software engineering internship starting February 2027 (onsite or hybrid)',
    availabilityShort: 'Open to a 4-month internship · Feb 2027',
    education: {
      school: 'Woldia University',
      degree: 'BSc Software Engineering',
      period: 'in progress',
    },
    skills: {
      languages: 'TypeScript, JavaScript, Python, SQL',
      backend: 'Node.js, Express, REST APIs, WebSockets, BullMQ, Redis, Background Workers',
      database: 'PostgreSQL, Prisma ORM, Supabase, Firestore, SQLite',
      frontend: 'React, Next.js, Vite, TanStack Query, Zustand, Tailwind CSS',
      cloud_ops: 'Docker, Vercel, Render, Railway, Cloudflare, CI/CD',
      integrations: 'Gemini AI, Stripe, TeleBirr, CBE, S3, Resend/SMTP',
    },
  },
  ...
};
```

### 2. Adding / Editing Projects
Add or edit project entries in `projects: [...]`:
```javascript
{
  slug: 'feedwise',
  name: 'FeedWise',
  year: '2025',
  status: 'live', // 'live' | 'stable' | 'beta'
  blurb: 'AI-powered SaaS for businesses to collect customer feedback via QR codes.',
  outcome: 'Enables businesses to instantly collect and act on feedback using Gemini Flash AI.',
  desc: 'Full-stack SaaS with QR-code feedback collection, real-time Gemini AI analysis...',
  stack: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'BullMQ', 'Gemini AI'],
  url: 'https://feedwise-nine.vercel.app/', // Live demo URL (leave '' if none)
  repo: 'https://github.com/Endalk-sudo/Feedwise', // GitHub URL (leave '' if private)
  highlights: [
    'Monorepo with Zod schema contracts as single source of truth across client/server',
    'BullMQ job queue for scheduled AI insight generation and email digests',
    'Stripe SaaS billing integration with webhooks and customer portal',
  ],
}
```

---

## 🚀 Deployment & Hosting Guide

Because there are no build steps, deployment is instantaneous. Simply upload or link the repository to your host of choice.

### Deployment Files Checklist
Ensure all these files are pushed to your repository:
```
├── index.html                 # Main single-page application & terminal engine
├── config.js                  # Profile, skills, and projects data source
├── Endalkachew_Yaregal_CV.pdf # Resume PDF
├── 404.html                   # Custom terminal 404 page with auto-redirect
├── og.png                     # Open Graph 1200x630 social card
├── apple-touch-icon.png       # 180x180 iOS home screen icon
├── icon-192.png               # 192x192 PWA icon
├── icon-512.png               # 512x512 PWA icon
├── favicon.svg                # Vector SVG favicon
├── favicon.ico                # Multi-size ICO favicon (16/32/48)
├── site.webmanifest           # Progressive Web App manifest
├── robots.txt                 # Search engine directives & sitemap location
├── sitemap.xml                # SEO sitemap with lastmod date
└── .nojekyll                  # Prevents GitHub Pages from ignoring special files
```

### Hosting Options

#### 1. Cloudflare Pages / Workers (Current Target)
- **Domain**: `https://portfolio.endalkachewyaregal747.workers.dev/`
- Connect your GitHub repo to Cloudflare Pages:
  - Framework preset: `None`
  - Build command: `(leave empty)`
  - Output directory: `/`
- Custom domain: Add your domain in the Cloudflare dashboard under *Custom domains*.

#### 2. Vercel
- Import repository into Vercel.
- Framework preset: `Other`.
- Output directory: `.` (root).
- Deploy.

#### 3. Netlify
- Import repository from Git.
- Build command: `(none)`.
- Publish directory: `.` (root).

#### 4. GitHub Pages
- Go to repository **Settings** → **Pages**.
- Source: Deploy from a branch (`main`, `/ (root)`).
- The included `.nojekyll` file ensures all static assets load properly.

> **Note on Custom Domains**:
> If you deploy on a domain other than `portfolio.endalkachewyaregal747.workers.dev`, update:
> 1. `canonical`, `og:image`, `og:url`, `twitter:image`, and JSON-LD `url` in `index.html`.
> 2. `Sitemap:` URL in `robots.txt`.
> 3. `<loc>` entries in `sitemap.xml`.

---

## 📝 Changelog

### v1.4 — Production Polish & Full Responsiveness Pass
- Comprehensive breakpoint optimization (Galaxy Fold 280px to 4K desktop).
- Mobile keyboard auto-zoom fix (`16px` font on touch devices) and `100dvh` viewport handling.
- Enhanced touch targets (34–40px) and disabled disruptive auto-focus on touch screens.
- Open Graph social share banner (`og.png`), apple touch icon, SVG/ICO favicons, and web manifest.
- Custom terminal `404.html` with graceful redirect and GitHub Pages `.nojekyll` support.
- Fully synchronized metadata and schema across `index.html`, `config.js`, `sitemap.xml`, and `robots.txt`.

### v1.3 — Contact Redesign & Spec Consistency
- Unified contact spec sheet layout matching the technical stack.
- Fixed-width copy button to eliminate layout shifts on copy.
- Accessible `<button>` elements for all command chips.

### v1.2 — Technical Stack Spec Redesign
- Clean, prioritized spec-sheet layout replacing rainbow card grid.
- Keyboard navigation hints (`↑↓` history, `Tab` complete).
- Focus rings for improved accessibility (`:focus-visible`).

### v1.1 — Hybrid Monospace Typography
- Integrated **JetBrains Mono** for clean code/body reading and **Space Mono** for retro terminal headers.

### v1.0 — Initial Terminal Architecture
- Streamlined retro terminal dashboard with persistent prompt and curated engineering showcase.
