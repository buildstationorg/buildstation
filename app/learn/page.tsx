import Link from 'next/link'
import type { Metadata } from 'next'
import { learnTracks, learnCourses, learnTrack, learnCourse } from './data'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: 'buildstation learn',
  description: 'explore our learning module for information on different languages and frameworks',
  metadataBase: new URL('https://www.buildstation.org'),
  openGraph: {
    title: 'buildstation learn',
    description: 'explore our learning module for information on different languages and frameworks',
    url: 'https://www.buildstation.org/learn',
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
    title: 'buildstation learn',
    description: 'explore our learning module for information on different languages and frameworks',
    creator: '@zxstim',
    images: ['/buildstation-tbn.png'],
  },
}


export default function Page() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>learn</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl md:text-5xl font-bold">learn</h1>
      <div className="flex flex-col gap-8">
        {
          learnTracks.map((track: learnTrack) => (
            <div key={track.id} className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-semibold mt-4 border-b pb-2">{track.title}</h2>
              {
                learnCourses.filter((course: learnCourse) => course.track === track.slug).map((course: learnCourse) => (
                  <Link className="w-fit" key={course.id} href={course.slug}>{course.title}</Link>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
