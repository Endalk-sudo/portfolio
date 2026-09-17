# dev@dev-box — portfolio

Terminal-themed personal portfolio. Zero frameworks, zero build steps.

## View locally

```sh
python3 -m http.server
```

Then open http://localhost:8000

## Edit content

All editable content lives in `config.js` — no HTML changes needed.

- **Links / info:** `profile` (email, GitHub, LinkedIn)
- **Projects:** copy a `{ ... }` block inside `projects`, paste at the top,
  change the `slug` (unique, lowercase, no spaces). Leave `url`/`repo`
  as `""` to hide that button. Terminal commands (`open <slug>`,
  `ls projects/`) pick it up automatically.
- **Stack section:** `stackToml` string.

Save + refresh.

## Deploy

Upload `index.html` + `config.js` + `cv.pdf` together to any static host
(Vercel, Render, Cloudflare, GitHub Pages). No build step.

## Files

- `index.html` — page (don't edit data inside it)
- `config.js` — edit this
- `cv.pdf` — your CV; drop it at the repo root, the ↓ CV buttons and the `cv` terminal command open it in a new tab
