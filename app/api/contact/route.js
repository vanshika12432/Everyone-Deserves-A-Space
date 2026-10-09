import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();
  if (!name || !email || !message) {
    return Response.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!process.env.SMTP_HOST) {
    return Response.json({ error: "Email is not configured yet. Set the SMTP variables in .env.local." }, { status: 500 });
  }

  try {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_PORT === "465",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transport.sendMail({
      from: `"Website contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: `${name} <${email}>`,
      subject: subject || `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send your message. Please try again or email directly." }, { status: 500 });
  }
}
