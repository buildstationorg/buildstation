import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EnterKey from "@/components/enter-key";

export default function HomeGrants() {
  return (
    <div className="flex flex-col gap-4 text-left border-2 border-primary">
      <div className="flex flex-row items-center justify-between bg-primary text-secondary p-3">
        <h2 className="scroll-m-20 text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">
          $ grants
        </h2>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-md">
          Explore ecosystem grants and apply
        </p>
        <div className="flex flex-row justify-end">
          <EnterKey href="/grants" />
        </div>
      </div>

    </div>
  )
}