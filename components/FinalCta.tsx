import type { Content } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";
import { ContactForm } from "./ContactForm";
import { InstagramIcon } from "./Icons";

export function FinalCta({ content }: { content: Content }) {
  const { finalCta, contactForm, site, ui } = content;
  const id = content.ids.contact;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="on-dark bg-ink text-porcelain">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-6 lg:pt-6">
          <h2 id={`${id}-title`} className="font-expanded text-display font-extrabold [text-wrap:balance]">
            {finalCta.title}
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-sand sm:text-xl sm:leading-relaxed">
            {finalCta.text}
          </p>
          <ButtonLink href={finalCta.cta.href} external newTabLabel={ui.newTab} className="mt-8 w-full sm:w-auto">
            {finalCta.cta.label}
          </ButtonLink>

          <p className="mt-12 max-w-prose leading-relaxed text-sand">{finalCta.instagramText}</p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-12 items-center gap-3 font-semibold text-accent-light underline-offset-4 hover:underline"
          >
            <InstagramIcon className="h-6 w-6" />
            <span>
              {site.instagram.handle}
              <span className="sr-only">
                {" "}
                {ui.onInstagram} {ui.newTab}
              </span>
            </span>
          </a>
        </div>

        <div className="on-light rounded-[2rem] bg-porcelain p-6 text-ink sm:p-10 lg:col-span-6">
          <h3 className="font-semi-expanded text-2xl font-extrabold">{contactForm.title}</h3>
          <p className="mt-2 text-ink-soft">{contactForm.intro}</p>
          <ContactForm copy={contactForm} email={site.email} lang={content.lang} />
        </div>
      </div>
    </section>
  );
}
