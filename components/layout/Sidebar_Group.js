"use client"

import { motion as m } from "motion/react"
import {
    label_variant,
    list_container_variant,
} from "@/animations/Text_Variants"
import Sidebar_Item from "@/components/layout/Sidebar_Item"

export default function Sidebar_Group({
    group,
    pathname,
    rootModules,
    onHoverItem,
    onLeaveItem,
    onNavigate,
}) {
    return (
        <m.div
            variants={list_container_variant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-end"
        >
            {group.label && (
                <m.p
                    variants={label_variant}
                    className="paragraph_tiny w-32 text-right opacity-60"
                >
                    {group.label}
                </m.p>
            )}

            <m.ul className="flex flex-col items-end mt-1">
                {group.items.map((item) => (
                    <Sidebar_Item
                        key={item.id}
                        item={item}
                        active={pathname === item.route}
                        isRootModule={rootModules?.includes(item.id)}
                        onHoverItem={onHoverItem}
                        onLeaveItem={onLeaveItem}
                        onNavigate={onNavigate}
                    />
                ))}
            </m.ul>
        </m.div>
    )
}
