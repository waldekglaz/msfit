import Image from "next/image";
import type { CSSProperties } from "react";
import { demo, demo2 } from "@/lib/data";
import { DmText, PButton, Pink, wrap } from "./ui";

// The poster as a first screen: stacked black serif headline with pink
// words over black, Marta's photo bleeding in from the right (from the top
// on phones) and dissolving into the background, not boxed in a card.
export function PosterHero() {
  const { hero } = demo2;
  return (
    <section id="start" aria-labelledby="poster-hero-title" className="relative isolate overflow-hidden bg-poster-black">
      <div className="relative h-[60svh] min-h-[420px] sm:h-[68svh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[55%]">
        <Image
          src={demo.hero.image.src}
          alt={demo.hero.image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-[55%_18%] lg:object-[40%_22%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-poster-black via-poster-black/20 to-transparent lg:bg-gradient-to-r lg:from-poster-black lg:via-poster-black/25 lg:to-transparent"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-poster-black to-transparent lg:block" />
      </div>

      <div className={`${wrap} relative -mt-40 pb-16 sm:-mt-52 lg:mt-0 lg:flex lg:min-h-[calc(100svh-4.5rem)] lg:items-center lg:py-20`}>
        <div className="max-w-[42rem]">
          <h1 id="poster-hero-title" className="font-poster text-p-hero">
            {hero.lines.map((line, index) => (
              <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
                <span className="p-rise block" style={{ "--i": index } as CSSProperties}>
                  <Pink text={line} words={demo2.pink.heroLines} />
                </span>
              </span>
            ))}
          </h1>
          <div aria-hidden="true" className="p-rule mt-6 h-[3px] w-44 bg-poster-pink" />

          <p className="p-fade mt-8 max-w-[34rem] font-poster text-[clamp(1.4rem,2.3vw,2rem)] leading-[1.22]">
            <Pink text={hero.lead} words={demo2.pink.heroLead} />
          </p>

          <div className="p-fade mt-10 flex flex-col gap-3 sm:flex-row">
            <PButton href={demo.cta.href} external>
              {demo.cta.label}
            </PButton>
            <PButton href={demo.hero.secondary.href} variant="outline">
              {demo.hero.secondary.label}
            </PButton>
          </div>
          <DmText className="p-fade mt-8 max-w-sm text-[0.95rem]" />
        </div>
      </div>
    </section>
  );
}
