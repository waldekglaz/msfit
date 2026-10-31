import Link from "next/link";
import type { ReactNode } from "react";
import { legal } from "@/lib/data";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main id="tresc" className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8 lg:pt-16">
      <nav aria-label="Okruszki" className="text-sm text-ink-soft">
        <Link href="/" className="underline underline-offset-4 hover:text-accent">
          Strona główna
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{title}</span>
      </nav>

      <h1 className="mt-6 font-expanded text-title font-extrabold">{title}</h1>
      <p className="mt-4 text-ink-soft">Ostatnia aktualizacja: {legal.lastUpdated}</p>

      {legal.isTemplate && (
        <div role="note" className="mt-8 rounded-2xl border-2 border-dashed border-accent bg-accent-blush p-5 leading-relaxed">
          <strong>Wzór dokumentu.</strong> Ta treść jest szablonem i wymaga sprawdzenia przez
          właścicielkę serwisu (najlepiej z prawnikiem) przed publikacją. Fragmenty oznaczone
          [PLACEHOLDER] trzeba uzupełnić.
        </div>
      )}

      <div className="legal mt-10">{children}</div>
    </main>
  );
}
