import type { Product } from "./data";

function money(value: number, currency: "PLN" | "GBP") {
  const digits = Number.isInteger(value) ? 0 : 2;
  return new Intl.NumberFormat(currency === "PLN" ? "pl-PL" : "en-GB", {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

/** "79 zł" / "£15", in the order they should be shown. */
export function formatPrices(price: Product["price"]): string[] {
  const prices: string[] = [];
  if (price.pln != null) prices.push(money(price.pln, "PLN"));
  if (price.gbp != null) prices.push(money(price.gbp, "GBP"));
  return prices;
}
