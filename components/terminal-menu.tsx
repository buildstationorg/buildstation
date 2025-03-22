import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  id: string;
  name: string;
  url: string;
}

export default function TerminalMenu({ menuItems }: { menuItems: MenuItem[] }) {
  return (
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
              <ChevronRight
                className="absolute -left-9 opacity-0 group-hover:opacity-100 my-auto"
                size={16}
              />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
