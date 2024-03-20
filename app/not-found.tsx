import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-4">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Not Found</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6 ">Page is not found or under construction</p>
      <Link className="underline text-blue-500" href="/">Return Home</Link>
    </div>
  )
}
