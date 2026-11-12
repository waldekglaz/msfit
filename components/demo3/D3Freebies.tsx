import Image from "next/image";
import { demo3, freebies } from "@/lib/data";
import { PlaceholderBadge } from "../PlaceholderBadge";
import { SignupForm } from "../SignupForm";
import { Pink, sectionY, wrap } from "../demo2/ui";

// "Darmowe materiały": straight after the paid products, on the same black,
// so it reads as part of the products section. Each freebie has its own form.
export function D3Freebies() {
  // Two freebies share the width; from three on, three per row like the products.
  const columns = freebies.items.length >= 3 ? "lg:grid-cols-3" : "";
  return (
    <section id={freebies.id} aria-labelledby={`${freebies.id}-title`} className={`bg-poster-black ${sectionY} !pt-0`}>
      <div className={wrap}>
        <div className="grid gap-6 border-t border-white/10 pt-16 lg:grid-cols-12 lg:items-end lg:pt-24">
          <h2 id={`${freebies.id}-title`} className="font-poster text-p-h2 lg:col-span-6">
            <Pink text={freebies.title} words={demo3.pink.freebies} />
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-poster-grey lg:col-span-5 lg:col-start-8">{freebies.intro}</p>
        </div>

        <ul className={`mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 ${columns}`}>
          {freebies.items.map((freebie) => (
            <li key={freebie.id}>
              <article
                aria-labelledby={`freebie-${freebie.id}`}
                className="flex h-full flex-col overflow-hidden rounded-[6px] border border-white/10 bg-poster-ink"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={freebie.image.src}
                    alt={freebie.image.alt}
                    fill
                    sizes="(min-width: 1024px) 26rem, (min-width: 768px) 45vw, 92vw"
                    className="object-cover"
                  />
                  <p className="absolute left-0 top-0 bg-poster-pink px-3 py-1.5 text-xs font-semibold text-poster-on-pink">
                    {freebies.badge} · {freebie.format}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 id={`freebie-${freebie.id}`} className="font-poster text-[1.9rem] leading-[1.08]">
                    {freebie.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-poster-grey">{freebie.description}</p>
                  {freebie.placeholder && <PlaceholderBadge tone="dark" className="mt-4 self-start" />}
                  <div className="mt-auto pt-8">
                    <SignupForm kind="freebie" freebieId={freebie.id} copy={freebies.form} />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
