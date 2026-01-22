// app/providers.js
"use client"

import Experience_Root from "@/components/experience/Experience_Root"

export default function Experience_Provider({ children }) {
    return (
        <>
            <Experience_Root />
            {children}
        </>
    )
}
