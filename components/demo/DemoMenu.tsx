"use client";

import { useEffect, useRef, useState } from "react";
import type { Link } from "@/lib/data";
import { EdButton } from "./ui";

export function DemoMenu({ nav, cta }: { nav: Link[]; cta: Link }) {
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
        aria-controls="demo-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-3 rounded-full border border-ed-ink/20 px-4 text-sm font-medium"
      >
        {open ? "Zamknij" : "Menu"}
        <span aria-hidden="true" className="relative h-2.5 w-4">
          <span className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 motion-reduce:transition-none ${open ? "top-1/2 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 motion-reduce:transition-none ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
        </span>
      </button>

      <div
        id="demo-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-ed-line bg-ed-ivory px-5 pb-8 pt-4 sm:px-8"
      >
        <nav aria-label="Sekcje strony">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-ed-line">
                <a href={item.href} onClick={() => setOpen(false)} className="block py-4 font-display text-[2rem] leading-tight">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <EdButton href={cta.href} external className="mt-8 w-full">
          {cta.label}
        </EdButton>
      </div>
    </div>
  );
}
