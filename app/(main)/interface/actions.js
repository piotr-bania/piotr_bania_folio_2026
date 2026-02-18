"use server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitInterfaceForm(formData) {
    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const company = String(formData.get("company") || "").trim()
    const message = String(formData.get("message") || "").trim()

    if (!name || !email || !message) {
        return { ok: false, error: "Please complete all required fields." }
    }

    try {
        const from = process.env.EMAIL_FROM
        const to = process.env.EMAIL_TO || process.env.EMAIL_FROM

        const subject = `New message from ${name}`
        const html = `<p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`

        await resend.emails.send({
            from,
            to: [to],
            subject,
            reply_to: email,
            html,
        })

        return { ok: true }
    } catch (err) {
        return {
            ok: false,
            error: err?.message || String(err) || "Failed to send email.",
        }
    }
}
