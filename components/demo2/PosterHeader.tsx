import { demo } from "@/lib/data";
import { PosterMenu } from "./PosterMenu";
import { PButton, wrap } from "./ui";

export function PosterHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-poster-black/85 backdrop-blur-md">
      <div className={`${wrap} flex h-[4.5rem] items-center justify-between gap-6`}>
        <a href="#start" className="font-poster text-[1.75rem] leading-none tracking-[-0.02em]">
          MS Fit<span className="text-poster-pink">.</span>
          <span className="sr-only"> Coaching – początek strony</span>
        </a>

        <nav aria-label="Sekcje strony" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.95rem] font-medium text-poster-grey">
            {demo.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors duration-200 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <PButton href={demo.cta.href} external size="sm" className="hidden sm:inline-flex">
            {demo.ctaShort}
          </PButton>
          <PosterMenu nav={demo.nav} cta={demo.cta} />
        </div>
      </div>
    </header>
  );
}
