"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Cpu, HandCoins, SearchCode, Laptop, Crosshair, Briefcase } from "lucide-react";

export default function SidebarDesktop() {
  const pathname = usePathname();

  function isActiveRoute(path: string) {
    return pathname === path
      ? "text-secondary bg-primary px-2 py-1 w-full"
      : "text-primary bg-white px-2 py-1 w-full";
  }

  return (
    <div className="hidden lg:flex lg:flex-col gap-4 text-left border-2 border-primary">
      <h2 className="bg-primary text-secondary px-2 py-1 w-full">$ nav</h2>
      <Link
        href="/"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/"
        )} w-[190px]`}
      >
        <LayoutDashboard className="w-6 h-6 mr-2" />
        Dashboard
      </Link>
      <Link
        href="/hq/biochip"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/hq/biochip"
        )} w-[190px]`}
      >
        <Cpu className="w-6 h-6 mr-2" />
        Biochip
      </Link>
      <Link
        href="/hq/inspect"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/hq/inspect"
        )} w-[190px]`}
      >
        <SearchCode className="w-6 h-6 mr-2" />
        Inspect
      </Link>
      <Link
        href="/hq/grants"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/hq/grants"
        )} w-[190px]`}
      >
        <HandCoins className="w-6 h-6 mr-2" />
        Grants
      </Link>
      <Link
        href="/hq/bounties"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/hq/bounties"
        )} w-[190px]`}
      >
        <Crosshair className="w-6 h-6 mr-2" />
        Bounties
      </Link>
      <Link
        href="/hq/hackathon"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/hq/hackathon"
        )} w-[190px]`}
      >
        <Laptop className="w-6 h-6 mr-2" />
        Hackathon
      </Link>
      <Link
        href="/hq/jobs"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/hq/jobs"
        )} w-[190px]`}
      >
        <Briefcase className="w-6 h-6 mr-2" />
        Jobs
      </Link>
    </div>
  );
}
