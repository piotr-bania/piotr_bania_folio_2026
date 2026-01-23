import { getSystemBySlug } from "@/lib/systems"
import { redirect } from "next/navigation"

export default async function Module_Page({ params }) {
    const { slug } = await params
    const system = getSystemBySlug(slug)

    if (!system) return null // or notFound()

    redirect(`/module/${slug}/summary`)
}
