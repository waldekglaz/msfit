import Image from "next/image";
import { demoProducts, products } from "@/lib/data";
import { formatPrices } from "@/lib/format";
import { PButton, sectionY, wrap } from "../demo2/ui";

export function D3Products() {
  return (
    <section id="produkty" aria-labelledby="produkty-title" className={`bg-poster-black ${sectionY}`}>
      <div className={wrap}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="produkty-title" className="font-poster text-p-h2 lg:col-span-6">
            {products.title}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-poster-grey lg:col-span-5 lg:col-start-8">{products.intro}</p>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {demoProducts.map((product) => {
            const [mainPrice, ...otherPrices] = formatPrices(product.price);
            return (
              <li key={product.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-[6px] border border-white/10 bg-poster-ink transition-colors duration-200 hover:border-white/30">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(min-width: 1024px) 26rem, (min-width: 768px) 45vw, 92vw"
                      className="object-cover"
                    />
                    <p className="absolute left-0 top-0 bg-poster-black px-3 py-1.5 text-xs font-semibold">{product.format}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h3 className="font-poster text-[1.9rem] leading-[1.08]">{product.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-poster-grey">{product.description}</p>
                    <p className="mt-8 flex flex-wrap items-baseline gap-x-2">
                      <span className="sr-only">Cena: </span>
                      <span className="font-poster text-[3.25rem] leading-none tracking-[-0.03em] text-poster-pink">{mainPrice}</span>
                      {otherPrices.length > 0 && <span className="text-sm text-poster-grey">lub {otherPrices.join(" lub ")}</span>}
                    </p>
                    <PButton href={product.checkoutUrl} external={!product.payhipKey} payhipKey={product.payhipKey} variant="outline" srLabel={product.title} size="card" className="mt-8 w-full">
                      {products.buyLabel}
                    </PButton>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
