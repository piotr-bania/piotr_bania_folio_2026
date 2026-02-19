"use client"

import {
    label_variant,
    link_variant,
    list_container_variant,
    nav_container_variant,
    nav_link_variant,
} from "@/animations/Text_Variants"
import { motion as m } from "motion/react"
import { SIDEBAR_NAV } from "@/lib/navigation/sidebar_nav"
import { useIntro } from "@/providers/Intro_Provider"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
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
    const { introState, canvasReady } = useIntro()
    const isTextReady = introState === "done" && canvasReady
    const pathname = usePathname()
    const router = useRouter()
    const resolvedPath = pathname || ""
    const context = getContext(resolvedPath)
    const isModuleRoute = resolvedPath.startsWith("/module")
    const activeSystem =
        context === "module" ? getActiveSystem(resolvedPath) : null

    const handleResume = () => {
        router.push(SIDEBAR_NAV.resume.route)
    }

    const globalActions = SIDEBAR_NAV.globalActions.filter((action) => {
        if (action.id === "to_systems") return Boolean(isModuleRoute)
        return action.showOn.includes(context)
    })

    return (
        <nav className="fixed right-[var(--space-small)] top-[var(--space-small)] md:right-[var(--space-medium)] md:top-[var(--space-medium)] lg:right-[var(--space-large)] lg:top-[var(--space-large)] z-50 space-y-6">
            {/* MAP */}
            {context === "map" && (
                <m.div
                    variants={list_container_variant}
                    initial="hidden"
                    animate={isTextReady ? "visible" : "hidden"}
                    exit="exit"
                    className="flex flex-col items-end"
                >
                    {/* RESUME LINK */}
                    <m.button
                        onClick={handleResume}
                        variants={nav_link_variant}
                        className="paragraph hover:opacity-80 transition text-right mb-6"
                    >
                        {SIDEBAR_NAV.resume.label}
                    </m.button>

                    {/* LABEL */}
                    <m.p
                        variants={label_variant}
                        className="paragraph_tiny w-32 text-right opacity-60"
                    >
                        {SIDEBAR_NAV.homepage.label}
                    </m.p>

                    {/* HOME LINKS */}
                    <m.ul className="flex flex-col items-end mt-1">
                        {SIDEBAR_NAV.homepage.items
                            .filter((item) => !item.disabled)
                            .map((item) => (
                                <m.li key={item.id} variants={link_variant}>
                                    <Link
                                        href={item.route}
                                        className="paragraph hover:opacity-80 transition text-right"
                                    >
                                        {item.label}
                                    </Link>
                                </m.li>
                            ))}
                    </m.ul>
                </m.div>
            )}

            {/* SYSTEMS OVERVIEW */}
            {context === "systems" && (
                <>
                    {Object.values(SIDEBAR_NAV.systems).map((group) => (
                        <Sidebar_Section
                            key={group.id}
                            group={group}
                            pathname={resolvedPath}
                            context="systems"
                            onHoverItem={onHoverItem}
                            onLeaveItem={onLeaveItem}
                            onNavigate={(route) => router.push(route)}
                        />
                    ))}
                </>
            )}

            {/* MODULE – FOCUSED */}
            {context === "module" &&
                activeSystem &&
                !activeSystem.item.disabled && (
                    <Sidebar_Section
                        group={{
                            ...activeSystem.group,
                            items: [activeSystem.item],
                        }}
                        pathname={resolvedPath}
                        context="module"
                        onHoverItem={onHoverItem}
                        onLeaveItem={onLeaveItem}
                        onNavigate={(route) => router.push(route)}
                    />
                )}

            {/* GLOBAL NAVIGATION */}
            {globalActions.length > 0 && (
                <m.div
                    key={resolvedPath}
                    variants={nav_container_variant}
                    initial="hidden"
                    animate={isTextReady ? "visible" : "hidden"}
                    exit="exit"
                    className="flex flex-col items-end mt-4"
                >
                    <m.p
                        variants={label_variant}
                        className="paragraph_tiny w-32 text-right opacity-60"
                    >
                        Navigation
                    </m.p>

                    <div className="flex flex-col items-end leading-normal md:leading-snug lg:leading-tight mt-1">
                        {globalActions.map((action) => (
                            <Sidebar_Back_Link
                                key={action.id}
                                to={action.route}
                                label={action.label}
                            />
                        ))}
                    </div>
                </m.div>
            )}
        </nav>
    )
}
