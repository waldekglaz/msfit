// Checks shared by the signup forms (in the browser) and their API routes.

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** A first name: letters of any alphabet, spaces, hyphens and apostrophes.
 *  The name is put into an email greeting, so this also stops the form from
 *  being used to send links or other text from Marta's address. */
export const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}' .-]*$/u;

export const signupLimits = { name: 50, email: 254 };

/** Real people take more than a few seconds to fill in a form. */
const MIN_FILL_TIME_MS = 3000;

/** True for a filled honeypot ("website", hidden from people) or a form sent
 *  faster than anyone could type. The routes answer these with a fake success. */
export function looksLikeBot(body: Record<string, unknown>): boolean {
  if (typeof body.website === "string" && body.website.trim()) return true;
  const elapsed = Date.now() - Number(body.loadedAt);
  return !Number.isFinite(elapsed) || elapsed < MIN_FILL_TIME_MS;
}
