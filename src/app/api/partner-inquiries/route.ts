import { NextResponse } from "next/server"
import { z } from "zod"

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  contactInfo: z.string().trim().min(5).max(160),
  businessType: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(1000),
  website: z.string().max(0).optional(),
})

export async function POST(request: Request) {
  const webhookUrl = process.env.PARTNER_FORM_WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Delivery channel is not configured." },
      { status: 503 }
    )
  }

  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    )
  }

  const result = inquirySchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data." },
      { status: 400 }
    )
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...result.data,
        source: "gallery-partner-form",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    })

    if (response.ok) {
      return NextResponse.json({ ok: true })
    }
  } catch {
    // The response below intentionally hides delivery details from the client.
  }

  return NextResponse.json(
    { ok: false, error: "Delivery failed." },
    { status: 502 }
  )
}
