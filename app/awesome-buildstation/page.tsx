import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>awesome_buildstation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">awesome_buildstation</h1>
      <p>
        An opinionated list of awesome projects built or contributed by the
        buildstation community
      </p>

      <h2>Wallet</h2>

      <ul>
        <li>
          <a href="https://gmgn.app">GM GN Wallet</a> Probably the fastest
          onboarding wallet with Passkey.
        </li>
      </ul>

      <h2>Developer tooling</h2>

      <ul>
        <li>
          <a href="https://blockcmd.com/inspect">BlockCMD Inspect</a> A tool to
          read and write to smart contracts on various blockchains.
        </li>
        <li>
          <a href="https://github.com/gmgn-app/gmkey">GM Key</a> A Passkey based
          Wallet library for the multichain world.
        </li>
        <li>
          <a href="https://github.com/blockcmd/kaia-foundry-template">
            BlockCMD Kaia Foundry template
          </a>{" "}
          A template for building smart contracts on Kaia.
        </li>
        <li>
          <a href="https://blockcmd.com/drop">BlockCMD Drop</a> An efficient
          airdrop tool on Kaia.
        </li>
      </ul>
    </>
  );
}
