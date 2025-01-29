import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeGrants() {
  return (
    <div className="flex flex-col gap-4 text-left border-2 border-primary">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-primary text-secondary p-2">
        $ grants
      </h2>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-md">
          Explore grants and apply
        </p>
        <Button
          className="w-fit"
          variant="outline"
          asChild
        >
          <Link href="/grants">
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}