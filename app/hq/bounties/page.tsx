import type { Metadata } from "next";
import BountyContent from "@/components/bounty-content";

export const metadata: Metadata = {
  title: "buildstation HQ - Bounties",
  description: "Earn your bread and make your mark",
  metadataBase: new URL("https://hq.buildstation.org/"),
  openGraph: {
    title: "buildstation HQ - Bounties",
    description: "Earn your bread and make your mark",
    url: "https://hq.buildstation.org/bounties",
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
    title: "buildstation HQ - Bounties",
    description: "Earn your bread and make your mark",
    creator: "@buildstationorg",
    images: ["/buildstation-bounty.png"],
  },
};

export default function Bounties() {
  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">Bounties</h1>
        <p className="text-md text-muted-foreground">Earn your bread and make your mark</p>
      </div>
      <BountyContent />
    </div>
  );
}
