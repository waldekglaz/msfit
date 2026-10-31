import { demo, demo2 } from "@/lib/data";
import { formatPrices } from "@/lib/format";
import { CheckIcon } from "../Icons";
import { PButton, Pink, sectionY, wrap } from "./ui";

// Dark cards on a 6-row subgrid so names, prices, features and buttons line
// up. 1:1 coaching is the recommended package: pink frame, badge and the
// only solid pink button.
export function PosterPricing() {
  const { pricing } = demo;
  const { coaching } = pricing;
  const products = [...pricing.products].sort((a, b) => (a.price.pln ?? 0) - (b.price.pln ?? 0));
  const card = "row-span-6 grid grid-rows-subgrid gap-y-0 rounded-[6px] p-7 sm:p-8";

  return (
    <section id="cennik" aria-labelledby="cennik-title" className={`bg-poster-ink ${sectionY}`}>
      <div className={wrap}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="cennik-title" className="font-poster text-p-h2 lg:col-span-6">
            <Pink text={pricing.title} words={demo2.pink.pricing} />
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-poster-grey lg:col-span-5 lg:col-start-8">{pricing.intro}</p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {products.map((product) => {
            const [mainPrice, ...otherPrices] = formatPrices(product.price);
            return (
              <li
                key={product.id}
                className={`${card} border border-white/10 bg-poster-black transition-colors duration-200 hover:border-white/30`}
              >
                <p className="text-sm text-poster-grey">{product.format}</p>
                <h3 className="mt-2 font-poster text-[1.9rem] leading-[1.08]">{product.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-poster-grey">{product.description}</p>
                <p className="mt-8 flex flex-wrap items-baseline gap-x-2 self-end">
                  <span className="sr-only">Cena: </span>
                  <span className="font-poster text-[3.25rem] leading-none tracking-[-0.03em] text-poster-pink">{mainPrice}</span>
                  {otherPrices.length > 0 && <span className="text-sm text-poster-grey">lub {otherPrices.join(" lub ")}</span>}
                </p>
                <ul className="mt-8 self-start border-t border-white/10 text-[0.95rem]">
                  {product.features?.map((feature) => (
                    <li key={feature} className="flex gap-3 border-b border-white/10 py-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-poster-pink" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="self-end pt-8">
                  <PButton href={product.checkoutUrl} external variant="outline" srLabel={product.title} size="card" className="w-full">
                    {pricing.buyLabel}
                  </PButton>
                </div>
              </li>
            );
          })}

          <li
            className={`${card} relative order-first border-2 border-poster-pink bg-poster-charcoal shadow-[0_0_80px_-30px_theme(colors.poster.pink)] sm:order-none lg:-my-5 lg:py-12`}
          >
            <p className="absolute right-6 top-6 rounded-[3px] bg-poster-pink px-3 py-1 text-xs font-bold text-poster-black sm:right-8 sm:top-8 lg:top-11">
              {coaching.badge}
            </p>
            <p className="pr-20 text-sm text-poster-grey">{coaching.label}</p>
            <h3 className="mt-2 max-w-[12rem] font-poster text-[1.9rem] leading-[1.08]">{coaching.name}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-poster-grey">{coaching.description}</p>
            <p className="mt-8 self-end">
              <span className="sr-only">Cena: </span>
              <span className="block font-poster text-[2rem] leading-none tracking-[-0.02em] text-poster-bright">
                {coaching.price}
              </span>
              <span className="mt-2 block text-sm text-poster-grey">{coaching.priceNote}</span>
            </p>
            <ul className="mt-8 self-start border-t border-white/10 text-[0.95rem]">
              {coaching.features.map((feature) => (
                <li key={feature} className="flex gap-3 border-b border-white/10 py-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-poster-bright" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="self-end pt-8">
              <PButton href={coaching.cta.href} external size="card" className="w-full">
                {coaching.cta.label}
              </PButton>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
