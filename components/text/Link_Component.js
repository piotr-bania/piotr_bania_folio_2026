"use client"

import Link from "next/link"
import { motion as m } from "motion/react"
import { useIntro } from "@/providers/Intro_Provider"
import { paragraph_variant } from "@/animations/Text_Variants"

const Link_Component = ({
    href,
    text,
    className,
    skipIntro = false,
    external = false,
}) => {
    const { introState, canvasReady } = useIntro()
    const isTextReady = skipIntro || (introState === "done" && canvasReady)

    if (!text || !href) return null

    const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {}

    return (
        <m.div
            initial="hidden"
            animate={isTextReady ? "visible" : "hidden"}
            variants={paragraph_variant}
            className={className}
            suppressHydrationWarning
            {...linkProps}
        >
            <Link href={href} {...linkProps}>
                {text}{" "}
            </Link>{" "}
        </m.div>
    )
}

export default Link_Component
