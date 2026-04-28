export const HOSPITALITY_PLATFORM = {
    slug: "hospitality-platform",
    title: "Hospitality Platform",
    category: "production",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Multi-tenant hospitality operating system",
        description: `
Hospitality Platform is a multi-tenant system designed to manage and operate
multiple restaurant projects from a single unified architecture.

It acts as the underlying layer behind client websites, admin panels,
and operational tools, enabling consistent development, deployment,
and iteration across hospitality projects.
        `,
        responsibilities: [
            "Multi-tenant data architecture",
            "Shared backend for multiple restaurant systems",
            "Admin and content management layer",
            "Foundation for booking and operational tools",
        ],
        status: {
            state: "Active development",
            notes: [
                "Currently powering Yaki Sarsa system",
                "Designed for scaling across multiple clients",
                "Used as foundation for Nuvori integration",
                "Continuously evolving based on real usage",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
The platform abstracts common hospitality needs into a reusable system layer.
Instead of building isolated projects, it enables a structured and scalable
approach to developing restaurant systems.

Each client becomes a tenant within a shared architecture, allowing
faster iteration and consistent system behaviour.
        `,
        highlights: [
            "Multi-tenant architecture",
            "Reusable system components across clients",
            "Shared data and media layer",
            "Foundation for future SaaS expansion",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
The platform is built using Next.js with Supabase providing authentication,
data storage, and row-level security across tenants.

Each tenant operates within isolated data boundaries while sharing
a unified system structure.
        `,
        components: [
            "Tenant-based data model",
            "Shared Supabase backend with RLS",
            "Admin interface per tenant",
            "Media and content management layer",
        ],
    },

    decisions: {
        title: "Key decisions",
        points: [
            "Building multi-tenant from the start",
            "Using Supabase for rapid backend iteration",
            "Separating platform logic from client UI",
            "Designing for reuse across future clients",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "Used in active client project (Yaki Sarsa)",
            "Handles real content and operational data",
            "Supports ongoing feature development",
            "Forms the base for multiple systems",
        ],
    },
}
