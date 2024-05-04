"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          ⌘
          <span className="font-bold">BlockCMD</span>
        </MobileLink>
        <div className="flex flex-col space-y-3 pt-6">
          <h4 className="font-medium">Products</h4>
          <MobileLink 
            href="/driver" 
            onOpenChange={setOpen}
            className="text-muted-foreground"
          >
            Driver
          </MobileLink>
          <MobileLink 
            href="/driver" 
            onOpenChange={setOpen}
            className="text-muted-foreground"
          >
            Scans
          </MobileLink>
          <MobileLink 
            href="/driver" 
            onOpenChange={setOpen}
            className="text-muted-foreground"
          >
            Cache
          </MobileLink>
          <MobileLink 
            href="/driver" 
            onOpenChange={setOpen}
            className="text-muted-foreground"
          >
            Port
          </MobileLink>
        </div>
        <div className="flex flex-col space-y-3 pt-6">
          <h4 className="font-medium">Resources</h4>
          <MobileLink 
            href="/blog" 
            onOpenChange={setOpen}
            className="text-muted-foreground"
          >
            Blog
          </MobileLink>
          <MobileLink 
            href="/changelog" 
            onOpenChange={setOpen}
            className="text-muted-foreground"
          >
            Changelog
          </MobileLink>
          <MobileLink 
            href="/faqs" 
            onOpenChange={setOpen}
            className="text-muted-foreground"
          >
            FAQs
          </MobileLink>
        </div>
        <div className="flex flex-col space-y-3 pt-6">
          <MobileLink 
            href="/contributors" 
            onOpenChange={setOpen}
            className="font-medium"
          >
            Contributors
          </MobileLink>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}