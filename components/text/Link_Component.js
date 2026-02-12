"use client"

import Link from "next/link"
import { motion as m } from "motion/react"
import { useIntro } from "@/providers/Intro_Provider"
import { paragraph_variant } from "@/animations/Text_Variants"

const normalizeExternalHref = (value) => {
    const trimmed = value.trim()

    if (
        trimmed.startsWith("http://") ||
        trimmed.startsWith("https://") ||
        trimmed.startsWith("mailto:") ||
        trimmed.startsWith("tel:")
    ) {
        return trimmed
    }

    return `https://${trimmed}`
}

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

    const resolvedHref = external
        ? normalizeExternalHref(href)
        : href

    return (
        <m.div
            initial="hidden"
            animate={isTextReady ? "visible" : "hidden"}
            variants={paragraph_variant}
            className={className}
            suppressHydrationWarning
        >
            <Link href={resolvedHref} {...linkProps}>
                {text}
            </Link>
        </m.div>
    )
}

export default Link_Component
