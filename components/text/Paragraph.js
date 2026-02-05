"use client"

import { motion as m } from "motion/react"
import { paragraph_variant } from "@/animations/Text_Variants"

const Paragraph = ({ text, className }) => {
    if (!text) return null

    return (
        <m.p
            initial="hidden"
            animate="visible"
            variants={paragraph_variant}
            className={className}
        >
            {text}
        </m.p>
    )
}

export default Paragraph
