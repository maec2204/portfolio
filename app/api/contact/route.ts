import { Resend } from "resend"

interface ContactPayload {
  name?: string
  email?: string
  message?: string
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const name = body.name?.trim() ?? ""
    const email = body.email?.trim() ?? ""
    const message = body.message?.trim() ?? ""

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY
    const contactEmail =
      process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL

    if (!apiKey) {
      return Response.json(
        { error: "Missing RESEND_API_KEY environment variable" },
        { status: 500 }
      )
    }

    if (!contactEmail) {
      return Response.json(
        { error: "Missing CONTACT_EMAIL environment variable" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      subject: "New Portfolio Contact Message",
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send message"
    return Response.json({ error: message }, { status: 500 })
  }
}
