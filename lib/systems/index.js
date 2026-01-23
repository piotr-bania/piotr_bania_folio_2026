import { EZINVOICES } from "@/lib/systems/ezinvoices"
// import { AUDIT_READY } from "@/lib/systems/audit_ready"
// import { NUVORI } from "@/lib/systems/nuvori"
// import { BESPOKE_CRM } from "@/lib/systems/bespoke_crm"
// import { TSUNAMI_CLAPHAM } from "@/lib/systems/tsunami_clapham"
// import { YAMA_MOMO_DULWICH } from "@/lib/systems/yama_momo_dulwich"

export const SYSTEMS = [
    EZINVOICES,
    // AUDITREADY,
    // NUVORI,
    // BESPOKECRM,
    // TSUNAMI_CLAPHAM,
    // YAMA_MOMO_DULWICH,
]

export function getSystemBySlug(slug) {
    return SYSTEMS.find((s) => s.slug === slug)
}
