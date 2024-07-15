import { Button } from "./ui/button";
import Link from 'next/link';
import { ExternalLink, Rss } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 w-full text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-primary">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 border border-primary p-10">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Join our community</h2>
            <div className="flex flex-row gap-6 items-center">
              <Button className="w-fit">
                <a className="flex flex-row gap-2 items-center" href="https://t.me/buildstation" target='blank'>Go to group chat <ExternalLink className="w-4 h-4" /></a>
              </Button>
              <a className="flex flex-row gap-2 items-center underline underline-offset-2" target='blank' href="https://t.me/buildstationfeed"><Rss className="w-4 h-4" />Feed</a>
            </div>
          </div>
          <div className="border border-primary p-10 grow">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-6">Here are some links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Team</h3>
                <Link href="/our-story" className="text-gray-500 text-sm">Our story</Link>
                <Link href="/our-goals" className="text-gray-500 text-sm">Our goals</Link>
                <Link href="/treasury" className="text-gray-500 text-sm">Treasury</Link>
                <Link href="/contributors" className="text-gray-500 text-sm">Contributors</Link>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Legal</h3>
                <Link href="/privacy" className="text-gray-500 text-sm">Privacy policy</Link>
                <Link href="/community-rules" className="text-gray-500 text-sm">Community rules</Link>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">Job board</h3>
                <Link href="/core" className="text-gray-500 text-sm">Core</Link>
                <Link href="/form-a-team" className="text-gray-500 text-sm">Form a team</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grow border border-primary p-10">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">For builders</h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">So you are ready to build stuffs, huh? Go to buildstation GitHub and join the global hacker movement!</p>
            <a className="flex flex-row gap-2 items-center text-blue-500" href="https://github.com/buildstationorg">
              Explore our repositories <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-5 border border-primary">
            <a target="_blank" href="https://x.com/buildstationorg">
              <div className="flex py-6 items-center justify-center text-primary-foreground">
                <Image src="/x.svg" alt="X" width={28} height={28} />
              </div>
            </a>
            <a target="_blank" href="https://github.com/buildstationorg">
              <div className="flex py-6 items-center justify-center text-primary-foreground">
                <Image src="/github.svg" alt="github" width={28} height={28} />
              </div>
            </a>
            <a target="_blank" href="https://facebook.com/buildstationorg">
              <div className="flex py-6 items-center justify-center text-primary-foreground">
                <Image src="/facebook.svg" alt="facebook" width={28} height={28} />
              </div>
            </a>
            <a target="_blank" href="https://youtube.com/@buildstationorg">
              <div className="flex py-6 items-center justify-center text-primary-foreground">
                <Image src="/youtube.svg" alt="youtube" width={28} height={28} />
              </div>
            </a>
            <a target="_blank" href="https://discord.gg/P9Xun3VzNT">
              <div className="flex py-6 items-center justify-center text-primary-foreground">
                <Image src="/discord.svg" alt="discord" width={28} height={28} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground text-center">buildstation is a <span className="text-gray-400">community initiative</span></div>
    </footer>
  );
}