/* =====================================================================
   SITE CONFIG — edit this file to update the portfolio.
   No HTML/CSS/JS changes needed. Just save + refresh.

    HOW TO ADD A PROJECT:
    1. Copy one { ... } block inside `projects: [...]`
    2. Paste it at the TOP of the list (newest first)
    3. Change slug (unique, lowercase, no spaces), name, year, desc, etc.
    4. LINKS: set `url` to the live demo, `repo` to the source code.
       Leave either as "" to hide that button. If the work is private,
       leave both "" and set `sourceNote` (e.g. 'private — ask me').
    5. Save + refresh. Terminal commands (`open <slug>`, `ls projects/`)
       pick it up automatically. `open <slug>` also prints the links.

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
            slug: 'feedwise',
            name: 'FeedWise',
            year: '2025',
            status: 'stable',
            blurb: 'AI-powered SaaS for businesses to collect customer feedback via QR codes and turn it into actionable insights in real-time.',
            outcome:
                'Enables small-to-medium businesses to instantly collect, analyze, and act on customer feedback through Gemini AI sentiment analysis, priority scoring, and team collaboration—reducing response time from days to minutes.',
            desc: 'Full-stack SaaS platform combining QR-code-based feedback collection with real-time AI analysis (sentiment, category, urgency, fixable problems, retention risk). Features include professional analytics dashboards, Stripe subscriptions (Basic/Pro tiers), team management with role-based access, intelligent admin chat for querying feedback, email alerts, and S3 logo storage. Designed for enterprise reliability with BullMQ job queues, Redis caching, PostgreSQL persistence, and Docker-based deployment.',
            stack: [
                'typescript',
                'react',
                'vite',
                'node',
                'express',
                'postgres',
                'prisma',
                'better-auth',
                'gemini',
                'stripe',
                'bullmq',
                'redis',
                's3',
                'tailwind',
                'tanstack-router',
                'tanstack-query',
                'zustand',
                'zod',
            ],
            url: '',
            repo: 'https://github.com/Endalk-sudo/Feedwise',
            sourceNote: 'Open source — available on GitHub',
            highlights: [
                'Monorepo structure (client/server/shared) with Zod schema contracts as single source of truth',
                'Gemini Flash AI analysis: sentiment, category, urgency, satisfaction (1–5), fixable-problem detection, retention-risk signals',
                'Real-time QR code generation and regeneration with S3 upload',
                'Stripe SaaS billing with Basic/Pro tiers, webhook sync, billing portal',
                'BullMQ job queue for insight generation (2AM daily for Pro orgs), batch analysis, urgency alerts, and 7AM digest emails',
                'Team collaboration: owner/admin/member roles with invite-by-email UX',
                'Intelligent admin AI chat for natural-language feedback queries',
                'Rate limiting (Redis) + SMTP email alerts (high-urgency + daily digest)',
                'TypeScript strict mode across both packages; Vite (client) + tsx watch (server)',
                'Docker Compose (dev + prod) + Render Blueprint support (Neon Postgres)',
            ],
            gitlog: [
                'Initial monorepo setup with React 19 + Express 5 + Prisma',
                'Gemini 3.5 integration with sentiment/category/urgency analysis',
                'Stripe payment flow and subscription sync',
                'QR code generation and collection page',
                'BullMQ job queue for insights and email digests',
                'Team management UI and role-based access',
                'Admin AI chat feature',
                'Docker Compose dev + prod, Render Blueprint deployment',
            ],
        },
        {
            slug: 'full-time-capsule',
            name: 'Full Stack Time Capsule',
            year: '2026',
            status: 'stable',
            blurb: 'Secure automated platform for creating digital time capsules with scheduled delivery',
            outcome:
                'Users can upload files and messages to be delivered to recipients at a specific future date through an automated, containerized system',
            desc: 'A complete full-stack application with microservices architecture enabling users to create digital "time capsules" — encrypted message and file packages scheduled for future delivery. Built with Docker Compose orchestration, the platform handles authentication, S3-compatible storage, background job processing, and automated email notifications.',
            stack: [
                'typescript',
                'react',
                'node',
                'express',
                'postgres',
                'redis',
                'docker',
                'prisma',
                'bullmq',
                'nginx',
                's3',
                'tailwind',
                'zustand',
                'tanstack-query',
            ],
            url: '',
            repo: 'https://github.com/Endalk-sudo/full-time-capsule',
            sourceNote: 'Open source — available on GitHub',
            highlights: [
                'Microservices architecture with Docker Compose orchestration',
                'JWT-based authentication with bcrypt password hashing',
                'Background job queue system (BullMQ + Redis) for scheduled capsule delivery',
                'S3-compatible file storage with presigned URLs',
                'Automated email notifications (Nodemailer/Resend)',
                'Full type safety with TypeScript across frontend and backend',
                'Modern React 19 frontend with Vite, Tailwind CSS, Radix UI components',
                'Prisma ORM with PostgreSQL database, auto-migrations on startup',
            ],
            gitlog: [
                '6971306  fix create capsule functionality',
                'b93ad43  fix redis connection',
                '4f5eefd  remove generated prisma client and fix db url in the backend',
                'a958d60  add readme file',
                '797022e  implement docker and docker compose',
                'a6d7ea0  fix s3upload issues in the frontend',
                '6eeaa0f  everythings implemented correctly and it is solid',
            ],
        },
        {
            slug: 'a-kiyon',
            name: 'A-kiyon FCMS',
            year: '2026',
            status: 'live',
            blurb: 'Complete fitness center management with member tracking, subscriptions, payments & analytics',
            outcome:
                'Enables fitness centers to manage members, subscriptions, and revenue with Ethiopian calendar support and role-based access control',
            desc: 'A Next.js-based fitness center management system built for the Ethiopian market. Tracks members with photos and health stats, manages subscriptions with auto-calculated renewal, records payments in multiple currencies, and provides revenue analytics. Features role-based access (Owner/Manager/Reader), Ethiopian calendar integration throughout, dark mode, Firebase Auth with phone+password login, and image uploads to Backblaze B2.',
            stack: [
                'typescript',
                'next.js',
                'firebase',
                'firestore',
                'zustand',
                'zod',
                'tailwind',
                'shadcn',
                'recharts',
                'sharp',
                'backblaze-b2',
                'vercel',
            ],
            url: 'https://a-kiyon.vercel.app',
            repo: 'https://github.com/Endalk-sudo/a-kiyon',
            sourceNote: '',
            highlights: [
                'Member management with photo uploads (WebP via sharp)',
                'Subscription & renewal tracking with Ethiopian calendar dates',
                'Payment recording with cash/bank/mobile-money support + receipt printing',
                'Soft-delete members & permanent service deletion with subscription rollback',
                'Role-based access: Owner (full), Manager (no payment void), Reader (view-only)',
                'Revenue analytics with monthly trends & expiry alerts',
                'Firebase Firestore with batch operations (400-write chunking)',
                'Phone+password authentication (synthetic email mapping for Ethiopia)',
                'CSV exports & dark mode toggle',
                'Storage monitoring with Firestore doc/file usage tracking',
            ],
            gitlog: ['6947a19  Latest commit'],
        },
        {
            slug: 'sub-gen-tg',
            name: 'Amharic Auto-Caption Generator',
            year: '2026',
            status: 'stable',
            blurb: 'Telegram bot generating .srt subtitle files for Amharic-English (Amharlish) speech from audio',
            outcome:
                'Enables Amharic speakers to quickly generate accurate bilingual subtitles from audio files via Telegram, with a freemium model supporting 5 free trials and premium subscriptions',
            desc: 'A lightweight, production-ready Telegram bot that transcribes mixed Amharic-English speech into standard .srt subtitle files. Uses Google Gemini Flash for AI transcription, PostgreSQL (via Supabase) for a DB-backed job queue with atomic processing, and a dual-worker architecture with auto-retry logic. Deployed on Railway with 500MB RAM constraint. Supports two caption styles (short/long) and integrates Ethiopian CBE bank payment verification for premium upgrades (600 ETB/month).',
            stack: [
                'python',
                'telegram-bot',
                'gemini',
                'supabase',
                'pydantic',
                'httpx',
                'railway',
                'cbe-pay',
            ],
            url: '',
            repo: '',
            sourceNote: 'private — ask me',
            highlights: [
                'DB-backed job queue with atomic claim via SKIP LOCKED (2 concurrent workers)',
                'Auto-retry up to 3x with exponential backoff for transient failures',
                'Bilingual Amharic-English prompt engineering for Gemini API',
                'Ethiopian CBE payment integration with transaction replay-attack prevention',
                'Container restart resilience — stuck jobs reclaimed on boot',
                'No FFmpeg dependency — Gemini handles native audio formats',
                '97 test suite with full handler, schema, and worker lifecycle coverage',
            ],
            gitlog: [
                'ccb7294  fix issues in image payment verification',
                '6fd944b  add payer name and payer account in db',
                '72a4c97  make upgrade error messages user-friendly',
                'fe7b76d  fix payment verification bugs and errors',
                'e3e9555  make 5 free audio transcriptions, up to 5 minutes each',
            ],
        },

        {
            slug: 'captionforge',
            name: 'CaptionForge',
            year: '2026',
            status: 'stable',
            blurb: 'Browser-first AI caption generator — extract audio, transcribe via Gemini, edit on waveform timeline, burn video with WebCodecs, export SRT/ASS',
            outcome:
                'Users upload videos and receive high-quality auto-generated captions with full editing control and multiple export formats — all processed locally in the browser for privacy',
            desc: 'A complete browser-native video captioning studio. Upload videos (MP4/WebM/MOV/AVI), extract audio locally at 16 kHz mono WAV, send only the compact audio to Gemini for Amharic-focused transcription, edit timing on an interactive wavesurfer.js timeline, style captions from 6+ presets (CapCut Classic, TikTok Bold, YouTube Box, Neon, Pink, Minimal Dark), preview live with CSS overlay, and burn subtitles with hardware-accelerated WebCodecs. Export burned MP4, SRT, or ASS files. Auto-saves to localStorage.',
            stack: [
                'next.js',
                'react',
                'typescript',
                'tailwind',
                'gemini',
                'wavesurfer.js',
                'webcodecs',
                'mp4-muxer',
                'mp4box',
                'zustand',
                'web-audio',
                'offlineaudiocontext',
            ],
            url: '', // No public deployment visible in repo
            repo: '',
            sourceNote: 'private — ask me', // Private repository
            highlights: [
                'Client-side audio extraction to 16 kHz mono WAV — only audio sent to API, video never leaves device',
                'Gemini transcription with Amharic-focused prompts, structured JSON schema, and automatic model fallback on quota errors',
                'Waveform timeline with drag/resize regions, live CSS overlay preview synced to playback, click-and-drag caption positioning in video',
                '6+ pre-built caption style presets fully editable (position, colors, outline, background, padding, border radius)',
                'WebCodecs hardware-accelerated rendering: VideoDecoder → canvas composite → VideoEncoder + mp4-muxer for MP4 export',
                'SRT and ASS subtitle file export alongside burned video',
                'Keyboard shortcuts (space play/pause, J/K/L scrub, Ctrl+Z undo, Ctrl+Enter add cue), undo/redo system',
                'Auto-save to localStorage with session restoration, proper Geʽez script rendering via Noto Sans Ethiopic',
            ],
            gitlog: [
                '8b62e17  add caption length parameter',
                '7341084  improve details',
                '4f9aebb  Update model fallback order in README',
                '375e0ed  export pipeline fix',
                'e03bc10  fix burning process animation and ui',
                '1891fc8  fix transcribing process animation and ui',
            ],
        },
        {
            slug: 'uniexam-hub',
            name: 'UniExam Hub',
            year: '2025',
            status: 'live',
            blurb: 'Mobile-first exam prep platform for Ethiopian university students with interactive questions, AI tutoring, and TeleBirr payment integration',
            outcome:
                'Students access past exam papers with instant feedback, detailed explanations, and personalized AI tutoring — transforming static PDFs into interactive learning experiences',
            desc: "A collaborative exam preparation platform built with a friend (I'm a contributor on their repo) for Ethiopian universities. Features 7 multi-type question formats (MCQ, True/False, Matching, Fill Blank, Short Answer, Essay), interactive practice modes with visual feedback, admin CMS for exam management, secure payment verification via TeleBirr, progress tracking, dark mode, and offline support roadmap. Deployed with Docker/Vercel.",
            stack: [
                'typescript',
                'react-router',
                'react-hook-form',
                'tailwind',
                'postgres',
                'prisma',
                'zustand',
                'tanstack-query',
                'gemini',
                's3',
                'node',
                'bcrypt',
                'zod',
            ],
            url: 'https://atirara.vercel.app/',
            repo: '',
            sourceNote: "collaborative — built with a friend, I'm a contributor",
            highlights: [
                '7 question types with type-specific UX (SVG matching lines, progress tracking)',
                'Manual TeleBirr payment verification with auto-approve toggle and transaction validation',
                'Dual-mode exam engine: Practice (reveal answers) + Test (track progress, save locally)',
                'Admin CMS with JSON import, sheet CRUD, user management, payment verification dashboard',
                'Free trial system: 5-question preview for unauthenticated users',
                'DB-backed sessions with CSRF protection, bcrypt password hashing, rate limiting',
                'Accessibility & 3G-optimized design with dark mode and motion animations',
            ],
            gitlog: [
                '53d67f3  fix: Vercel deployment auth - session cookie and Prisma config',
                'c3fd311  fix: major bug fixes, modern UI redesign, and infrastructure updates',
                '00f3ef2  remove email verification and password reset features',
                '95f8be2  add progress save in local storage',
                '81a602  hide test sync menu',
                '7a9671  fix hard coded json import override field',
            ],
        },
        {
            slug: 'teacher-evaluation',
            name: 'Teacher Evaluation System',
            year: '2026',
            status: 'archived',
            blurb: 'Secure, anonymous platform for students to evaluate teachers with real-time analytics',
            outcome:
                'Replaces outdated paper-based evaluations with a modern, data-driven system that empowers institutions to collect anonymous feedback and help teachers improve their teaching methods',
            desc: 'A comprehensive web application for managing academic teacher evaluations. The system streamlines the entire evaluation lifecycle: admins set up evaluation periods and manage users/classes, students securely submit anonymous ratings and feedback on their teachers, and teachers receive detailed reports with visual analytics and student comments. Built with PHP backend, responsive CSS design, and role-based access control.',
            stack: ['php', 'mysql', 'javascript', 'css', 'html5'],
            url: '', // No deployed URL currently
            repo: 'https://github.com/Endalk-sudo/teacher-evaluation',
            sourceNote: 'Open source — available on GitHub',
            highlights: [
                'Role-based access control (Student, Teacher, Admin dashboards)',
                'Anonymous evaluation submission with integrity protection',
                'Real-time analytics and visual reports for teachers',
                'Mobile-responsive design for accessibility',
                'Dynamic evaluation period management',
                'User authentication with session control',
                'Secure password hashing and input validation',
            ],
            gitlog: [
                'e630dde  add something',
                '5048d51  improve auth pages',
                'b49a29f  add js validation',
                '9533319  almost all done',
                'ab284ba  fix textarea style',
            ],
        },

        {
            slug: 'keyforge',
            name: 'KeyForge',
            year: '2026',
            status: 'live',
            blurb: 'Node-locked licensing server with Ed25519 tokens + admin portal',
            outcome: 'Ship piracy-resistant desktop software with online activation and offline verification',
            desc: 'KeyForge validates product keys, binds hardware fingerprints, and issues Ed25519-signed license tokens. Includes verify API, air-gapped .lic generation, device revocation, token inspector, audit trail, and Vercel + Postgres serverless deploy.',
            stack: ['typescript', 'next.js', 'node', 'postgres', 'prisma', 'tailwind', 'vercel', 'neon'],
            url: 'https://key-forge-zeta.vercel.app/',
            repo: '',
            sourceNote: 'private — ask me',
            highlights: [
                'Ed25519-signed licenses with offline verify + zero-dep Node reference',
                'Atomic seat enforcement + DB-backed 5/min rate limiting',
                'Admin portal: key gen, air-gapped .lic, revocation, audit trail',
            ],
            gitlog: [
                '7041151  add a readme file',
                '3a38695  feat: add /api/v1/verify revocation check + integration test suite',
            ],
        },
        {
            slug: 'portfolio',
            name: 'Portfolio',
            year: '2026',
            status: 'live',
            blurb: 'this site — terminal as portfolio',
            outcome: 'Recruiter-readable in 10s, terminal-native throughout',
            desc: 'This site: a terminal-themed portfolio with zero frameworks and zero build steps. Menu bar, pager, and draggable tty sheet; all content in one config.js with fail-soft validation.',
            stack: ['javascript', 'html', 'css', 'cloudflare'],
            url: 'https://portfolio.endalkachewyaregal747.workers.dev/',
            repo: 'https://github.com/Endalk-sudo/portfolio',
            sourceNote: 'Open source — available on GitHub',
            highlights: ['one config file drives every section', 'works on file:// and any static host'],
            gitlog: ['72a959b  chore: portfolio.html → index.html + config.js'],
        },
        /* --- TEMPLATE: copy for a new project ---
    { slug:'my-new-app', name:'My New App', year:'2026', status:'live',
      blurb:'one-line card text',
      outcome:'Outcome first — what it does for users',
      desc:'Longer description for the expanded view.',
      stack:['typescript','node','postgres'],
      url:'https://my-app.example.com', repo:'https://github.com/me/my-app',
      sourceNote:'', // or e.g. 'private — ask me' when url+repo are ""
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
frameworks = ["next.js", "react", "react-router"]
state      = ["zustand", "tanstack query"]
styling    = "tailwind"
tooling    = "vite"
[backend]
runtime    = "node"
apis       = ["rest", "websockets"]
jobs       = ["cron", "job queues", "workers"]
[data]
relational = "postgres"
documents  = "firestore"
cache_queues = "redis"
orms       = ["prisma"]
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
