export default function PageLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col text-left gap-8 max-w-3xl w-full">
      {children}
    </div>
  )
}