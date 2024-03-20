import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'buildstation',
  description: 'join the hacker movement and build the future with us',
  metadataBase: new URL('https://www.buildstation.org'),
  openGraph: {
    title: 'buildstation',
    description: 'join the hacker movement and build the future with us',
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
    description: 'join the hacker movement and build the future with us',
    creator: '@zxstim',
    images: ['/buildstation-tbn.png'],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center h-screen">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">build the future with us!</h1>
      <div className="flex flex-row gap-4 items-center">
        <Button asChild>
          <Link href="/our-story"> 
            <Flame className="mr-2 h-4 w-4" /> join the hacker movement!
          </Link>
        </Button>
        <Button className="border-2 border-primary" variant="ghost" asChild>
          <Link href="/blog"> 
            blog
          </Link>
        </Button>
      </div>

    </div>
  );
}
