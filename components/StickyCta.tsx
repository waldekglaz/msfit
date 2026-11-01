"use client";

import { useEffect, useState } from "react";
import type { Link } from "@/lib/data";
import { ExternalIcon } from "./Icons";

// Phone-only bar with the application button. It appears once the hero's own
// buttons have scrolled away and steps aside while the contact section
// (which has the same button) is on screen.
const tones = {
  light: {
    bar: "border-line bg-porcelain/95",
    button: "rounded-full bg-accent text-white",
  },
  editorial: {
    bar: "border-ed-line bg-ed-ivory/95",
    button: "rounded-full bg-ed-ink text-ed-ivory",
  },
  poster: {
    bar: "border-white/10 bg-poster-black/95",
    button: "rounded-[4px] bg-poster-pink text-poster-black",
  },
};

// Text comes in as props (not imported from lib/data) so the content file
// stays out of the browser bundle.
type Props = {
  cta: Link;
  tone?: keyof typeof tones;
  /** Id of the contact section the bar hides for. */
  contactId: string;
  /** What screen readers hear after the label, in the page's language. */
  newTabLabel: string;
};

export function StickyCta({ cta, tone = "light", contactId, newTabLabel }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("start");
    const contact = document.getElementById(contactId);
    if (!hero || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const inView = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) inView.set(entry.target, entry.isIntersecting);
      setVisible(!inView.get(hero) && !(contact && inView.get(contact)));
    });
    observer.observe(hero);
    if (contact) observer.observe(contact);
    return () => observer.disconnect();
  }, [contactId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t px-4 pt-3 ${tones[tone].bar} backdrop-blur-sm transition-[transform,visibility] duration-300 motion-reduce:transition-none md:hidden ${
        visible ? "visible translate-y-0" : "invisible translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex min-h-12 w-full items-center justify-center gap-2 px-6 py-3 font-semibold ${tones[tone].button}`}
      >
        {cta.label}
        <ExternalIcon className="h-4 w-4" />
        <span className="sr-only"> {newTabLabel}</span>
      </a>
    </div>
  );
}
