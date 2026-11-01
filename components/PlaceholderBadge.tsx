import { ui } from "@/lib/data";

const tones = {
  light: "border-ink-soft text-ink-soft",
  dark: "border-poster-grey text-poster-grey",
};

type Props = {
  /** Badge text in the page's language; Polish unless given. */
  label?: string;
  className?: string;
  tone?: keyof typeof tones;
};

// Visible marker for sample content (testimonials, transformations) that
// must be replaced with real, consented material before launch.
export function PlaceholderBadge({ label = ui.placeholder, className = "", tone = "light" }: Props) {
  return (
    <p className={`inline-flex items-center rounded-full border border-dashed px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`}>
      {label}
    </p>
  );
}
