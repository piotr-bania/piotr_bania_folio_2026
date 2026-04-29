export const HOSPITALITY_PLATFORM = {
    slug: "hospitality-platform",
    title: "Hospitality Platform",
    category: "production",

    stack: ["Next.js", "Supabase", "Multi-tenant Architecture"],

    root: {
        title: "Multi-tenant system powering real hospitality operations",

        description: `
            Hospitality Platform is the underlying system I use to build, operate, and scale multiple restaurant projects. Instead of building isolated websites and tools, I created a shared architecture that supports multiple venues from a single system. It handles data, media, structure, and operational logic across projects. This is what allows rapid development, consistent quality, and long-term scalability across hospitality clients.
        `,

        // 🔥 keep minimal, optional (can be empty if no strong visuals)
        media: [
            {
                id: "platform_structure",
                label: "System structure",
                type: "image",
                src: "/media/core_systems/hospitality_platform/image_1.webp",
                alt: "Multi-tenant hospitality system structure overview.",
                interaction: "glsl_plane_popup",
            },
        ],

        responsibilities: [
            "Multi-tenant architecture across hospitality clients",
            "Shared backend for websites, booking systems, and tools",
            "Content, media, and data management layer",
            "Foundation for Nuvori and future SaaS systems",
        ],

        status: {
            state: "Live",
            notes: [
                "Powering Yaki Sarsa production system",
                "Used across multiple client projects",
                "Forms the base for Nuvori booking system",
                "Continuously extended with real-world usage",
            ],
        },
    },

    architecture: {
        title: "Multi-tenant system architecture",
        description: `
            The platform is built as a multi-tenant system using Next.js and Supabase. Each restaurant operates as an isolated tenant with its own data, branding, and configuration, while sharing a common system layer. This allows multiple projects to run on the same architecture without duplication or fragmentation. Supabase provides authentication, storage, and row-level security to ensure strict tenant isolation, while Next.js handles the application layer and rendering.
        `,

        components: [
            "Tenant-based data model with strict isolation",
            "Shared Supabase backend with row-level security",
            "Media storage structured per tenant",
            "Config-driven system behaviour per restaurant",
            "Reusable UI and system components",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Built multi-tenant from the start instead of single-project architecture",
            "Centralised backend instead of duplicating systems per client",
            "Separated system logic from presentation layer",
            "Designed for reuse to reduce future development time",
            "Optimised for real operations, not one-off builds",
        ],
    },

    system: {
        title: "System role",
        description: `
            This platform is not a visible product on its own. It is the system layer that powers everything else. Nuvori, client websites, and future hospitality tools are all built on top of this foundation. It enables faster delivery, better consistency, and long-term scalability across projects.
        `,

        items: [
            "Foundation for Nuvori booking system",
            "Base layer for client restaurant websites",
            "Shared system for data, media, and configuration",
            "Platform for future hospitality SaaS products",
        ],
    },

    evidence: {
        title: "Production evidence",
        description: `
            The platform is actively used in real projects. It is not theoretical or experimental. It powers live systems and handles real operational data.
        `,

        items: [
            "Used in Yaki Sarsa production system",
            "Supports real content and media management",
            "Handles live operational data",
            "Enables ongoing development across multiple projects",
        ],

        // 🔥 if you don’t have strong visuals, keep this empty or minimal
        media: [],
    },
}
