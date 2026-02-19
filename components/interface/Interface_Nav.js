"use client"

import {
    nav_container_variant,
    label_variant,
} from "@/animations/Text_Variants"
import { motion as m } from "motion/react"
import { usePathname } from "next/navigation"
import { SIDEBAR_NAV } from "@/lib/navigation/sidebar_nav"
import Sidebar_Back_Link from "@/components/layout/Sidebar_Back_Link"

function getContext(pathname) {
    if (pathname === "/map") return "map"
    if (pathname === "/systems") return "systems"
    return "interface"
}

export default function Interface_Nav() {
    const pathname = usePathname()
    const resolvedPath = pathname || ""
    const context = getContext(resolvedPath)
    const isModuleRoute = resolvedPath.startsWith("/module")
    const allowSystemsBack = isModuleRoute || context === "resume"

    const globalActions = SIDEBAR_NAV.globalActions.filter((action) => {
        if (action.id === "to_systems") return allowSystemsBack
        return action.showOn.includes(context)
    })

    return (
        <nav className="fixed right-[var(--space-small)] top-[var(--space-small)] md:right-[var(--space-medium)] md:top-[var(--space-medium)] lg:right-[var(--space-large)] lg:top-[var(--space-large)] z-50 print-hidden">
            <m.div
                variants={nav_container_variant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-end space-y-6"
            >
                {/* LABEL */}
                <m.p
                    variants={label_variant}
                    className="paragraph_tiny w-32 text-right opacity-60"
                >
                    Navigation
                </m.p>
                {/* GLOBAL ACTIONS */}
                <div className="flex flex-col items-end leading-normal md:leading-snug lg:leading-tight mt-1">
                    {globalActions.map((action) => (
                        <Sidebar_Back_Link
                            key={action.id}
                            to={action.route}
                            label={action.label}
                        />
                    ))}
                </div>
            </m.div>
        </nav>
    )
}
