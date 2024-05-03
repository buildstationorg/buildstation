import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageNavProps {
  forward: { slug: string; title: string };
  backward: { slug: string; title: string };
}

export default function PageNav(nav: PageNavProps) {
  if (!nav.backward) {
    return (
      <div className="grid grid-cols-1 gap-4 mt-4">
        <Link href={nav.forward.slug}>
          <div className="flex flex-row justify-between items-center text-left p-4 border-2 rounded-md hover:border-blue-500 hover:text-blue-500 text-muted-foreground">
            <div className="flex flex-col gap-2">
              <div className="!text-sm !text-primary">Next</div>
              <div className="text-md font-semibold">{nav.forward.title}</div>
            </div>
            <ChevronRight />
          </div>
        </Link>
      </div>
    );
  }

  if (!nav.forward) {
    return (
      <div className="grid grid-cols-1 gap-4 mt-4">
        <Link href={nav.backward.slug}>
          <div className="flex flex-row justify-between items-center text-right p-4 border-2 rounded-md hover:border-blue-500 hover:text-blue-500 text-muted-foreground">
            <ChevronLeft />
            <div className="flex flex-col gap-2">
              <div className="!text-sm !text-primary">Previous</div>
              <div className="text-md font-semibold">{nav.backward.title}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <Link href={nav.backward.slug}>
        <div className="flex flex-row justify-between items-center text-right p-4 border-2 rounded-md hover:border-blue-500 hover:text-blue-500 text-muted-foreground">
          <ChevronLeft />
          <div className="flex flex-col gap-2">
            <div className="!text-sm !text-primary">Previous</div>
            <div className="text-md font-semibold">{nav.backward.title}</div>
          </div>
        </div>
      </Link>
      <Link href={nav.forward.slug}>
        <div className="flex flex-row justify-between items-center text-left p-4 border-2 rounded-md hover:border-blue-500 hover:text-blue-500 text-muted-foreground">
          <div className="flex flex-col gap-2">
            <div className="!text-sm !text-primary">Next</div>
            <div className="text-md font-semibold">{nav.forward.title}</div>
          </div>
          <ChevronRight />
        </div>
      </Link>
    </div>
  );
}
