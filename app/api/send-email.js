import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
        return NextResponse.json(
            { ok: false, error: "Missing required fields." },
            { status: 400 }
        )
    }

    try {
        const data = await resend.emails.send({
            from: "Piotr Bania <contact@piotrbania.dev>",
            to: [process.env.EMAIL_TO],
            subject: `New message from ${name}`,
            reply_to: email,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company}</p><p><strong>Message:</strong><br/>${message}</p>`,
        })
        return NextResponse.json({ ok: true, data })
    } catch (error) {
        return NextResponse.json(
            { ok: false, error: error.message },
            { status: 500 }
        )
    }
}
