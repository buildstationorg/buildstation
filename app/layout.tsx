import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });


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
          <div className="flex flex-col max-w-5xl w-full items-center">
            <SiteHeader />
              {children}
          </div>
        </main>
      </body>
    </html>
  );
}
