import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { archivo } from "@/lib/fonts";

// Rendered by the root layout only, so it brings the site header and footer.
export default function NotFound() {
  return (
    <div className={`${archivo.variable} font-sans`}>
      <Header />
      <main id="tresc" className="mx-auto max-w-3xl px-5 py-24 sm:px-8 lg:py-32">
        <h1 className="font-expanded text-title font-extrabold">Nie ma takiej strony</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Ten adres nie istnieje albo strona została przeniesiona.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-deep"
        >
          Wróć na stronę główną
        </Link>
      </main>
      <Footer />
    </div>
  );
}
