import Link from "next/link"
import Image from "next/image"

export default function Logo() {
    return (
        <Link
            href="/"
            className="fixed left-[var(--space-small)] top-[var(--space-small)] md:left-[var(--space-medium)] md:top-[var(--space-medium)] lg:left-[var(--space-large)] lg:top-[var(--space-large)] z-50"
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
