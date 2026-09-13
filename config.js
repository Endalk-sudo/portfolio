/* =====================================================================
   SITE CONFIG — edit this file to update the portfolio.
   No HTML/CSS/JS changes needed. Just save + refresh.

   HOW TO ADD A PROJECT:
   1. Copy one { ... } block inside `projects: [...]`
   2. Paste it at the TOP of the list (newest first)
   3. Change slug (unique, lowercase, no spaces), name, year, desc, etc.
   4. Leave url/repo as "" to hide that button.
   5. Save + refresh. Terminal commands (`open <slug>`, `ls projects/`)
      pick it up automatically.

   HOW TO EDIT LINKS / INFO:
   - Edit `profile` below. Labels are what the contact page shows.
   - Edit `stackToml` to change the ~/.config/stack.toml section.
===================================================================== */
window.SITE = {
    profile: {
        name: 'Endalkachew Yaregal',
        role: 'software engineering student',
        email: 'endalkachewyaregal747@gmail.com',
        github: 'https://github.com/Endalk-sudo',
        githubLabel: 'github.com/Endalk-sudo',
        linkedin: 'https://www.linkedin.com/in/endalk-y-035323258/',
        linkedinLabel: 'linkedin.com/in/endalk-y',
    },

    /* Set url / repo to real links when ready — empty string hides the button */
    projects: [
        {
            slug: 'ledgerflow',
            name: 'Ledgerflow',
            year: '2024',
            status: 'live',
            blurb: 'multi-tenant invoicing SaaS',
            outcome: 'Billing + payments for small businesses — webhooks, isolation, no double-charge',
            desc: 'Multi-tenant invoicing SaaS: retainers, overages, partial payments, dunning. Payment gateway webhooks are idempotent; tenant isolation at the DB layer. Client state with Zustand and TanStack Query.',
            stack: ['next.js', 'typescript', 'zustand', 'tanstack query', 'postgres', 'drizzle', 'payments', 'vercel'],
            url: '',
            repo: '',
            highlights: ['payment gateway + idempotent webhooks', 'row-level tenant isolation'],
            gitlog: ['a3f91c2  fix: race in invoice numbering under load', '1c88e0e  feat: RLS policies from day one'],
        },
        {
            slug: 'relay',
            name: 'Relay',
            year: '2024',
            status: 'live',
            blurb: 'realtime ops room',
            outcome: 'Live incident room — chat, presence, SMS alerts, AI summaries',
            desc: 'Realtime chat, presence, and shared pins for live incidents. WebSocket fan-out with offline catch-up; SMS alerts and AI-assisted summaries in the ops flow. Deployed with a typed server/client boundary.',
            stack: ['tanstack start', 'node', 'mongodb', 'websockets', 'sms', 'ai', 'render'],
            url: '',
            repo: '',
            highlights: ['sub-100ms fan-out under load', 'SMS + AI in the incident loop'],
            gitlog: ['e12b7a0  perf: fan-out 340ms → 88ms', '5c19fd3  feat: catch-up sync protocol v2'],
        },
        {
            slug: 'ferry',
            name: 'Ferry',
            year: '2023',
            status: 'stable',
            blurb: 'safe legacy → postgres',
            outcome: 'Zero-downtime ETL — dry-run, checksums, resumable batches',
            desc: 'Python ETL CLI for moving old databases into Postgres without downtime. Dry-run diffs, per-batch checksums, resumable runs — backend and data work end to end.',
            stack: ['python', 'postgres', 'docker', 'ci/cd'],
            url: '',
            repo: '',
            highlights: ['dry-run before you commit', 'resumable — kill, restart, continue'],
            gitlog: [
                'f70a1e6  feat: resume from last committed batch',
                'b44d219  fix: timezone drift on legacy timestamps',
            ],
        },
        {
            slug: 'papertrail',
            name: 'Papertrail',
            year: '2023',
            status: 'archived',
            blurb: 'php monolith → typescript',
            outcome: 'Route-by-route cutover — zero downtime, zero lost sessions',
            desc: 'Ten-year PHP monolith migrated route-by-route to TypeScript services behind feature flags. Customers never saw a maintenance window.',
            stack: ['php', 'typescript', 'node', 'ci/cd'],
            url: '',
            repo: '',
            highlights: ['strangler-fig migration, no big-bang', 'zero downtime, zero lost sessions'],
            gitlog: [
                'c31f8a2  chore: delete 11k lines of retired PHP',
                '0d774e3  feat: flag-driven proxy, route 1 of 84',
            ],
        },
        {
            slug: 'homelab',
            name: 'Homelab',
            year: '2019 —',
            status: 'live',
            blurb: 'prod-like ops practice',
            outcome: 'Deploy + recover practice — Docker, Vercel, Render, restore drills',
            desc: 'Self-hosted stacks on Fedora plus cloud deploys on Vercel and Render. Docker, nginx, timed restore drills, CI/CD — core DevOps practiced on real apps.',
            stack: ['fedora', 'docker', 'nginx', 'vercel', 'render', 'ci/cd'],
            url: '',
            repo: '',
            highlights: ['restore drills, timed and documented', 'one command from clean metal to full stack'],
            gitlog: [
                'd19a3e1  ops: restore drill — 4m12s, documented',
                '88c0d55  feat: deploys on merge, reverts on red',
            ],
        },
        /* --- TEMPLATE: copy for a new project ---
    { slug:'my-new-app', name:'My New App', year:'2026', status:'live',
      blurb:'one-line card text',
      outcome:'Outcome first — what it does for users',
      desc:'Longer description for the expanded view.',
      stack:['typescript','node','postgres'],
      url:'', repo:'',
      highlights:['highlight one', 'highlight two'],
      gitlog:['abc1234  feat: initial ship'] },
    status must be one of: live | stable | archived
    --- */
    ],

    /* Shown in ~/stack + `cat stack.toml`. Keep TOML format. */
    stackToml: `# ~/.config/stack.toml — tools used on shipped projects
[language]
core    = "typescript"
scripts = "python"
legacy  = "php"
[frontend]
frameworks = ["next.js", "tanstack start", "react"]
state      = ["zustand", "tanstack query"]
styling    = "tailwind"
tooling    = "vite"
[backend]
runtime    = "node"
apis       = ["rest", "websockets"]
jobs       = ["cron", "job queues", "workers"]
[data]
relational = "postgres"
documents  = "mongodb"
cache_queues = "redis"
orms       = ["prisma", "drizzle"]
[integrations]
payments   = true
email      = true
sms        = true
ai         = true
[deploy]
platforms  = ["vercel", "render", "cloudflare"]
containers = "docker"
[ops]
pipelines  = "ci/cd"
core       = "devops fundamentals"
[practice]
builds     = "saas & real-world apps"
strength   = "backend-leaning full-stack"
ai         = "assist, not replace"`,
};
