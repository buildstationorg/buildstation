import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import Header from "@/components/header";
import Footer from "@/components/footer";
import SidebarDesktop from "@/components/sidebar-desktop";
import SidebarMobile from "@/components/sidebar-mobile";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'buildstation HQ',
  description: 'your headquarter to manage all your buildstation projects',
  metadataBase: new URL('https://hq.buildstation.org'),
  openGraph: {
    title: 'buildstation',
    description: 'your headquarter to manage all your buildstation projects',
    url: 'https://hq.buildstation.org',
    siteName: 'buildstation',
    images: [
      {
        url: '/hq-buildstation-tbn.png',
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
    description: 'your headquarter to manage all your buildstation projects',
    creator: '@buildstationorg',
    images: ['/hq-buildstation-tbn.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer data-domain="hq.buildstation.org" src="https://analytics.pyhash.com/js/script.js"></Script>
      <body className={inter.className}>
        <Providers>
          <main className="flex flex-col gap-8 items-center justify-center py-12 px-4 font-mono">
            <div className="flex flex-col w-screen max-w-7xl">
              <Header />
              <div className="flex flex-col px-2 lg:flex-row gap-4">
                <SidebarDesktop />
                <SidebarMobile />
                {children}
              </div>
              <Footer />
            </div>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}