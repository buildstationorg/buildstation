export default function OrderedList({ children }: { children?: React.ReactNode }) {
  return (
    <ol className="text-secondary my-6 ml-6 list-decimal [&>li]:mt-2">
      {children}
    </ol>
  )
}