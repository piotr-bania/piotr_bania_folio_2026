"use client"

import { useState, useEffect } from "react"

export default function useScreenSize() {
    const getScreen = () => {
        if (typeof window === "undefined") return "lg"

        const width = window.innerWidth

        if (width <= 767) return "sm"
        if (width >= 768 && width <= 1024) return "md"
        return "lg"
    }

    const [screen, setScreen] = useState(getScreen)

    useEffect(() => {
        const handleResize = () => {
            setScreen(getScreen())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return {
        screen,
        isLg: screen === "lg",
        isMd: screen === "md",
        isSm: screen === "sm",
    }
}
