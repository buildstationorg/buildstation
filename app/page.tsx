import { Flame } from "lucide-react"
 import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex h-screen text-center flex-col gap-6 items-center justify-center p-24 font-mono">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Build cool stuffs with us!</h1>
      <Button asChild>
        <a href="https://dorahacks.io/org/BUIDL-hacker-house/bounty" target="_blank"> 
          <Flame className="mr-2 h-4 w-4" /> join the hacker movement!
        </a>
      </Button>
    </main>
  );
}
