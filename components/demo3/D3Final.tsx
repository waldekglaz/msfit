import { contactForm, demo3, finalCta, site } from "@/lib/data";
import { ContactForm } from "../ContactForm";
import { InstagramIcon } from "../Icons";
import { PButton, Pink, wrap } from "../demo2/ui";

// The closing spread: the big question and the application button on the
// left, the working contact form (same API, poster colours) on the right.
export function D3Final() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="relative isolate overflow-hidden border-t border-white/10 bg-poster-black">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_40%,theme(colors.poster.wine)_0%,transparent_60%)] opacity-90"
      />
      <div className={`${wrap} grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:py-36`}>
        <div className="lg:col-span-6 lg:pt-4">
          <h2 id="kontakt-title" className="font-poster text-p-mega [text-wrap:balance]">
            <Pink text={finalCta.title} words={demo3.pink.final} />
          </h2>
          <div aria-hidden="true" className="mt-6 h-[3px] w-44 bg-poster-pink" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-poster-grey sm:text-xl">{finalCta.text}</p>
          <PButton href={finalCta.cta.href} external className="mt-10 w-full sm:w-auto">
            {finalCta.cta.label}
          </PButton>

          <p className="mt-14 max-w-md leading-relaxed text-poster-grey">{finalCta.instagramText}</p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-12 items-center gap-3 font-semibold text-poster-bright transition-colors hover:text-white"
          >
            <InstagramIcon className="h-6 w-6" />
            <span>
              {site.instagram.handle}
              <span className="sr-only"> na Instagramie (otwiera się w nowej karcie)</span>
            </span>
          </a>
        </div>

        <div className="rounded-[6px] border border-white/10 bg-poster-ink p-6 sm:p-10 lg:col-span-6">
          <h3 className="font-poster text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.05]">{contactForm.title}</h3>
          <p className="mt-3 text-poster-grey">{contactForm.intro}</p>
          <ContactForm copy={contactForm} email={site.email} tone="poster" />
        </div>
      </div>
    </section>
  );
}
