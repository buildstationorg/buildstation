import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "buildstation HQ - Hackathon",
  description: "The best shall stand triumphant",
  metadataBase: new URL("https://hq.buildstation.org/"),
  openGraph: {
    title: "buildstation HQ - Hackathon",
    description: "The best shall stand triumphant",
    url: "https://hq.buildstation.org/hackathon",
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
    title: "buildstation HQ - Hackathon",
    description: "The best shall stand triumphant",
    creator: "@buildstationorg",
    images: ["/buildstation-bounty.png"],
  },
};

export default function Grants() {
  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">Hackathon</h1>
        <p className="text-md text-muted-foreground">The best shall stand triumphant</p>
      </div>
    </div>
  );
}
