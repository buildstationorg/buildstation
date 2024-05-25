import { Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center my-36">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">build the future with us!</h1>
      <div className="flex flex-row gap-4 items-center">
        <Button asChild>
          <Link href="/bounty"> 
            <Bug className="mr-2 h-4 w-4" /> hunt bounty
          </Link>
        </Button>
        <Button className="border-2 border-primary" variant="ghost" asChild>
          <Link href="/library"> 
            library
          </Link>
        </Button>
      </div>
    </div>
  );
}
