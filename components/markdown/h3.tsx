export default function H3({ children }: { children?: React.ReactNode }) {
  const normalizedId = children?.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().split(' ').join('-')
  return <h3 id={normalizedId} className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">{children}</h3>
}