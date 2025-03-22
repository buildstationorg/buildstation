import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
export default function SiteHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full">
      <Link href="/">
        <Image
          src="/buildstation-logo.svg"
          alt="buildstation Logo"
          width={1200}
          height={250}
          className="max-w-48 dark:invert"
          />
      </Link>
      <div className="flex flex-row gap-2">
        <ThemeToggle />
      </div>
    </div>
  )
}