import { Resend } from "resend"
import { getServerEnv } from "@/lib/env"
import { contactPayloadSchema } from "@/lib/validators/contact"
import { getClientIp, isRateLimited } from "@/lib/rate-limit"

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request)
    if (isRateLimited(clientIp)) {
      return Response.json({ error: "Too many requests" }, { status: 429 })
    }

    const json = await request.json()
    const parsed = contactPayloadSchema.safeParse(json)
    if (!parsed.success) {
      return Response.json({ error: "Invalid payload" }, { status: 400 })
    }

    const { name, email, message, website } = parsed.data

    if (website.trim()) {
      return Response.json({ success: true })
    }

    const { RESEND_API_KEY, CONTACT_EMAIL } = getServerEnv()

    const resend = new Resend(RESEND_API_KEY)

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
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
  } catch {
    return Response.json({ error: "Failed to send message" }, { status: 500 })
  }
}
