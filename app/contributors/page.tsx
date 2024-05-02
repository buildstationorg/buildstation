import Link from 'next/link'
import { coreContributors, contributors } from '@/app/contributors/data'

export default function Page() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl md:text-5xl font-bold">Contributors</h1>
      <Link className="underline text-blue-500" href="/">return home</Link>
      <h2 className="text-xl font-semibold">core</h2>
      <div className="flex flex-col gap-2">
        {
          coreContributors.map((coreContributor) => (
            <>
              <a key={coreContributor.id} className="text-md underline w-fit" href={coreContributor.github} target='_blank'>{coreContributor.name}</a>
            </>
          ))
        }
      </div>
      <h2 className="text-xl font-semibold">community</h2>
      <div className="flex flex-col gap-2">
        {
          contributors.map((coreContributor) => (
            <>
              <a key={coreContributor.id} className="text-md underline w-fit" href={coreContributor.github} target='_blank'>{coreContributor.name}</a>
            </>
          ))
        }
      </div>
    </div>
  );
}