import { useMemo } from "react"
import * as THREE from "three"
import { Html, Line } from "@react-three/drei"

export default function Debug_Grid({
    halfSize = 10, // grid spans [-halfSize .. +halfSize]
    // Optional alias: set `size` to override `halfSize` for easier control
    size,
    majorStep = 1,
    minorDivisions = 5, // 1 / 5 = 0.2 minor step by default
    y = 0,
    majorColor = "#d02670",
    minorColor = "#d02670",
    majorOpacity = 0.5,
    minorOpacity = 0.25,
    majorLineWidth = 1, // works best with Line (Line2) from drei
    minorLineWidth = 0.5,
    labelEvery = 1, // label spacing in major units (1 = label every integer)
    labelColor = "#6526d1",
    labelFontSize = 36,
    distanceFactor = 5, // how "big" Html feels in 3D
    showLabels = true,
    showMinor = true,
    // For camera targeting you often want the grid to always be visible:
    renderOrder = 999,
}) {
    const minorStep = majorStep / Math.max(1, minorDivisions)
    const eps = 0.001 // lift slightly to avoid z-fighting with your floor

    // Use `size` if provided, otherwise fall back to `halfSize`
    const effectiveHalfSize = typeof size === "number" ? size : halfSize

    const { majorLines, minorLines, labels } = useMemo(() => {
        const major = []
        const minor = []
        const labs = []

        const min = -effectiveHalfSize
        const max = effectiveHalfSize

        // Build major lines (XZ plane)
        for (let v = min; v <= max; v += majorStep) {
            // lines parallel to Z (varying X)
            major.push([
                new THREE.Vector3(v, y + eps, min),
                new THREE.Vector3(v, y + eps, max),
            ])
            // lines parallel to X (varying Z)
            major.push([
                new THREE.Vector3(min, y + eps, v),
                new THREE.Vector3(max, y + eps, v),
            ])
        }

        // Build minor lines
        if (showMinor && minorDivisions > 1) {
            for (let v = min; v <= max; v += minorStep) {
                // skip if it lands on a major line (within floating error)
                const isMajor =
                    Math.abs(v / majorStep - Math.round(v / majorStep)) < 1e-6
                if (isMajor) continue

                minor.push([
                    new THREE.Vector3(v, y + eps, min),
                    new THREE.Vector3(v, y + eps, max),
                ])
                minor.push([
                    new THREE.Vector3(min, y + eps, v),
                    new THREE.Vector3(max, y + eps, v),
                ])
            }
        }

        // Labels: at every major grid intersection. Show as (x, y)
        if (showLabels) {
            for (let x = min; x <= max; x += majorStep) {
                for (let z = min; z <= max; z += majorStep) {
                    const ix = Math.round(x / majorStep)
                    const iz = Math.round(z / majorStep)

                    // Respect labelEvery spacing on both axes
                    if (ix % labelEvery !== 0 || iz % labelEvery !== 0) continue

                    labs.push({
                        key: `lab-${x}-${z}`,
                        pos: [x, y + eps, z],
                        text: `(${x}, ${z})`,
                        axis: "p",
                    })
                }
            }
        }

        return { majorLines: major, minorLines: minor, labels: labs }
    }, [
        effectiveHalfSize,
        majorStep,
        minorDivisions,
        minorStep,
        y,
        showLabels,
        showMinor,
        labelEvery,
    ])

    return (
        <group renderOrder={renderOrder}>
            {/* Minor grid */}
            {showMinor &&
                minorLines.map((pts, i) => (
                    <Line
                        key={`minor-${i}`}
                        points={pts}
                        color={minorColor}
                        lineWidth={minorLineWidth}
                        transparent
                        opacity={minorOpacity}
                        depthTest={false}
                        depthWrite={false}
                    />
                ))}

            {/* Major grid */}
            {majorLines.map((pts, i) => (
                <Line
                    key={`major-${i}`}
                    points={pts}
                    color={majorColor}
                    lineWidth={majorLineWidth}
                    transparent
                    opacity={majorOpacity}
                    depthTest={false}
                    depthWrite={false}
                />
            ))}

            {/* Labels */}
            {showLabels &&
                labels.map((l) => (
                    <Html
                        key={l.key}
                        position={l.pos}
                        center
                        sprite
                        transform
                        distanceFactor={distanceFactor}
                        occlude={false}
                        style={{
                            pointerEvents: "none",
                            userSelect: "none",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <div
                            style={{
                                fontSize: `${labelFontSize}px`,
                                lineHeight: 1,
                                padding: "4px 6px",
                                borderRadius: 8,
                                color: labelColor,
                                fontFamily:
                                    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
                                backdropFilter: "blur(6px)",
                                WebkitBackdropFilter: "blur(6px)",
                                transform: "translateZ(0)",
                            }}
                        >
                            {l.axis === "o" ? "0,0" : l.text}
                        </div>
                    </Html>
                ))}
        </group>
    )
}
