import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href="/">
        <Image
          src="/buildstation-logo.svg"
          alt="buildstation Logo"
          width={1200}
          height={250}
          className="max-w-48"
          />
      </Link>
    </div>
  )
}