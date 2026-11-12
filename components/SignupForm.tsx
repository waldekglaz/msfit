"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { freebies, newsletter } from "@/lib/data";
import { EMAIL_PATTERN, NAME_PATTERN, signupLimits } from "@/lib/form-checks";

// First name + email form for a freebie (then a download button, and the same
// link by email) or for the newsletter. Poster colours, as it's on /demo-3.

type Props =
  | { kind: "freebie"; freebieId: string; copy: (typeof freebies)["form"] }
  | { kind: "newsletter"; copy: (typeof newsletter)["form"]; fieldsInRow?: boolean };

type Field = "name" | "email";
type Result = { email: string; downloadUrl?: string; emailSent?: boolean; subscribed?: boolean };

const fieldBase =
  "mt-2 block w-full rounded-[4px] border bg-poster-black px-4 py-3 text-base text-white placeholder:text-poster-grey focus:border-poster-pink focus:outline-none focus:ring-2 focus:ring-poster-pink/40";
const pinkButton =
  "inline-flex min-h-12 items-center justify-center rounded-[4px] bg-poster-pink px-6 py-3 font-semibold text-poster-on-pink transition-colors hover:bg-poster-pink-hover motion-reduce:transition-none";

export function SignupForm(props: Props) {
  const { copy } = props;
  const id = useId();
  // Bots submit instantly; the API ignores anything sent under ~3 seconds.
  const [loadedAt] = useState(() => Date.now());
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "failed">("idle");
  const [failure, setFailure] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const doneRef = useRef<HTMLParagraphElement>(null);

  // Move focus to the confirmation so screen readers announce it.
  useEffect(() => {
    if (result) doneRef.current?.focus();
  }, [result]);

  function validate(name: string, email: string) {
    const found: Partial<Record<Field, string>> = {};
    if (!name) found.name = copy.errors.name;
    else if (!NAME_PATTERN.test(name) || name.length > signupLimits.name) found.name = copy.errors.nameInvalid;
    if (!EMAIL_PATTERN.test(email) || email.length > signupLimits.email) found.email = copy.errors.email;
    return found;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const found = validate(name, email);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(props.kind === "freebie" ? "/api/freebie" : "/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(props.kind === "freebie" ? { id: props.freebieId, newsletter: data.get("newsletter") === "on" } : {}),
          name,
          email,
          website: data.get("website"),
          loadedAt,
        }),
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok || !json.ok) {
        setFailure(typeof json.error === "string" ? json.error : copy.errors.failed);
        setStatus("failed");
        return;
      }
      setStatus("idle");
      setResult({ email, downloadUrl: json.downloadUrl, emailSent: json.emailSent, subscribed: json.subscribed });
    } catch {
      setFailure(copy.errors.failed);
      setStatus("failed");
    }
  }

  if (result) {
    return (
      <div className="rounded-[4px] border border-poster-pink/60 bg-poster-black p-5">
        <p ref={doneRef} tabIndex={-1} className="font-poster text-3xl focus:outline-none">
          {copy.success.title}
        </p>
        {props.kind === "freebie" ? (
          <>
            {result.downloadUrl && (
              <a href={result.downloadUrl} download className={`${pinkButton} mt-4 w-full`}>
                {props.copy.success.download}
              </a>
            )}
            <p className="mt-4 text-sm leading-relaxed text-poster-grey">
              {result.emailSent ? (
                <>
                  {props.copy.success.emailSent} <span className="font-semibold text-white">{result.email}</span>.
                </>
              ) : (
                props.copy.success.emailFailed
              )}
              {result.subscribed && <> {props.copy.success.subscribed}</>}
            </p>
          </>
        ) : (
          <p className="mt-2 leading-relaxed text-poster-grey">{props.copy.success.text}</p>
        )}
      </div>
    );
  }

  const fieldClass = (field: Field) => `${fieldBase} ${errors[field] ? "border-poster-bright" : "border-white/25"}`;
  const describedBy = (field: Field) => (errors[field] ? `${id}-${field}-error` : undefined);
  const inRow = props.kind === "newsletter" && props.fieldsInRow;

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-4">
      <div className={inRow ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
        {(["name", "email"] as const).map((field) => (
          <div key={field}>
            <label htmlFor={`${id}-${field}`} className="text-sm font-semibold">
              {copy.fields[field]}
            </label>
            <input
              id={`${id}-${field}`}
              name={field}
              type={field === "email" ? "email" : "text"}
              inputMode={field === "email" ? "email" : undefined}
              autoComplete={field === "email" ? "email" : "given-name"}
              maxLength={signupLimits[field]}
              required
              aria-invalid={errors[field] ? true : undefined}
              aria-describedby={describedBy(field)}
              className={fieldClass(field)}
            />
            {errors[field] && (
              <p id={`${id}-${field}-error`} className="mt-2 text-sm font-medium text-poster-bright">
                {errors[field]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>{copy.fields.honeypot}</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {props.kind === "freebie" && (
        <div className="flex gap-3">
          <input id={`${id}-newsletter`} name="newsletter" type="checkbox" className="mt-0.5 h-5 w-5 shrink-0 accent-poster-pink" />
          <label htmlFor={`${id}-newsletter`} className="text-sm leading-relaxed text-poster-grey">
            {props.copy.newsletterOptIn}
          </label>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${pinkButton} w-full disabled:cursor-wait disabled:opacity-80 ${inRow ? "sm:w-auto" : ""}`}
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>

      <p className="text-xs leading-relaxed text-poster-grey">
        {copy.note.before}
        <Link href={copy.note.href} className="font-semibold text-white underline underline-offset-2">
          {copy.note.linkLabel}
        </Link>
        {copy.note.after}
      </p>

      <div role="status" aria-live="polite" className="text-sm font-medium">
        {status === "failed" && <p className="rounded-[4px] border border-poster-pink/40 px-4 py-3">{failure}</p>}
      </div>
    </form>
  );
}
