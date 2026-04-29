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
            Yaki Sarsa is a live restaurant system built as a combination of a public website,
            admin layer, and operational tooling.

            It is not a one-off website. It is an evolving system supporting real customer
            interaction, content updates, and internal workflows.

            Built on top of the Hospitality Platform, it acts as the first real-world
            implementation of the full stack: website, admin, and booking integration (Nuvori).
        `,

        media: [
            {
                id: "yaki_video_site",
                label: "Website experience",
                type: "video",
                src: "/media/client_systems/yaki_sarsa/yaki_sarsa_site.webm",
                alt: "Yaki Sarsa live website interactions and transitions.",
            },
            {
                id: "yaki_video_admin",
                label: "Admin flow",
                type: "video",
                src: "/media/client_systems/yaki_sarsa/yaki_sarsa_admin.webm",
                alt: "Admin system managing content and operations.",
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
            The system combines a custom Next.js frontend with a Supabase-powered backend.

            It operates as a tenant within the Hospitality Platform, allowing structured data,
            media, and configuration management while maintaining a unique identity.

            The architecture enables continuous updates without breaking the live experience.
        `,

        components: [
            "Next.js frontend with custom UI and animations",
            "Supabase database and admin layer",
            "Tenant-based architecture (multi-restaurant ready)",
            "Media and content management system",
            "Nuvori embed for booking flow",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Treating the project as a system, not a website",
            "Building admin access from day one",
            "Using shared platform architecture for scalability",
            "Integrating booking system instead of third-party tools",
            "Designing for continuous iteration pre- and post-opening",
        ],
    },

    evidence: {
        title: "Live usage and validation",
        description: `
            Yaki Sarsa is actively used during its pre-opening phase.
            It is already collecting real user data and preparing for live bookings.
        `,

        items: [
            "Collecting real customer leads before opening",
            "Admin system used by client for content updates",
            "Integrated with production backend (Supabase)",
            "Foundation for live booking operations (Nuvori)",
        ],

        media: [
            {
                id: "yaki_full_1",
                label: "Admin interface",
                type: "image",
                src: "/media/client_systems/yaki_sarsa/image_1.webp",
                alt: "Admin system managing content.",
            },
            {
                id: "yaki_full_2",
                label: "Homepage",
                type: "image",
                src: "/media/client_systems/yaki_sarsa/image_2.webp",
                alt: "Yaki Sarsa homepage.",
            },
            {
                id: "yaki_full_3",
                label: "Menu system",
                type: "image",
                src: "/media/client_systems/yaki_sarsa/image_3.webp",
                alt: "Dynamic menu and content structure.",
            },
            {
                id: "yaki_full_4",
                label: "Interactive map",
                type: "image",
                src: "/media/client_systems/yaki_sarsa/image_4.webp",
                alt: "Custom 3D interactive map showing different routes to the restaurant from stations.",
            },
            {
                // Nuvori integrated embed/widget showcasing making a reservation from diner perspective
                id: "yaki_full_5",
                label: "Booking flow (video)",
                type: "video",
                src: "/media/core_systems/nuvori/nuvori_booking.webm",
                alt: "Live booking flow using Nuvori embedded widget.",
            },
            {
                // Nuvori admin and booking system for reservations
                id: "yaki_full_6",
                label: "Booking management (video)",
                type: "video",
                src: "/media/core_systems/nuvori/nuvori_admin.webm",
                alt: "Nuvori admin system managing bookings and reservations.",
            },
        ],
    },
}
