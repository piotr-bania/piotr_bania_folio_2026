"use client"

import { AnimatePresence, motion as m } from "motion/react"
import { usePathname } from "next/navigation"
import { card_variant } from "@/animations/Card_Variants"

export default function Card_Presence({ children }) {
    const pathname = usePathname()
    const key = pathname || "module"

    return (
        <AnimatePresence mode="wait" initial={true}>
            <m.div
                key={key}
                variants={card_variant}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ opacity: 0 }}
            >
                {children}
            </m.div>
        </AnimatePresence>
    )
}
