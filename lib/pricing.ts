import { frequencies, propertyRates, extrasList } from "./content";

export const freqMult = (f: string) =>
  frequencies.find(([label]) => label === f)?.[1] ?? 1;

export const extraSum = (chosen: string[]) =>
  chosen.reduce(
    (sum, key) => sum + (extrasList.find(([label]) => label === key)?.[1] ?? 0),
    0,
  );

export const basePrice = (property: string, sqft: number) =>
  Math.max(129, sqft * (propertyRates[property] ?? 0.075));

export const bathAdd = (baths: number) => Math.max(0, baths - 1) * 18;

export type QuoteInput = {
  property: string;
  sqft: number;
  baths: number;
  freq: string;
  extras: string[];
};

export const quotePrice = ({ property, sqft, baths, freq, extras }: QuoteInput) =>
  Math.round(
    (basePrice(property, sqft) + bathAdd(baths)) * freqMult(freq) +
      extraSum(extras),
  );

export const oneTimePrice = ({ property, sqft, baths, extras }: QuoteInput) =>
  Math.round(basePrice(property, sqft) + bathAdd(baths) + extraSum(extras));

export const onSiteHours = (sqft: number, baths: number, extras: number) => {
  const raw = Math.max(2, sqft / 500 + baths * 0.45 + extras * 0.35);
  return (Math.round(raw * 2) / 2).toFixed(1).replace(".0", "") + " hrs";
};

export const planPrice = (mult: number, freq: string) =>
  Math.round(159 * mult * freqMult(freq));

export const money = (n: number) => n.toLocaleString("en-US");

/** Next seven days, generated relative to `from` so server and client agree. */
export function dayList(from: Date) {
  const out: { i: number; dow: string; num: string; full: string }[] = [];
  for (let i = 1; i <= 7; i++) {
    const d = new Date(from.getFullYear(), from.getMonth(), from.getDate() + i);
    out.push({
      i,
      dow: d.toLocaleDateString("en-US", { weekday: "short" }),
      num: String(d.getDate()),
      full: d.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    });
  }
  return out;
}
