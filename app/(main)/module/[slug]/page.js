import { getSystemBySlug } from "@/lib/systems"

export default function Module_Page({ params }) {
    const system = getSystemBySlug(params.slug)

    if (!system) return null // or notFound()

    // No text here by design
    return <main className="h-[100svh]" />
}
