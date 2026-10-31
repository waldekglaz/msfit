import { demo, demo2 } from "@/lib/data";
import { EdIcon } from "../demo/EdIcons";
import { PButton, Pink, sectionY, wrap } from "./ui";

export function PosterForYou() {
  const { forYou } = demo;
  return (
    <section id="dla-kogo" aria-labelledby="dla-kogo-title" className={`bg-poster-black ${sectionY}`}>
      <div className={`${wrap} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 id="dla-kogo-title" className="font-poster text-p-h2">
              <Pink text={forYou.title} words={demo2.pink.forYou} />
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-poster-grey">{forYou.intro}</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-b border-white/10">
            {forYou.items.map((item) => (
              <li key={item.title} className="flex gap-6 border-t border-white/10 py-8 sm:gap-8 sm:py-9">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-poster-pink/70 text-poster-pink">
                  <EdIcon name={item.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-poster text-p-h3">{item.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-poster-grey">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-poster text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.02]">
              {forYou.closing.title}
              <span className="block">
                <Pink text={forYou.closing.text} words={demo2.pink.forYouClosing} />
              </span>
            </p>
            <PButton href={demo.cta.href} external className="shrink-0">
              {demo.cta.label}
            </PButton>
          </div>
        </div>
      </div>
    </section>
  );
}
