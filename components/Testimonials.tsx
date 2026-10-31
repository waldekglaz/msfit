import { testimonials } from "@/lib/data";
import { QuoteIcon } from "./Icons";
import { PlaceholderBadge } from "./PlaceholderBadge";

export function Testimonials() {
  return (
    <section id="opinie" aria-labelledby="opinie-title" className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-6xl border-t border-line px-5 pt-20 sm:px-8 lg:pt-28">
        <div className="max-w-2xl">
          <h2 id="opinie-title" className="font-expanded text-title font-extrabold">
            {testimonials.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{testimonials.intro}</p>
        </div>

        <ul className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          {testimonials.items.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col border-t-2 border-accent pt-6">
                <QuoteIcon className="h-7 w-7 text-accent" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
                  <p>„{item.quote}”</p>
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold">{item.name}</span>
                  <span className="block text-sm text-ink-soft">{item.detail}</span>
                </figcaption>
                {item.placeholder && <PlaceholderBadge className="mt-4 self-start" />}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
