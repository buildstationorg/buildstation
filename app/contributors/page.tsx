import Link from 'next/link'
import { coreContributors, contributors } from '@/app/contributors/data'

export default function Page() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl md:text-5xl font-bold">Contributors</h1>
      <Link className="underline text-blue-500" href="/">return home</Link>
      <h2 className="text-xl font-semibold">core</h2>
      <div className="flex md:flex-row md:flex-wrap flex-col gap-2 md:gap-8">
        {
          coreContributors.map((coreContributor) => (
            <div key={coreContributor.id} className="flex flex-row gap-4 border-2 border-primary p-2 rounded-md">
              <a className="text-md underline w-fit" href={coreContributor.github} target='_blank'>{coreContributor.name}</a>
              <a className="text-md underline w-fit" href={coreContributor.github} target='_blank'>𝕏</a>
            </div>
          ))
        }
      </div>
      <h2 className="text-xl font-semibold">community</h2>
      <div className="flex md:flex-row md:flex-wrap flex-col gap-2 md:gap-8">
        {
          contributors.map((contributor) => (
            <div key={contributor.id} className="flex flex-row gap-4 border-2 border-primary p-2 rounded-md">
              <a className="text-md underline w-fit" href={contributor.github} target='_blank'>{contributor.name}</a>
              <a className="text-md underline w-fit" href={contributor.github} target='_blank'>𝕏</a>
            </div>
          ))
        }
      </div>
    </div>
  );
}