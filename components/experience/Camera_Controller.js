"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useMotionValue, animate } from "motion/react"
import { useThree, useFrame } from "@react-three/fiber"

export const deg = (d) => (d * Math.PI) / 180

export default function Camera_Controller() {
    const pathname = usePathname()
    const { camera } = useThree()

    // --- motion values ---
    const cam_pos_x = useMotionValue(camera.position.x)
    const cam_pos_y = useMotionValue(camera.position.y)
    const cam_pos_z = useMotionValue(camera.position.z)

    const cam_rot_x = useMotionValue(camera.rotation.x)
    const cam_rot_y = useMotionValue(camera.rotation.y)
    const cam_rot_z = useMotionValue(camera.rotation.z)

    // --- route → camera targets ---
    const CAMERA_TARGETS = {
        "/map": {
            position: [-3, 7, 8],
            rotation: [-deg(45), -deg(15), -deg(10)],
        },

        "/systems": {
            position: [0, 25, 2],
            rotation: [-deg(90), 0, 0],
        },

        "/module/ezinvoices": {
            position: [10, 2, -20],
            rotation: [deg(15), deg(200), deg(15)],
        },

        "/contact": {
            position: [-1.1, 1.5, 3.6],
            rotation: [-deg(24), -deg(13), 0],
        },

        "/about": {
            position: [1.2, 1.45, 3.8],
            rotation: [-deg(24), deg(15), 0],
        },
    }

    // --- animate on route change ---
    useEffect(() => {
        const target = CAMERA_TARGETS[pathname]
        if (!target) return

        const transition = {
            duration: 1.25,
            ease: [0.22, 1, 0.36, 1], // easeOutCubic-like
        }

        animate(cam_pos_x, target.position[0], transition)
        animate(cam_pos_y, target.position[1], transition)
        animate(cam_pos_z, target.position[2], transition)

        animate(cam_rot_x, target.rotation[0], transition)
        animate(cam_rot_y, target.rotation[1], transition)
        animate(cam_rot_z, target.rotation[2], transition)
    }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

    // --- apply motion values to camera every frame ---
    useFrame(() => {
        camera.position.set(cam_pos_x.get(), cam_pos_y.get(), cam_pos_z.get())

        camera.rotation.set(cam_rot_x.get(), cam_rot_y.get(), cam_rot_z.get())
    })

    return null
}
