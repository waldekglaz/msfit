import Link from "next/link";
import type { Content } from "@/lib/data";
import { PlusIcon } from "./Icons";

export function Faq({ content }: { content: Content }) {
  const { faq } = content;
  const id = content.ids.faq;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 id={`${id}-title`} className="font-expanded text-title font-extrabold">
            {faq.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{faq.intro}</p>
          <a
            href={faq.contactLink.href}
            className="mt-4 inline-flex min-h-12 items-center font-semibold text-accent underline underline-offset-4"
          >
            {faq.contactLink.label}
          </a>
        </div>

        <div className="mt-12 max-w-4xl border-t border-line">
          {faq.items.map((item) => (
            <details key={item.question} className="group border-b border-line">
              <summary className="flex min-h-12 cursor-pointer items-start justify-between gap-6 py-5">
                <h3 className="text-lg font-semibold leading-snug">{item.question}</h3>
                <PlusIcon className="mt-0.5 h-6 w-6 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none" />
              </summary>
              <div className="max-w-prose pb-6 pr-10 leading-relaxed text-ink-soft">
                <p>{item.answer}</p>
                {item.link && (
                  <Link href={item.link.href} className="mt-3 inline-block font-semibold text-accent underline underline-offset-4">
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
