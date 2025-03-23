import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function DevrelPlaybook() {

  const menuItems = [
    {
      id: 1,
      name: "Videos",
      url: "/devrel-playbook/videos"
    }
  ]

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">00. Index</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>DevRel playbook</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">
              $
            </span>
            <h1 className="text-md font-bold">DevRel playbook</h1>
          </div>
          <h1 className="text-xl md:text-3xl font-bold">Bootstrap a dev community</h1>
          <div className="flex flex-col gap-12 mt-4">
            <p className="text-md">Bootstrapping a developer community takes time, resources, and a lot of trial and error. That&apos;s why we&apos;re building a framework to help you get started.</p>
            <p className="text-md">Ecosystems can leverage the stack and buildstation community to grow their developer ecosystem.</p>
            <p className="text-md">Developers can access the resources they need to grow and scale their projects.</p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-primary gap-2 pb-8">
          <div className="flex flex-row justify-between items-center bg-primary text-secondary p-2">
            <h1 className="text-lg md:text-xl font-bold">Terminal</h1>
            <p className="text-md">_</p>
          </div>
          <div className="flex flex-col px-4 py-2">
            <h2 className="text-md">$ cat videos.md</h2>
            <div className="flex flex-col gap-2 mt-4 pl-8">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="group relative text-muted-foreground hover:text-primary hover:underline cursor-pointer flex items-center"
                  target="_blank"
                >
                  <ChevronRight
                    className="absolute -left-9 opacity-0 group-hover:opacity-100 my-auto"
                    size={16}
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">Devrel playbook overview</h1>
      <p className="mb-8">A playbook on how to build a thriving ecosystem of builders.</p>

      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
      <p className="mb-6">This repository is a collection of concepts, strategies and experiements that the buildstation core team and community have undertaken over the years. Feel free to use this as guideance for your. We only ask that if you used this playbook, please reach out to us for collaboration or give attribution to buildstation in your campaign. The community continuously innovates new things which will be updated in this repository over time.</p>

      <h2 className="text-2xl font-semibold mb-4">What this repository is not</h2>
      <p className="mb-6">This repository is freely available to everyone but it does not mean that buildstation is a marketing agency. The core team does not take marketing job requests, nor we are interested in doing so. We are a community of passionate developers that want to elevate the global hacker movement and shape the future of finance.</p>

      <h2 className="text-2xl font-semibold mb-4">Current problems</h2>
      <p className="mb-4">Many L1/L2 ecosystems are struggling to attract developers to build on their platforms. Worse, they also usually encounter:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Many grifters/grift agencies always offer solutions that are unrealistic, unsustainable, and costly (especially if the foundation is giving them money) without being able to deliver any tangible results.</li>
        <li className="mb-2">Hackathons don't work as well as they used to be. They are expensive to run, hackathon winners usually don't continue building after the hackathon ends, and hackathons often exclude vast amount of developers that are too busy to participate because of their day jobs.</li>
        <li className="mb-2">Scammy/soft-rug projects that always demand big grants without actually delivering any products or services.</li>
        <li className="mb-2">Lack of defined tracking metrics, accountability and transparency in the ecosystem, especially in the various incentive programs to builders.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Proposed solutions</h2>
      <p className="mb-4">Recognizing the problems, buildstation has pioneered and tested various solutions to help all ecosystems to grow their builder base in a sustainable manner, which includes:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">A playbook on how to build a thriving ecosystem of builders.</li>
        <li className="mb-2">A community of builders that are passionate about building on Web3 to collaborate and share knowledge with each other.</li>
        <li className="mb-2">A set of tools and resources to help builders to build and ship their products faster.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Did it work?</h2>
      <p className="mb-6">Absolutely! We have seen many builders in our community grow from zero to one, and many of them have contributed greatly into the open source community of different L1/L2 ecosystems. We have also seen many ecosystems grow their builder base and attract more developers to build on their platforms.</p>

      <h3 className="text-xl font-semibold mb-4">Case study 1 with Kaia Vietnam</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Kaia launched a series of weekly mini meetups in Vietnam to attract more developers to build on their platform. The mini meetups were a huge success and attracted many developers to build on Klaytn. Cost for each meetup was less than $50 and the marketing impact was huge.</li>
        <li className="mb-2">Kaia also created a builder program with Dorahacks to incentivize developers to contribute. The bounty program quickly attracted over 50 developers within its first month to actively contribute to the Klaytn ecosystem. Activites are transparently tracked on GitHub (with Issues, Pull Requests and Discussion topics).</li>
        <li className="mb-2">Builder program created more impact to Kaia ecosystem than the previous Hackathon event (Klaymakers23) in terms of developer engagement and contributions.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">Case study 2 with Solana Superteam Vietnam</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Superteam launched a series of weekly mini meetups in Vietnam to attract more developers to build on Solana. The mini meetups became a weekly gathering for the Solana community in Vietnam and attracted many developers to build on Solana.</li>
        <li className="mb-2">Superteam saw the success of the mini meetups and used the momentum to launch a developer bootcamp to train more developers on Solana tech stack.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">So what's next?</h2>
      <p className="mb-4">Check out the following articles to learn more. If you have any questions or want to collaborate, feel free to reach out to us on <a href="https://t.me/buildstation" className="text-blue-500 hover:underline">Telegram</a>.</p>

      <h3 className="text-xl font-semibold mb-4">Playbook</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><a href="/devrel-playbook/mini-meetup" className="text-blue-500 hover:underline">mini meetup</a></li>
        <li className="mb-2"><a href="/devrel-playbook/builder-program" className="text-blue-500 hover:underline">builder program</a></li>
        <li className="mb-2"><a href="/devrel-playbook/developer-bootcamp" className="text-blue-500 hover:underline">developer bootcamp</a></li>
        <li className="mb-2"><a href="/devrel-playbook/hacker-house" className="text-blue-500 hover:underline">hacker house</a></li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">OSS</h3>
      <ul className="list-disc pl-6">
        <li><a href="/awesome-buildstation" className="text-blue-500 hover:underline">awesome-buildstation</a></li>
      </ul>
    </div>
  )
}