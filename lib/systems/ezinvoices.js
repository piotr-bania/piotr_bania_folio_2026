export const EZINVOICES = {
    slug: "ezinvoices",
    title: "EZinvoices",
    category: "production",

    stack: ["Next.js", "Supabase", "Stripe"],

    summary: {
        title: "Production invoicing system",
        description: `
      EZinvoices is a production-grade invoicing system built for
      freelancers and small businesses. It automates billing,
      reminders, and payment tracking while remaining intentionally
      minimal and transparent.
    `,
        highlights: [
            "Automated invoice lifecycle",
            "Client portals",
            "Payment reminders",
            "Stripe integration",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
      The system is built as a modular Next.js application backed
      by Supabase for authentication, database, and row-level security.
    `,
        components: [
            "Auth & onboarding",
            "Invoice engine",
            "Client portal",
            "Reminder scheduler",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "No feature bloat — billing only",
            "Server-driven logic over client state",
            "Explicit auditability of invoices",
            "Stripe as the single payment authority",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "Live users issuing invoices",
            "Recurring subscriptions active",
            "Real payment flows via Stripe",
            "Deployed and maintained continuously",
        ],
    },
}
