export default function Blockquote({ children }: { children?: React.ReactNode }) {
  return (
    <blockquote className="text-secondary mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>
  )
}