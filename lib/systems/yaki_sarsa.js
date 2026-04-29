export const YAKI_SARSA = {
    slug: "yaki-sarsa",
    title: "Yaki Sarsa Platform",
    category: "client",

    stack: ["Next.js", "Supabase", "Hospitality Platform"],

    root: {
        title: "Live restaurant system combining website and operations",
        live: {
            label: "Open Yaki Sarsa",
            href: "https://yakisarsa.com",
        },

        description: `
            Yaki Sarsa is a live restaurant system built as a combination of a public website, admin layer, and operational tooling. It is not treated as a one-off website. It is an evolving system that supports real customer interaction, content updates, and internal workflows. The system is built on top of the Hospitality Platform and acts as the first real-world implementation of the full stack: website, admin, and booking integration (Nuvori).
        `,

        media: [
            {
                id: "yaki_home",
                label: "Website experience",
                type: "image",
                src: "/media/client_systems/yaki_sarsa/1.webp",
                alt: "Yaki Sarsa website interface.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "yaki_admin",
                label: "Admin system",
                type: "image",
                src: "/media/client_systems/yaki_sarsa/2.webp",
                alt: "Yaki Sarsa admin panel managing content.",
                interaction: "glsl_plane_popup",
            },
        ],

        responsibilities: [
            "Public-facing website and UX",
            "Admin system for content and data",
            "Integration with Hospitality Platform",
            "Foundation for Nuvori booking system",
        ],

        status: {
            state: "Live / Pre-opening phase",
            notes: [
                "Live website collecting real leads",
                "Admin panel actively used by client",
                "Integrated with Hospitality Platform",
                "Nuvori booking system being deployed",
            ],
        },
    },

    architecture: {
        title: "Hybrid website + system architecture",
        description: `
            The system combines a custom Next.js frontend with a Supabase-powered backend. It operates as a tenant within the Hospitality Platform, allowing structured data, media, and configuration management while maintaining a unique visual identity. The architecture enables continuous updates without breaking the live experience.
        `,

        components: [
            "Next.js frontend with custom UI and animations",
            "Supabase database and admin layer",
            "Tenant-based structure from Hospitality Platform",
            "Media and content management system",
            "Nuvori embed for booking flow",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Treating the project as a system, not a website",
            "Building admin access from the start",
            "Using shared platform architecture for scalability",
            "Integrating booking system (Nuvori) instead of third-party tools",
            "Designing for continuous iteration before and after opening",
        ],
    },

    evidence: {
        title: "Live usage and validation",
        description: `
            Yaki Sarsa is actively used during its pre-opening phase. It is already collecting real user data and being prepared for live bookings and operations.
        `,

        items: [
            "Collecting real customer leads before opening",
            "Admin system used by client for content updates",
            "Integrated with production backend (Supabase)",
            "Forms base for live booking operations (Nuvori)",
        ],

        media: [
            {
                id: "yaki_full_1",
                label: "Website",
                type: "image",
                src: "/media/client_systems/yaki_sarsa/1.webp",
                alt: "Yaki Sarsa live website.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "yaki_full_2",
                label: "Admin",
                type: "image",
                src: "/media/client_systems/yaki_sarsa/2.webp",
                alt: "Admin system managing menu and content.",
                interaction: "glsl_plane_popup",
            },
        ],
    },
}
