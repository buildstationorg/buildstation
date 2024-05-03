
import { dappBootcampsCategoryNavData, dappBootcampsItemNavData } from './data'
import SidebarNav from '@/components/sidebar-nav'

export default function MdxLayout({ children }: { children: React.ReactNode }) {

  // Create any shared layout or styles here
  return (
    <div className="grid grid-cols-1 md:grid-cols-[320px_minmax(768px,_1fr)] text-left gap-8 justify-center">
      <SidebarNav categories={dappBootcampsCategoryNavData} items={dappBootcampsItemNavData} />
      <div className='flex flex-col gap-8'>
        {children}
      </div>
    </div>
  )
}