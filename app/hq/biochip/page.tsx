import BioChipMint from "@/components/biochip-mint";
import BioChipImage from "@/components/biochip-image";
import BiochipStash from "@/components/biochip-stash";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "buildstation HQ - Biochip",
  description: "The manisfestation of your digital identity and legacy",
  metadataBase: new URL("https://hq.buildstation.org/"),
  openGraph: {
    title: "buildstation HQ - Biochip",
    description: "The manisfestation of your digital identity and legacy",
    url: "https://hq.buildstation.org/biochip",
    siteName: "buildstation",
    images: [
      {
        url: "/buildstation-biochip.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "buildstation HQ - Biochip",
    description: "The manisfestation of your digital identity and legacy",
    creator: "@buildstationorg",
    images: ["/buildstation-biochip.png"],
  },
};

export default function BioChip() {
  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">Biochip</h1>
        <p className="text-md text-muted-foreground">
          The manisfestation of your digital identity and legacy
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:h-[400px]">
        <BioChipImage />
        <BioChipMint />
      </div>
      <BiochipStash />
    </div>
  );
}