"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Main_Model from "@/components/experience/Main_Model"
import Camera_Controller from "@/components/experience/Camera_Controller"

export default function Main_Scene() {
    return (
        <div className="fixed inset-0 z-0 pointers-events-none">
            <Canvas dpr={[1, 1.5]} gl={{ antialias: true }}>
                <Suspense fallback={null}>
                    <Environment preset="studio" />
                    <Camera_Controller />
                    <Main_Model />
                </Suspense>
            </Canvas>
        </div>
    )
}
