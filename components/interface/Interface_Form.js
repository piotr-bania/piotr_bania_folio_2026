"use client"

import { useState } from "react"
import { submitInterfaceForm } from "@/app/(main)/interface/actions"
import useToast from "@/hooks/useToast"

export default function Interface_Form({ fields }) {
    const [loading, setLoading] = useState(false)
    const { addToast } = useToast()

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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <label className="text-sm opacity-70">{field.label}</label>
                    {field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            required={field.required}
                            className="border border-neutral-700 bg-transparent p-3 text-sm outline-none focus:border-white transition-colors"
                            rows={4}
                        />
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            className="border border-neutral-700 bg-transparent p-3 text-sm outline-none focus:border-white transition-colors"
                        />
                    )}
                </div>
            ))}
            <button
                type="submit"
                className="mt-2 border border-neutral-700 px-6 py-3 text-sm uppercase tracking-wide transition-colors hover:border-white"
                disabled={loading}
            >
                {loading ? "Sending..." : "Send message"}
            </button>
        </form>
    )
}
