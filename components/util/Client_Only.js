"use client"

import { useEffect, useState } from "react"

export default function Client_Only({ children, fallback = null }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return mounted ? children : fallback
}
