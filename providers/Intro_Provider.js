"use client"

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react"

const IntroContext = createContext({
    introState: "idle",
    startIntro: () => {},
    completeIntro: () => {},
    canvasReady: false,
    setCanvasReady: () => {},
})

export const useIntro = () => useContext(IntroContext)

export default function Intro_Provider({ children }) {
    const [introState, setIntroState] = useState("idle")
    const [canvasReady, setCanvasReady] = useState(false)

    // temporarily disable intro so camera positioning is immediate
    // const [introState, setIntroState] = useState("done")
    // const [canvasReady, setCanvasReady] = useState(true)

    const startIntro = useCallback(() => {
        setIntroState((current) => (current === "idle" ? "playing" : current))
    }, [])

    const completeIntro = useCallback(() => {
        setIntroState("done")
    }, [])

    const value = useMemo(
        () => ({
            introState,
            startIntro,
            completeIntro,
            canvasReady,
            setCanvasReady,
        }),
        [introState, startIntro, completeIntro, canvasReady, setCanvasReady]
    )

    return (
        <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
    )
}
