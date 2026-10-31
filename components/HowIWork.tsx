import { howIWork, offers } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";
import { CheckIcon } from "./Icons";

export function HowIWork() {
  return (
    <section id="jak-pracuje" aria-labelledby="jak-pracuje-title" className="bg-accent-blush py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 id="jak-pracuje-title" className="font-expanded text-title font-extrabold">
            {howIWork.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{howIWork.intro}</p>
        </div>

        {/* A real sequence, so the numbers carry meaning. */}
        <ol className="mt-14 grid md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-8">
          {howIWork.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative border-l-2 border-accent/30 pb-10 pl-6 last:pb-0 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-6"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[0.5625rem] top-1 h-4 w-4 rounded-full border-2 border-accent bg-accent-blush md:-top-[0.5625rem] md:left-0"
              />
              <span aria-hidden="true" className="block font-expanded text-5xl font-extrabold leading-none text-accent">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>

        {offers.map((offer) => (
          <div
            key={offer.title}
            className="mt-16 grid gap-10 rounded-[2rem] bg-white p-7 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14"
          >
            <div>
              <h3 className="font-semi-expanded text-2xl font-extrabold sm:text-3xl">{offer.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{offer.text}</p>
              <ButtonLink href={offer.cta.href} external className="mt-8 w-full sm:w-auto">
                {offer.cta.label}
              </ButtonLink>
            </div>
            <ul className="space-y-4 self-center">
              {offer.includes.map((item) => (
                <li key={item} className="flex gap-3 text-lg">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
