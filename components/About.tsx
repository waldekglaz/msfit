import Image from "next/image";
import type { Content } from "@/lib/data";
import { CheckIcon, InstagramIcon } from "./Icons";

export function About({ content }: { content: Content }) {
  const { about, site, ui } = content;
  const id = content.ids.about;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-sand sm:max-w-md lg:col-span-5 lg:max-w-none">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <h2 id={`${id}-title`} className="font-expanded text-title font-extrabold">
            {about.title}
          </h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ink-soft">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold">{about.credentialsTitle}</h3>
          <ul className="mt-4 space-y-3">
            {about.credentials.map((credential) => (
              <li key={credential} className="flex gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{credential}</span>
              </li>
            ))}
          </ul>

          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center gap-3 font-semibold text-accent underline-offset-4 hover:underline"
          >
            <InstagramIcon className="h-6 w-6" />
            <span>
              {about.instagramLabel}: {site.instagram.handle}
              <span className="sr-only"> {ui.newTab}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
