import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import SiteHeader from "@/components/site-header";
import type { Metadata } from 'next'
import Footer from "@/components/footer";
import { Providers } from '@/app/providers';
import { ThemeProvider } from "@/components/theme-provider"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={jetBrainsMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <main className="flex flex-col gap-12 items-center p-6 md:p-10 pb-12">
              <SiteHeader />
                {children}
              <Footer />
            </main>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
