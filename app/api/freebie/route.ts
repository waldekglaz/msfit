import { NextResponse } from "next/server";
import { Resend } from "resend";
import { freebies, site, type Freebie } from "@/lib/data";
import { downloadPath } from "@/lib/freebie-links";
import { EMAIL_PATTERN, NAME_PATTERN, looksLikeBot, signupLimits } from "@/lib/form-checks";
import { subscribe } from "@/lib/mailing";

// =====================================================================
// Freebie form → a signed download link, shown on the page and emailed.
//
// The email goes through Resend, with the same RESEND_API_KEY and
// CONTACT_FROM_EMAIL as the contact form. Links need FREEBIE_LINK_SECRET
// in production (see lib/freebie-links.ts). If the email can't be sent, the
// download on the page still works and the page says so.
// =====================================================================

const { errors } = freebies.form;

function fail(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function freebieEmail(name: string, freebie: Freebie, link: string) {
  const values = { name, title: freebie.title, days: String(freebies.linkDays) };
  const copy = Object.fromEntries(Object.entries(freebies.email).map(([key, text]) => [key, fill(text, values)])) as typeof freebies.email;
  const html = (text: string) => escapeHtml(text);
  return {
    subject: copy.subject,
    text: [copy.greeting, "", copy.intro, "", `${copy.button}: ${link}`, "", copy.validity, "", `${copy.signoff},`, site.coachName, site.name].join("\n"),
    html: `<div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#111111;max-width:560px">
<p>${html(copy.greeting)}</p>
<p>${html(copy.intro)}</p>
<p><a href="${html(link)}" style="display:inline-block;background:#C62B6E;color:#ffffff;padding:12px 22px;border-radius:4px;font-weight:bold;text-decoration:none">${html(copy.button)}</a></p>
<p style="color:#555555;font-size:14px">${html(copy.validity)}</p>
<p>${html(copy.signoff)},<br>${html(site.coachName)}<br>${html(site.name)}</p>
</div>`,
  };
}

/** Sends the link. In development without Resend keys it is logged instead. */
async function sendEmail(to: string, email: ReturnType<typeof freebieEmail>): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[freebie] Resend not configured; email to ${to}:\n${email.subject}\n\n${email.text}`);
      return true;
    }
    console.error("[freebie] RESEND_API_KEY is not set");
    return false;
  }
  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.CONTACT_FROM_EMAIL || `${site.name} <onboarding@resend.dev>`,
      to,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });
    if (error) console.error("[freebie] Resend error:", error);
    return !error;
  } catch (error) {
    console.error("[freebie] Unexpected error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") {
    return fail(errors.failed, 400);
  }
  // Bots get a fake success so they don't retry.
  if (looksLikeBot(body)) {
    return NextResponse.json({ ok: true });
  }

  const text = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");
  const freebie = freebies.items.find((item) => item.id === text("id"));
  const name = text("name");
  const email = text("email");
  if (!freebie) {
    return fail(errors.failed, 404);
  }
  if (!name || name.length > signupLimits.name) {
    return fail(errors.name, 400);
  }
  if (!NAME_PATTERN.test(name)) {
    return fail(errors.nameInvalid, 400);
  }
  if (!EMAIL_PATTERN.test(email) || email.length > signupLimits.email) {
    return fail(errors.email, 400);
  }

  const path = downloadPath(freebie.id);
  if (!path) {
    console.error("[freebie] FREEBIE_LINK_SECRET is not set");
    return fail(errors.failed, 503);
  }

  const link = new URL(path, request.url).toString();
  const emailSent = await sendEmail(email, freebieEmail(name, freebie, link));
  // Only with the separate, unticked-by-default checkbox.
  const subscribed = body.newsletter === true && (await subscribe({ email, name, source: `freebie:${freebie.id}` }));

  return NextResponse.json({ ok: true, downloadUrl: path, emailSent, subscribed });
}
