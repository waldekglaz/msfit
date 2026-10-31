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

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  /** Opens in a new tab and tells screen-reader users so. */
  external?: boolean;
  /** Extra words for screen readers, e.g. which product "Kup teraz" buys. */
  srLabel?: string;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
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
          <span className="sr-only"> (otwiera się w nowej karcie)</span>
        </>
      )}
    </a>
  );
}
