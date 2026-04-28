export const EZINVOICES = {
    slug: "ezinvoices",
    title: "EZinvoices",
    category: "production",

    stack: ["Next.js", "Supabase", "Stripe"],

    root: {
        title: "Invoicing SaaS built from real business pain",
        live: {
            label: "Open EZinvoices",
            href: "https://ezinvoices.co.uk",
        },
        description: `
            EZinvoices is a production invoicing SaaS I originally built to solve my own daily invoicing problem inside Bespoke Programming. I did not need full accounting software. I needed a focused system for creating branded invoices, managing clients, tracking payment status, and giving clients a clean way to view and pay invoices. That internal tool evolved into a SaaS product with real users, Stripe billing, and ongoing product development.
        `,
        media: [
            {
                id: "ezinvoices_dashboard",
                label: "Admin dashboard",
                type: "image",
                src: "/media/systems/ezinvoices/demo_1.png",
                alt: "EZinvoices admin dashboard showing invoice and revenue overview.",
                interaction: "glsl_plane_popup",
            },
            {
                id: "ezinvoices_client_portal",
                label: "Client portal",
                type: "image",
                src: "/media/systems/ezinvoices/demo_2.png",
                alt: "EZinvoices client portal where clients can view and pay invoices.",
                interaction: "glsl_plane_popup",
            },
        ],
        responsibilities: [
            "Invoice creation and lifecycle tracking",
            "Client and invoice data management",
            "Branded invoice presentation",
            "Client portal for invoice viewing and payment",
            "Subscription billing via Stripe",
        ],
        status: {
            state: "Live",
            notes: [
                "Used daily for Bespoke Programming invoicing",
                "Used by real users",
                "Stripe billing running in production",
                "Continuously improved from real usage",
            ],
        },
    },

    architecture: {
        title: "Two-sided SaaS architecture",
        description: `
            EZinvoices is built as a two-sided SaaS application. The admin dashboard is the core operating system for business owners.
            The client portal is the external-facing layer where clients can view invoices, check status, and complete payment. The system uses Next.js for the application layer, Supabase for authentication, data storage and row-level security, and Stripe for subscription billing.
        `,
        components: [
            "Admin dashboard for users managing clients and invoices",
            "Client portal for invoice viewing and payment",
            "Authentication and onboarding flow",
            "Invoice and client data models",
            "Dashboard and reporting layer",
            "Stripe subscription and billing integration",
            "Supabase row-level security for account data isolation",
        ],
        media: [
            {
                id: "ezinvoices_architecture_flow",
                label: "System flow",
                type: "image",
                src: "/media/systems/ezinvoices/demo_1.png",
                alt: "EZinvoices architecture showing admin dashboard, Supabase, Stripe and client portal.",
                interaction: "glsl_plane_popup",
            },
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Started as a focused internal tool to remove my own invoicing friction",
            "Avoided full accounting scope because the problem was invoice control, not accounting complexity",
            "Separated admin dashboard and client portal to support both business owner and client workflows",
            "Kept business rules server-side for consistency and predictable invoice state",
            "Used Stripe subscriptions to turn the product into a recurring-revenue SaaS",
            "Prioritised long-term maintainability over shipping a bloated feature set",
        ],
    },

    evidence: {
        title: "Production evidence",
        description: `
            EZinvoices is not a portfolio concept. It is a live SaaS product used in real business operations, including my own company invoicing workflow.
        `,
        items: [
            "Used daily inside Bespoke Programming",
            "Real users creating and managing invoices",
            "Stripe billing and subscription flow running in production",
            "Live dashboard showing production invoice data",
            "Ongoing iteration based on real usage and product feedback",
        ],
        media: [
            {
                id: "ezinvoices_invoice_preview",
                label: "Invoice preview",
                type: "image",
                src: "/media/systems/ezinvoices/demo_2.png",
                alt: "Branded EZinvoices invoice preview.",
                interaction: "glsl_plane_popup",
            },
        ],
    },
}
