"use client"

import { Vector3 } from "three"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { CAMERA_TARGETS } from "@/lib/experience/camera_targets"
import { useMotionValue, animate } from "motion/react"
import { useThree, useFrame } from "@react-three/fiber"
import useScreenSize from "@/hooks/useScreenSize"

export default function Camera_Controller() {
    const pathname = usePathname()
    const { camera } = useThree()
    const { screen } = useScreenSize()

    // --- motion values (position only) ---
    const cam_pos_x = useMotionValue(camera.position.x)
    const cam_pos_y = useMotionValue(camera.position.y)
    const cam_pos_z = useMotionValue(camera.position.z)

    const lookAtTarget = useRef(new Vector3())

    // --- animate on route or screen change ---
    useEffect(() => {
        const routeTargets = CAMERA_TARGETS[pathname]
        if (!routeTargets) return

        const target = routeTargets[screen] || routeTargets
        if (!target) return

        const transition = {
            duration: 1.25,
            ease: [0.22, 1, 0.36, 1],
        }

        animate(cam_pos_x, target.position[0], transition)
        animate(cam_pos_y, target.position[1], transition)
        animate(cam_pos_z, target.position[2], transition)

        lookAtTarget.current.set(
            target.lookAt[0],
            target.lookAt[1],
            target.lookAt[2]
        )
    }, [pathname, screen]) // eslint-disable-line react-hooks/exhaustive-deps

    useFrame(() => {
        camera.position.set(cam_pos_x.get(), cam_pos_y.get(), cam_pos_z.get())

        camera.lookAt(lookAtTarget.current)
    })

    return null
}
