"use client"

import { useGLTF } from "@react-three/drei"

export default function Main_Model() {
    const { scene } = useGLTF("/models/folio_map.glb")

    return <primitive object={scene} />
}

useGLTF.preload("/models/desk_scene.glb")
