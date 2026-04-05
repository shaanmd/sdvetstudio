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

    await Promise.all([
      // Notify the founders
      resend.emails.send({
        from: 'SD VetStudio <hello@sdvetstudio.com>',
        to: ['vet@vetalign.com.au', 'debprattley@hotmail.com'],
        replyTo: email,
        subject: `New enquiry from ${name} via SD VetStudio`,
        html: `
          <h2>New enquiry from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
      // Confirmation to the enquirer
      resend.emails.send({
        from: 'SD VetStudio <hello@sdvetstudio.com>',
        to: [email],
        subject: 'We got your message — SD VetStudio',
        html: `
          <p>Hi ${name},</p>
          <p>Thanks for getting in touch! We've received your message and will get back to you soon.</p>
          <p>In the meantime, feel free to check out our projects at <a href="https://sdvetstudio.com">sdvetstudio.com</a>.</p>
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
