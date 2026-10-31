import Image from "next/image";
import { demo } from "@/lib/data";
import { EdIcon } from "./EdIcons";
import { EdButton, sectionY, wrap } from "./ui";

export function DemoOffer() {
  const { offer } = demo;
  const lastIndex = offer.benefits.length - 1;
  return (
    <section id="co-dostajesz" aria-labelledby="co-dostajesz-title" className={sectionY}>
      <div className={`${wrap} grid items-start gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:sticky lg:top-28 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] rounded-tr-[6rem] bg-ed-beige sm:rounded-tr-[10rem]">
            <Image
              src={offer.image.src}
              alt={offer.image.alt}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_30%] saturate-[0.82]"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <h2 id="co-dostajesz-title" className="max-w-xl font-display text-ed-h2">
            {offer.title}
          </h2>
          <p className="mt-6 max-w-lg text-ed-lead text-ed-muted">{offer.intro}</p>

          <ul className="mt-12 grid border-t border-ed-line sm:grid-cols-2">
            {offer.benefits.map((benefit, index) => {
              const last = index === lastIndex && index % 2 === 0;
              const right = index % 2 === 1;
              return (
                <li
                  key={benefit.title}
                  className={`flex gap-5 border-b border-ed-line py-7 ${right ? "sm:border-l sm:pl-8" : "sm:pr-8"} ${last ? "sm:col-span-2" : ""}`}
                >
                  <EdIcon name={benefit.icon} className="mt-0.5 h-7 w-7 shrink-0 text-ed-rose-deep" />
                  <div>
                    <h3 className="text-lg font-medium leading-snug">{benefit.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ed-muted">{benefit.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <EdButton href={demo.cta.href} external>
              {demo.cta.label}
            </EdButton>
            <p className="max-w-[17rem] text-sm leading-relaxed text-ed-muted">{offer.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
