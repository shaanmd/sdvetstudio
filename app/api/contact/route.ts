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
    const { name, email, business, service, project, referral } = await req.json()

    await resend.emails.send({
      from: 'SD Vet Studio <hello@sdvetstudio.com>',
      to: ['hello@sdvetstudio.com'],
      subject: `New project brief from ${name}`,
      html: `
        <h2>New brief from ${name}</h2>
        <p><strong>Business:</strong> ${business || '—'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || '—'}</p>
        <p><strong>Project:</strong> ${project || '—'}</p>
        <p><strong>Referral:</strong> ${referral || 'Not specified'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
