"use client"

import { motion as m } from "motion/react"
import { link_variant, level_link_variant } from "@/animations/Text_Variants"
import Link from "next/link"

export default function Sidebar_Item({
    item,
    active,
    isRootModule,
    onHoverItem,
    onLeaveItem,
    onNavigate,
}) {
    const isLevel = item.route.split("/").length > 3
    const variants = isLevel ? level_link_variant : link_variant

    return (
        <m.li variants={variants}>
            <Link
                onMouseEnter={() => onHoverItem?.(item)}
                onMouseLeave={() => onLeaveItem?.(item)}
                onClick={(e) => {
                    e.preventDefault()
                    onNavigate?.(item.route)
                }}
                href={item.route}
                className="group cursor-pointer flex items-center justify-end text-right"
            >
                <span
                    className={`paragraph leading-normal md:leading-snug lg:leading-tight transition ${isRootModule ? "underline" : ""} ${active ? "text-[var(--color-primary)]" : ""}`}
                >
                    {item.label}
                </span>
            </Link>
        </m.li>
    )
}
