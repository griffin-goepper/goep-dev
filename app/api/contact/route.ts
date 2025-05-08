import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
    try {
      const body = await req.json();
      const { name, email, subject, message, token } = body;
  
      console.log("Received form submission:", { name, email, subject });
  
      // 1. Verify Turnstile token
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
      });
  
      const verification = await verifyRes.json();
      console.log("Turnstile verification result:", verification);
  
      if (!verification.success) {
        return NextResponse.json({ error: "Failed Turnstile verification" }, { status: 400 });
      }
  
      // 2. Send the email
      const data = await resend.emails.send({
        from: "Contact Form <contact@goep.dev>",
        to: "griffin@goep.dev",
        subject: `[Contact] ${subject}`,
        replyTo: email,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
  
      console.log("Email sent successfully:", data);
      return NextResponse.json({ success: true, data });
    } catch (err) {
      if (!process.env.RESEND_API_KEY) {
        console.error("❌ Missing RESEND_API_KEY at runtime");
      }
    
      console.error("Server error in /api/contact:", err);
      return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
    }
  }
