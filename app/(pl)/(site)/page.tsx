import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { pl } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ path: pl.home });

export default function PolishHomePage() {
  return <HomePage content={pl} />;
}
