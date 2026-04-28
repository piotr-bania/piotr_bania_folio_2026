import { NUVORI } from "@/lib/systems/nuvori"
import { INTERFACE } from "@/lib/interface/interface"
import { EZINVOICES } from "@/lib/systems/ezinvoices"
import { YAKI_SARSA } from "@/lib/systems/yaki_sarsa"
import { AUDIT_READY } from "@/lib/systems/audit_ready"
import { BESPOKE_CRM } from "@/lib/systems/bespoke_crm"
import { TSUNAMI_CLAPHAM } from "@/lib/systems/tsunami_clapham"
import { YAMA_MOMO_DULWICH } from "@/lib/systems/yama_momo_dulwich"
import { HOSPITALITY_PLATFORM } from "@/lib/systems/hospitality_platform"

export const SYSTEMS = [
    INTERFACE,

    // Core systems I built and operate
    EZINVOICES,
    NUVORI,
    HOSPITALITY_PLATFORM,

    // Active client system (very important)
    YAKI_SARSA,

    // Proven client systems
    TSUNAMI_CLAPHAM,
    YAMA_MOMO_DULWICH,

    // Internal systems (disabled for now)
    BESPOKE_CRM,
    AUDIT_READY,
]

export function getSystemBySlug(slug) {
    return SYSTEMS.find((s) => s.slug === slug)
}
