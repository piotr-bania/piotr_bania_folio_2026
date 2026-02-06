"use client"

import { motion as m } from "motion/react"
import { nav_link_variant } from "@/animations/Text_Variants"
import { useRouter } from "next/navigation"
import { PiArrowArcLeftDuotone, PiArrowLeftDuotone } from "react-icons/pi"
import Link from "next/link"

export default function Sidebar_Back_Link({ to = "/systems", label = "" }) {
    const router = useRouter()

    const Icon = label.includes("Map")
        ? PiArrowArcLeftDuotone
        : PiArrowLeftDuotone

    return (
        <m.div variants={nav_link_variant}>
            <Link
                href={to}
                onClick={() => router.push(to)}
                className="flex items-center gap-1 paragraph transition text-right"
            >
                <Icon className="secondary" />
                <span>{label}</span>
            </Link>
        </m.div>
    )
}
