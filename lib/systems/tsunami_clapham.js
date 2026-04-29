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

        media: [
            {
                id: "tsunami_video_site",
                label: "Homepage experience",
                type: "video",
                src: "/media/client_systems/tsunami/homepage.webm",
                alt: "Homepage scroll and transitions across sections.",
            },
            {
                id: "tsunami_video_menu",
                label: "Menu interaction",
                type: "video",
                src: "/media/client_systems/tsunami/menu.webm",
                alt: "Fullscreen menu opening with animated transitions.",
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
        description: `
            The Tsunami website has been running continuously for over three years,
            supporting real customers and evolving alongside the business.
        `,

        items: [
            "3+ years of continuous operation",
            "Real customer traffic and usage",
            "Ongoing maintenance agreement",
            "Long-term client relationship",
        ],

        media: [
            {
                id: "tsunami_full_1",
                label: "Hero section",
                type: "image",
                src: "/media/client_systems/tsunami/image_1.webp",
                alt: "Tsunami homepage hero section.",
            },
            {
                id: "tsunami_full_2",
                label: "Offers page",
                type: "image",
                src: "/media/client_systems/tsunami/image_2.webp",
                alt: "Restaurant offers and promotions page.",
            },
            {
                id: "tsunami_full_3",
                label: "Menu page",
                type: "image",
                src: "/media/client_systems/tsunami/image_3.webp",
                alt: "Menu structure and layout.",
            },
            {
                id: "tsunami_full_4",
                label: "Gallery",
                type: "image",
                src: "/media/client_systems/tsunami/image_4.webp",
                alt: "Restaurant gallery showcasing dishes and atmosphere.",
            },
            {
                id: "tsunami_full_5",
                label: "Homepage flow (video)",
                type: "video",
                src: "/media/client_systems/tsunami/homepage.webm",
                alt: "Scrolling through homepage sections and transitions.",
            },
            {
                id: "tsunami_full_6",
                label: "Menu interaction (video)",
                type: "video",
                src: "/media/client_systems/tsunami/menu.webm",
                alt: "Fullscreen menu opening and animated transitions.",
            },
        ],
    },
}
