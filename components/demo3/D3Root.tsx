import type { ReactNode } from "react";
import { demo3Display, demo3Sans } from "@/lib/fonts-demo3";

/** Page wrapper for /demo-3: its own fonts, plus .poster-mono for its colours
 *  (app/globals.css). The sections themselves are the shared poster components. */
export function D3Root({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${demo3Display.variable} ${demo3Sans.variable} poster-theme poster-mono min-h-screen bg-poster-black font-poster-sans text-[1.0625rem] text-white antialiased`}
    >
      {children}
    </div>
  );
}
