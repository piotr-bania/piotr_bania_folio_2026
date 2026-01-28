export const AUDIT_READY = {
    slug: "audit-ready",
    title: "Audit Ready",
    category: "operational",

    stack: ["Next.js", "Supabase"],

    root: {
        title: "Operational compliance and audit system",
        description: `
Audit Ready is an operational compliance system designed to keep organisations
in a continuous state of audit readiness. Instead of reacting to audits,
the system enforces structure, ownership, and visibility over sensitive
documents and compliance assets.
        `,
        responsibilities: [
            "Centralised compliance document management",
            "Clear ownership and responsibility assignment",
            "Audit readiness visibility",
            "Controlled access to sensitive data",
        ],
        status: {
            state: "In development",
            notes: [
                "Authentication and organisation onboarding implemented",
                "Schemas and row-level security in place",
                "Designed around real audit and compliance workflows",
                "Positioned for high-trust operational use",
            ],
        },
    },

    summary: {
        title: "System summary",
        description: `
Audit Ready removes uncertainty from audits by treating compliance
as a continuous operational state rather than a periodic task.

The system is intentionally restrained, explicit, and predictable,
reflecting the environments in which it operates.
        `,
        highlights: [
            "Organisation-scoped compliance model",
            "Clear accountability per document",
            "Audit readiness at-a-glance",
            "Built for regulated environments",
        ],
    },

    architecture: {
        title: "System architecture",
        description: `
Audit Ready is built as a server-driven Next.js application with Supabase
handling authentication, persistence, and strict row-level security.

The architecture prioritises traceability, data integrity, and
permission boundaries suitable for compliance-heavy organisations.
        `,
        components: [
            "Authentication and organisation setup",
            "Role-based access control",
            "Compliance document registry",
            "Readiness and visibility layer",
        ],
    },

    controls: {
        title: "Operational controls",
        description: `
Controls define how compliance is enforced inside the system.
They ensure documents remain valid, owned, and accessible
only to authorised roles.
        `,
        items: [
            "Organisation-level data isolation",
            "Role-based permissions and access",
            "Document ownership assignment",
            "Expiry tracking and accountability",
        ],
    },

    evidence: {
        title: "Production evidence",
        items: [
            "Compliance-driven schemas and RLS policies implemented",
            "Authentication and organisation logic in place",
            "Built around real audit workflows",
            "Designed for long-term operational ownership",
        ],
    },
}
