import { createHmac, timingSafeEqual } from "node:crypto";
import { freebies } from "./data";

// Signed, expiring download links for the free materials. A link names the
// freebie and an expiry time, and carries an HMAC of both made with
// FREEBIE_LINK_SECRET, so links can't be made up or extended.

const DOWNLOAD_PATH = "/api/freebie/download";

function secret(): string | null {
  if (process.env.FREEBIE_LINK_SECRET) return process.env.FREEBIE_LINK_SECRET;
  // Local development works without setting one; production must have its own.
  return process.env.NODE_ENV === "production" ? null : "local-development-only";
}

function signature(key: string, id: string, expires: number) {
  return createHmac("sha256", key).update(`${id}.${expires}`).digest("base64url");
}

/** Path of a new download link for this freebie, or null if no secret is set. */
export function downloadPath(id: string): string | null {
  const key = secret();
  if (!key) return null;
  const expires = Math.floor(Date.now() / 1000) + freebies.linkDays * 24 * 60 * 60;
  const query = new URLSearchParams({ id, expires: String(expires), sig: signature(key, id, expires) });
  return `${DOWNLOAD_PATH}?${query}`;
}

export type LinkCheck = "ok" | "expired" | "invalid" | "unconfigured";

export function checkDownloadLink(id: string, expiresParam: string, sig: string): LinkCheck {
  const key = secret();
  if (!key) return "unconfigured";
  const expires = Number(expiresParam);
  if (!id || !Number.isInteger(expires)) return "invalid";
  const expected = Buffer.from(signature(key, id, expires));
  const given = Buffer.from(sig);
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return "invalid";
  return expires * 1000 < Date.now() ? "expired" : "ok";
}
