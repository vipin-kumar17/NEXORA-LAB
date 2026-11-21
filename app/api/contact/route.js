import { NextResponse } from "next/server";
// Sends mail through Resend when RESEND_API_KEY and CONTACT_TO_EMAIL are set. Otherwise returns an honest 501 (no fake success).
export async function POST(req) {
  const d = await req.json().catch(() => null);
  if (!d?.name?.trim() || !/^\S+@\S+\.\S+$/.test(d.email || "") || !d.details?.trim()) return NextResponse.json({ message: "Please fill all required fields correctly." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ message: "The contact form is not connected to an email service yet. Please email us directly." }, { status: 501 });
  const text = Object.entries(d).map(([k, v]) => `${k}: ${v}`).join("\n");
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || "Nexora Lab <onboarding@resend.dev>", to, reply_to: d.email, subject: `New inquiry: ${d.service}`, text }) });
  return r.ok ? NextResponse.json({ message: "Thanks! We will reply within one or two business days." }) : NextResponse.json({ message: "Could not send your message. Please try again later." }, { status: 502 });
}
