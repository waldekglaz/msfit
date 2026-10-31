// Visible marker for sample content (testimonials, transformations) that
// must be replaced with real, consented material before launch.
export function PlaceholderBadge({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center rounded-full border border-dashed border-ink-soft px-3 py-1 text-xs font-medium text-ink-soft ${className}`}
    >
      Przykładowa treść – do podmiany
    </p>
  );
}
