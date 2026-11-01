import Link from "next/link";
import type { Content } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";
import { MobileMenu } from "./MobileMenu";

export function Header({ content }: { content: Content }) {
  const { site, nav, applyCta, home, ui } = content;
  const other = ui.languageSwitch;
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-porcelain/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem]">
        <Link
          href={home}
          className="font-expanded text-xl font-extrabold tracking-tight"
        >
          {site.shortName}
          <span className="sr-only"> {ui.homeLabel}</span>
        </Link>

        <nav aria-label={ui.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem] font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="underline-offset-8 hover:text-accent hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={applyCta.href} external newTabLabel={ui.newTab} size="sm" className="hidden sm:inline-flex">
            {applyCta.label}
          </ButtonLink>
          {/* Plain link: the other language has its own root layout, so this is a full page load anyway. */}
          <a
            href={other.href}
            hrefLang={other.lang}
            lang={other.lang}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-line bg-white px-3 text-sm font-semibold hover:border-accent hover:text-accent"
          >
            {other.short}
            <span className="sr-only"> – {other.label}</span>
          </a>
          <MobileMenu nav={nav} cta={applyCta} ui={ui} />
        </div>
      </div>
    </header>
  );
}
