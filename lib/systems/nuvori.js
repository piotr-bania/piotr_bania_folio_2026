export const NUVORI = {
    slug: "nuvori",
    title: "Nuvori",
    category: "production",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Hospitality booking and front-of-house system",
        description: `
Nuvori is a hospitality-focused booking and front-of-house system designed
for premium restaurants that require control, clarity, and operational flow.

It unifies customer bookings, diner interaction, and host operations
into a single, coherent system rather than a collection of disconnected tools.
        `,
        responsibilities: [
            "Customer booking flow",
            "Diner interaction and visibility",
            "Front-of-house operational control",
            "Restaurant-side booking management",
        ],
        status: {
            state: "In development",
            notes: [
                "Designed around real hospitality workflows",
                "Three-layer system architecture defined",
                "Positioned for premium restaurant environments",
                "Built with long-term operational ownership in mind",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
Nuvori is structured as a three-layer hospitality system rather than
a single booking widget. Each layer serves a distinct role while remaining
tightly connected to the others.

The system prioritises flow, visibility, and calm operation during service.
        `,
        highlights: [
            "Customer-facing booking widget",
            "Diner portal as an interaction layer",
            "Host and hostess operational panel",
            "Designed for premium hospitality environments",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
The system is built as a modular Next.js application with Supabase
providing authentication, persistence, and access control.

Each layer operates independently while sharing a unified data model
to maintain consistency across the booking lifecycle.
        `,
        components: [
            "Embedded booking widget",
            "Diner-facing interaction layer",
            "Host and hostess admin panel",
            "Shared booking and availability engine",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Three-layer architecture instead of a single interface",
            "Hospitality-first UX informed by real service environments",
            "Operational clarity over feature volume",
            "Premium positioning over mass-market adoption",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "Designed from real front-of-house experience",
            "Architecture aligned with live service constraints",
            "System boundaries clearly defined early",
            "Built for operational reliability, not experimentation",
        ],
    },
}
