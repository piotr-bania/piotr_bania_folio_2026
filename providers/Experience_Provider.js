"use client"

import dynamic from "next/dynamic"

const Experience_Root = dynamic(
    () => import("@/components/experience/Experience_Root"),
    { ssr: false }
)

export default function Experience_Provider({ children }) {
    return (
        <>
            <Experience_Root />
            {children}
        </>
    )
}
