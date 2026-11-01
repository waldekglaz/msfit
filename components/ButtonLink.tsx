import type { ReactNode } from "react";
import { ExternalIcon } from "./Icons";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-deep",
  secondary:
    "border-2 border-current text-ink hover:bg-ink hover:text-porcelain hover:border-ink",
};

const sizes = {
  md: "min-h-12 px-6 py-3 text-base",
  sm: "min-h-11 px-5 py-2.5 text-sm",
};

// Also used inside the client-side MobileMenu, so the new-tab wording comes
// in as a prop rather than from lib/data (which would ship to the browser).
type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  /** Extra words for screen readers, e.g. which product "Kup teraz" buys. */
  srLabel?: string;
  className?: string;
} & (
  | { external?: false; newTabLabel?: never }
  | {
      /** Opens in a new tab and tells screen-reader users so... */
      external: true;
      /** ...in these words, e.g. ui.newTab for the page's language. */
      newTabLabel: string;
    }
);

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  newTabLabel,
  srLabel,
  className = "",
}: Props) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold leading-tight transition-colors motion-reduce:transition-none ${sizes[size]} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>
        {children}
        {srLabel && <span className="sr-only">: {srLabel}</span>}
      </span>
      {external && (
        <>
          <ExternalIcon className="h-4 w-4 shrink-0" />
          <span className="sr-only"> {newTabLabel}</span>
        </>
      )}
    </a>
  );
}
