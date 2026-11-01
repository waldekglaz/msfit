import Link from "next/link";
import { business, type Content } from "@/lib/data";
import { InstagramIcon, MailIcon } from "./Icons";

export function Footer({ content }: { content: Content }) {
  const { footer, site, home, ui } = content;
  const other = ui.languageSwitch;
  return (
    // Bottom padding on phones keeps the sticky CTA from covering the footer.
    <footer className="border-t border-line pb-28 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href={home} className="font-expanded text-2xl font-extrabold tracking-tight">
              {site.shortName}
              <span className="sr-only"> {ui.homeLabel}</span>
            </Link>
            <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">{footer.tagline}</p>
          </div>

          <ul className="space-y-1 md:col-span-4">
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 font-medium hover:text-accent"
              >
                <InstagramIcon className="h-5 w-5 text-accent" />
                <span>
                  {site.instagram.handle}
                  <span className="sr-only">
                    {" "}
                    {ui.onInstagram} {ui.newTab}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-3 font-medium hover:text-accent">
                <MailIcon className="h-5 w-5 text-accent" />
                {site.email}
              </a>
            </li>
          </ul>

          <ul className="space-y-1 md:col-span-3">
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center font-medium underline-offset-4 hover:text-accent hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={other.href}
                hrefLang={other.lang}
                lang={other.lang}
                className="inline-flex min-h-11 items-center font-medium underline-offset-4 hover:text-accent hover:underline"
              >
                {other.label}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 max-w-3xl border-t border-line pt-8 text-sm leading-relaxed text-ink-soft">
          {footer.disclaimer}
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          © {new Date().getFullYear()} {business.tradingName}. {business.legalName}.
        </p>
      </div>
    </footer>
  );
}
