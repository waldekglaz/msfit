"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import type { contactForm as ContactCopy, Locale } from "@/lib/data";

type Copy = typeof ContactCopy;
type Field = "name" | "email" | "message" | "consent";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "failed";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Colour treatments: the main site's light card and the dark poster demos.
const tones = {
  light: {
    label: "font-semibold",
    field: "rounded-2xl border-2 bg-white text-ink placeholder:text-ink-soft focus:border-accent",
    fieldOk: "border-line",
    fieldError: "border-accent",
    error: "text-accent",
    checkbox: "accent-accent",
    consent: "text-ink-soft",
    link: "text-accent",
    submit: "rounded-full bg-accent text-white hover:bg-accent-deep",
    status: "rounded-2xl bg-accent-blush text-ink",
  },
  poster: {
    label: "font-semibold text-white",
    field:
      "rounded-[4px] border bg-poster-black text-white placeholder:text-poster-grey focus:border-poster-pink focus:ring-2 focus:ring-poster-pink/40",
    fieldOk: "border-white/25",
    fieldError: "border-poster-bright",
    error: "text-poster-bright",
    checkbox: "accent-poster-pink",
    consent: "text-poster-grey",
    link: "text-poster-bright",
    submit: "rounded-[4px] bg-poster-pink text-poster-black hover:bg-poster-bright",
    status: "rounded-[4px] border border-poster-pink/40 bg-poster-black text-white",
  },
};

type Props = {
  copy: Copy;
  email: string;
  tone?: keyof typeof tones;
  /** Page language, passed on to the email so Marta knows how to reply. */
  lang?: Locale;
};

export function ContactForm({ copy, email, tone = "light", lang = "pl" }: Props) {
  const t = tones[tone];
  // Bots submit instantly; the API ignores anything sent under ~3 seconds.
  const [loadedAt] = useState(() => Date.now());
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const { limits } = copy;

  function validate(data: FormData): Errors {
    const name = String(data.get("name") ?? "").trim();
    const mail = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = copy.errors.name;
    else if (name.length > limits.name) next.name = copy.errors.tooLong;
    if (!EMAIL_PATTERN.test(mail) || mail.length > limits.email) next.email = copy.errors.email;
    if (message.length < limits.messageMin) next.message = copy.errors.message;
    else if (message.length > limits.message) next.message = copy.errors.tooLong;
    if (!data.get("consent")) next.consent = copy.errors.consent;
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
          loadedAt,
          lang,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  const fieldClass = (field: Field) =>
    `mt-2 block w-full px-4 py-3 text-base focus:outline-none focus-visible:outline-none ${t.field} ${
      errors[field] ? t.fieldError : t.fieldOk
    }`;

  const describedBy = (field: Field) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form noValidate onSubmit={onSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="contact-name" className={t.label}>
          {copy.fields.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="given-name"
          maxLength={limits.name}
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy("name")}
          className={fieldClass("name")}
        />
        {errors.name && (
          <p id="name-error" className={`mt-2 text-sm font-medium ${t.error}`}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={t.label}>
          {copy.fields.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={limits.email}
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy("email")}
          className={fieldClass("email")}
        />
        {errors.email && (
          <p id="email-error" className={`mt-2 text-sm font-medium ${t.error}`}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={t.label}>
          {copy.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          minLength={limits.messageMin}
          maxLength={limits.message}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className={`${fieldClass("message")} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className={`mt-2 text-sm font-medium ${t.error}`}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">{copy.honeypot}</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <div className="flex gap-3">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={describedBy("consent")}
            className={`mt-1 h-5 w-5 shrink-0 ${t.checkbox}`}
          />
          <label htmlFor="contact-consent" className={`text-sm leading-relaxed ${t.consent}`}>
            {copy.consent.before}
            <Link href={copy.consent.href} className={`font-semibold underline underline-offset-2 ${t.link}`}>
              {copy.consent.linkLabel}
            </Link>
            {copy.consent.after}
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className={`mt-2 text-sm font-medium ${t.error}`}>
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`inline-flex min-h-12 w-full items-center justify-center px-6 py-3 font-semibold transition-colors disabled:cursor-wait disabled:opacity-80 motion-reduce:transition-none sm:w-auto ${t.submit}`}
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>

      <div role="status" aria-live="polite" className="text-[0.95rem] font-medium">
        {status === "sent" && <p className={`px-4 py-3 ${t.status}`}>{copy.success}</p>}
        {status === "failed" && (
          <p className={`px-4 py-3 ${t.status}`}>
            {copy.errors.failed}{" "}
            <a href={`mailto:${email}`} className={`font-semibold underline underline-offset-2 ${t.link}`}>
              {email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
