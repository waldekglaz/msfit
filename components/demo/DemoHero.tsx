import Image from "next/image";
import type { CSSProperties } from "react";
import { demo } from "@/lib/data";
import { DmLine } from "./DmLine";
import { EdButton, TextLink, wrap } from "./ui";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

// Split hero: the promise on ivory, Marta's campaign photo with one
// sweeping rounded corner, and the trust figures as a ruled strip below.
export function DemoHero() {
  const { hero, stats } = demo;
  return (
    <section id="start" aria-labelledby="demo-hero-title">
      <div className={`${wrap} grid gap-12 pb-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-10`}>
        <div className="flex flex-col justify-center lg:col-span-6 lg:py-12 lg:pr-6">
          <p
            className="ed-enter inline-flex w-fit items-center gap-3 rounded-full border border-ed-line bg-ed-paper py-2 pl-3 pr-4 text-sm font-medium"
            style={step(0)}
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ed-rose-deep" />
            {hero.status}
          </p>
          <h1
            id="demo-hero-title"
            className="ed-enter mt-8 font-display text-ed-hero [text-wrap:balance]"
            style={step(1)}
          >
            {hero.title}
          </h1>
          <p className="ed-enter mt-8 max-w-[33rem] text-ed-lead text-ed-muted" style={step(2)}>
            {hero.lead}
          </p>
          <div className="ed-enter mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8" style={step(3)}>
            <EdButton href={demo.cta.href} external>
              {demo.cta.label}
            </EdButton>
            <TextLink href={hero.secondary.href} className="self-center sm:self-auto">
              {hero.secondary.label}
            </TextLink>
          </div>
          <div className="ed-enter mt-8" style={step(4)}>
            <DmLine className="max-w-sm text-sm" />
          </div>
        </div>

        <figure className="relative lg:col-span-6">
          <div className="ed-unveil relative aspect-[4/5] overflow-hidden rounded-[1.25rem] rounded-tl-[6rem] bg-ed-ink sm:aspect-[5/5] sm:rounded-tl-[10rem] lg:aspect-auto lg:h-full lg:min-h-[42rem]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[45%_22%]"
            />
          </div>
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-ed-ivory/90 px-4 py-2 text-sm backdrop-blur-sm sm:bottom-6 sm:left-6">
            {hero.caption}
          </figcaption>
        </figure>
      </div>

      <div className={wrap}>
        <ul className="grid grid-cols-3 border-y border-ed-line">
          {stats.map((stat, index) => (
            <li
              key={stat.value}
              className={`py-6 sm:py-9 ${index > 0 ? "border-l border-ed-line pl-3 sm:pl-8 lg:pl-12" : "pr-3"}`}
            >
              <span className="block font-display text-[clamp(1.9rem,4.6vw,3.6rem)] leading-none tracking-[-0.02em]">
                {stat.value}
              </span>
              <span className="mt-3 block max-w-[14rem] text-[0.8rem] leading-snug text-ed-muted sm:text-[0.95rem]">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
