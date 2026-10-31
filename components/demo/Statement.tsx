import { demo } from "@/lib/data";
import { darkPanel, wrap } from "./ui";

// Editorial pause: Marta's own words, set large on the dark panel.
export function Statement() {
  const { statement } = demo;
  return (
    <section aria-label="Motto" className="px-2 sm:px-3">
      <div className={`${darkPanel} relative overflow-hidden`}>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.55em] right-[3%] select-none font-display text-[24rem] leading-none text-ed-rose/[0.12] sm:text-[38rem]"
        >
          „
        </span>
        <figure className={`${wrap} relative py-24 sm:py-32 lg:py-40`}>
          <blockquote className="max-w-5xl font-display text-ed-statement">
            <p className="text-ed-muted-dark">{statement.lines[0]}</p>
            <p>{statement.lines[1]}</p>
          </blockquote>
          <figcaption className="mt-12 flex items-center gap-5 sm:mt-16">
            <span aria-hidden="true" className="h-px w-14 bg-ed-rose" />
            <span>
              <span className="block font-medium">{statement.author}</span>
              <span className="block text-sm text-ed-muted-dark">{statement.role}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
