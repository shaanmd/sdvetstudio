import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(req: Request) {
  if (!resend) {
    return NextResponse.json(
      { success: false, error: 'Email not configured' },
      { status: 503 }
    )
  }
  try {
    const { name, email, message } = await req.json()

    await resend.emails.send({
      from: 'SD Vet Studio <hello@sdvetstudio.com>',
      to: ['hello@sdvetstudio.com'],
      subject: `New message from ${name} via SD VetStudio`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
