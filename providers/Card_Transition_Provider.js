"use client"

import { createContext, useContext, useMemo, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

const CardTransitionContext = createContext({
    requestRoute: () => {},
    isExiting: false,
    onExitComplete: () => {},
})

export const useCardTransition = () => useContext(CardTransitionContext)

export default function Card_Transition_Provider({ children }) {
    const router = useRouter()
    const pathname = usePathname()
    const [pendingRoute, setPendingRoute] = useState(null)
    const [isExiting, setIsExiting] = useState(false)

    const requestRoute = (route) => {
        if (!route || route === pathname || isExiting) return
        setPendingRoute(route)
        setIsExiting(true)
    }

    const onExitComplete = () => {
        if (!pendingRoute) {
            setIsExiting(false)
            return
        }

        router.push(pendingRoute)
    }

    useEffect(() => {
        if (pendingRoute && pathname === pendingRoute) {
            setPendingRoute(null)
            setIsExiting(false)
        }
    }, [pendingRoute, pathname])

    const value = useMemo(
        () => ({
            requestRoute,
            isExiting,
            onExitComplete,
        }),
        [isExiting, pendingRoute, pathname]
    )

    return (
        <CardTransitionContext.Provider value={value}>
            {children}
        </CardTransitionContext.Provider>
    )
}
