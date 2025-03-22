import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function VideosPage() {
  const menuItems = [
    {
      id: 1,
      name: 'Zero to One',
      url: 'https://youtube.com/playlist?list=PLUCXw2ganKWWCMguBIUhK1L7dS9jeTcKY&si=Y3_u2KXPBbST6Omr'
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">00. Index</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Videos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
      <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
        <div className="flex flex-row gap-2 items-center">
          <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">$</span>
          <h1 className="text-md font-bold">Videos</h1>
        </div>
        <h1 className="text-xl md:text-3xl font-bold">Raw and unfilted</h1>
        <div className="flex flex-col gap-12 mt-4">
          <p className="text-md">You can find a collection of livestreams, discussions, tutorials and more.</p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-primary gap-2 pb-8">
        <div className="flex flex-row justify-between items-center bg-primary text-secondary p-2">
          <h1 className="text-lg md:text-xl font-bold">Terminal</h1>
          <p className="text-md">_</p>
        </div>
        <div className="flex flex-col px-4 py-2">
          <h2 className="text-md">$ cat videos.md</h2>
          <div className="flex flex-col gap-2 mt-4 pl-8">
            {menuItems.map((item) => (
              <Link 
                key={item.id} 
                href={item.url}
                className="group relative text-muted-foreground hover:text-primary hover:underline cursor-pointer flex items-center"
              >
                <ChevronRight className="absolute -left-9 opacity-0 group-hover:opacity-100 my-auto" size={16} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}