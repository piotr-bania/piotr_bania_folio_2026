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

function getActiveSystem(pathname) {
    const match = pathname.match(/^\/module\/([^/]+)/)
    if (!match) return null

    const slug = match[1]

    for (const group of Object.values(SIDEBAR_NAV.systems)) {
        const item = group.items.find((i) => i.slug === slug)
        if (item) {
            return { group, item }
        }
    }

    return null
}

export default function Sidebar_Nav({ onHoverItem, onLeaveItem }) {
    const pathname = usePathname()
    const router = useRouter()
    const context = getContext(pathname)
    const activeSystem = context === "module" ? getActiveSystem(pathname) : null

    return (
        <nav className="fixed right-[var(--space-small)] top-[var(--space-small)] md:right-[var(--space-medium)] md:top-[var(--space-medium)] lg:right-[var(--space-large)] lg:top-[var(--space-large)] z-50 space-y-6">
            {/* MAP */}
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

            {/* SYSTEMS OVERVIEW */}
            {context === "systems" && (
                <>
                    {Object.values(SIDEBAR_NAV.systems).map((group) => (
                        <Sidebar_Section
                            key={group.id}
                            group={group}
                            pathname={pathname}
                            context="systems"
                            onHoverItem={onHoverItem}
                            onLeaveItem={onLeaveItem}
                            onNavigate={(route) => router.push(route)}
                        />
                    ))}
                </>
            )}

            {/* MODULE – FOCUSED */}
            {context === "module" && activeSystem && (
                <Sidebar_Section
                    group={{
                        ...activeSystem.group,
                        items: [activeSystem.item],
                    }}
                    pathname={pathname}
                    context="module"
                    onHoverItem={onHoverItem}
                    onLeaveItem={onLeaveItem}
                    onNavigate={(route) => router.push(route)}
                />
            )}

            {/* GLOBAL NAVIGATION */}
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
        </nav>
    )
}
