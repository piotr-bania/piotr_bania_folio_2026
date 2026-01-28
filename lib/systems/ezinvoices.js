export const EZINVOICES = {
    slug: "ezinvoices",
    title: "EZinvoices",
    category: "production",

    stack: ["Next.js", "Supabase", "Stripe"],

    root: {
        title: "Production invoicing system",
        description: `
EZinvoices is a production-grade invoicing system built from real operational
frustration experienced while running a web business. It focuses on creating,
managing, and tracking invoices without the overhead and abstraction of
full accounting software.

The system prioritises clarity, ownership, and predictable billing workflows,
acting as an operational control layer rather than a document generator.
        `,
        responsibilities: [
            "Invoice creation and lifecycle tracking",
            "Client and invoice data management",
            "Branded invoice presentation",
            "Subscription billing via Stripe",
        ],
        status: {
            state: "Live",
            notes: [
                "Used by real users",
                "Active paid subscriptions",
                "Stripe billing running in production",
                "Under continuous development and iteration",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
EZinvoices is intentionally narrow in scope. It focuses on invoicing and
revenue visibility only, avoiding accounting features that increase
complexity and reduce transparency.

The system is designed to scale through clarity rather than feature volume.
        `,
        highlights: [
            "Invoice and client CRUD",
            "Branded invoice templates",
            "Revenue and status overview dashboard",
            "Opinionated, billing-only scope",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
EZinvoices is built as a server-driven Next.js application using Supabase
for authentication, persistence, and row-level security.

Business rules are enforced on the server to ensure consistency,
predictability, and future auditability as the system grows.
        `,
        components: [
            "Authentication and onboarding flow",
            "Invoice and client data models",
            "Dashboard and reporting layer",
            "Stripe subscription and billing integration",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Strict focus on invoicing, not accounting",
            "Server-side business logic over client state",
            "Subscription-first monetisation model",
            "Designing for long-term maintainability over speed",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "Real users creating and managing invoices",
            "Active Stripe subscriptions and billing events",
            "Live dashboard showing production data",
            "Ongoing iteration based on real usage",
        ],
    },
}
