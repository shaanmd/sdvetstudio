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
    const { name, email, project } = await req.json()

    if (!name || !email || !project) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 })
    }

    await Promise.all([
      resend.emails.send({
        from: 'SD VetStudio <hello@sdvetstudio.com>',
        to: ['vet@vetalign.com.au', 'debprattley@hotmail.com'],
        replyTo: email,
        subject: `New interest in ${project} — ${name}`,
        html: `
          <h2>Someone is interested in ${project}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
      }),
      resend.emails.send({
        from: 'SD VetStudio <hello@sdvetstudio.com>',
        to: [email],
        subject: `You're on the list for ${project}`,
        html: `
          <p>Hi ${name},</p>
          <p>Thanks for your interest in <strong>${project}</strong>! We'll be in touch as soon as it's ready.</p>
          <p>Cheers,<br/>Shaan &amp; Deb<br/>SD VetStudio</p>
        `,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
