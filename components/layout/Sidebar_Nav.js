"use client"

import Link from "next/link"
import { SIDEBAR_NAV } from "@/lib/sidebar_nav"
import { usePathname, useRouter } from "next/navigation"
import Sidebar_Section from "@/components/layout/Sidebar_Section"
import Sidebar_Back_Link from "@/components/layout/Sidebar_Back_Link"

function getContext(pathname) {
    if (pathname === "/map") return "map"
    if (pathname === "/systems") return "systems"
    if (pathname.startsWith("/module")) return "module"
    return "static"
}

export default function Sidebar_Nav({ onHoverItem, onLeaveItem }) {
    const pathname = usePathname()
    const router = useRouter()
    const context = getContext(pathname)

    return (
        <nav className="fixed right-[var(--space-small)] top-[var(--space-small)] md:right-[var(--space-medium)] md:top-[var(--space-medium)] lg:right-[var(--space-large)] lg:top-[var(--space-large)] z-50 space-y-6">
            {/* MAP: homepage links ONLY */}
            {context === "map" && (
                <div className="flex flex-col items-end">
                    <p className="paragraph_tiny w-32 text-right opacity-60">
                        {SIDEBAR_NAV.homepage.label}
                    </p>

                    <ul className="flex flex-col items-end mt-1">
                        {SIDEBAR_NAV.homepage.items.map((item) => (
                            <Link
                                key={item.id}
                                href={item.route}
                                className="paragraph hover:opacity-80 transition text-right"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            )}

            {/* SYSTEMS: only on /systems and /module */}
            {(context === "systems" || context === "module") && (
                <>
                    {Object.values(SIDEBAR_NAV.systems).map((group) => (
                        <Sidebar_Section
                            key={group.id}
                            group={group}
                            pathname={pathname}
                            context={context}
                            onHoverItem={onHoverItem}
                            onLeaveItem={onLeaveItem}
                            onNavigate={(route) => router.push(route)}
                        />
                    ))}

                    {/* Global navigation actions */}
                    {SIDEBAR_NAV.globalActions.some((a) =>
                        a.showOn.includes(context)
                    ) && (
                        <div className="flex flex-col items-end mt-4">
                            <p className="paragraph_tiny w-32 text-right opacity-60">
                                Navigation
                            </p>

                            <div className="flex flex-col items-end leading-normal md:leading-snug lg:leading-tight mt-1">
                                {SIDEBAR_NAV.globalActions
                                    .filter((a) => a.showOn.includes(context))
                                    .map((action) => (
                                        <Sidebar_Back_Link
                                            key={action.id}
                                            to={action.route}
                                            label={action.label}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </nav>
    )
}
