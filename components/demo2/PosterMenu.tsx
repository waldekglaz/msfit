"use client";

import { useEffect, useRef, useState } from "react";
import type { Link } from "@/lib/data";
import { PButton } from "./ui";

export function PosterMenu({ nav, cta }: { nav: Link[]; cta: Link }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="poster-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-3 rounded-[4px] border border-white/30 px-4 text-sm font-semibold"
      >
        {open ? "Zamknij" : "Menu"}
        <span aria-hidden="true" className="relative h-2.5 w-4">
          <span className={`absolute left-0 h-0.5 w-4 bg-poster-pink transition-transform duration-200 motion-reduce:transition-none ${open ? "top-1/2 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 h-0.5 w-4 bg-poster-pink transition-transform duration-200 motion-reduce:transition-none ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
        </span>
      </button>

      <div id="poster-menu" hidden={!open} className="absolute inset-x-0 top-full border-b border-white/10 bg-poster-black px-5 pb-8 pt-2 sm:px-8">
        <nav aria-label="Sekcje strony">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-poster text-[2.1rem] leading-tight transition-colors hover:text-poster-pink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <PButton href={cta.href} external className="mt-8 w-full">
          {cta.label}
        </PButton>
      </div>
    </div>
  );
}
