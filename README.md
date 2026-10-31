# dev@dev-box — portfolio

Terminal-themed personal portfolio. Zero frameworks, zero build steps.

## v1.4 — Full responsiveness pass

Tested across every breakpoint from Galaxy Fold (280px) to 4K desktop.
Verified against iOS Safari, Chrome Android, Firefox, and Edge.

**Viewport**
- Switched from `100vh` to `100dvh` (with `100vh` fallback) so the
  mobile URL bar never overlaps or clips the terminal.
- Added `viewport-fit=cover` to the viewport meta so `env(safe-area-inset-*)`
  works on notched iPhones.
- Body `overscroll-behavior: none` prevents the "bounce" past the terminal.

**iOS auto-zoom fix**
- `#term-input` is 16px on mobile — prevents Safari from zooming in on focus
  (any input under 16px triggers a full-page zoom).

**Touch targets**
- `.qa-btn` chips → 34px tall on mobile (was ~22px).
- `.proj-link` buttons → 40px tall (was ~28px).
- `.copy-btn` and header CV button → 34px tall.
- `.help-cmd` items get 8px padding top/bottom for easier tapping.

**Behaviour**
- Auto-focus and click-to-focus are disabled on `(pointer: coarse)` devices —
  the on-screen keyboard no longer pops up when you scroll the terminal.
  Tap the input directly to bring up the keyboard.

**Breakpoints**
- **≤900px (tablet)** — tighter padding, still bordered window.
- **≤640px (mobile)** — full-bleed terminal, larger targets, safe-area insets.
- **≤520px** — spec rows stack the label on its own line.
- **≤380px (small phone)** — hides the "QUICK:" label, shrinks hero/type
  one step, tightens padding.
- **`(max-height: 500px) and (orientation: landscape)`** — compresses
  vertical rhythm, hides header title, keeps the prompt accessible.
- **`(prefers-reduced-motion)`** — all animations/transitions disabled.

**Overflow**
- `.terminal-body` gets `overflow-x: hidden` so nothing bleeds past the
  window edge.
- Long emails, URLs, tags, and user-typed commands wrap cleanly via
  `overflow-wrap` on the relevant elements.
- Grid items get `min-width: 0` so they can shrink properly.

**A11y**
- Focus rings preserved (`:focus-visible`).
- `prefers-reduced-motion` respected globally, not just on the status dot.
- Touch/pointer detection via `matchMedia('(pointer: coarse)')`.

## v1.3 — Contact redesign + consistency pass

- Contact spec sheet matches the `stack` section (one row per contact,
  accent labels, single green primary, accent text links for the rest).
- Removed duplicated availability sentence from the contact intro.
- Copy button has a fixed width so "COPIED" doesn't shift layout.
- Project cards show the year again.
- Hero eyebrow shows `// ADDIS ABABA · ETHIOPIA`.
- Help-menu items are real `<button>`s (keyboard accessible).
- Long emails/URLs wrap on mobile.

## v1.2 — Stack redesign

- Replaced rainbow 6-card grid + redundant TOML block with a clean
  spec-sheet list, ordered by priority (Languages → Backend → Database →
  Frontend → Cloud & Ops → Integrations).
- Removed `stackToml` from `config.js` entirely.
- Added keyboard hint in the footer (`↑↓ history · Tab complete`).
- Added `:focus-visible` rings for keyboard users.

## v1.1 — Font update

- **Space Mono** for accent labels (window title, buttons, section titles,
  tags, status pills) — retro character, readable.
- **JetBrains Mono** for body text — the developer-favorite monospace.

## v1.0 — Initial rebuild

- Fixed prompt at bottom (never scrolls away).
- Clean hero (name → role → tagline → green availability pill).
- Simplified color usage — amber accents, green status, blue GitHub.
- 14–15px body text.

## View locally

```sh
python3 -m http.server
```

Then open http://localhost:8000

Deep links work: `/#about`, `/#projects`, `/#stack`, `/#contact`, `/#cv`.

## Edit content

All editable content lives in `config.js` — no HTML changes needed.

- **Links / info:** `profile` (email, GitHub, LinkedIn).
- **Hero copy:** `profile.tagline`, `profile.availabilityShort` (short pill) /
`profile.availability` (full sentence in `about`).
- **Skills:** `profile.skills`. Each field becomes one row in the `stack`
command. Remove a field (e.g. delete `integrations`) to hide that row.
- **Projects:** copy a `{ ... }` block inside `projects`, paste at the top,
change the `slug` (unique, lowercase, no spaces). Leave `url` / `repo`
as `""` to hide that button. The `year` and `status` fields show on the
card; terminal commands (`open <slug>`, `projects`) pick it up automatically.

Save + refresh.

## Terminal commands

| Command ↕▾ | What it does ↕▾ |
|---|---|
| −`help` | Show all commands |
| `about` / `whoami` | Background, education, availability |
| `projects` / `ls` | All featured projects |
| `open <slug>` | Full project details (e.g. `open feedwise`) |
| `stack` / `skills` | Technical stack list |
| `contact` / `email` | Email, GitHub, LinkedIn, resume |
| `cv` | Open CV in a new tab |
| `clear` | Clear the screen |
⚙

The input supports `↑` / `↓` history and `Tab` completion.

## Deploy

Upload **all** of these together to any static host
(Vercel, Render, Cloudflare, GitHub Pages) — no build step:

```
index.html  config.js  Endalkachew_Yaregal_CV.pdf
og.png  apple-touch-icon.png  robots.txt  sitemap.xml
```

If you deploy on a different domain than `portfolio.endalkachewyaregal747.workers.dev`,
update the absolute URLs in: `og:image` / `twitter:image` (index.html `<head>`,
JSON-LD `url`), and the `Sitemap:` line in `robots.txt` + `<loc>` in `sitemap.xml`.

## Files

- `index.html` — page (all styling + terminal logic live here)
- `config.js` — edit this
- `Endalkachew_Yaregal_CV.pdf` — your CV; keep it at the repo root
- `og.png` — link-preview card (1200×630)
- `apple-touch-icon.png` — iOS home-screen icon (180×180)
- `robots.txt` / `sitemap.xml` — crawlers + sitemap URL

</BDS:create_file>

<BDS:create_file fileName="portfolio/robots.txt">

User-agent: *
Allow: /

Sitemap: https://portfolio.endalkachewyaregal747.workers.dev/sitemap.xml

</BDS:create_file>

<BDS:create_file fileName="portfolio/sitemap.xml">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://portfolio.endalkachewyaregal747.workers.dev/</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>

