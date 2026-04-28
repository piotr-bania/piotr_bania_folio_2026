export const NUVORI = {
    slug: "nuvori",
    title: "Nuvori",
    category: "system",

    stack: ["Next.js", "Supabase", "Realtime", "Stripe (planned)"],

    root: {
        title: "Restaurant booking system that gives control back to venues",
        live: {
            label: "Visit Nuvori",
            href: "https://nuvori.app",
        },

        description: `
            Nuvori is a restaurant booking system built from 20 years of firsthand hospitality experience. 
            Existing solutions are designed as marketplaces - they charge per cover, control customer data, 
            and force restaurants into platforms that prioritise diners over operators.

            Nuvori flips that model. It gives full control back to venues: their bookings, their data, their experience.
            It is designed as a white-label system that integrates directly into the restaurant’s own website 
            while providing a powerful operational backend for staff.
        `,

        // 🔥 show only strongest
        media: [
            {
                id: "nuvori_widget",
                label: "Booking widget",
                type: "image",
                src: "/media/core_systems/nuvori/1.webp",
                alt: "Nuvori embedded booking widget integrated into a restaurant website.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "nuvori_admin",
                label: "Admin system",
                type: "image",
                src: "/media/core_systems/nuvori/2.webp",
                alt: "Nuvori admin interface for managing bookings and operations.",
                interaction: "glsl_plane_popup",
            },
        ],

        highlights: [
            "Eliminates per-cover fees from marketplace booking platforms",
            "Restaurants own their customer data",
            "Embeddable system requiring minimal integration",
            "White-label experience matching each venue’s identity",
            "Designed for real operational use, not just bookings",
        ],
    },

    architecture: {
        title: "Layered hospitality system architecture",
        description: `
            Nuvori is designed as a layered system that integrates into existing restaurant websites while providing 
            a full operational backend. It separates the customer-facing experience from the operational control layer, 
            allowing each to evolve independently while remaining tightly connected through shared data.

            The system is built on Next.js and Supabase, using real-time updates for live booking management and a 
            multi-tenant architecture to support multiple venues with isolated data and custom branding.
        `,

        components: [
            "Embeddable booking widget triggered via lightweight script",
            "Full admin system for booking and service management",
            "Multi-tenant database structure with tenant isolation",
            "Real-time booking updates across devices",
            "Dynamic branding layer (colors, typography, UI per venue)",
            "Service-based capacity and scheduling system",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Rejected marketplace model in favour of direct-to-venue ownership",
            "Designed as embed-first to integrate into existing restaurant websites",
            "Separated widget and admin to allow independent evolution",
            "Built multi-tenant from the start to scale across venues",
            "Prioritised operational workflows over visual complexity",
            "Focused on reducing cost for restaurants rather than adding features",
        ],
    },

    system: {
        title: "System layers",
        description: `
            Nuvori operates across multiple layers that together form a complete hospitality operating system.
            Each layer can be used independently or as part of a full system rollout.
        `,

        items: [
            "Website layer (optional rebuild or integration)",
            "Admin layer for managing menus, bookings and operations",
            "Booking widget layer embedded into website",
            "Core system layer handling bookings, logic and data",
        ],
    },

    evidence: {
        title: "Live pilot and real-world usage",
        description: `
            Nuvori is not theoretical. It is currently running as a live pilot for Yaki Sarsa, integrated directly 
            into a production restaurant website. It is actively used to collect bookings and is being iterated 
            based on real operational feedback.
        `,

        items: [
            "Live integration with Yaki Sarsa website",
            "Collecting real bookings in production environment",
            "Admin system used for operational testing",
            "Iterated based on real hospitality workflows",
            "Built alongside active restaurant service experience",
        ],

        // 🔥 all media here
        media: [
            {
                id: "nuvori_widget_full",
                label: "Booking flow",
                type: "image",
                src: "/media/core_systems/nuvori/1.webp",
                alt: "Full booking flow within Nuvori widget.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "nuvori_admin_full",
                label: "Admin interface",
                type: "image",
                src: "/media/core_systems/nuvori/2.webp",
                alt: "Admin system showing live booking management.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "nuvori_real_use",
                label: "Real usage",
                type: "image",
                src: "/media/core_systems/nuvori/3.webp",
                alt: "Nuvori used within a live restaurant environment.",
                interaction: "glsl_plane_popup",
            },
        ],
    },
}
