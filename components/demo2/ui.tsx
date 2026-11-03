import { Fragment, type ReactNode } from "react";
import { demo, demo2 } from "@/lib/data";
import { ExternalIcon } from "../Icons";

// Shared layout, controls and highlighting for the /demo-2 poster page.

/** One content width and gutter for every section. */
export const wrap = "mx-auto w-full max-w-poster px-5 sm:px-8 lg:px-12";
/** Vertical rhythm for standard sections. */
export const sectionY = "py-20 sm:py-28 lg:py-36";

/** Shows the given phrases in hot pink, as on the poster. */
export function Pink({ text, words, className = "text-poster-pink" }: { text: string; words: string[]; className?: string }) {
  if (words.length === 0) return <>{text}</>;
  const pattern = new RegExp(`(${words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return (
    <>
      {text.split(pattern).map((part, index) =>
        words.includes(part) ? (
          <span key={index} className={className}>
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}

const buttonVariants = {
  solid: "bg-poster-pink text-poster-on-pink hover:bg-poster-pink-hover",
  outline: "border border-white/70 text-white hover:border-poster-bright hover:text-poster-bright",
};

const buttonSizes = {
  md: "min-h-[3.25rem] px-7 py-3.5 text-[0.95rem]",
  sm: "min-h-11 px-5 py-2.5 text-sm",
  /** Full-width buttons inside narrow pricing cards. */
  card: "min-h-[3.25rem] px-4 py-3.5 text-[0.95rem]",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  /** Opens in a new tab and tells screen-reader users so. */
  external?: boolean;
  /** Opens this Payhip product in the popup (components/PayhipDialog.tsx). */
  payhipKey?: string;
  srLabel?: string;
  className?: string;
};

export function PButton({ href, children, variant = "solid", size = "md", external = false, payhipKey, srLabel, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-[4px] text-center font-semibold tracking-[0.01em] transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(payhipKey ? { "data-payhip-key": payhipKey, "aria-haspopup": "dialog" as const } : {})}
    >
      <span>
        {children}
        {srLabel && <span className="sr-only">: {srLabel}</span>}
      </span>
      {external && (
        <>
          <ExternalIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          <span className="sr-only"> (otwiera się w nowej karcie)</span>
        </>
      )}
    </a>
  );
}

/** The poster's sign-off: "…z hasłem LISTOPAD…", with the keyword linking to an Instagram DM. */
export function DmText({ className = "" }: { className?: string }) {
  const { keyword, href } = demo.dm;
  const [before, after = ""] = demo2.hero.dm.split(keyword);
  return (
    <p className={`leading-relaxed text-poster-grey ${className}`}>
      {before}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-poster-bright underline decoration-2 underline-offset-4 transition-colors hover:text-white"
      >
        {keyword}
        <span className="sr-only"> (Instagram, otwiera się w nowej karcie)</span>
      </a>
      {after}
    </p>
  );
}
