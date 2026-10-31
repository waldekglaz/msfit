import Image from "next/image";
import { demo, demo2 } from "@/lib/data";
import { DmText, PButton, Pink, wrap } from "./ui";

// The last page of the campaign: Marta's photo in a black-and-pink duotone
// bleeding in from the right, the headline set larger than anywhere else.
export function PosterFinal() {
  const { final } = demo;
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="relative isolate overflow-hidden border-t border-white/10 bg-poster-black">
      <div aria-hidden="true" className="relative h-[52svh] min-h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[46%]">
        <Image
          src={final.image.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover object-[50%_20%] grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-poster-pink mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-poster-black via-poster-black/20 to-transparent lg:bg-gradient-to-r lg:from-poster-black lg:via-poster-black/30 lg:to-transparent" />
      </div>

      <div className={`${wrap} relative -mt-28 pb-24 sm:-mt-36 lg:mt-0 lg:flex lg:min-h-[48rem] lg:items-center lg:py-32`}>
        <div className="max-w-3xl">
          <h2 id="kontakt-title" className="font-poster text-p-mega [text-wrap:balance]">
            <Pink text={final.title} words={demo2.pink.final} />
          </h2>
          <div aria-hidden="true" className="mt-6 h-[3px] w-44 bg-poster-pink" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-poster-grey sm:text-xl">{final.text}</p>
          <PButton href={demo.cta.href} external className="mt-10 w-full sm:w-auto">
            {demo.cta.label}
          </PButton>
          <DmText className="mt-8 max-w-md text-[0.95rem]" />
        </div>
      </div>
    </section>
  );
}
