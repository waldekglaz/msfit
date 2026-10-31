import { Archivo } from "next/font/google";

// Main-site font. Applied in app/(site)/layout.tsx and app/not-found.tsx
// (not the root layout) so the /demo page doesn't download it.
// Self-hosted at build time by next/font: no requests to Google from visitors.
export const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});
