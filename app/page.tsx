import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const menuItems = [
    {
      id: 2,
      name: 'awesome_buildstation',
      url: '/awesome-buildstation'
    },
    {
      id: 3,
      name: 'Grants',
      url: '/grants'
    },
    {
      id: 4,
      name: 'Learn',
      url: '/learn'
    },
    {
      id: 5,
      name: 'DevRel playbook',
      url: '/devrel-playbook'
    },
    {
      id: 6,
      name: 'Videos',
      url: '/videos'
    },
    {
      id: 7,
      name: 'Articles',
      url: '/articles'
    },
    {
      id: 8,
      name: 'Events',
      url: '/events'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
      <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
        <div className="flex flex-row gap-2 items-center">
          <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">00.</span>
          <h1 className="text-md font-bold">Index</h1>
        </div>
        <h1 className="text-xl md:text-3xl font-bold">The Onchain Developer Framework</h1>
        <div className="flex flex-col gap-12 mt-4">
          <p className="text-md">Bootstrapping a developer community takes time, resources, and a lot of trial and error. That&apos;s why we&apos;re building a framework to help you get started.</p>
          <p className="text-md">Ecosystems can leverage the stack and buildstation community to grow their developer ecosystem.</p>
          <p className="text-md">Developers can access the resources they need to grow and scale their projects.</p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-primary gap-2 pb-8">
        <div className="flex flex-row justify-between items-center bg-primary text-secondary p-2">
          <h1 className="text-lg md:text-xl font-bold">Terminal</h1>
          <p className="text-md">_</p>
        </div>
        <div className="flex flex-col px-4 py-2">
          <h2 className="text-md">$ cat BUILD.md</h2>
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
  );
}

