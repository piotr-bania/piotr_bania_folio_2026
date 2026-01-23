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
                        l3: { id: "concepts", label: "Concepts" },
                        l4: { id: "prototypes", label: "Prototypes" },
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
                    label: "AuditReady",
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

        exploratory: {
            id: "exploratory",
            label: "Exploratory Systems",
            items: [
                {
                    id: "bespoke_crm",
                    label: "BespokeCRM",
                    slug: "bespoke-crm",
                    route: "/module/bespoke-crm",
                    camera: "bespoke_crm_focus",
                    levels: {
                        l1: { id: "summary", label: "Summary" },
                        l2: { id: "architecture", label: "Architecture" },
                        l3: { id: "experiments", label: "Experiments" },
                        l4: { id: "outcomes", label: "Outcomes" },
                    },
                },

                {
                    id: "ken_tsunami",
                    label: "Tsunami Website",
                    slug: "ken-tsunami",
                    route: "/module/ken-tsunami",
                    camera: "ken_websites_focus",
                    levels: {
                        l1: { id: "summary", label: "Summary" },
                        l2: { id: "architecture", label: "Architecture" },
                        l3: { id: "decisions", label: "Key Decisions" },
                        l4: { id: "evidence", label: "Evidence" },
                    },
                },

                {
                    id: "ken_yama_momo",
                    label: "Yama Momo Website",
                    slug: "ken-yama-momo",
                    route: "/module/ken-yama-momo",
                    camera: "ken_websites_focus",
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
