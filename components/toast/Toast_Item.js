"use client"

import { PiXDuotone } from "react-icons/pi"
import { card_variant } from "@/animations/Card_Variants"
import { motion as m, AnimatePresence } from "framer-motion"

export default function Toast_Item({ message, type, onClose }) {
    return (
        <m.div
            className={`toast_item toast_${type}`}
            aria-live="polite"
            role="status"
            variants={card_variant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <span>{message}</span>
            <PiXDuotone size="20" onClick={onClose} className="toast_close" />
        </m.div>
    )
}
