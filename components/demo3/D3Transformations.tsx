import Image from "next/image";
import { demo3, transformations } from "@/lib/data";
import { InfoIcon } from "../Icons";
import { PlaceholderBadge } from "../PlaceholderBadge";
import { Pink, sectionY, wrap } from "../demo2/ui";

const photoSizes = "(min-width: 1024px) 18rem, (min-width: 768px) 24vw, 46vw";

export function D3Transformations() {
  return (
    <section id="metamorfozy" aria-labelledby="metamorfozy-title" className={`bg-poster-black ${sectionY}`}>
      <div className={wrap}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="metamorfozy-title" className="font-poster text-p-h2 lg:col-span-6">
            <Pink text={transformations.title} words={demo3.pink.transformations} />
          </h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-poster-grey">{transformations.intro}</p>
            <p className="mt-4 flex gap-3 text-[0.95rem] leading-relaxed">
              <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-poster-pink" />
              {transformations.note}
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {transformations.items.map((item) => (
            <li key={item.name}>
              <article className="flex h-full flex-col rounded-[6px] border border-white/10 bg-poster-ink p-3">
                <div className="grid grid-cols-2 gap-2">
                  <figure className="relative aspect-[3/4] overflow-hidden rounded-[3px] bg-poster-charcoal">
                    <Image src={item.before.src} alt={item.before.alt} fill sizes={photoSizes} className="object-cover" />
                    <figcaption className="absolute left-0 top-0 bg-white px-3 py-1.5 text-xs font-bold text-poster-black">
                      Przed
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-[3/4] overflow-hidden rounded-[3px] bg-poster-charcoal">
                    <Image src={item.after.src} alt={item.after.alt} fill sizes={photoSizes} className="object-cover" />
                    <figcaption className="absolute left-0 top-0 bg-poster-pink px-3 py-1.5 text-xs font-bold text-poster-black">
                      Po
                    </figcaption>
                  </figure>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                  <h3 className="font-poster text-[1.75rem] leading-tight">{item.name}</h3>
                  {item.quote ? (
                    <blockquote className="mt-2 flex-1 leading-relaxed text-poster-grey">
                      <p>„{item.quote}”</p>
                    </blockquote>
                  ) : (
                    <p className="mt-2 flex-1 leading-relaxed text-poster-grey">{item.description}</p>
                  )}
                  {item.placeholder && <PlaceholderBadge tone="dark" className="mt-5 self-start" />}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
