import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Link className="underline text-blue-500 w-fit" href="/">return home</Link>
      <h1 className="text-3xl md:text-5xl font-bold">bounty</h1>
    </div>

  );
}
