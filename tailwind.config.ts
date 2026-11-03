import type { Config } from "tailwindcss";

// MS Fit palette: warm porcelain base, deep charcoal ink and one confident
// deep-rose accent. All text pairings below meet WCAG AA (4.5:1) or better:
//   ink on porcelain 15.4:1      ink.soft on porcelain 7.2:1
//   accent on porcelain 6.0:1    white on accent 6.3:1
//   accent on blush 5.3:1        accent.light on ink 10.3:1
//   sand on ink 12.6:1
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        porcelain: "#FBF8F6",
        sand: "#E9E1DC",
        line: "#E3D9D4",
        ink: {
          DEFAULT: "#231F20",
          soft: "#5A5250",
          raised: "#2E292A",
        },
        accent: {
          DEFAULT: "#B4235A",
          deep: "#8F1A47",
          blush: "#F6E8EA",
          light: "#F4BFCF",
        },
        // /demo editorial palette. Text pairings (WCAG AA):
        //   ink on ivory 15.1:1   muted on ivory 5.7:1   muted on beige 5.0:1
        //   rose-deep on ivory 5.2:1   muted-dark on ink 7.5:1   rose-light on ink 9.6:1
        //   `rose` (1.9:1 on ivory) is decorative only: dots, rules, fills behind ink text.
        ed: {
          ivory: "#F5F1EA",
          paper: "#FBF8F3",
          beige: "#E9E1D6",
          line: "#D8CEC2",
          muted: "#655D56",
          ink: "#1E1C1B",
          ink2: "#2B2826",
          "muted-dark": "#B5ABA2",
          rose: "#D7A8AC",
          "rose-deep": "#94505D",
          "rose-light": "#E3B9BC",
        },
        // Poster palette, shared by /demo-2 and /demo-3. The values are CSS
        // variables in app/globals.css: /demo-3 swaps them with .poster-mono.
        //
        // /demo-2 (from Marta's "3 wolne miejsca" graphic):
        //   pink on black 5.4:1   pink on ink 5.0:1   bright on charcoal 5.2:1
        //   black on pink 5.4:1   grey on charcoal 6.9:1
        //   pink on charcoal is 4.5:1 only at large sizes; small pink text on
        //   charcoal uses `bright`. White on pink is 3.8:1, so buttons use black text.
        //
        // /demo-3 (white, black and #C62B6E):
        //   white on pink 5.3:1   grey on charcoal 6.9:1   grey on ink 7.9:1
        //   pink on black 3.9:1   pink on ink 3.6:1   pink on charcoal 3.2:1
        //   Pink passes only for large text, icons and rules, so `bright` is white
        //   there (small links) and buttons use white text.
        poster: {
          black: "rgb(var(--poster-black) / <alpha-value>)",
          ink: "rgb(var(--poster-ink) / <alpha-value>)",
          charcoal: "rgb(var(--poster-charcoal) / <alpha-value>)",
          line: "rgb(var(--poster-line) / <alpha-value>)",
          pink: "rgb(var(--poster-pink) / <alpha-value>)",
          /** Hover colour of pink buttons. */
          "pink-hover": "rgb(var(--poster-pink-hover) / <alpha-value>)",
          /** Text on a pink background. */
          "on-pink": "rgb(var(--poster-on-pink) / <alpha-value>)",
          bright: "rgb(var(--poster-bright) / <alpha-value>)",
          wine: "rgb(var(--poster-wine) / <alpha-value>)",
          grey: "rgb(var(--poster-grey) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
        // /demo only (loaded in app/demo/layout.tsx): Bodoni Moda + Jost
        display: ["var(--font-demo-serif)", "Didot", "Georgia", "serif"],
        demo: ["var(--font-demo-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Poster demos: /demo-2 sets these variables to Abril Fatface + DM Sans
        // (lib/fonts-poster.ts), /demo-3 to Anton + Poppins (lib/fonts-demo3.ts).
        poster: ["var(--font-poster-serif)", "Georgia", "serif"],
        "poster-sans": ["var(--font-poster-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid display sizes, used with the expanded width of Archivo.
        display: ["clamp(2.4rem, 9.6vw, 4.75rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        title: ["clamp(1.9rem, 5.4vw, 3.4rem)", { lineHeight: "1.04", letterSpacing: "-0.015em" }],
        // /demo editorial scale (Bodoni Moda)
        "ed-hero": ["clamp(2.85rem, 6.3vw, 6.4rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "ed-statement": ["clamp(2.6rem, 7.4vw, 7.25rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "ed-h2": ["clamp(2.3rem, 4.5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "ed-h3": ["clamp(1.45rem, 2vw, 1.8rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "ed-lead": ["clamp(1.125rem, 1.4vw, 1.3rem)", { lineHeight: "1.6" }],
        // /demo-2 poster scale (Abril Fatface)
        "p-hero": ["clamp(2.9rem, 6.6vw, 6.5rem)", { lineHeight: "0.94", letterSpacing: "-0.02em" }],
        "p-mega": ["clamp(2.7rem, 7.6vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "p-h2": ["clamp(2.3rem, 5vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "p-h3": ["clamp(1.5rem, 2.1vw, 1.9rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        "p-num": ["clamp(4.5rem, 9.5vw, 9rem)", { lineHeight: "0.8", letterSpacing: "-0.04em" }],
      },
      maxWidth: {
        prose: "38rem",
        // /demo and /demo-2 content widths
        ed: "84rem",
        poster: "88rem",
      },
      borderRadius: {
        // Semicircle top on a 4:5 frame, softly rounded base.
        arch: "50% 50% 1.5rem 1.5rem / 40% 40% 1.5rem 1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
