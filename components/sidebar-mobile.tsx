"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  LayoutDashboard,
  Cpu,
  SearchCode,
  HandCoins,
  Crosshair,
  Laptop,
  Briefcase,
  ArrowRightFromLine,
} from "lucide-react";

export default function SidebarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActiveRoute(path: string) {
    return pathname === path
      ? "text-secondary bg-primary px-2 py-1 w-full rounded-sm"
      : "text-primary bg-white px-2 py-1 w-full rounded-sm";
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="ml-2 mt-4 w-fit border-2 border-primary rounded-sm text-base lg:hidden"
        >
          <ArrowRightFromLine className="w-6 h-6 mr-2" />
          menu
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="pr-6">
        <SheetHeader>
          <SheetTitle className="text-xl lg:text-4xl font-extrabold">
            buildstation
            <span className="text-xl lg:text-4xl font-medium bg-primary rounded-md text-secondary px-2 py-1 ml-2">
              HQ
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-3 pt-6">
          <MobileLink
            href="/"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/"
            )} w-[190px]`}
            onOpenChange={setOpen}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Dashboard
          </MobileLink>
          <MobileLink
            href="/biochip"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/biochip"
            )} w-[190px]`}
            onOpenChange={setOpen}
          >
            <Cpu className="w-4 h-4 mr-2" />
            Biochip
          </MobileLink>
          <MobileLink
            href="/inspect"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/inspect"
            )} w-[190px]`}
            onOpenChange={setOpen}
          >
            <SearchCode className="w-4 h-4 mr-2" />
            Inspect
          </MobileLink>
          <MobileLink
            href="/grants"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/grants"
            )} w-[190px]`}
            onOpenChange={setOpen}
          >
            <HandCoins className="w-4 h-4 mr-2" />
            Grants
          </MobileLink>
          <MobileLink
            href="/bounties"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/bounties"
            )} w-[190px]`}
            onOpenChange={setOpen}
          >
            <Crosshair className="w-4 h-4 mr-2" />
            Bounties
          </MobileLink>
          <MobileLink
            href="/hackathon"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/hackathon"
            )} w-[190px]`}
            onOpenChange={setOpen}
          >
            <Laptop className="w-4 h-4 mr-2" />
            Hackathon
          </MobileLink>
          <MobileLink
            href="/jobs"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/jobs"
            )} w-[190px]`}
            onOpenChange={setOpen}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Jobs
          </MobileLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
