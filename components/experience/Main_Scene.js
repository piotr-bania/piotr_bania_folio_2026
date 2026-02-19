"use client"

import { motion as m } from "motion/react"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
import { useIntro } from "@/providers/Intro_Provider"
import { canvasVariants } from "@/animations/Canvas_Variant"
import Main_Model from "@/components/experience/Main_Model"
import Debug_Grid from "@/components/experience/Debug_Grid"
import Camera_Controller from "@/components/experience/Camera_Controller"

export default function Main_Scene() {
    const { introState, setCanvasReady } = useIntro()
    const isReady = introState === "done"

    useEffect(() => {
        if (!isReady) setCanvasReady(false)
    }, [isReady, setCanvasReady])

    return (
        <m.div
            className="fixed inset-0 z-0 pointers-events-none"
            initial="hidden"
            animate={isReady ? "visible" : "hidden"}
            variants={canvasVariants}
            onAnimationComplete={() => {
                if (isReady) setCanvasReady(true)
            }}
        >
            <Canvas dpr={[1, 2.5]}>
                <fog attach="fog" args={["#f0eff1", 5, 100]} />
                <Suspense fallback={null}>
                    <ambientLight intensity={7} />
                    <Camera_Controller />
                    <Main_Model />
                    {/* <Debug_Grid
                        halfSize={30}
                        majorStep={5}
                        minorDivisions={5}
                    /> */}
                </Suspense>
            </Canvas>
        </m.div>
    )
}
