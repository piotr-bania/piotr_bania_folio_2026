export const TSUNAMI_CLAPHAM = {
    slug: "tsunami",
    title: "Tsunami Website",
    category: "client",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Long-term production website supporting real restaurant operations",
        live: {
            label: "Open Tsunami",
            href: "https://tsunamiclapham.co.uk",
        },

        description: `
            Tsunami is a production restaurant website that has been operating continuously
            for over three years.

            It is maintained as a live system, supporting real customers, promotions,
            and restaurant operations.

            The project represents long-term reliability and ongoing collaboration
            rather than a one-time delivery.
        `,

        // 🔥 minimal, just enough
        media: [
            {
                id: "tsunami_home",
                label: "Website",
                type: "image",
                src: "/media/client_systems/tsunami/1.webp",
                alt: "Tsunami restaurant website.",
                interaction: "glsl_plane_popup",
            },
        ],

        responsibilities: [
            "Public-facing restaurant system",
            "Offer and promotion management",
            "Performance and uptime",
            "Continuous maintenance and updates",
        ],

        status: {
            state: "Live (3+ years)",
            notes: [
                "Handling real customer traffic daily",
                "Maintained under long-term contract",
                "Continuously updated with new offers",
                "Serving as operational system, not static site",
            ],
        },
    },

    architecture: {
        title: "Stable long-term system architecture",
        description: `
            The system is built using a modular Next.js structure that supports
            incremental updates without disrupting the live environment.

            It prioritises stability, performance, and ease of updates over complexity.
        `,

        components: [
            "Marketing and content pages",
            "Promotion and offer sections",
            "Reusable UI components",
            "Hosting and deployment pipeline",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Treating the website as a long-term system",
            "Prioritising reliability over experimentation",
            "Designing for ongoing updates",
            "Maintaining performance under real usage",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "3+ years of continuous operation",
            "Real customer traffic and usage",
            "Ongoing maintenance agreement",
            "Long-term client relationship",
        ],

        // 🔥 full visual proof
        media: [
            {
                id: "tsunami_full_1",
                label: "Homepage",
                type: "image",
                src: "/media/client_systems/tsunami/1.webp",
                alt: "Tsunami homepage.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "tsunami_full_2",
                label: "Offers",
                type: "image",
                src: "/media/client_systems/tsunami/2.webp",
                alt: "Tsunami offers page.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "tsunami_full_3",
                label: "Menu",
                type: "image",
                src: "/media/client_systems/tsunami/3.webp",
                alt: "Tsunami menu page.",
                interaction: "glsl_plane_popup",
            },
        ],
    },
}
