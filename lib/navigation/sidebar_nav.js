export const SIDEBAR_NAV = {
    routes: {
        resume: "/resume",
        map: "/map",
        systems: "/systems",
        architecture: "/architecture",
        interface: "/interface",
    },

    resume: {
        id: "resume",
        label: "Resume",
        route: "/resume",
    },

    homepage: {
        id: "homepage",
        label: "Home",
        items: [
            { id: "systems", label: "Systems", route: "/systems" },
            {
                id: "architecture",
                label: "Architecture",
                route: "/architecture",
                camera: "architecture_focus",
                disabled: true,
            },
            {
                id: "interface",
                label: "Interface",
                route: "/interface",
                camera: "interface_focus",
            },
        ],
    },

    globalActions: [
        {
            id: "to_map",
            label: "Map",
            route: "/map",
            showOn: ["systems", "module", "resume", "interface"],
        },
        {
            id: "to_systems",
            label: "Back to Systems",
            route: "/systems",
            showOn: ["module", "resume", "interface"],
        },
    ],

    systems: {
        core: {
            id: "core",
            label: "Core Production Systems",
            items: [
                {
                    id: "ezinvoices",
                    label: "EZinvoices",
                    slug: "ezinvoices",
                    route: "/module/ezinvoices",
                    camera: "ezinvoices_focus",
                    levels: {
                        l1: { id: "architecture", label: "Architecture" },
                        l2: { id: "decisions", label: "Key Decisions" },
                        l3: { id: "evidence", label: "Evidence" },
                    },
                },
                {
                    id: "nuvori",
                    label: "Nuvori (Booking System)",
                    slug: "nuvori",
                    route: "/module/nuvori",
                    camera: "nuvori_focus",
                    levels: {
                        l1: { id: "architecture", label: "Architecture" },
                        l2: { id: "decisions", label: "Key Decisions" },
                        l3: { id: "evidence", label: "Evidence" },
                    },
                },
                {
                    id: "hospitality_platform",
                    label: "Hospitality Platform",
                    slug: "hospitality-platform",
                    route: "/module/hospitality-platform",
                    camera: "hospitality_focus",
                    levels: {
                        l1: { id: "architecture", label: "Architecture" },
                        l2: { id: "decisions", label: "Key Decisions" },
                        l3: { id: "evidence", label: "Evidence" },
                    },
                },
            ],
        },

        client: {
            id: "client",
            label: "Client Production Systems",
            items: [
                {
                    id: "yaki_sarsa",
                    label: "Yaki Sarsa Platform",
                    slug: "yaki-sarsa",
                    route: "/module/yaki-sarsa",
                    camera: "yaki_sarsa_focus",
                    levels: {
                        l1: { id: "architecture", label: "Architecture" },
                        l2: { id: "decisions", label: "Key Decisions" },
                        l3: { id: "evidence", label: "Evidence" },
                    },
                },
                {
                    id: "tsunami",
                    label: "Tsunami Website",
                    slug: "tsunami",
                    route: "/module/tsunami",
                    camera: "tsunami_focus",
                    levels: {
                        l1: { id: "architecture", label: "Architecture" },
                        l2: { id: "decisions", label: "Key Decisions" },
                        l3: { id: "evidence", label: "Evidence" },
                    },
                },
                {
                    id: "yama_momo",
                    label: "Yama Momo Website",
                    slug: "yama-momo",
                    route: "/module/yama-momo",
                    camera: "yama_momo_focus",
                    levels: {
                        l1: { id: "architecture", label: "Architecture" },
                        l2: { id: "decisions", label: "Key Decisions" },
                        l3: { id: "evidence", label: "Evidence" },
                    },
                },
            ],
        },

        internal: {
            id: "internal",
            label: "Internal Systems",
            items: [
                {
                    id: "bespoke_crm",
                    label: "Bespoke CRM",
                    slug: "bespoke-crm",
                    route: "/module/bespoke-crm",
                    camera: "bespoke_crm_focus",
                    disabled: true,
                    levels: {
                        l1: { id: "architecture", label: "Architecture" },
                        l2: { id: "operations", label: "Operations" },
                        l3: { id: "outcomes", label: "Outcomes" },
                    },
                },
            ],
        },

        legacy: {
            id: "legacy",
            label: "Legacy / Inactive Systems",
            items: [
                {
                    id: "auditready",
                    label: "Audit Ready",
                    slug: "audit-ready",
                    route: "/module/audit-ready",
                    camera: "auditready_focus",
                    disabled: true,
                    levels: {
                        l1: { id: "architecture", label: "Architecture" },
                        l2: { id: "controls", label: "Controls" },
                        l3: { id: "evidence", label: "Evidence" },
                    },
                },
            ],
        },
    },
}
