import { Anton, Poppins } from "next/font/google";

// /demo-3 fonts: Anton for headlines, Poppins for everything else. In their own
// file so that no other page downloads them. They fill the same two CSS
// variables as the /demo-2 fonts, so the shared poster components need no changes.
export const demo3Display = Anton({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-poster-serif",
});

// Poppins has no variable version, so each weight is its own download. These
// are the three the page uses (font-bold falls back to 600).
export const demo3Sans = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poster-sans",
});
