import Image from "next/image";
import { demo } from "@/lib/data";
import { DmLine } from "./DmLine";
import { EdButton, darkPanel, wrap } from "./ui";

// Closing statement on the dark panel, mirroring the hero: the same photo,
// a tighter crop and the opposite corner swept round.
export function DemoFinal() {
  const { final } = demo;
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="px-2 sm:px-3">
      <div className={darkPanel}>
        <div className={`${wrap} grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28`}>
          <div className="lg:col-span-7">
            <h2 id="kontakt-title" className="font-display text-ed-statement [text-wrap:balance]">
              {final.title}
            </h2>
            <p className="mt-8 max-w-xl text-ed-lead text-ed-muted-dark">{final.text}</p>
            <EdButton href={demo.cta.href} external variant="light" className="mt-10 w-full sm:w-auto">
              {demo.cta.label}
            </EdButton>
            <DmLine dark className="mt-8 max-w-sm text-sm" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] rounded-br-[6rem] sm:aspect-[16/10] sm:rounded-br-[10rem] lg:col-span-5 lg:aspect-[4/5]">
            <Image
              src={final.image.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="scale-110 object-cover object-[50%_18%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
