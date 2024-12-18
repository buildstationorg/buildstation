import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import type { Metadata } from 'next'
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'buildstation',
  description: 'join the global movement and build the future with us',
  metadataBase: new URL('https://www.buildstation.org'),
  openGraph: {
    title: 'buildstation',
    description: 'join the global movement and build the future with us',
    url: 'https://www.buildstation.org',
    siteName: 'buildstation',
    images: [
      {
        url: '/buildstation-tbn.png',
        width: 1200,
        height: 630,
        alt: 'og-image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'buildstation',
    description: 'join the global movement and build the future with us',
    creator: '@buildstationorg',
    images: ['/buildstation-tbn.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer data-domain="buildstation.org" src="https://analytics.pyhash.com/js/script.js"></Script>
      <body className={inter.className}>
        <main className="flex flex-col items-center p-6 md:p-10 pb-12 font-mono">
          <div className="flex flex-col gap-24 max-w-7xl w-full items-center">
            <SiteHeader />
              {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
