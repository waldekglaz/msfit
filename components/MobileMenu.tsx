"use client";

import { useEffect, useRef, useState } from "react";
import type { Link } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";
import { CloseIcon, MenuIcon } from "./Icons";

export function MobileMenu({ nav, cta }: { nav: Link[]; cta: Link }) {
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
        aria-controls="menu-mobilne"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white"
      >
        <span className="sr-only">{open ? "Zamknij menu" : "Otwórz menu"}</span>
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      <div
        id="menu-mobilne"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-porcelain px-5 pb-6 pt-2 shadow-[0_24px_40px_-24px_rgba(35,31,32,0.35)] sm:px-8"
      >
        <nav aria-label="Menu mobilne">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-semibold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href={cta.href} external className="mt-4 w-full">
          {cta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
