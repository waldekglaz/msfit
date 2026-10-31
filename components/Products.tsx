import Image from "next/image";
import { products } from "@/lib/data";
import { formatPrices } from "@/lib/format";
import { ButtonLink } from "./ButtonLink";

export function Products() {
  return (
    <section id="produkty" aria-labelledby="produkty-title" className="bg-sand/45 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 id="produkty-title" className="font-expanded text-title font-extrabold">
            {products.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{products.intro}</p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.items.map((product) => {
            const [mainPrice, ...otherPrices] = formatPrices(product.price);
            return (
              <li key={product.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-line">
                  <div className="relative aspect-[4/3] bg-sand">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(min-width: 1024px) 23rem, (min-width: 768px) 45vw, 92vw"
                      className="object-cover"
                    />
                    <p className="absolute left-4 top-4 rounded-full bg-porcelain px-3 py-1 text-xs font-semibold">
                      {product.format}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-semi-expanded text-xl font-bold">{product.title}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{product.description}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <p>
                        <span className="sr-only">Cena: </span>
                        <span className="font-semi-expanded text-2xl font-extrabold">{mainPrice}</span>
                        {otherPrices.length > 0 && (
                          <span className="ml-2 text-ink-soft">lub {otherPrices.join(" lub ")}</span>
                        )}
                      </p>
                      <ButtonLink href={product.checkoutUrl} external srLabel={product.title}>
                        {products.buyLabel}
                      </ButtonLink>
                    </div>
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
