"use client"

import { PiXDuotone } from "react-icons/pi"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import { AnimatePresence, motion as m } from "motion/react"
import Image from "next/image"
import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Media_Modal({ item, onClose }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!item) return

        const originalHtmlOverflow = document.documentElement.style.overflow
        const originalBodyOverflow = document.body.style.overflow

        document.documentElement.style.overflow = "hidden"
        document.body.style.overflow = "hidden"

        return () => {
            document.documentElement.style.overflow = originalHtmlOverflow
            document.body.style.overflow = originalBodyOverflow
        }
    }, [item])

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {item && (
                <m.div
                    className="media_modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="media_backdrop" onClick={onClose} />

                    <m.div
                        className="media_content"
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.35 }}
                    >
                        <button className="media_close" onClick={onClose}>
                            <PiXDuotone className="size-6 md:size-8 lg:size-10" />
                        </button>

                        <div className="media_inner my-4 flex flex-col items-center">
                            {item.type === "image" && (
                                <Image
                                    src={item.src}
                                    alt={item.alt || ""}
                                    width={1600}
                                    height={900}
                                    className="media_asset"
                                />
                            )}

                            {item.type === "video" && (
                                <video
                                    src={item.src}
                                    className="media_asset"
                                    autoPlay
                                    muted
                                    loop
                                    controls
                                    playsInline
                                />
                            )}
                        </div>

                        <div className="flex flex-col items-center text-center">
                            {item.label && (
                                <Headings
                                    as="h6"
                                    className="media_label"
                                    text={item.label}
                                />
                            )}
                            {item.alt && (
                                <Paragraph
                                    className="media_caption"
                                    text={item.alt}
                                />
                            )}
                        </div>
                    </m.div>
                </m.div>
            )}
        </AnimatePresence>,
        document.body
    )
}
