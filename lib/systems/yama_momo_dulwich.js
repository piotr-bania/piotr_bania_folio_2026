export const YAMA_MOMO_DULWICH = {
    slug: "yama-momo",
    title: "Yama Momo Website",
    category: "client",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Client-facing restaurant production website",
        description: `
Yama Momo is a production restaurant website built and maintained
as a long-term client system.

The website supports branding, customer communication, and live
restaurant operations through a stable and adaptable public interface.
        `,
        responsibilities: [
            "Restaurant brand presentation",
            "Menu and content visibility",
            "Performance and uptime",
            "Ongoing technical maintenance",
        ],
        status: {
            state: "Live",
            notes: [
                "In continuous operation for 3+ years",
                "Actively maintained alongside Tsunami",
                "Serves real customers daily",
                "Part of a long-term client relationship",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
Yama Momo is operated as a production system rather than a static site.
It is designed to evolve incrementally while remaining reliable and
predictable in a live hospitality setting.
        `,
        highlights: [
            "Production-grade website architecture",
            "Designed for long-term ownership",
            "Supports real-world restaurant operations",
            "Incrementally improved over time",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
The system uses a modular Next.js architecture that allows content,
layout, and visual changes without destabilising the site.

This approach enables ongoing refinements while preserving
performance and operational stability.
        `,
        components: [
            "Public content and marketing pages",
            "Menu and gallery sections",
            "Reusable UI and layout components",
            "Deployment and hosting setup",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Prioritising operational stability",
            "Designing for long-term maintenance",
            "Supporting incremental evolution",
            "Avoiding fragile or over-engineered solutions",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "3+ years of live operation",
            "Active maintenance agreement",
            "Real customer usage",
            "Demonstrated long-term client trust",
        ],
    },
}
