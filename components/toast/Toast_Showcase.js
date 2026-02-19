"use client"

import { PiXDuotone } from "react-icons/pi"
import { card_variant } from "@/animations/Card_Variants"
import { motion as m, AnimatePresence } from "framer-motion"

export default function Toast_Showcase() {
    return (
        <div className="toast_showcase" aria-hidden="true">
            <AnimatePresence>
                <m.div
                    key="default"
                    className="toast_item toast_default"
                    variants={card_variant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <span>Default message (showcase)</span>
                    <PiXDuotone size="20" className="toast_close" />
                </m.div>

                <m.div
                    key="success"
                    className="toast_item toast_success"
                    variants={card_variant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <span>Success message (showcase)</span>
                    <PiXDuotone size="20" className="toast_close" />
                </m.div>

                <m.div
                    key="error"
                    className="toast_item toast_error"
                    variants={card_variant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <span>Error message (showcase)</span>
                    <PiXDuotone size="20" className="toast_close" />
                </m.div>
            </AnimatePresence>
        </div>
    )
}
