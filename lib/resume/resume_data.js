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
                href: "https://piotrbania.dev",
                external: true,
            },
            {
                label: "GitHub",
                text: "github.com/piotr-bania",
                href: "https://github.com/piotr-bania",
                external: true,
            },
            {
                label: "LinkedIn",
                text: "linkedin.com/in/piotr-bania",
                href: "https://linkedin.com/in/piotr-bania",
                external: true,
            },
        ],
    },

    summary: {
        title: "Professional Summary",
        content:
            "Full-stack developer building and operating production-grade web systems used in real business environments. Experienced in designing SaaS platforms, operational tooling, multi-tenant systems, authentication, subscription billing, and hospitality technology. Strong focus on end-to-end system ownership - from architecture and database design to deployment and long-term maintenance.",
    },

    experience: {
        title: "Professional Experience",
        projects: [
            {
                title: "Bespoke Programming - Founder / Full-Stack Developer",
                period: "Jun 2022 - Present",
                description:
                    "Design, build, and maintain production-grade web systems, SaaS products, and operational platforms used in live business environments.",

                subprojects: [
                    {
                        title: "Nuvori (Hospitality Booking & Operations Platform)",
                        period: "Jan 2025 - Present",
                        bullets: [
                            "Designed and developed a multi-tenant hospitality platform supporting venue-specific branding, isolated tenant data, and operational workflows",
                            "Built restaurant booking infrastructure with real-time updates, service scheduling, booking lifecycle management, and operational tooling",
                            "Architected shared platform infrastructure using Supabase and PostgreSQL with tenant isolation and role-based access",
                            "Developed admin systems for booking management, guest communication, venue configuration, and service operations",
                            "Implemented authentication, permissions, tenant memberships, and secure booking workflows",
                            "Deployed and maintain a live production client environment actively used in restaurant operations",
                        ],
                    },

                    {
                        title: "Hospitality Platform (White-Label Production System)",
                        period: "2025 - Present",
                        bullets: [
                            "Designed a white-label hospitality platform enabling multiple venues to operate branded systems from shared infrastructure",
                            "Created scalable architecture for booking widgets, venue branding, notifications, scheduling, and operational workflows",
                            "Built reusable tenant-based system architecture to support future multi-venue expansion",
                        ],
                    },

                    {
                        title: "EZinvoices (Production SaaS Invoicing Platform)",
                        period: "Apr 2024 - Present",
                        bullets: [
                            "Built and operate a production SaaS invoicing platform used by real customers",
                            "Designed authentication, invoice lifecycle management, subscription billing, and recurring payment workflows",
                            "Integrated Stripe subscriptions, webhooks, and secure payment systems",
                            "Developed secure client portal and invoice management workflows",
                            "Designed scalable database architecture using Supabase and PostgreSQL",
                            "Maintain ongoing feature development based on production usage and customer feedback",
                        ],
                    },

                    {
                        title: "Production Hospitality Systems (Tsunami & Yama Momo Restaurants)",
                        period: "Oct 2023 - Present",
                        bullets: [
                            "Designed and maintained production hospitality systems used by live restaurant venues in London",
                            "Built customer-facing websites, operational integrations, and booking foundations",
                            "Improved performance, SEO architecture, deployment workflows, and hosting infrastructure",
                            "Worked directly with business stakeholders on long-term product improvements and maintenance",
                        ],
                    },

                    {
                        title: "Bespoke CRM (Internal Operational System)",
                        period: "Jul 2024 - Present",
                        bullets: [
                            "Built internal CRM to manage leads, recurring revenue tracking, and operational workflows",
                            "Designed database structure and reporting logic to support business operations",
                        ],
                    },

                    {
                        title: "Audit Ready (Compliance Platform - In Progress)",
                        period: "Jan 2026 - Present",
                        bullets: [
                            "Designed compliance-focused system architecture for document management and operational readiness",
                            "Implemented database schema and role-based access structure using Supabase",
                        ],
                    },
                ],
            },

            {
                title: "Pluno - Frontend / Product Developer",
                period: "Sep 2023 - Jan 2024 (5-month contract)",
                bullets: [
                    "Contributed to development of production startup software interface",
                    "Built React components integrated into live product workflows",
                    "Developed interactive web interfaces in collaboration with product and design stakeholders",
                    "Worked within iterative startup development cycles and rapid feature delivery",
                ],
            },
        ],
    },

    skills: {
        title: "Technical Skills",
        categories: [
            {
                title: "Frontend",
                items: "JavaScript (ES6+), React, Next.js (App Router), HTML5, CSS3, SCSS, TailwindCSS, Framer Motion",
            },
            {
                title: "Backend & Database",
                items: "Supabase, PostgreSQL, SQL, REST APIs, Authentication Systems, Role-Based Access Control, Database Schema Design, Multi-Tenant Architecture",
            },
            {
                title: "SaaS & Infrastructure",
                items: "Stripe Billing, Webhooks, Subscription Systems, Vercel, Production Deployment, Server-Side Rendering (SSR), API Integrations",
            },
            {
                title: "Architecture & Product",
                items: "System Design, SaaS Architecture, Operational Systems, Component Architecture, Real-Time Data Systems, Scalable Application Design",
            },
        ],
    },

    competencies: {
        title: "Core Competencies",
        items: [
            "End-to-end system ownership",
            "Full-stack application architecture",
            "SaaS and subscription platform development",
            "Production database design",
            "Multi-tenant systems architecture",
            "Operational systems thinking",
            "Authentication and access control",
            "Long-term maintenance and platform reliability",
            "Product-focused engineering",
            "Stakeholder collaboration",
        ],
    },

    education: {
        title: "Education",
        content:
            "Self-taught software developer (since April 2021). Continuous independent study focused on software architecture, production systems, SaaS development, and modern web technologies.",
    },
}
