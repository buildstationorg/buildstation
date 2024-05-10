import Link from 'next/link'
import type { Metadata } from 'next'
import { libraryCategories, libraryPosts } from '@/app/library/data'

export default function Page() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl md:text-5xl font-bold">bounty</h1>
      <Link className="underline text-blue-500 w-fit" href="/">return home</Link>
    </div>

  );
}
