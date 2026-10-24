/* =====================================================================
   SITE CONFIG — Clean Minimalist Terminal Portfolio
   Edit this file to update profile, projects, and skills.
===================================================================== */
window.SITE = {
    profile: {
        name: 'Endalkachew Yaregal',
        role: 'software engineering student',
        email: 'endalkachewyaregal747@gmail.com',
        github: 'https://github.com/Endalk-sudo',
        githubLabel: 'github.com/Endalk-sudo',
        linkedin: 'https://www.linkedin.com/in/endalkachew-yaregal-swe',
        linkedinLabel: 'linkedin.com/in/endalkachew-yaregal-swe',
        cv: './Endalkachew_Yaregal_CV.pdf',
        cvLabel: 'Endalkachew_Yaregal_CV.pdf',
        location: 'Addis Ababa, Ethiopia',
        education: {
            school: 'Woldia University',
            degree: 'BSc Software Engineering',
            period: 'in progress',
        },
        availability: 'Open to a 4-month software engineering internship starting February 2027 (onsite or hybrid)',
        skills: {
            languages: 'TypeScript, JavaScript, Python, SQL',
            backend: 'Node.js, Express, REST APIs, WebSockets, BullMQ, Redis, Background Workers',
            frontend: 'React, Next.js, Vite, TanStack Query, Zustand, Tailwind CSS',
            database: 'PostgreSQL, Prisma ORM, Supabase, Firestore, SQLite',
            cloud_ops: 'Docker, Vercel, Render, Railway, Cloudflare, CI/CD',
            integrations: 'Gemini AI, Stripe, TeleBirr, CBE, S3, Resend/SMTP',
        },
    },

    /* Curated featured projects */
    projects: [
        {
            slug: 'feedwise',
            name: 'FeedWise',
            year: '2025',
            status: 'live',
            blurb: 'AI-powered SaaS for businesses to collect customer feedback via QR codes and turn it into actionable insights in real time.',
            outcome: 'Enables businesses to instantly collect and act on feedback using Gemini Flash AI sentiment analysis, priority scoring, and team collaboration.',
            desc: 'Full-stack SaaS with QR-code feedback collection, real-time Gemini AI analysis, Stripe subscriptions (Basic/Pro), team management, BullMQ background queues for scheduled digests, and Docker/Render deployment.',
            stack: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'BullMQ', 'Redis', 'Gemini AI', 'Stripe', 'Docker'],
            url: 'https://feedwise-nine.vercel.app/',
            repo: 'https://github.com/Endalk-sudo/Feedwise',
            highlights: [
                'Monorepo with Zod schema contracts as single source of truth across client/server',
                'BullMQ job queue for scheduled AI insight generation, batch analysis, and email digests',
                'Stripe SaaS billing integration with webhooks and customer billing portal',
            ],
        },
        {
            slug: 'full-time-capsule',
            name: 'Full Stack Time Capsule',
            year: '2026',
            status: 'stable',
            blurb: 'Secure automated microservices platform for creating digital time capsules with scheduled delivery.',
            outcome: 'Encrypted message and file packages scheduled for automated future delivery via background job queues and S3 storage.',
            desc: 'Full-stack application with Docker Compose orchestration. Handles authentication, presigned S3-compatible file storage, background delivery queues via BullMQ and Redis, and automated email notifications.',
            stack: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'BullMQ', 'Prisma', 'S3'],
            url: '',
            repo: 'https://github.com/Endalk-sudo/full-time-capsule',
            highlights: [
                'Microservices architecture with Docker Compose orchestration',
                'Background delivery queue system with BullMQ and Redis',
                'S3-compatible file storage with presigned upload/download URLs',
            ],
        },
        {
            slug: 'a-kiyon',
            name: 'A-kiyon FCMS',
            year: '2026',
            status: 'live',
            blurb: 'Fitness center management system with member tracking, Ethiopian calendar support, and role-based access.',
            outcome: 'Empowers gym owners and managers to track memberships, subscriptions, and multi-currency revenue with localized calendar support.',
            desc: 'Next.js application tailored for Ethiopian businesses. Features member photo management, subscription renewals, multi-currency payment recording, RBAC (Owner/Manager/Reader), and Firestore batch writes.',
            stack: ['TypeScript', 'Next.js', 'Firestore', 'Firebase Auth', 'Zustand', 'Tailwind CSS', 'Backblaze B2', 'Vercel'],
            url: 'https://a-kiyon.vercel.app',
            repo: 'https://github.com/Endalk-sudo/a-kiyon',
            highlights: [
                'Full Ethiopian calendar integration for subscriptions and renewals',
                'Role-based access control with granular permission checks',
                'Batch Firestore operations with multi-currency payment recording',
            ],
        },
        {
            slug: 'lexilearn',
            name: 'LexiLearn',
            year: '2026',
            status: 'stable',
            blurb: 'Local-first English vocabulary learning app with SM-2 spaced repetition.',
            outcome: 'Helps students retain TOEFL/IELTS vocabulary long term — 100% offline, private, and fast.',
            desc: 'Offline-first vocabulary trainer built with Next.js and SQLite via Prisma. Features SM-2 review scheduling, 5 interactive quiz modes, streak tracking, browser TTS pronunciation, and Amharic translations.',
            stack: ['TypeScript', 'Next.js', 'React', 'SQLite', 'Prisma', 'Tailwind CSS', 'Zustand'],
            url: '',
            repo: 'https://github.com/Endalk-sudo/lexilearn',
            highlights: [
                'SM-2 spaced repetition algorithm for optimal memory retention',
                '100% local and offline SQLite database with zero telemetry',
                '5 quiz modes, streak analytics, and Amharic translation support',
            ],
        },
    ],

    /* Quick stack summary */
    stackToml: `# ~/.config/stack.toml — core engineering stack
[languages]
primary = ["TypeScript", "JavaScript", "Python", "SQL"]

[backend]
runtime = "Node.js"
frameworks = ["Express", "REST APIs", "WebSockets"]
jobs = ["BullMQ", "Redis", "Cron Workers"]

[frontend]
frameworks = ["React", "Next.js", "Vite"]
state = ["TanStack Query", "Zustand", "Tailwind CSS"]

[data]
primary = ["PostgreSQL", "Prisma ORM", "Redis"]
other = ["Supabase", "Firestore", "SQLite"]

[deploy & ops]
platforms = ["Docker", "Vercel", "Render", "Railway", "Cloudflare"]
practices = ["CI/CD", "Type Safety", "Schema Validation (Zod)"]`,
};
