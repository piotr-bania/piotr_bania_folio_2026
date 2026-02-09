"use client"

import { motion as m } from "motion/react"
import { corner_sentence_variant } from "@/animations/Text_Variants"
import { useIntro } from "@/providers/Intro_Provider"

export default function Corner_Sentence() {
    const { introState, canvasReady } = useIntro()
    const isTextReady = introState === "done" && canvasReady

    return (
        <div className="fixed right-[var(--space-small)] bottom-[var(--space-small)] md:right-[var(--space-medium)] md:bottom-[var(--space-medium)] lg:right-[var(--space-large)] lg:bottom-[var(--space-large)] z-50">
            <m.p
                className="paragraph_tiny w-48 md:w-54 lg:w-60 text-right"
                variants={corner_sentence_variant}
                initial="hidden"
                animate={isTextReady ? "visible" : "hidden"}
            >
                This map reflects how I design, build, and reason about systems
            </m.p>
        </div>
    )
}
