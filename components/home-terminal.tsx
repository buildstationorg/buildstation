import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HomeTerminalProps = {
  title: string;
  description: string;
  link: string;
}

export default function HomeTerminal({ title, description, link }: HomeTerminalProps) {
  return (
    <div className="flex flex-col gap-4 text-left border-2 border-primary">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-primary text-secondary p-2">
        {title}
      </h2>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-md">
          {description}
        </p>
        <Button
          className="w-fit"
          variant="outline"
          asChild
        >
          <Link href={link}>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}