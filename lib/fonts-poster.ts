import { Abril_Fatface, DM_Sans } from "next/font/google";

// Poster fonts for /demo-2, kept apart from lib/fonts.ts so the main site never
// downloads them (and this page never downloads Archivo).
// Abril Fatface is a heavy display Didone close to the poster's lettering.
// Playfair Display and Bodoni Moda Black were tested first, but both left
// visible gaps in Polish words (konsultac ja, W sparcie).
export const posterSerif = Abril_Fatface({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-poster-serif",
});

export const posterSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-poster-sans",
});
