"use client"

import Link from "next/link"

export default function Sidebar_Item({
    item,
    active,
    onHoverItem,
    onLeaveItem,
    onNavigate,
}) {
    return (
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
            {/* Label */}
            <span
                className={`paragraph leading-normal md:leading-snug lg:leading-tight transition ${active ? "underline text-[var(--color-primary)]" : ""}`}
            >
                {item.label}
            </span>
        </Link>
    )
}
