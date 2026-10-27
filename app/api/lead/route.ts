import { NextResponse } from "next/server"

/**
 * POST /api/lead — receives hero lead-form submissions as JSON.
 *
 * Currently validates and logs the lead server-side.
 * TODO: wire to your persistence/inbox of choice, e.g.:
 *   - an email service (Resend / SendGrid / nodemailer)
 *   - a database (Supabase, Postgres, etc.)
 *   - a CRM / webhook (HubSpot, Google Sheets, Zapier)
 */
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, city, service, source } = body ?? {}

    // Basic server-side validation (mirrors the client-side required fields)
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, email and phone are required." },
        { status: 400 },
      )
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))
    if (!emailOk) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 },
      )
    }

    const lead = {
      name: String(name).slice(0, 120),
      email: String(email).slice(0, 160),
      phone: String(phone).slice(0, 24),
      city: String(city ?? "").slice(0, 80),
      service: String(service ?? "Not specified").slice(0, 80),
      source: String(source ?? "unknown").slice(0, 80),
      receivedAt: new Date().toISOString(),
    }

    // Replace this with real persistence / notification:
    console.log("New lead:", lead)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    )
  }
}
