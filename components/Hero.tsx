import Image from "next/image";
import type { Content } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";

export function Hero({ content }: { content: Content }) {
  const { hero, ui } = content;
  return (
    <section id="start" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="font-expanded text-display font-extrabold [text-wrap:balance]"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft sm:text-xl sm:leading-relaxed">
            {hero.lead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={hero.primaryCta.href} external newTabLabel={ui.newTab}>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-6 sm:gap-6">
            {hero.stats.map((stat) => (
              <li key={stat.value}>
                <span className="block font-semi-expanded text-xl font-extrabold text-accent sm:text-2xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm leading-snug text-ink-soft">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-none">
          {/* Offset outline arch: a quiet second contour behind the portrait. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-arch border-2 border-accent sm:translate-x-4 sm:translate-y-4"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-arch bg-sand">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute bottom-5 left-5 right-5 w-fit rounded-full bg-porcelain px-4 py-2 text-sm font-medium shadow-sm">
            {hero.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
