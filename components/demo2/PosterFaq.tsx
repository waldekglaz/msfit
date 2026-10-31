import Link from "next/link";
import type { Faq } from "@/lib/data";
import { Pink, sectionY, wrap } from "./ui";

type Props = {
  title: string;
  pinkWords: string[];
  intro: string;
  items: Faq[];
  /** Where to ask a question that isn't answered here. */
  contact: { label: string; href: string; external?: boolean };
  /** Section background, to keep light/dark rhythm with its neighbours. */
  background?: "black" | "ink";
};

export function PosterFaq({ title, pinkWords, intro, items, contact, background = "black" }: Props) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className={`${background === "ink" ? "bg-poster-ink" : "bg-poster-black"} ${sectionY}`}
    >
      <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 id="faq-title" className="font-poster text-p-h2">
              <Pink text={title} words={pinkWords} />
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-poster-grey">{intro}</p>
            <a
              href={contact.href}
              className="mt-6 inline-flex min-h-11 items-center font-semibold text-poster-bright underline decoration-2 underline-offset-[6px] transition-colors hover:text-white"
              {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {contact.label}
              {contact.external && <span className="sr-only"> (otwiera się w nowej karcie)</span>}
            </a>
          </div>
        </div>

        <div className="faq-anim border-t border-white/10 lg:col-span-7">
          {items.map((item) => (
            <details key={item.question} className="group border-b border-white/10">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-8 py-7 transition-colors hover:text-poster-bright sm:py-8">
                <h3 className="text-lg font-semibold leading-snug sm:text-xl">{item.question}</h3>
                <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-poster-pink">
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 motion-reduce:transition-none" />
                </span>
              </summary>
              <div className="max-w-2xl pb-8 pr-12 text-[1.0625rem] leading-relaxed text-poster-grey">
                <p>{item.answer}</p>
                {item.link && (
                  <Link href={item.link.href} className="mt-4 inline-flex font-semibold text-white underline decoration-poster-pink decoration-2 underline-offset-4">
                    {item.link.label}
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
