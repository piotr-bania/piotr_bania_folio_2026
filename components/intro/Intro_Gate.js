"use client"

import { motion as m } from "motion/react"
import { useIntro } from "@/providers/Intro_Provider"
import { gateVariants } from "@/animations/Intro_Variants"

export default function Intro_Gate({ children }) {
    const { introState } = useIntro()

    return (
        <m.div
            variants={gateVariants}
            initial="hidden"
            animate={introState === "done" ? "visible" : "hidden"}
        >
            {children}
        </m.div>
    )
}
