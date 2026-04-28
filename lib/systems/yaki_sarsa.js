export const YAKI_SARSA = {
    slug: "yaki-sarsa",
    title: "Yaki Sarsa Platform",
    category: "client",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Custom restaurant system with integrated operations",
        description: `
Yaki Sarsa is a live client system built for a London restaurant,
combining a public-facing website with an admin layer and operational tooling.

Unlike a typical website delivery, the system is developed as an evolving
platform that supports real customer interaction, content management,
and future booking integration.
`,
        responsibilities: [
            "Public-facing website and UX",
            "Admin panel for content and data",
            "Integration with Hospitality Platform",
            "Foundation for booking system (Nuvori)",
        ],
        status: {
            state: "Active development",
            notes: [
                "Live website with ongoing updates",
                "Admin system actively used",
                "Collecting real customer data and leads",
                "Continuously refined with client feedback",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
Yaki Sarsa is treated as a living system rather than a finished project.
It evolves alongside the restaurant’s needs, supporting both customer-facing
and operational workflows.

The system acts as a bridge between branding, operations, and future
product integration.
        `,
        highlights: [
            "Dynamic content driven by Supabase",
            "Admin panel for real-time updates",
            "Integrated with shared platform architecture",
            "Prepared for booking system integration",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
The system is built on top of the Hospitality Platform, using a shared
multi-tenant backend while maintaining a custom frontend experience.

This allows rapid iteration without sacrificing structure or stability.
        `,
        components: [
            "Next.js frontend application",
            "Supabase-powered admin and database",
            "Tenant-based architecture",
            "Media and content management system",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Building on shared platform instead of standalone project",
            "Separating admin and frontend responsibilities",
            "Designing for continuous iteration",
            "Preparing system for booking integration (Nuvori)",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "Live client website in use",
            "Admin panel actively managing content",
            "Real customer interaction and engagement",
            "Ongoing development based on real needs",
        ],
    },
}
