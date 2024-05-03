'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

interface SidebarNavProps {
  categories: SidebarNavItem[];
  items: SidebarNavItem[];
}

interface SidebarNavItem {
  id: number;
  title: string;
  slug: string;
  parent: number | null;
}


export default function SidebarNav(data: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="md:flex md:flex-col md:gap-4 hidden md:sticky md:top-[126px] md:h-[calc(100vh-121px)]">
      {data.categories.map((category) => (
        <div key={category.id} className='flex flex-col gap-2'>
          <Link key={category.id} href={category.slug} className={pathname == category.slug ? "text-blue-500" : ""}>
            {category.title}
          </Link>
          <div className="flex flex-col ml-2">
            {
              data.items.filter((item) => item.parent === category.id).map((item) => (
                <Link key={item.id} href={item.slug} className={pathname == item.slug ? "pl-4 text-blue-500 border-l-2 border-l-blue-500 py-1" : "border-l-2 pl-4 py-1"}>
                  {item.title}
                </Link>
              ))
            }
          </div>
        </div>
        ))  
      }
    </div>
  )
}