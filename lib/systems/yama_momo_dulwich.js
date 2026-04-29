export const YAMA_MOMO_DULWICH = {
    slug: "yama-momo",
    title: "Yama Momo Website",
    category: "client",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Refined production website supporting a long-term restaurant brand",
        live: {
            label: "Open Yama Momo",
            href: "https://yamamomo.co.uk",
        },

        description: `
            Yama Momo is a production restaurant website maintained as part of a long-term
            client relationship.

            It focuses on clarity, typography, and presentation while supporting real
            customer interaction and day-to-day operations.

            The system evolves incrementally, balancing design refinement with
            long-term stability.
        `,

        media: [
            {
                id: "yamamomo_video_site",
                label: "Homepage experience",
                type: "video",
                src: "/media/client_systems/yama_momo/homepage.webm",
                alt: "Homepage scroll and transitions across sections.",
            },
            {
                id: "yamamomo_video_menu",
                label: "Menu interaction",
                type: "video",
                src: "/media/client_systems/yama_momo/menu.webm",
                alt: "Fullscreen menu interaction and transitions.",
            },
        ],

        responsibilities: [
            "Restaurant brand presentation",
            "Menu and content visibility",
            "Performance and reliability",
            "Ongoing technical maintenance",
        ],

        status: {
            state: "Live (3+ years)",
            notes: [
                "Running continuously alongside Tsunami",
                "Serving real customers daily",
                "Maintained under long-term agreement",
                "Incrementally improved over time",
            ],
        },
    },

    architecture: {
        title: "Production website architecture",
        description: `
            The system is built using a modular Next.js architecture that supports
            continuous updates without disrupting the live experience.

            It allows design refinement and content evolution while maintaining
            performance and reliability.
        `,

        components: [
            "Public website and content pages",
            "Menu and gallery sections",
            "Reusable UI components",
            "Deployment and hosting setup",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Designing for long-term stability",
            "Prioritising clarity and typography",
            "Supporting incremental improvements",
            "Avoiding unnecessary complexity",
        ],
    },

    evidence: {
        title: "Production evidence",
        description: `
            Yama Momo has been running as a live system for over three years,
            supporting real customers and evolving alongside the business.
        `,

        items: [
            "3+ years of live operation",
            "Real customer usage",
            "Ongoing maintenance relationship",
            "Demonstrated long-term reliability",
        ],

        media: [
            {
                id: "yamamomo_full_1",
                label: "Hero section",
                type: "image",
                src: "/media/client_systems/yama_momo/image_1.webp",
                alt: "Homepage hero section.",
            },
            {
                id: "yamamomo_full_2",
                label: "Menu",
                type: "image",
                src: "/media/client_systems/yama_momo/image_2.webp",
                alt: "Menu layout and typography.",
            },
            {
                // orders page, hero/top section
                id: "yamamomo_full_3",
                label: "Orders page",
                type: "image",
                src: "/media/client_systems/yama_momo/image_3.webp",
                alt: "Top section of orders page showing layout and design.",
            },
            {
                id: "yamamomo_full_4",
                label: "Layout and sections",
                type: "image",
                src: "/media/client_systems/yama_momo/image_4.webp",
                alt: "Page layout, spacing, and typography structure.",
            },
            {
                id: "yamamomo_full_5",
                label: "Homepage flow (video)",
                type: "video",
                src: "/media/client_systems/yama_momo/homepage.webm",
                alt: "Scrolling through homepage sections and transitions.",
            },
            {
                id: "yamamomo_full_6",
                label: "Menu interaction (video)",
                type: "video",
                src: "/media/client_systems/yama_momo/menu.webm",
                alt: "Fullscreen menu opening and interaction.",
            },
        ],
    },
}
