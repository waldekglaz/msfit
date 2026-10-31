import Link from "next/link";
import { demo } from "@/lib/data";
import { TextLink, sectionY, wrap } from "./ui";

export function DemoFaq() {
  const { faq } = demo;
  return (
    <section id="faq" aria-labelledby="faq-title" className={sectionY}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 id="faq-title" className="font-display text-ed-h2">
              {faq.title}
            </h2>
            <p className="mt-6 max-w-sm text-ed-lead text-ed-muted">{faq.intro}</p>
            <TextLink href={demo.dm.href} external className="mt-6">
              Napisz na Instagramie
            </TextLink>
          </div>
        </div>

        <div className="faq-anim border-t border-ed-ink/15 lg:col-span-8">
          {faq.items.map((item) => (
            <details key={item.question} className="group border-b border-ed-ink/15">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-8 py-7 sm:py-8">
                <h3 className="text-lg font-medium leading-snug sm:text-xl">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ed-ink/20 transition-colors duration-300 group-hover:border-ed-ink group-open:border-ed-ink group-open:bg-ed-ink group-open:text-ed-ivory motion-reduce:transition-none"
                >
                  <span className="relative h-3.5 w-3.5">
                    <span className="absolute left-0 top-1/2 h-px w-3.5 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-3.5 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 motion-reduce:transition-none" />
                  </span>
                </span>
              </summary>
              <div className="max-w-2xl pb-8 pr-14 leading-relaxed text-ed-muted">
                <p>{item.answer}</p>
                {item.link && (
                  <Link href={item.link.href} className="mt-4 inline-flex font-medium text-ed-ink underline decoration-1 underline-offset-4">
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
