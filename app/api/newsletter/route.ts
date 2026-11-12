import { NextResponse } from "next/server";
import { newsletter } from "@/lib/data";
import { EMAIL_PATTERN, NAME_PATTERN, looksLikeBot, signupLimits } from "@/lib/form-checks";
import { subscribe } from "@/lib/mailing";

// Newsletter form → the mailing list (lib/mailing.ts, where the mailing
// system gets connected).

const { errors } = newsletter.form;

function fail(error: string, status: number) {
  return NextResponse.json({ error }, { status });
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
  const name = text("name");
  const email = text("email");
  if (!name || name.length > signupLimits.name) {
    return fail(errors.name, 400);
  }
  if (!NAME_PATTERN.test(name)) {
    return fail(errors.nameInvalid, 400);
  }
  if (!EMAIL_PATTERN.test(email) || email.length > signupLimits.email) {
    return fail(errors.email, 400);
  }

  if (!(await subscribe({ email, name, source: "newsletter" }))) {
    return fail(errors.failed, 502);
  }
  return NextResponse.json({ ok: true });
}
