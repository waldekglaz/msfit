import type { Content } from "@/lib/data";

// First focusable element on every page: jumps keyboard users past the header.
export function SkipLink({ content }: { content: Content }) {
  return (
    <a
      href={`#${content.ids.content}`}
      className="sr-only z-50 rounded-full bg-ink px-5 py-3 font-semibold text-porcelain focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {content.ui.skipToContent}
    </a>
  );
}
