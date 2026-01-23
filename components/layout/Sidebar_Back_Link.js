"use client"

import { useRouter } from "next/navigation"
import { PiArrowArcLeftDuotone, PiArrowLeftDuotone } from "react-icons/pi"
import Link from "next/link"

export default function Sidebar_Back_Link({ to = "/systems", label = "" }) {
    const router = useRouter()

    const Icon = label.includes("Map")
        ? PiArrowArcLeftDuotone
        : PiArrowLeftDuotone

    return (
        <Link
            href={to}
            onClick={() => router.push(to)}
            className="flex items-center gap-1"
        >
            <Icon className="secondary" />
            <span>{label}</span>
        </Link>
    )
}
