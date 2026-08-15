import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// POST /api/contact
// Expects JSON: { from_name, user_email, subject, message, budget }
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      from_name = 'Website visitor',
      user_email = '',
      subject = 'New contact',
      message = '',
      budget = '',
    } = data;

    // Configure via environment variables
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL || user;

    if (!host || !user || !pass) {
      return NextResponse.json({ error: 'SMTP is not configured on the server.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const html = `
      <p><strong>Name:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from: `${from_name} <${user}>`,
      to,
      subject: `[Website] ${subject}`,
      text: `Name: ${from_name}\nEmail: ${user_email}\nBudget: ${budget}\n\n${message}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
