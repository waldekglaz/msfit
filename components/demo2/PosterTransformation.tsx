import Image from "next/image";
import { demo, demo2 } from "@/lib/data";
import { InfoIcon } from "../Icons";
import { PButton, Pink, sectionY, wrap } from "./ui";

const photoSizes = "(min-width: 1024px) 30vw, 50vw";

export function PosterTransformation() {
  const { transformation } = demo;
  const { item } = transformation;
  return (
    <section id="metamorfoza" aria-labelledby="metamorfoza-title" className={`bg-poster-black ${sectionY}`}>
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <h2 id="metamorfoza-title" className="font-poster text-p-h2">
            <Pink text={transformation.title} words={demo2.pink.transformation} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-poster-grey">{transformation.text}</p>
          <p className="mt-6 flex gap-3 text-[0.95rem] leading-relaxed">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-poster-pink" />
            {transformation.note}
          </p>
          <PButton href={demo.cta.href} external variant="outline" className="mt-10 w-full sm:w-auto">
            {demo.cta.label}
          </PButton>
        </div>

        <figure className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] bg-poster-charcoal">
              <Image src={item.before.src} alt={item.before.alt} fill sizes={photoSizes} className="object-cover" />
              <span className="absolute left-0 top-0 bg-white px-4 py-2 text-sm font-bold text-poster-black">Przed</span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] bg-poster-charcoal">
              <Image src={item.after.src} alt={item.after.alt} fill sizes={photoSizes} className="object-cover" />
              <span className="absolute left-0 top-0 bg-poster-pink px-4 py-2 text-sm font-bold text-poster-black">Po</span>
            </div>
          </div>
          <figcaption className="mt-4 text-sm text-poster-grey">{transformation.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
