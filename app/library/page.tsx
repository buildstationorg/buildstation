import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import type { Metadata } from 'next'
import { libraryCategories, libraryPosts } from '@/app/library/data'

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
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl md:text-5xl font-bold">library</h1>
      <Link className="underline text-blue-500 w-fit" href="/">return home</Link>
      <div className="flex flex-col gap-8">
        {
          libraryCategories.map((category) => (
            <div key={category.id} className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-semibold mt-4 border-b pb-2">{category.title}</h2>
              {
                libraryPosts.filter((post) => post.category === category.slug).map((post) => (
                  <Link className="w-fit" key={post.id} href={post.slug}>{post.title}</Link>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>

  );
}
