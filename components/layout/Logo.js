"use client"

import Link from "next/link"
import Image from "next/image"
import { useIntro } from "@/providers/Intro_Provider"

export default function Logo() {
    const { introState } = useIntro()
    const isHidden = introState !== "done"

    return (
        <Link
            href="/map"
            className={`fixed left-[var(--space-small)] top-[var(--space-small)] md:left-[var(--space-medium)] md:top-[var(--space-medium)] lg:left-[var(--space-large)] lg:top-[var(--space-large)] z-50 ${isHidden ? "opacity-0" : "opacity-100"}`}
            data-intro-logo
        >
            <Image
                src="/svg/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                priority
            />
        </Link>
    )
}
