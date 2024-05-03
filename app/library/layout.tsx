import Link from 'next/link'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col text-left gap-8 w-full">
      {children}
    </div>
  )
}