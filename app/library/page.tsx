import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'buildstation library',
  description: 'explore our library for resources, inspirations, and more!',
  metadataBase: new URL('https://www.buildstation.org'),
  openGraph: {
    title: 'buildstation library',
    description: 'explore our library for resources, inspirations, and more!',
    url: 'https://www.buildstation.org/library',
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
    title: 'buildstation library',
    description: 'explore our library for resources, inspirations, and more!',
    creator: '@zxstim',
    images: ['/buildstation-tbn.png'],
  },
}

export default function Page() {
  return (
    <div className="flex flex-col gap-8 my-24 items-center justify-center text-center">
      <h1 className="text-3xl md:text-5xl font-bold">library</h1>
      <Link className="underline text-blue-500" href="/">return Home</Link>
      <h2 className="text-xl md:text-3xl font-semibold">open source</h2>
      <h2 className="text-xl md:text-3xl font-semibold">bootcamps</h2>
      <h2 className="text-xl md:text-3xl font-semibold">ecosystem guides</h2>
    </div>
  );
}
