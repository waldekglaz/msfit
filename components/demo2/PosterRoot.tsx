import type { ReactNode } from "react";
import { posterSans, posterSerif } from "@/lib/fonts-poster";

/** Page wrapper for the poster-styled demos: fonts, colours and theme hooks. */
export function PosterRoot({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${posterSerif.variable} ${posterSans.variable} poster-theme min-h-screen bg-poster-black font-poster-sans text-[1.0625rem] text-white antialiased`}
    >
      {children}
    </div>
  );
}
