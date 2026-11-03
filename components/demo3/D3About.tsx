import Image from "next/image";
import { about, demo3, site } from "@/lib/data";
import { CheckIcon, InstagramIcon } from "../Icons";
import { Pink } from "../demo2/ui";

// "O mnie" as a half-bleed spread: the photo runs to the screen edge and
// fades into black beside Marta's story and qualifications.
export function D3About() {
  return (
    <section id="o-mnie" aria-labelledby="o-mnie-title" className="border-t border-white/10 bg-poster-black">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-auto lg:min-h-[54rem]">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_28%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-poster-black via-transparent to-transparent lg:bg-gradient-to-l lg:from-poster-black lg:via-transparent"
          />
        </div>

        <div className="px-5 pb-20 pt-4 sm:px-8 sm:pb-28 lg:px-16 lg:py-32 xl:px-24">
          <div className="max-w-xl">
            <h2 id="o-mnie-title" className="font-poster text-p-h2">
              <Pink text={about.title} words={demo3.pink.about} />
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-poster-grey">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-12 font-poster text-p-h3">{about.credentialsTitle}</h3>
            <ul className="mt-5 border-b border-white/10">
              {about.credentials.map((credential) => (
                <li key={credential} className="flex gap-4 border-t border-white/10 py-4">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-poster-pink" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-12 items-center gap-3 font-semibold text-white underline-offset-4 hover:underline"
            >
              <InstagramIcon className="h-6 w-6 text-poster-pink" />
              <span>
                {about.instagramLabel}: {site.instagram.handle}
                <span className="sr-only"> (otwiera się w nowej karcie)</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
