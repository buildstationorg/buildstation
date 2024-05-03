import { dappBootcampsCategoryNavData, dappBootcampsItemNavData } from './data'
import SidebarNav from '@/components/sidebar-nav'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="grid grid-cols-[300px_minmax(768px,_1fr)_200px] text-left gap-8 justify-center">
      <SidebarNav categories={dappBootcampsCategoryNavData} items={dappBootcampsItemNavData} />
      <div>
        {children}
      </div>
    </div>
  )
}