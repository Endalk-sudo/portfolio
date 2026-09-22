# dev@dev-box — portfolio

Terminal-themed personal portfolio. Zero frameworks, zero build steps.

## View locally

```sh
python3 -m http.server
```

Then open http://localhost:8000

Deep links work: `/#about`, `/#projects`, `/#stack`, `/#contact`.

## Edit content

All editable content lives in `config.js` — no HTML changes needed.

- **Links / info:** `profile` (email, GitHub, LinkedIn).
- **Education / skills / availability:** `profile.education`, `profile.skills`,
  `profile.availability`, `profile.heroMeta`, `profile.location` — these drive
  the hero, About, `whoami` and `neofetch` sections. Change once, updated everywhere.
- **Projects:** copy a `{ ... }` block inside `projects`, paste at the top,
  change the `slug` (unique, lowercase, no spaces). Leave `url`/`repo`
  as `""` to hide that button. Terminal commands (`open <slug>`,
  `ls projects/`) pick it up automatically.
- **Stack section:** `stackToml` string.
- **Analytics:** set `profile.analytics` to your Cloudflare Web Analytics
  beacon token to enable it (empty string = off).

Save + refresh. Config mistakes show as warnings in the terminal after boot
instead of breaking the page.

## Deploy

Upload **all** of these together to any static host
(Vercel, Render, Cloudflare, GitHub Pages) — no build step:

```
index.html  config.js  Endalkachew_Yaregal_CV.pdf
og.png  apple-touch-icon.png  robots.txt  sitemap.xml
```

If you deploy on a different domain than `portfolio.endalkachewyaregal747.workers.dev`,
update the absolute URLs in: `og:image`/`twitter:image` (index.html `<head>`,
JSON-LD `url`), and the `Sitemap:` line in `robots.txt` + `<loc>` in `sitemap.xml`.

## Files

- `index.html` — page (don't edit data inside it)
- `config.js` — edit this
- `Endalkachew_Yaregal_CV.pdf` — your CV; keep it at the repo root (same name as `profile.cv` in config.js), the ↓ CV buttons and the `cv` terminal command open it in a new tab
- `og.png` — link-preview card (1200×630)
- `apple-touch-icon.png` — iOS home-screen icon (180×180)
- `robots.txt` / `sitemap.xml` — crawlers + sitemap URL
