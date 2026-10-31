const tones = {
  light: "border-ink-soft text-ink-soft",
  dark: "border-poster-grey text-poster-grey",
};

// Visible marker for sample content (testimonials, transformations) that
// must be replaced with real, consented material before launch.
export function PlaceholderBadge({ className = "", tone = "light" }: { className?: string; tone?: keyof typeof tones }) {
  return (
    <p className={`inline-flex items-center rounded-full border border-dashed px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`}>
      Przykładowa treść – do podmiany
    </p>
  );
}
