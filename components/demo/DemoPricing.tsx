import { demo } from "@/lib/data";
import { formatPrices } from "@/lib/format";
import { CheckIcon } from "../Icons";
import { EdButton, sectionY, wrap } from "./ui";

// Three self-serve products in ascending price, then 1:1 coaching as the
// recommended option: the only dark card, slightly taller, with a badge.
export function DemoPricing() {
  const { pricing } = demo;
  const { coaching } = pricing;
  const products = [...pricing.products].sort((a, b) => (a.price.pln ?? 0) - (b.price.pln ?? 0));

  return (
    <section id="cennik" aria-labelledby="cennik-title" className={`bg-ed-beige ${sectionY}`}>
      <div className={wrap}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="cennik-title" className="font-display text-ed-h2 lg:col-span-6">
            {pricing.title}
          </h2>
          <p className="max-w-md text-ed-lead text-ed-muted lg:col-span-5 lg:col-start-8">{pricing.intro}</p>
        </div>

        {/* Each card is a 6-row subgrid, so names, prices, features and
            buttons line up across cards whatever the text length. */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {products.map((product) => {
            const [mainPrice, ...otherPrices] = formatPrices(product.price);
            return (
              <li
                key={product.id}
                className="row-span-6 grid grid-rows-subgrid gap-y-0 rounded-[1.5rem] border border-ed-line bg-ed-paper p-7 transition-colors duration-300 hover:border-ed-ink/30 sm:p-8"
              >
                <p className="text-sm text-ed-muted">{product.format}</p>
                <h3 className="mt-2 font-display text-[1.85rem] leading-tight tracking-[-0.01em]">{product.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ed-muted">{product.description}</p>
                <p className="mt-8 flex flex-wrap items-baseline gap-x-2 self-end">
                  <span className="sr-only">Cena: </span>
                  <span className="font-display text-[2.9rem] leading-none tracking-[-0.02em]">{mainPrice}</span>
                  {otherPrices.length > 0 && <span className="text-sm text-ed-muted">lub {otherPrices.join(" lub ")}</span>}
                </p>
                <ul className="mt-8 self-start border-t border-ed-line text-[0.95rem]">
                  {product.features?.map((feature) => (
                    <li key={feature} className="flex gap-3 border-b border-ed-line py-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-ed-rose-deep" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="self-end pt-8">
                  <EdButton href={product.checkoutUrl} external variant="outline" srLabel={product.title} className="w-full">
                    {pricing.buyLabel}
                  </EdButton>
                </div>
              </li>
            );
          })}

          <li className="ed-dark relative order-first row-span-6 grid grid-rows-subgrid gap-y-0 rounded-[1.5rem] bg-ed-ink p-7 text-ed-ivory shadow-[0_40px_80px_-40px_rgba(30,28,27,0.55)] sm:order-none sm:p-8 lg:-my-5 lg:py-12">
            <p className="absolute right-6 top-6 rounded-full bg-ed-rose px-3 py-1 text-xs font-medium text-ed-ink sm:right-8 sm:top-8 lg:top-11">
              {coaching.badge}
            </p>
            <p className="pr-20 text-sm text-ed-muted-dark">{coaching.label}</p>
            <h3 className="mt-2 max-w-[11rem] font-display text-[1.85rem] leading-tight tracking-[-0.01em]">{coaching.name}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ed-muted-dark">{coaching.description}</p>
            <p className="mt-8 self-end">
              <span className="sr-only">Cena: </span>
              <span className="block font-display text-[2.1rem] leading-none tracking-[-0.02em]">{coaching.price}</span>
              <span className="mt-2 block text-sm text-ed-muted-dark">{coaching.priceNote}</span>
            </p>
            <ul className="mt-8 self-start border-t border-ed-ivory/15 text-[0.95rem]">
              {coaching.features.map((feature) => (
                <li key={feature} className="flex gap-3 border-b border-ed-ivory/15 py-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-ed-rose-light" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="self-end pt-8">
              <EdButton href={coaching.cta.href} external variant="light" className="w-full">
                {coaching.cta.label}
              </EdButton>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
