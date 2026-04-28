"use client"

import Image from "next/image"

export default function Media_Grid({ media = [] }) {
    if (!Array.isArray(media) || media.length === 0) return null

    const handleOpen = (item) => {
        // 🔥 future GLSL modal hook
        console.log("OPEN MEDIA:", item)
    }

    return (
        <div className="flex gap-4 flex-wrap mt-4">
            {media.map((m) => {
                if (!m?.src) return null

                return (
                    <button
                        key={m.id}
                        className="w-32 h-20 bg-neutral-200 rounded-md overflow-hidden"
                        onClick={() => handleOpen(m)}
                    >
                        <Image
                            src={m.src}
                            alt={m.alt || ""}
                            width={320}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </button>
                )
            })}
        </div>
    )
}
