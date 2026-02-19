"use client"

import { Vector3 } from "three"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { useMotionValue, animate } from "motion/react"
import { useThree, useFrame } from "@react-three/fiber"
import { CAMERA_TARGETS } from "@/lib/experience/camera_targets"
import useScreenSize from "@/hooks/useScreenSize"

export default function Camera_Controller() {
    const pathname = usePathname()
    const { camera } = useThree()
    const { screen } = useScreenSize()

    // --- motion values (position only) ---
    const cam_pos_x = useMotionValue(camera.position.x)
    const cam_pos_y = useMotionValue(camera.position.y)
    const cam_pos_z = useMotionValue(camera.position.z)

    // --- motion values for lookAt ---
    const cam_look_x = useMotionValue(0)
    const cam_look_y = useMotionValue(0)
    const cam_look_z = useMotionValue(0)

    const lookAtTarget = useRef(new Vector3())

    // --- animate on route or screen change ---
    useEffect(() => {
        const routeTargets = CAMERA_TARGETS[pathname]
        if (!routeTargets) return

        const target = routeTargets[screen] || routeTargets
        if (!target) return

        const transition = {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
        }

        // --- sync current look direction before animating ---
        const currentDir = new Vector3()
        camera.getWorldDirection(currentDir)

        cam_look_x.set(camera.position.x + currentDir.x * 10)
        cam_look_y.set(camera.position.y + currentDir.y * 10)
        cam_look_z.set(camera.position.z + currentDir.z * 10)

        // --- animate position ---
        animate(cam_pos_x, target.position[0], transition)
        animate(cam_pos_y, target.position[1], transition)
        animate(cam_pos_z, target.position[2], transition)

        // --- animate lookAt ---
        animate(cam_look_x, target.lookAt[0], transition)
        animate(cam_look_y, target.lookAt[1], transition)
        animate(cam_look_z, target.lookAt[2], transition)
    }, [pathname, screen]) // eslint-disable-line react-hooks/exhaustive-deps

    useFrame(() => {
        camera.position.set(cam_pos_x.get(), cam_pos_y.get(), cam_pos_z.get())

        lookAtTarget.current.set(
            cam_look_x.get(),
            cam_look_y.get(),
            cam_look_z.get()
        )

        camera.lookAt(lookAtTarget.current)
    })

    return null
}
