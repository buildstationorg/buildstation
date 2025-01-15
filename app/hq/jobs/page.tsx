import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "buildstation HQ - Jobs",
  description: "Find your next gig",
  metadataBase: new URL("https://hq.buildstation.org/"),
  openGraph: {
    title: "buildstation HQ - Jobs",
    description: "Find your next gig",
    url: "https://hq.buildstation.org/jobs",
    siteName: "buildstation",
    images: [
      {
        url: "/buildstation.png",
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
    title: "buildstation HQ - Jobs",
    description: "Find your next gig",
    creator: "@buildstationorg",
    images: ["/buildstation.png"],
  },
};

export default function Jobs() {
  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">Jobs</h1>
        <p className="text-md text-muted-foreground">Find your next gig</p>
      </div>
    </div>
  );
}
