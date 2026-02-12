export const resumeData = {
    header: {
        name: "Piotr Bania",
        location: "London, UK",
        contacts: [
            {
                label: "Email",
                text: "contact@piotrbania.dev",
                href: "mailto:contact@piotrbania.dev",
            },
            {
                label: "Portfolio",
                text: "piotrbania.dev",
                href: "piotrbania.dev",
                external: true,
            },
            {
                label: "GitHub",
                text: "github.com/piotr-bania",
                href: "github.com/piotr-bania",
                external: true,
            },
            {
                label: "LinkedIn",
                text: "linkedin.com/in/piotr-bania",
                href: "linkedin.com/in/piotr-bania",
                external: true,
            },
        ],
    },

    summary: {
        title: "Professional Summary",
        content:
            "Full-stack developer building and operating production web systems used in real business environments. Designs, ships, and maintains SaaS products, internal tools, and compliance-driven platforms with long-term reliability in mind. Experienced in end-to-end system ownership including architecture, database design, frontend implementation, authentication, subscription billing, and ongoing maintenance.",
    },

    experience: {
        title: "Professional Experience",
        projects: [
            {
                title: "Bespoke Programming - Founder / Full-Stack Developer",
                period: "Jun 6, 2022 - Present",
                description:
                    "Design, build, and maintain production-grade web systems and SaaS platforms used in live operational environments.",
            },
            {
                title: "Pluno - Frontend / 3D Product Developer",
                period: "Sep 2023 (5 months)",
                bullets: [
                    "Contributed to development of production startup product interface",
                    "Built React components integrated into live product workflow",
                    "Developed interactive web interfaces in collaboration with design and product stakeholders",
                    "Worked within iterative startup development cycles",
                ],
            },
            {
                title: "EZinvoices (SaaS Invoicing Platform)",
                period: "Dec 18, 2024 - Present",
                bullets: [
                    "Built full production SaaS platform using Next.js and Supabase",
                    "Designed database schema, authentication flow, and invoice lifecycle logic",
                    "Integrated Stripe subscriptions, webhooks, and recurring billing workflows",
                    "Developed secure client portal with controlled access tokens",
                    "Live platform with active users and recurring subscription payments",
                ],
            },
            {
                title: "Tsunami & Yama Momo Restaurant Websites",
                period: "Oct 5, 2023 - Present",
                bullets: [
                    "Designed and developed custom production websites",
                    "Maintained and operated systems for 3+ years",
                    "Improved performance, SEO structure, and hosting configuration",
                    "Managed deployment and long-term updates",
                ],
            },
            {
                title: "Bespoke CRM (Internal Operational System)",
                period: "Jul 1, 2024 - Present",
                bullets: [
                    "Built internal CRM to manage leads, MRR tracking, and client operations",
                    "Designed database architecture and reporting logic",
                    "Used in daily operational workflow to manage recurring revenue",
                ],
            },
            {
                title: "Audit Ready (Compliance Tool - In Progress)",
                period: "Jan 15, 2026 - Present",
                bullets: [
                    "Designed system architecture for compliance-focused document management",
                    "Implemented Supabase schema and role-based access structure",
                ],
            },
        ],
    },

    skills: {
        title: "Technical Skills",
        categories: [
            {
                title: "Frontend",
                items: "HTML5, CSS3, SCSS, TailwindCSS, JavaScript (ES6+), React, Next.js (App Router), Framer Motion",
            },
            {
                title: "Backend & Database",
                items: "Supabase, PostgreSQL, SQL, REST APIs, JSON data structures",
            },
            {
                title: "Payments & Integrations",
                items: "Stripe Subscriptions, Webhooks, Authentication Systems",
            },
            {
                title: "Architecture & Tools",
                items: "Git, GitHub, Vercel, Node.js environments, Server-Side Rendering, Responsive Design, Component Architecture",
            },
        ],
    },

    competencies: {
        title: "Core Competencies",
        items: [
            "End-to-end system ownership",
            "SaaS architecture and subscription logic",
            "Production database design",
            "Operational system thinking",
            "UI precision and structured component design",
            "Long-term maintenance and reliability mindset",
        ],
    },

    education: {
        title: "Education",
        content:
            "Self-taught developer (since April 2021). Continuous independent study in web systems, architecture, and modern frontend development.",
    },
}
