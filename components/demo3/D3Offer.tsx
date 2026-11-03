import { demo3, offers } from "@/lib/data";
import { CheckIcon } from "../Icons";
import { PButton, Pink } from "../demo2/ui";

// The 1:1 offer closing the "Jak pracuję" section: the one pink-framed panel
// on the page, like the recommended card on /demo-2.
export function D3Offer() {
  return (
    <>
      {offers.map((offer) => (
        <div
          key={offer.title}
          className="mt-16 grid gap-10 rounded-[6px] border-2 border-poster-pink bg-poster-charcoal p-7 shadow-[0_0_90px_-35px_theme(colors.poster.pink)] sm:p-10 lg:mt-24 lg:grid-cols-12 lg:gap-16 lg:p-14"
        >
          <div className="lg:col-span-5">
            <h3 className="font-poster text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.02]">
              <Pink text={offer.title} words={demo3.pink.offer} />
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-poster-grey">{offer.text}</p>
            <PButton href={offer.cta.href} external className="mt-9 w-full sm:w-auto">
              {offer.cta.label}
            </PButton>
          </div>
          <ul className="self-center border-b border-white/10 lg:col-span-7">
            {offer.includes.map((item) => (
              <li key={item} className="flex gap-4 border-t border-white/10 py-4 text-lg">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-poster-pink" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
