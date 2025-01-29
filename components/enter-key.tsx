import { Button } from "@/components/ui/button"
import { CornerDownLeft } from 'lucide-react';
import Link from 'next/link';


export default function EnterKey({ href }: { href: string }) {
  return (
    <Button 
      variant="outline"
      className="border-2 border-primary w-fit"
      asChild
    >
      <Link href={href}>
        Enter
        <CornerDownLeft className="w-4 h-4 ml-2" />
      </Link>
    </Button>
  )
}
