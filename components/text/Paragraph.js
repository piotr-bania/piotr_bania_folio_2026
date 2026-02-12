"use client"

import { motion as m } from "motion/react"
import { paragraph_variant } from "@/animations/Text_Variants"
import { useIntro } from "@/providers/Intro_Provider"

const Paragraph = ({ text, className, skipIntro = false }) => {
    const { introState, canvasReady } = useIntro()
    const isTextReady = skipIntro || (introState === "done" && canvasReady)

    if (!text) return null

    return (
        <m.p
            initial="hidden"
            animate={isTextReady ? "visible" : "hidden"}
            variants={paragraph_variant}
            className={className}
            suppressHydrationWarning
        >
            {text}
        </m.p>
    )
}

export default Paragraph
