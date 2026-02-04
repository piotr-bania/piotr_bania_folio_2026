"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Main_Model from "@/components/experience/Main_Model"
import Camera_Controller from "@/components/experience/Camera_Controller"

export default function Main_Scene() {
    return (
        <div className="fixed inset-0 z-0 pointers-events-none">
            <Canvas dpr={[1, 2.5]}>
                <fog attach="fog" args={["#f0eff1", 5, 150]} />
                <Suspense fallback={null}>
                    <ambientLight intensity={5} />
                    {/* <Environment files="/env/cyclorama_hard_light_1k.hdr" /> */}
                    <Camera_Controller />
                    <Main_Model />
                </Suspense>
            </Canvas>
        </div>
    )
}
