"use client"

import { motion as m } from "motion/react"
import { useIntro } from "@/providers/Intro_Provider"
import {
    heading_1_variant,
    heading_2_variant,
    heading_3_variant,
    heading_4_variant,
    heading_5_variant,
    heading_6_variant,
} from "@/animations/Text_Variants"

const variantsMap = {
    h1: heading_1_variant,
    h2: heading_2_variant,
    h3: heading_3_variant,
    h4: heading_4_variant,
    h5: heading_5_variant,
    h6: heading_6_variant,
}

const Headings = ({ as = "h2", text, className }) => {
    const Tag = m[as] || m.h2
    const variants = variantsMap[as] || heading_2_variant
    const { introState, canvasReady } = useIntro()
    const isTextReady = introState === "done" && canvasReady

    if (!text) return null

    return (
        <Tag
            initial="hidden"
            animate={isTextReady ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {text}
        </Tag>
    )
}

export default Headings
