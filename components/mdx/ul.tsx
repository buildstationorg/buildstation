export default function UnorderedList({ children }: { children?: React.ReactNode }) {
  return (
    <ul className="ml-6 list-disc [&>li]:mt-2">
      {children}
    </ul>
  )
}