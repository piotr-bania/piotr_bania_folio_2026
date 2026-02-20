"use client"

import { useState } from "react"
import { submitInterfaceForm } from "@/app/(main)/interface/actions"
import useToast from "@/hooks/useToast"
import useScreenSize from "@/hooks/useScreenSize"

export default function Interface_Form({ fields }) {
    const [loading, setLoading] = useState(false)
    const { addToast } = useToast()
    const { isSm, isMd } = useScreenSize()
    const rows = isSm ? 2 : isMd ? 3 : 4

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target)
        const result = await submitInterfaceForm(formData)
        setLoading(false)
        if (result.ok) {
            addToast("Message sent successfully!", "success")
            e.target.reset()
        } else {
            addToast(result.error || "Failed to send message.", "error")
        }
    }

    return (
        <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <label className="paragraph_tiny opacity-70">
                        {field.label}
                    </label>
                    {field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            required={field.required}
                            className="border border-[#6526d125] bg-[#6526d105] p-1 md:p-2 lg:p-3 text-sm outline-none focus:border-[#6526d150] focus:bg-[#6526d110] transition-colors"
                            rows={rows}
                        />
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            className="border border-[#6526d125] bg-[#6526d105] p-1 md:p-2 lg:p-3 text-sm outline-none focus:border-[#6526d150] focus:bg-[#6526d110] transition-colors"
                        />
                    )}
                </div>
            ))}
            <button type="submit" disabled={loading} className="self-end">
                {loading ? "Sending..." : "Send message"}
            </button>
        </form>
    )
}
