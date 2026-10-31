import Image from "next/image";
import { demo, demo2 } from "@/lib/data";
import { EdIcon } from "../demo/EdIcons";
import { PButton, Pink } from "./ui";

// Half-bleed photo against the offer: the image runs to the edge of the
// screen and fades into the panel instead of sitting in a card.
export function PosterOffer() {
  const { offer } = demo;
  return (
    <section id="co-dostajesz" aria-labelledby="co-dostajesz-title" className="bg-poster-black">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-auto lg:min-h-[52rem]">
          <Image
            src={offer.image.src}
            alt={offer.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_28%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-poster-black via-transparent to-transparent lg:bg-gradient-to-l lg:from-poster-black lg:via-transparent"
          />
        </div>

        <div className="px-5 pb-20 pt-4 sm:px-8 sm:pb-28 lg:px-16 lg:py-32 xl:px-24">
          <div className="max-w-xl">
            <h2 id="co-dostajesz-title" className="font-poster text-p-h2">
              <Pink text={offer.title} words={demo2.pink.offer} />
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-poster-grey">{offer.intro}</p>

            <ul className="mt-12 border-b border-white/10">
              {offer.benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-5 border-t border-white/10 py-6">
                  <EdIcon name={benefit.icon} className="mt-0.5 h-7 w-7 shrink-0 text-poster-pink" />
                  <div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-1 leading-relaxed text-poster-grey">{benefit.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <PButton href={demo.cta.href} external className="shrink-0">
                {demo.cta.label}
              </PButton>
              <p className="max-w-[16rem] text-sm leading-relaxed text-poster-grey">{offer.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
