export default function P({ children }: { children?: React.ReactNode }) {
  return <p className="text-secondary leading-7 [&:not(:first-child)]:mt-4">{children}</p>
}