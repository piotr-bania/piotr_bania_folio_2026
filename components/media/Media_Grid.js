"use client"

import { useState } from "react"
import { motion as m } from "motion/react"
import { PiPlayCircleDuotone, PiArrowsOutSimpleDuotone } from "react-icons/pi"
import { card_image_variant } from "@/animations/Card_Variants"
import Image from "next/image"
import Media_Modal from "@/components/media/Media_Modal"

export default function Media_Grid({ media = [] }) {
    const [activeMedia, setActiveMedia] = useState(null)

    if (!Array.isArray(media) || media.length === 0) return null

    const handleOpen = (item) => {
        setActiveMedia(item)
    }

    const handleClose = () => {
        setActiveMedia(null)
    }

    return (
        <m.div
            initial="hidden"
            animate="visible"
            variants={card_image_variant}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4"
        >
            {media.map((item) => {
                if (!item?.src) return null

                return (
                    <button
                        key={item.id}
                        className="card group"
                        onClick={() => handleOpen(item)}
                    >
                        {/* Image */}
                        {item.type === "image" && (
                            <Image
                                src={item.src}
                                alt={item.alt || ""}
                                fill
                                className="card_image"
                            />
                        )}
                        {/* Video */}
                        {item.type === "video" && (
                            <video
                                src={item.src}
                                alt={item.alt || ""}
                                // muted
                                // loop
                                // playsInline
                                // autoPlay
                                className="card_image"
                            />
                        )}
                        {/* Overlay */}
                        <div className="card_overlay">
                            {item.type === "video" ? (
                                <PiPlayCircleDuotone className="card_icon primary size-6" />
                            ) : (
                                <PiArrowsOutSimpleDuotone className="card_icon primary size-6" />
                            )}
                        </div>
                    </button>
                )
            })}

            <Media_Modal item={activeMedia} onClose={handleClose} />
        </m.div>
    )
}
