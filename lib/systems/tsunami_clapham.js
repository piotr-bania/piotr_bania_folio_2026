export const TSUNAMI_CLAPHAM = {
    slug: "tsunami",
    title: "Tsunami Website",
    category: "client",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Client-facing restaurant production website",
        description: `
Tsunami is a client-facing production website built for a London restaurant
and maintained continuously over multiple years.

The system supports day-to-day restaurant operations by acting as a stable,
reliable public interface for customers, offers, and brand presence.
        `,
        responsibilities: [
            "Public-facing restaurant presence",
            "Offer and promotion visibility",
            "Performance and reliability",
            "Ongoing maintenance and updates",
        ],
        status: {
            state: "Live",
            notes: [
                "In continuous operation for 3+ years",
                "Actively maintained and updated",
                "Supports real customer traffic",
                "Long-term client relationship",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
The Tsunami website is treated as a production system rather than
a one-off delivery. It prioritises reliability, clarity, and ease
of updates in a live hospitality environment.
        `,
        highlights: [
            "Stable public-facing architecture",
            "Designed for ongoing content changes",
            "Performance-focused implementation",
            "Built for long-term maintenance",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
The website is built using Next.js with a modular component structure,
allowing incremental improvements without disruption.

Content and assets are structured to support updates, promotions,
and seasonal changes with minimal risk.
        `,
        components: [
            "Marketing and content pages",
            "Offer and promotion sections",
            "Reusable layout and UI components",
            "Hosting and deployment pipeline",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Treating the website as a long-lived system",
            "Optimising for reliability over experimentation",
            "Designing for content updates without rewrites",
            "Maintaining performance under real traffic",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "3+ years of continuous operation",
            "Ongoing maintenance contract",
            "Live customer-facing traffic",
            "Incremental improvements delivered over time",
        ],
    },
}
