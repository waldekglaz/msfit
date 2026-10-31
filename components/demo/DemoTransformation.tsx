import Image from "next/image";
import { demo } from "@/lib/data";
import { InfoIcon } from "../Icons";
import { EdButton, sectionY, wrap } from "./ui";

const photoSizes = "(min-width: 1024px) 28vw, 48vw";

// Before/after mounted like a print spread: one frame, two plates,
// a caption line underneath, the story alongside.
export function DemoTransformation() {
  const { transformation } = demo;
  const { item } = transformation;
  return (
    <section id="metamorfoza" aria-labelledby="metamorfoza-title" className={sectionY}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
        <figure className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-2 rounded-[1.5rem] bg-ed-beige p-2 sm:gap-3 sm:p-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem]">
              <Image src={item.before.src} alt={item.before.alt} fill sizes={photoSizes} className="object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-ed-ivory px-3.5 py-1.5 text-xs font-medium sm:left-4 sm:top-4">
                Przed
              </span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem]">
              <Image src={item.after.src} alt={item.after.alt} fill sizes={photoSizes} className="object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-ed-ink px-3.5 py-1.5 text-xs font-medium text-ed-ivory sm:left-4 sm:top-4">
                Po
              </span>
            </div>
          </div>
          <figcaption className="mt-4 flex flex-col gap-2 px-1 text-sm text-ed-muted sm:flex-row sm:justify-between sm:gap-8">
            <span className="sm:shrink-0">{transformation.caption}</span>
            <span className="flex gap-2 sm:max-w-[22rem]">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ed-rose-deep" />
              {transformation.note}
            </span>
          </figcaption>
        </figure>

        <div className="lg:col-span-5">
          <h2 id="metamorfoza-title" className="font-display text-ed-h2">
            {transformation.title}
          </h2>
          <p className="mt-6 text-ed-lead text-ed-muted">{transformation.text}</p>
          <EdButton href={demo.cta.href} external variant="outline" className="mt-10 w-full sm:w-auto">
            {demo.cta.label}
          </EdButton>
        </div>
      </div>
    </section>
  );
}
