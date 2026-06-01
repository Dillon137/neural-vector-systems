import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  let body: {
    name?: string;
    company?: string;
    email?: string;
    bottleneck?: string;
    details?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, bottleneck, details } = body;
  if (!name?.trim() || !email?.trim() || !bottleneck?.trim() || !details?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const email_to = process.env.INQUIRY_TO ?? "";
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Neural Vector Systems <onboarding@resend.dev>";

  const text = [
    `Name: ${name.trim()}`,
    company?.trim() ? `Company: ${company.trim()}` : null,
    `Email: ${email.trim()}`,
    `Bottleneck: ${bottleneck.trim()}`,
    "",
    "Details:",
    details.trim(),
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const { error } = await resend.emails.send({
    from,
    to: email_to,
    replyTo: email.trim(),
    subject: `Inquiry from ${name.trim()}${company?.trim() ? ` (${company.trim()})` : ""}`,
    text,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
