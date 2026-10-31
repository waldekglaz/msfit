import Image from "next/image";
import { transformations } from "@/lib/data";
import { InfoIcon } from "./Icons";
import { PlaceholderBadge } from "./PlaceholderBadge";

const photoSizes = "(min-width: 1024px) 17rem, (min-width: 768px) 22vw, 45vw";

export function Transformations() {
  return (
    <section id="metamorfozy" aria-labelledby="metamorfozy-title" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 id="metamorfozy-title" className="font-expanded text-title font-extrabold">
            {transformations.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{transformations.intro}</p>
          <p className="mt-5 flex gap-2.5 text-[0.95rem] font-medium">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            {transformations.note}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transformations.items.map((item) => (
            <li key={item.name}>
              <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-3 ring-1 ring-line">
                <div className="grid grid-cols-2 gap-2">
                  <figure className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-sand">
                    <Image src={item.before.src} alt={item.before.alt} fill sizes={photoSizes} className="object-cover" />
                    <figcaption className="absolute left-2 top-2 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                      Przed
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-sand">
                    <Image src={item.after.src} alt={item.after.alt} fill sizes={photoSizes} className="object-cover" />
                    <figcaption className="absolute left-2 top-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                      Po
                    </figcaption>
                  </figure>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <h3 className="font-semi-expanded text-xl font-bold">{item.name}</h3>
                  {item.quote ? (
                    <blockquote className="mt-2 flex-1 leading-relaxed text-ink-soft">
                      <p>„{item.quote}”</p>
                    </blockquote>
                  ) : (
                    <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{item.description}</p>
                  )}
                  {item.placeholder && <PlaceholderBadge className="mt-4 self-start" />}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
