"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "./Icons";

// Popup for Payhip products. Any link with a data-payhip-key opens it; without
// JavaScript the link simply goes to the product's page on Payhip.
//
// Inside is the page behind Payhip's "embed page" snippet (Products → Share /
// Embed), but in our own iframe rather than through their embed-page.js. In a
// popup that script fails: a "#section" in the page address cuts off the iframe
// id it sends, and the height the page reports for its zero-height iframe is
// often 0, leaving it collapsed. A fixed-height iframe that scrolls needs neither,
// and it means nothing from Payhip runs until someone clicks.
//
// Those two details (is_embed_page, and the message below) are not a documented
// API. If Payhip changes them, the link at the top of the popup still works.

const PAYHIP = "https://payhip.com";

/** Sent by the embed when someone presses buy; the checkout opens in the whole tab. */
const CHECKOUT_MESSAGE = "embed:page:js:redirect:to:checkout";

const tones = {
  editorial: {
    dialog: "rounded-[1.5rem] bg-ed-paper text-ed-ink backdrop:bg-ed-ink/60",
    close: "hover:bg-ed-ink/10",
  },
  poster: {
    dialog: "rounded-[6px] border border-white/15 bg-poster-ink text-white backdrop:bg-black/80",
    close: "hover:bg-white/10",
  },
};

type Props = {
  tone: keyof typeof tones;
  /** Name of the popup and its iframe for screen readers. */
  label: string;
  closeLabel: string;
  loadingLabel: string;
  /** Link to the product's own page, in case the embed doesn't work. */
  productPageLabel: string;
  newTabLabel: string;
};

export function PayhipDialog({ tone, label, closeLabel, loadingLabel, productPageLabel, newTabLabel }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [product, setProduct] = useState<{ url: string; embedUrl: string } | null>(null);
  const t = tones[tone];

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // Ctrl/cmd/shift-click keeps its usual meaning: open the link separately.
      if (event.ctrlKey || event.metaKey || event.shiftKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[data-payhip-key]");
      if (!link?.dataset.payhipKey) return;
      event.preventDefault();
      const query = new URLSearchParams({
        is_embed_page: "1",
        referrer: document.referrer,
        source_url: window.location.href,
        iframe_id: "0",
      });
      setProduct({ url: link.href, embedUrl: `${PAYHIP}/b/${link.dataset.payhipKey}?${query}` });
      dialogRef.current?.showModal();
    };

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== PAYHIP || event.data?.action !== CHECKOUT_MESSAGE) return;
      const path = event.data.callbackData?.redirectUrl;
      if (typeof path === "string") window.location.href = `${PAYHIP}/${path}`;
    };

    document.addEventListener("click", onClick);
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    // The inner div fills the dialog, so a click that lands on the dialog itself
    // can only be on the backdrop.
    <dialog
      ref={dialogRef}
      aria-label={label}
      // The browser fires "close" slightly late: skip it if already reopened.
      onClose={() => {
        if (!dialogRef.current?.open) setProduct(null);
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}
      className={`m-auto h-[min(calc(100dvh-2rem),50rem)] max-h-none w-[calc(100%-2rem)] max-w-[44rem] overflow-hidden p-0 ${t.dialog}`}
    >
      <div className="flex h-full flex-col">
        {/* Close comes first in the HTML so that it gets the focus on opening. */}
        <div className="flex flex-row-reverse items-center justify-between gap-4 px-4 py-2 sm:px-5">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors motion-reduce:transition-none ${t.close}`}
          >
            <span className="sr-only">{closeLabel}</span>
            <CloseIcon className="h-5 w-5" />
          </button>
          {product && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm underline underline-offset-4"
            >
              {productPageLabel}
              <span className="sr-only"> {newTabLabel}</span>
            </a>
          )}
        </div>
        <div className="relative min-h-0 flex-1">
          {/* Sits behind the iframe, which covers it once its page has painted. */}
          <p className="absolute inset-x-0 top-12 text-center text-sm">{loadingLabel}</p>
          {product && <iframe src={product.embedUrl} title={label} className="relative block h-full w-full border-0" />}
        </div>
      </div>
    </dialog>
  );
}
