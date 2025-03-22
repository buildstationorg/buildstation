export default function P({ children }: { children?: React.ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-4 break-words">{children}</p>
}