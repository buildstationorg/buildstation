import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "buildstation HQ - Grants",
  description: "Financing the explorers of tomorrow",
  metadataBase: new URL("https://hq.buildstation.org/"),
  openGraph: {
    title: "buildstation HQ - Grants",
    description: "Financing the explorers of tomorrow",
    url: "https://hq.buildstation.org/grants",
    siteName: "buildstation",
    images: [
      {
        url: "/buildstation-bounty.png",
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
    title: "buildstation HQ - Grants",
    description: "Financing the explorers of tomorrow",
    creator: "@buildstationorg",
    images: ["/buildstation-bounty.png"],
  },
};

export default function Grants() {
  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">Grants</h1>
        <p className="text-md text-muted-foreground">Financing the explorers of tomorrow</p>
      </div>
    </div>
  );
}
