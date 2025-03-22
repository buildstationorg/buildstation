export default function H2({ children }: { children?: React.ReactNode }) {
  const normalizedId = children?.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().split(' ').join('-')
  return <h2 id={normalizedId} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-8">{children}</h2>
}