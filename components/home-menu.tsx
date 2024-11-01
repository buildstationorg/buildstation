import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeMenu() {

  return (
    <div className="flex flex-col border-4 border-primary max-w-3xl divide-y-2 divide-primary">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-primary text-secondary py-4">
        build the future with us!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-primary">
        <div className="grow text-left p-10">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            Grants
          </h2>
          <p>
            Explore our grants program and apply
          </p>
          <Button
            className="w-fit p-6 mt-8"
            variant="outline"
            size="icon"
            asChild
          >
            <Link href="/grants">
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col divide-y-2 divide-primary">
          <div className="flex flex-col gap-4 text-left p-10">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              awesome buildstation
            </h2>
            <p>
              An opinionated list of awesome projects contributed by the
              community
            </p>
            <Button
              className="w-fit p-6 mt-8"
              variant="outline"
              size="icon"
              asChild
            >
              <Link href="/awesome-buildstation">
                <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-4 text-left p-10">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Learn
            </h2>
            <p>Explore our learning resources and courses</p>
            <Button
              className="w-fit p-6 mt-8"
              variant="outline"
              size="icon"
              asChild
            >
              <Link href="/learn">
                <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left p-10">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
          DevRel playbook
        </h2>
        <p>Learn about how to build a thriving ecosystem of builders</p>
        <Button
          className="w-fit p-6 mt-8"
          variant="outline"
          size="icon"
          asChild
        >
          <Link href="/devrel-playbook">
            <ArrowRight className="h-6 w-6" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-x-2 md:divide-y-0 divide-primary">
        <div className="flex flex-col text-left p-10">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            Videos
          </h2>
          <p>Explore our videos</p>
          <Button
            className="w-fit p-6 mt-8"
            variant="outline"
            size="icon"
            asChild
          >
            <Link href="/videos">
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col text-left p-10">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            Articles
          </h2>
          <p>Explore our articles</p>
          <Button
            className="w-fit p-6 mt-8"
            variant="outline"
            size="icon"
            asChild
          >
            <Link href="/articles">
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col text-left p-10">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            Events
          </h2>
          <p>Explore our events</p>
          <Button
            className="w-fit p-6 mt-8"
            variant="outline"
            size="icon"
            asChild
          >
            <Link href="/events">
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
