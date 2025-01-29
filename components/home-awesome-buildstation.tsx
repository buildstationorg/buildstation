import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAwesomeBuildstation() {
  return (
    <div className="flex flex-col gap-4 text-left border-2 border-primary">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-primary text-secondary p-2">
        $ cd awesome_buildstation.md
      </h2>
      <div className="flex flex-col gap-4 p-4">
        <p>
          An opinionated list of awesome projects contributed by the
          community
        </p>
        <Button
          className="w-fit p-6 mt-8"
          variant="outline"
          size="icon"
          asChild
        >
          <Link href="/awesome-buildstation">
            <ArrowRight className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </div>
  )
}