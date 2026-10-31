import Link from "next/link";
import { demo, demo2, footer, site } from "@/lib/data";
import { wrap } from "./ui";

const linkClass = "inline-flex min-h-11 items-center transition-colors duration-200 hover:text-poster-bright";

export function PosterFooter() {
  return (
    // Bottom padding on phones keeps the sticky CTA from covering the footer.
    <footer className="overflow-hidden border-t border-white/10 bg-poster-black pb-28 md:pb-10">
      <div className={`${wrap} pt-16 sm:pt-20`}>
        <p aria-hidden="true" className="select-none whitespace-nowrap font-poster text-[26vw] leading-[0.8] tracking-[-0.05em] lg:text-[17rem]">
          MS Fit<span className="text-poster-pink">.</span>
        </p>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12">
          <p className="max-w-sm font-poster text-2xl leading-snug lg:col-span-5">{footer.tagline}</p>
          <ul className="text-[0.95rem] font-medium lg:col-span-3 lg:col-start-7">
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram {site.instagram.handle}
                <span className="sr-only"> (otwiera się w nowej karcie)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={demo.cta.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} text-poster-bright`}>
                {demo.cta.label}
                <span className="sr-only"> (otwiera się w nowej karcie)</span>
              </a>
            </li>
          </ul>
          <ul className="text-[0.95rem] font-medium lg:col-span-3">
            {[...footer.legalLinks, ...demo2.backLinks].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm leading-relaxed text-poster-grey lg:flex-row lg:justify-between lg:gap-16">
          <p className="max-w-3xl">{footer.disclaimer}</p>
          <p className="shrink-0">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
