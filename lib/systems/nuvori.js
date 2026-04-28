export const NUVORI = {
    slug: "nuvori",
    title: "Nuvori",
    category: "production",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Restaurant booking and front-of-house operating system",
        description: `
Nuvori is a hospitality booking system designed to replace fragmented tools
such as OpenTable, manual booking flows, and disconnected admin processes.

It focuses on giving restaurants full control over bookings, customer data,
and service flow through a unified system.
        `,
        responsibilities: [
            "Booking flow and availability logic",
            "Front-of-house operational interface",
            "Customer interaction and data ownership",
            "Restaurant-side booking control",
        ],
        status: {
            state: "Active development",
            notes: [
                "Designed from real restaurant experience",
                "Architecture aligned with live service flow",
                "Integrated with Hospitality Platform",
                "Planned deployment within client systems",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
Nuvori is built as a system, not a widget. It connects booking,
customer interaction, and front-of-house operations into a single flow.

The goal is to reduce operational friction and dependency on external platforms.
        `,
        highlights: [
            "Custom booking and availability logic",
            "Diner interaction layer",
            "Front-of-house admin system",
            "Ownership of customer data",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
The system uses a shared Supabase backend with a modular Next.js frontend.

It integrates into client platforms through a multi-tenant architecture,
allowing reuse across multiple restaurant systems.
        `,
        components: [
            "Booking and availability engine",
            "Diner-facing interaction layer",
            "Front-of-house admin interface",
            "Shared multi-tenant backend",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Replacing third-party booking dependency with owned system",
            "Designing around real service flow instead of generic UX",
            "Integrating with multi-tenant platform architecture",
            "Prioritising operational clarity over feature volume",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "Designed from real front-of-house experience",
            "Integrated into active client system (Yaki Sarsa)",
            "Aligned with live restaurant workflows",
            "Continuously evolving based on operational needs",
        ],
    },
}
