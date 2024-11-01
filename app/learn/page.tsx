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
import { ExternalLink } from 'lucide-react';

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
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Learn</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl md:text-5xl font-bold">Learn</h1>
      <div className="flex flex-col gap-8">
        {
          learnTracks.map((track: learnTrack) => (
            <div key={track.id} className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-semibold mt-4 border-b pb-2">{track.title}</h2>
              {
                learnCourses.filter((course: learnCourse) => course.track === track.slug).map((course: learnCourse) => (
                  <div className="flex flex-row gap-2 items-center underline underline-offset-4 text-blue-500" key={course.id}>
                    <a className="w-fit" href={course.slug}>{course.title}</a>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
