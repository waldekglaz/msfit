import type { ReactNode } from "react";
import { posterSans, posterSerif } from "@/lib/fonts-poster";

/** Page wrapper for /demo-2: fonts, colours and theme hooks. /demo-3 has its own (D3Root). */
export function PosterRoot({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${posterSerif.variable} ${posterSans.variable} poster-theme min-h-screen bg-poster-black font-poster-sans text-[1.0625rem] text-white antialiased`}
    >
      {children}
    </div>
  );
}
