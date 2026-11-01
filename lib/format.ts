import type { Currency, Product } from "./data";

function money(value: number, currency: "PLN" | "GBP") {
  const digits = Number.isInteger(value) ? 0 : 2;
  return new Intl.NumberFormat(currency === "PLN" ? "pl-PL" : "en-GB", {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

/** "79 zł" / "£15", in the order they should be shown (złoty first unless
 *  `order` says otherwise). */
export function formatPrices(price: Product["price"], order: Currency[] = ["pln", "gbp"]): string[] {
  const prices: string[] = [];
  for (const currency of order) {
    const value = price[currency];
    if (value != null) prices.push(money(value, currency === "pln" ? "PLN" : "GBP"));
  }
  return prices;
}
