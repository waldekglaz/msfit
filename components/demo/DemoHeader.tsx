import { demo } from "@/lib/data";
import { DemoMenu } from "./DemoMenu";
import { EdButton, wrap } from "./ui";

export function DemoHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ed-line/80 bg-ed-ivory/90 backdrop-blur-md">
      <div className={`${wrap} flex h-[4.5rem] items-center justify-between gap-6`}>
        <a href="#start" className="flex items-baseline gap-2">
          <span className="font-display text-[1.65rem] leading-none tracking-[-0.02em]">MS Fit</span>
          <span className="text-sm text-ed-muted">Coaching</span>
          <span className="sr-only"> – początek strony</span>
        </a>

        <nav aria-label="Sekcje strony" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.95rem] text-ed-muted">
            {demo.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors duration-300 hover:text-ed-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <EdButton href={demo.cta.href} external size="sm" className="hidden sm:inline-flex">
            {demo.ctaShort}
          </EdButton>
          <DemoMenu nav={demo.nav} cta={demo.cta} />
        </div>
      </div>
    </header>
  );
}
