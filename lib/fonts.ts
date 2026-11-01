import { Archivo } from "next/font/google";

// Main-site font. Applied by components/SiteShell.tsx (not the root layouts)
// so the demo pages don't download it.
// Self-hosted at build time by next/font: no requests to Google from visitors.
export const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});
