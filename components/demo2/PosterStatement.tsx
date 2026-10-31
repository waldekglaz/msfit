import { demo, demo2 } from "@/lib/data";
import { Pink, wrap } from "./ui";

// The quote as the campaign's centre spread: centred, oversized, with a
// faint wine glow behind it and a pink quotation mark above.
export function PosterStatement() {
  const { statement } = demo;
  return (
    <section aria-label="Motto" className="relative isolate overflow-hidden border-y border-white/10 bg-poster-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,theme(colors.poster.wine)_0%,transparent_65%)] opacity-80"
      />
      <figure className={`${wrap} py-24 text-center sm:py-32 lg:py-40`}>
        <span aria-hidden="true" className="mb-4 block h-20 select-none overflow-hidden font-poster text-[9rem] leading-[0.95] text-poster-pink sm:mb-6 sm:h-24 sm:text-[11rem]">
          ”
        </span>
        <blockquote className="mx-auto max-w-5xl font-poster text-p-mega">
          {statement.lines.map((line) => (
            <p key={line}>
              <Pink text={line} words={demo2.pink.statement} />
            </p>
          ))}
        </blockquote>
        <figcaption className="mt-12 flex flex-col items-center gap-3 text-lg sm:flex-row sm:justify-center sm:gap-4">
          <span aria-hidden="true" className="h-[3px] w-12 bg-poster-pink" />
          <span className="font-semibold">{statement.author}</span>
          <span className="text-poster-grey">{statement.role}</span>
        </figcaption>
      </figure>
    </section>
  );
}
