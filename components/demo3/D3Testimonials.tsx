import { demo3, testimonials } from "@/lib/data";
import { QuoteIcon } from "../Icons";
import { PlaceholderBadge } from "../PlaceholderBadge";
import { Pink, sectionY, wrap } from "../demo2/ui";

export function D3Testimonials() {
  return (
    <section id="opinie" aria-labelledby="opinie-title" className={`border-t border-white/10 bg-poster-ink ${sectionY}`}>
      <div className={wrap}>
        <div className="max-w-2xl">
          <h2 id="opinie-title" className="font-poster text-p-h2">
            <Pink text={testimonials.title} words={demo3.pink.testimonials} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-poster-grey">{testimonials.intro}</p>
        </div>

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-20">
          {testimonials.items.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col border-t-2 border-poster-pink pt-8">
                <QuoteIcon className="h-8 w-8 text-poster-pink" />
                <blockquote className="mt-5 flex-1 text-xl font-medium leading-relaxed">
                  <p>„{item.quote}”</p>
                </blockquote>
                <figcaption className="mt-8">
                  <span className="block font-semibold">{item.name}</span>
                  <span className="block text-sm text-poster-grey">{item.detail}</span>
                </figcaption>
                {item.placeholder && <PlaceholderBadge tone="dark" className="mt-5 self-start" />}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
