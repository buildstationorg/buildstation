import { ChevronRight } from "lucide-react";
import Link from "next/link";

export interface MenuItem {
  id: number;
  name: string;
  url: string;
}

export default function TerminalMenu({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <div className="flex flex-col gap-2 mt-4 pl-8">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          className="group relative text-muted-foreground hover:text-primary hover:underline cursor-pointer flex items-center"
          target={`${item.url.includes('https') ? '_blank' : '_self'}`}
        >
          <ChevronRight
            className="absolute -left-9 opacity-0 group-hover:opacity-100 my-auto"
            size={24}
          />
          <span className="bg-primary text-secondary px-1 mr-4">
            {item.id}
          </span>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
