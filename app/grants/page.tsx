import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image";

export default function GrantsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Grants</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Image
        src="/buildstation-grants.png"
        alt="the pitfalls of devrel"
        width={1500}
        height={750}
        className="mb-8"
      />

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Grants</h1>

      <section>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="leading-7 mt-4">
          🛠️ Welcome to buildstation grants program. We fund open source projects across many ecosystems.
        </p>
      </section>

      <section>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Rules</h2>
        <ul className="my-4 ml-6 list-disc">
          <li>Fully open source and no usage of business license.</li>
        </ul>
      </section>

      <section>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Proposal guidelines</h2>
        <ul className="my-4 ml-6 list-disc space-y-2">
          <li>Go to the Issue section for this GitHub repo: <a href="https://github.com/buildstationorg/grants/issues" className="text-primary hover:underline">https://github.com/buildstationorg/grants/issues</a></li>
          <li>Use the proposal template to create a proposal describing your idea.</li>
          <li>Our team will discuss with you to assign a grant amount according to your description.</li>
          <li>Upon receiving the approved tag for your issue, you can start working on the submission.</li>
          <li>Once you are done with your submission, submit the open source GitHub repo links and deployed links for your submission in the previously created Issue.</li>
          <li>We will communicate with you further on your submission to ensure quality control and provide final grant status.</li>
          <li>To receive payout, create a repository in your github with the name <code>buildstationorg</code> and add a <code>funding.json</code> file in the repo containing addresses in multiple chains. An example is attached here: <a href="https://github.com/zxstim/buildstationorg" className="text-primary hover:underline">https://github.com/zxstim/buildstationorg</a></li>
          <li>If you have received the status: <code>cleared</code>, we will process your payout to the linked address in your repo. Your issue will be marked <code>paid</code> after payout has been completed.</li>
        </ul>
      </section>

      <section>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Discussion</h2>
        <ul className="my-4 ml-6 list-disc space-y-2">
          <li>Go to the Discussion section for this GitHub repo: <a href="https://github.com/buildstationorg/grants/discussions" className="text-primary hover:underline">https://github.com/buildstationorg/grants/discussions</a></li>
          <li>Open a new discussion to discuss your idea with the community.</li>
        </ul>
      </section>

      <section>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Contact us</h2>
        <p className="leading-7 mt-4">
          Tag our handle <a href="https://x.com/buildstationorg" className="text-primary hover:underline">@buildstationorg</a> or <a href="https://x.com/zxstim" className="text-primary hover:underline">@zxstim</a> on <a href="https://x.com" className="text-primary hover:underline">X</a>
        </p>
        <p className="leading-7">
          Our email: core@buildstation.org
        </p>
      </section>
    </div>
  );
}