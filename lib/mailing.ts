// =====================================================================
// Newsletter list: the one place to connect a mailing system.
//
// No system is chosen yet (MailerLite, Kit, Brevo…). Until then signups are
// only written to the server log, so they are NOT kept: Vercel keeps runtime
// logs for a short time only.
//
// To connect one:
//   1. Call its "add subscriber" API below, with its key in MAILING_API_KEY.
//   2. Pass `source` as a tag, group or field, so newsletter and freebie
//      signups can be told apart.
//   3. Turn on double opt-in in its settings, and update the newsletter's
//      success message in lib/data.ts.
//   4. Remove the log line, and return false when the API call fails.
// =====================================================================

export type Signup = {
  email: string;
  name: string;
  /** "newsletter", or "freebie:<id>" when ticked on a freebie form. */
  source: string;
};

/** Adds someone who asked for the newsletter. Returns false if that failed. */
export async function subscribe(signup: Signup): Promise<boolean> {
  console.info(
    `[mailing] No mailing system connected yet. Newsletter signup from ${signup.source}: ` +
      `${signup.name} <${signup.email}>, consent given ${new Date().toISOString()}`,
  );
  return true;
}
