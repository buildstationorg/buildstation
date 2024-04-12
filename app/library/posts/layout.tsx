export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col text-left my-24 w-full">
      {children}
    </div>
  )
}