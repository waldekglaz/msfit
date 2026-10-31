import Link from "next/link";
import { demo, footer, site } from "@/lib/data";
import { TextLink, wrap } from "./ui";

export function DemoFooter() {
  return (
    // Bottom padding on phones keeps the sticky CTA from covering the footer.
    <footer className="overflow-hidden pb-28 md:pb-10">
      <div className={`${wrap} pt-20 sm:pt-24`}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="max-w-sm font-display text-ed-h3">{footer.tagline}</p>
            <TextLink href={demo.cta.href} external className="mt-6">
              {demo.cta.label}
            </TextLink>
          </div>
          <ul className="space-y-1 text-[0.95rem] lg:col-span-3 lg:col-start-7">
            <li>
              <TextLink href={site.instagram.url} external className="no-underline hover:underline">
                Instagram {site.instagram.handle}
              </TextLink>
            </li>
            <li>
              <TextLink href={`mailto:${site.email}`} className="no-underline hover:underline">
                {site.email}
              </TextLink>
            </li>
          </ul>
          <ul className="space-y-1 text-[0.95rem] lg:col-span-3">
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center font-medium underline-offset-[6px] hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={demo.backLink.href} className="inline-flex min-h-11 items-center font-medium text-ed-rose-deep underline decoration-1 underline-offset-[6px]">
                {demo.backLink.label}
              </Link>
            </li>
          </ul>
        </div>

        <p aria-hidden="true" className="mt-16 select-none whitespace-nowrap font-display text-[25vw] leading-[0.78] tracking-[-0.045em] lg:mt-20 lg:text-[20rem]">
          MS Fit
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-ed-line pt-8 text-sm leading-relaxed text-ed-muted lg:flex-row lg:justify-between lg:gap-16">
          <p className="max-w-3xl">{footer.disclaimer}</p>
          <p className="shrink-0">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
