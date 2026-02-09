"use client"

import { useIntro } from "@/providers/Intro_Provider"
import { motion as m, useAnimation } from "motion/react"
import { useEffect, useLayoutEffect, useRef } from "react"

const STROKE = "#6526d1"
const FILL = "#6526d1"

// timings (machine-like)
const DRAW_DURATION = 1
const FILL_DELAY = DRAW_DURATION + 0.25
const MOVE_DELAY = FILL_DELAY + 0.75

const MOVE_TRANSITION = {
    duration: 1,
    ease: [0.16, 1, 0.3, 1],
}

export default function Intro() {
    const { introState, startIntro, completeIntro } = useIntro()
    const moveControls = useAnimation()
    const hasRun = useRef(false)
    const logoRef = useRef(null)

    useLayoutEffect(() => {
        if (introState === "idle") startIntro()
    }, [introState, startIntro])

    useEffect(() => {
        if (introState !== "playing" || hasRun.current) return
        hasRun.current = true

        async function sequence() {
            // wait until fill + pause
            await new Promise((r) => setTimeout(r, MOVE_DELAY * 1000))

            const navTarget = getNavTarget(logoRef.current)
            await moveControls.start({
                x: navTarget.x,
                y: navTarget.y,
                scale: navTarget.scale,
                transition: MOVE_TRANSITION,
            })

            completeIntro()
        }

        sequence()
    }, [introState, moveControls, completeIntro])

    return (
        <m.div
            className="fixed inset-0 z-[100] pointer-events-none bg-[var(--bg)]"
            initial={{ opacity: 1 }}
            animate={{ opacity: introState === "done" ? 0 : 1 }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: introState === "done" ? 0.15 : 0,
            }}
        >
            <div className="grid h-full w-full place-items-center">
                <m.div
                    ref={logoRef}
                    className="relative h-[102px] w-[66px]"
                    initial={{ x: 0, y: 0, scale: 1 }}
                    animate={moveControls}
                >
                    {/* STROKE */}
                    <m.svg
                        viewBox="0 0 51.579 79.967"
                        className="absolute inset-0 h-full w-full"
                        fill="none"
                        stroke={STROKE}
                        strokeWidth={0.25}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(-40 -40)"
                            style={{
                                mixBlendMode: "screen",
                                isolation: "isolate",
                            }}
                        >
                            <StrokePath
                                d="M254.262,86.155a82.986,82.986,0,0,1,14.095,0l-21.392,79.367a82.987,82.987,0,0,1-14.095,0Z"
                                transform="translate(-192.87 -45.855)"
                            />
                            <StrokePath
                                d="M391.585,368.621a82.99,82.99,0,0,1,0-14.095l22.691-10.3-22.691-10.3a82.989,82.989,0,0,1,0-14.095l35.685,16.293a108.144,108.144,0,0,1,0,16.093Z"
                                transform="translate(-335.991 -257.25)"
                            />
                            <StrokePath
                                d="M325.325,192.611a82.989,82.989,0,0,1,0-14.095l22.691-10.3-22.691-10.3a82.989,82.989,0,0,1,0-14.095l35.685,16.293a108.144,108.144,0,0,1,0,16.093Z"
                                transform="translate(-276.128 -98.233)"
                            />
                        </g>
                    </m.svg>

                    {/* FILL */}
                    <m.svg
                        viewBox="0 0 51.579 79.967"
                        className="absolute inset-0 h-full w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: FILL_DELAY,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g transform="translate(-40 -40)">
                            <path
                                fill={FILL}
                                d="M254.262,86.155a82.986,82.986,0,0,1,14.095,0l-21.392,79.367a82.987,82.987,0,0,1-14.095,0Z"
                                transform="translate(-192.87 -45.855)"
                                style={{
                                    mixBlendMode: "screen",
                                    isolation: "isolate",
                                }}
                            />
                            <path
                                fill={FILL}
                                d="M391.585,368.621a82.99,82.99,0,0,1,0-14.095l22.691-10.3-22.691-10.3a82.989,82.989,0,0,1,0-14.095l35.685,16.293a108.144,108.144,0,0,1,0,16.093Z"
                                transform="translate(-335.991 -257.25)"
                                style={{
                                    mixBlendMode: "screen",
                                    isolation: "isolate",
                                }}
                            />
                            <path
                                fill={FILL}
                                d="M325.325,192.611a82.989,82.989,0,0,1,0-14.095l22.691-10.3-22.691-10.3a82.989,82.989,0,0,1,0-14.095l35.685,16.293a108.144,108.144,0,0,1,0,16.093Z"
                                transform="translate(-276.128 -98.233)"
                                style={{
                                    mixBlendMode: "screen",
                                    isolation: "isolate",
                                }}
                            />
                        </g>
                    </m.svg>
                </m.div>
            </div>
        </m.div>
    )
}

/* ---------- helpers ---------- */

function StrokePath({ d, transform }) {
    return (
        <m.path
            d={d}
            transform={transform}
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{
                pathLength: 1,
                opacity: 1,
                transition: { duration: DRAW_DURATION, ease: "easeInOut" },
            }}
        />
    )
}

function getNavTarget(introLogoEl) {
    if (!introLogoEl || typeof window === "undefined") {
        return { x: 0, y: 0, scale: 1 }
    }

    const navLogoEl = document.querySelector("[data-intro-logo]")
    if (!navLogoEl) {
        return {
            x: -0.42 * window.innerWidth,
            y: -0.42 * window.innerHeight,
            scale: 0.18,
        }
    }

    const nav = navLogoEl.getBoundingClientRect()
    const intro = introLogoEl.getBoundingClientRect()

    const navCX = nav.left + nav.width / 2
    const navCY = nav.top + nav.height / 2
    const introCX = intro.left + intro.width / 2
    const introCY = intro.top + intro.height / 2

    const scale = Math.min(nav.width / intro.width, nav.height / intro.height)

    return {
        x: navCX - introCX,
        y: navCY - introCY,
        scale,
    }
}
