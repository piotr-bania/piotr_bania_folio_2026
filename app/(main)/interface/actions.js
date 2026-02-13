"use server"

export async function submitInterfaceForm(formData) {
    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const company = String(formData.get("company") || "").trim()
    const message = String(formData.get("message") || "").trim()

    // Minimal validation (keep it boring + reliable)
    if (!name || !email || !message) {
        return { ok: false, error: "Please complete all required fields." }
    }

    // Placeholder for now (later: Resend)
    // await resend.emails.send(...)

    return { ok: true }
}
