import Link from "next/link";
import { applyCta, nav, site } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-porcelain/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem]">
        <Link
          href="/"
          className="font-expanded text-xl font-extrabold tracking-tight"
        >
          {site.shortName}
          <span className="sr-only"> Coaching – strona główna</span>
        </Link>

        <nav aria-label="Główna nawigacja" className="hidden lg:block">
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
          <ButtonLink href={applyCta.href} external size="sm" className="hidden sm:inline-flex">
            {applyCta.label}
          </ButtonLink>
          <MobileMenu nav={nav} cta={applyCta} />
        </div>
      </div>
    </header>
  );
}
