import { readFile } from "node:fs/promises";
import path from "node:path";
import { freebies } from "@/lib/data";
import { checkDownloadLink } from "@/lib/freebie-links";

// Serves a freebie file for a valid, unexpired link from the freebie form or
// its email. The files are in private/freebies/ and are bundled with this
// route by `outputFileTracingIncludes` in next.config.mjs.

export const dynamic = "force-dynamic";

const contentTypes: Record<string, string> = {
  ".pdf": "application/pdf",
  ".zip": "application/zip",
  ".jpg": "image/jpeg",
  ".png": "image/png",
};

/** A small page for old or broken links, with a way back to the forms. */
function linkError(status: number, message: string) {
  const back = `${freebies.page}#${freebies.id}`;
  const html = `<!doctype html><html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${message}</title></head>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#050505;color:#fff;font-family:system-ui,sans-serif;text-align:center;padding:24px">
<main><h1 style="font-size:1.5rem">${message}</h1><p><a href="${back}" style="color:#fff">${freebies.linkErrors.back}</a></p></main></body></html>`;
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const id = params.get("id") ?? "";
  const check = checkDownloadLink(id, params.get("expires") ?? "", params.get("sig") ?? "");
  const freebie = freebies.items.find((item) => item.id === id);

  if (check === "unconfigured") {
    console.error("[freebie] FREEBIE_LINK_SECRET is not set");
    return linkError(503, freebies.linkErrors.invalid);
  }
  if (check === "expired") return linkError(410, freebies.linkErrors.expired);
  if (check !== "ok" || !freebie) return linkError(404, freebies.linkErrors.invalid);

  try {
    const file = await readFile(path.join(process.cwd(), "private", "freebies", freebie.file));
    return new Response(file, {
      headers: {
        "Content-Type": contentTypes[path.extname(freebie.file).toLowerCase()] ?? "application/octet-stream",
        "Content-Disposition": `attachment; filename="${freebie.file}"`,
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  } catch (error) {
    console.error(`[freebie] Missing file private/freebies/${freebie.file}:`, error);
    return linkError(404, freebies.linkErrors.invalid);
  }
}
