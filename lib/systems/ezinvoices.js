export const EZINVOICES = {
    slug: "ezinvoices",
    title: "EZinvoices",
    category: "production",

    stack: ["Next.js", "Supabase", "Stripe"],

    root: {
        title: "Production invoicing system",
        description: `
EZinvoices is a production-grade invoicing system designed for freelancers
and small businesses that need reliable billing without accounting bloat.
It handles the full invoice lifecycle - issuance, delivery, reminders,
payments, and status tracking - as an operational system, not a document tool.
        `,
        responsibilities: [
            "Invoice generation and lifecycle management",
            "Client-facing invoice access",
            "Automated reminders and status changes",
            "Payment processing via Stripe",
        ],
        status: {
            state: "Live",
            notes: [
                "Used by real customers",
                "Recurring subscriptions active",
                "Stripe payments in production",
                "Continuously deployed and maintained",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
EZinvoices focuses exclusively on billing and payment workflows.
The system is intentionally narrow in scope to remain predictable,
auditable, and easy to reason about in production.
        `,
        highlights: [
            "End-to-end invoice lifecycle",
            "Client portals per business",
            "Automated reminders",
            "Minimal, opinionated feature set",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
The system is built as a modular Next.js application with Supabase
providing authentication, database access, and row-level security.
Business logic is server-driven to ensure consistency and auditability.
        `,
        components: [
            "Authentication & onboarding",
            "Invoice engine",
            "Client portal",
            "Reminder scheduler",
            "Stripe integration layer",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Billing-only scope - no accounting features",
            "Server-driven logic over client state",
            "Explicit invoice auditability",
            "Stripe as the single source of payment truth",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "Live users issuing invoices",
            "Recurring subscriptions active",
            "Real payment flows via Stripe",
            "Deployed and monitored in production",
        ],
    },
}
