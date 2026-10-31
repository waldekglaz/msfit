import type { ReactNode } from "react";
import { ExternalIcon } from "../Icons";

// Shared layout and controls for the /demo page.

/** One content width and gutter for every section. */
export const wrap = "mx-auto w-full max-w-ed px-5 sm:px-8 lg:px-12";
/** Vertical rhythm for light sections. */
export const sectionY = "py-20 sm:py-24 lg:py-32";
/** Dark sections sit as inset rounded panels. */
export const darkPanel = "ed-dark rounded-[1.75rem] bg-ed-ink text-ed-ivory sm:rounded-[2.5rem]";

const buttonVariants = {
  primary: "bg-ed-ink text-ed-ivory hover:bg-ed-ink2",
  light: "bg-ed-ivory text-ed-ink hover:bg-white",
  outline: "border border-ed-ink/25 text-ed-ink hover:border-ed-ink hover:bg-ed-ink hover:text-ed-ivory",
};

const buttonSizes = {
  md: "min-h-[3.25rem] px-7 py-3.5 text-[0.95rem]",
  sm: "min-h-11 px-5 py-2.5 text-sm",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  /** Opens in a new tab and tells screen-reader users so. */
  external?: boolean;
  srLabel?: string;
  className?: string;
};

export function EdButton({ href, children, variant = "primary", size = "md", external = false, srLabel, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full text-center font-medium tracking-[0.01em] transition-colors duration-300 ease-out motion-reduce:transition-none ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>
        {children}
        {srLabel && <span className="sr-only">: {srLabel}</span>}
      </span>
      {external && (
        <>
          <ExternalIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          <span className="sr-only"> (otwiera się w nowej karcie)</span>
        </>
      )}
    </a>
  );
}

type TextLinkProps = { href: string; children: ReactNode; external?: boolean; className?: string };

export function TextLink({ href, children, external = false, className = "" }: TextLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center gap-2 font-medium underline decoration-ed-ink/30 decoration-1 underline-offset-[6px] transition-[text-decoration-color] duration-300 hover:decoration-ed-ink motion-reduce:transition-none ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <span className="sr-only"> (otwiera się w nowej karcie)</span>}
    </a>
  );
}
