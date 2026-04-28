"use client"

import { motion as m } from "motion/react"
import { card_image_variant } from "@/animations/Card_Variants"
import Image from "next/image"

export default function Media_Grid({ media = [] }) {
    if (!Array.isArray(media) || media.length === 0) return null

    const handleOpen = (item) => {
        // Future GLSL modal hook
    }

    return (
        <m.div
            initial="hidden"
            animate="visible"
            variants={card_image_variant}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4"
        >
            {media.map((m) => {
                if (!m?.src) return null

                return (
                    <button
                        key={m.id}
                        className="card"
                        onClick={() => handleOpen(m)}
                    >
                        <Image
                            src={m.src}
                            alt={m.alt || ""}
                            fill
                            className="card_image"
                        />
                    </button>
                )
            })}
        </m.div>
    )
}
