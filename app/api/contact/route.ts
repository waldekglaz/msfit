import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactForm, site } from "@/lib/data";

// =====================================================================
// Contact form → email to Marta via Resend (https://resend.com).
//
// Environment variables (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY       Resend API key
//   CONTACT_TO_EMAIL     inbox that receives the messages
//   CONTACT_FROM_EMAIL   optional; sender on a domain verified in Resend
//
// Without the first two, messages are logged to the console in development
// and refused in production, so a misconfigured site never drops enquiries
// silently.
// =====================================================================

const { limits } = contactForm;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_TIME_MS = 3000;

function fail(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") {
    return fail("Nieprawidłowe zapytanie.", 400);
  }
  const text = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");

  // ---- Anti-spam ----
  // Honeypot: people never see the "website" field, so a filled one means a
  // bot. Fake success so it doesn't retry.
  if (text("website")) {
    return NextResponse.json({ ok: true });
  }
  // Time-to-submit: real people take more than a few seconds.
  const elapsed = Date.now() - Number(body.loadedAt);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  // ---- Validation ----
  // Line breaks are stripped from the name because it goes into the subject.
  const name = text("name").replace(/[\r\n]+/g, " ");
  const email = text("email");
  const message = text("message");

  if (!name) {
    return fail(contactForm.errors.name, 400);
  }
  if (!EMAIL_PATTERN.test(email) || email.length > limits.email) {
    return fail(contactForm.errors.email, 400);
  }
  if (message.length < limits.messageMin) {
    return fail(contactForm.errors.message, 400);
  }
  if (name.length > limits.name || message.length > limits.message) {
    return fail(contactForm.errors.tooLong, 400);
  }
  if (body.consent !== true) {
    return fail(contactForm.errors.consent, 400);
  }

  const content = [
    `Imię: ${name}`,
    `E-mail: ${email}`,
    `Zgoda na przetwarzanie danych: tak (${new Date().toISOString()})`,
    "",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contact] Resend not configured; message received:\n${content}`);
      return NextResponse.json({ ok: true });
    }
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return fail("Formularz jest chwilowo niedostępny.", 503);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || `${site.name} <onboarding@resend.dev>`,
      to,
      replyTo: email,
      subject: `Nowa wiadomość ze strony: ${name}`,
      text: content,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return fail("Nie udało się wysłać wiadomości.", 502);
    }
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return fail("Nie udało się wysłać wiadomości.", 500);
  }

  return NextResponse.json({ ok: true });
}
