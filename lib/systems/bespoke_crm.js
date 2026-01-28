export const BESPOKE_CRM = {
    slug: "bespoke-crm",
    title: "Bespoke CRM",
    category: "internal",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Internal revenue and outreach operating system",
        description: `
Bespoke CRM is an internal operating system built to manage outreach,
prospects, and recurring revenue as a solo founder.

It replaces generic CRMs with a system tailored to daily execution,
follow-ups, and visibility into real business momentum.
        `,
        responsibilities: [
            "Prospect and outreach tracking",
            "Follow-up sequencing and discipline",
            "Revenue and retainer visibility",
            "Operational clarity for daily execution",
        ],
        status: {
            state: "Active use",
            notes: [
                "Used daily to manage outreach and follow-ups",
                "Tracks real prospects and live deals",
                "Continuously refined based on usage",
                "Built to support solo-founder workflows",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
Bespoke CRM is intentionally minimal and execution-focused.
It exists to support consistent action rather than reporting
or sales theatre.

The system prioritises clarity, speed, and decision-making
over configurability.
        `,
        highlights: [
            "Prospect lifecycle tracking",
            "Explicit follow-up stages",
            "Notes and priority management",
            "Revenue visibility per deal",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
The CRM is built as a lightweight Next.js application with Supabase
providing persistence and access control.

The architecture is intentionally simple, enabling rapid iteration
as outreach strategies evolve.
        `,
        components: [
            "Prospect and deal data models",
            "Outreach and follow-up state machine",
            "Revenue and retainer tracking layer",
            "Internal dashboards and views",
        ],
    },

    operations: {
        title: "Operational workflow",
        description: `
Operations define how the CRM is used day-to-day.
The system enforces structure without friction, ensuring
that follow-ups and decisions are never lost.
        `,
        items: [
            "Daily prospect outreach tracking",
            "Follow-up sequencing (FU1, FU2, FU3)",
            "Status-driven decision making",
            "Notes captured at point of interaction",
        ],
    },

    outcomes: {
        title: "Operational outcomes",
        items: [
            "Consistent daily outreach execution",
            "Clear visibility into deal pipeline",
            "Reduced cognitive load during prospecting",
            "Improved follow-up reliability and discipline",
        ],
    },
}
