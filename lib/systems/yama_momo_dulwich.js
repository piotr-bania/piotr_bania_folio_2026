export const YAMA_MOMO_DULWICH = {
    slug: "yama-momo",
    title: "Yama Momo Website",
    category: "client",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Production restaurant website maintained as a long-term system",
        live: {
            label: "Open Yama Momo",
            href: "https://yamamomo.co.uk",
        },

        description: `
            Yama Momo is a live restaurant website operated as part of a long-term
            client relationship.

            It supports brand presence, customer communication, and day-to-day
            restaurant operations through a stable and adaptable system.

            The project evolves incrementally while remaining reliable in a live environment.
        `,

        // 🔥 minimal
        media: [
            {
                id: "yamamomo_home",
                label: "Website",
                type: "image",
                src: "/media/client_systems/yama_momo/1.webp",
                alt: "Yama Momo website.",
                interaction: "glsl_plane_popup",
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
            The system uses a modular Next.js architecture that supports content updates
            and design changes without disrupting the live experience.

            This enables continuous improvement while maintaining stability.
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
            "Supporting incremental improvements",
            "Avoiding unnecessary complexity",
            "Maintaining consistency with client needs",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "3+ years of live operation",
            "Real customer usage",
            "Ongoing maintenance relationship",
            "Demonstrated long-term reliability",
        ],

        // 🔥 full set
        media: [
            {
                id: "yamamomo_full_1",
                label: "Homepage",
                type: "image",
                src: "/media/client_systems/yama_momo/1.webp",
                alt: "Yama Momo homepage.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "yamamomo_full_2",
                label: "Menu",
                type: "image",
                src: "/media/client_systems/yama_momo/2.webp",
                alt: "Yama Momo menu page.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "yamamomo_full_3",
                label: "Gallery",
                type: "image",
                src: "/media/client_systems/yama_momo/3.webp",
                alt: "Yama Momo gallery.",
                interaction: "glsl_plane_popup",
            },
        ],
    },
}
