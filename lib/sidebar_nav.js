export const SIDEBAR_NAV = {
    routes: {
        map: "/map",
        systems: "/systems",
        architecture: "/architecture",
        interface: "/interface",
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
            },
            { id: "interface", label: "Interface", route: "/interface" },
        ],
    },

    globalActions: [
        {
            id: "to_map",
            label: "Map",
            route: "/map",
            showOn: ["systems", "module"],
        },
        {
            id: "to_systems",
            label: "Back to Systems",
            route: "/systems",
            showOn: ["module"],
        },
    ],

    systems: {
        production: {
            id: "production",
            label: "Production Systems",
            items: [
                {
                    id: "ezinvoices",
                    label: "EZinvoices",
                    slug: "ezinvoices",
                    route: "/module/ezinvoices",
                    camera: "ezinvoices_focus",
                    levels: {
                        l1: { id: "summary", label: "Summary" },
                        l2: { id: "architecture", label: "Architecture" },
                        l3: { id: "decisions", label: "Key Decisions" },
                        l4: { id: "evidence", label: "Evidence" },
                    },
                },
                {
                    id: "nuvori",
                    label: "Nuvori",
                    slug: "nuvori",
                    route: "/module/nuvori",
                    camera: "nuvori_focus",
                    levels: {
                        l1: { id: "summary", label: "Summary" },
                        l2: { id: "architecture", label: "Architecture" },
                        l3: { id: "decisions", label: "Key Decisions" },
                        l4: { id: "evidence", label: "Evidence" },
                    },
                },
            ],
        },

        operational: {
            id: "operational",
            label: "Operational & Compliance Systems",
            items: [
                {
                    id: "auditready",
                    label: "Audit Ready",
                    slug: "auditready",
                    route: "/module/auditready",
                    camera: "auditready_focus",
                    levels: {
                        l1: { id: "summary", label: "Summary" },
                        l2: { id: "architecture", label: "Architecture" },
                        l3: { id: "controls", label: "Controls" },
                        l4: { id: "evidence", label: "Evidence" },
                    },
                },
            ],
        },

        internal: {
            id: "internal",
            label: "Internal Operating Systems",
            items: [
                {
                    id: "bespoke_crm",
                    label: "Bespoke CRM",
                    slug: "bespoke-crm",
                    route: "/module/bespoke-crm",
                    camera: "bespoke_crm_focus",
                    levels: {
                        l1: { id: "summary", label: "Summary" },
                        l2: { id: "architecture", label: "Architecture" },
                        l3: { id: "operations", label: "Operations" },
                        l4: { id: "outcomes", label: "Outcomes" },
                    },
                },
            ],
        },

        client: {
            id: "client",
            label: "Client Production Systems",
            items: [
                {
                    id: "tsunami",
                    label: "Tsunami Website",
                    slug: "tsunami",
                    route: "/module/tsunami",
                    camera: "tsunami_focus",
                    levels: {
                        l1: { id: "summary", label: "Summary" },
                        l2: { id: "architecture", label: "Architecture" },
                        l3: { id: "decisions", label: "Key Decisions" },
                        l4: { id: "evidence", label: "Evidence" },
                    },
                },
                {
                    id: "yama_momo",
                    label: "Yama Momo Website",
                    slug: "yama-momo",
                    route: "/module/yama-momo",
                    camera: "yama_momo_focus",
                    levels: {
                        l1: { id: "summary", label: "Summary" },
                        l2: { id: "architecture", label: "Architecture" },
                        l3: { id: "decisions", label: "Key Decisions" },
                        l4: { id: "evidence", label: "Evidence" },
                    },
                },
            ],
        },
    },
}
