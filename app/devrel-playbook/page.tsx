import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DevrelPlaybook() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>DevRel playbook</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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