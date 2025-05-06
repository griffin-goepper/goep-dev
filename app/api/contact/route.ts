import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, message, token } = body;

  // 1. Verify Turnstile token
  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
  });

  const verification = await verifyRes.json();
  if (!verification.success) {
    return NextResponse.json({ error: "Failed Turnstile verification" }, { status: 400 });
  }

  // 2. Send the email
  try {
    const data = await resend.emails.send({
      from: "Contact Form <contact@goep.dev>",
      to: "griffin@goep.dev",
      subject: `[Contact] ${subject}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Error sending email", err);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
