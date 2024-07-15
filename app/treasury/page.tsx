import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { arbitrumPublicClient, klaytnPublicClient } from "./client";
import { formatEther } from "viem";
import { ExternalLink } from "lucide-react";
import A from "@/components/mdx/a";

async function getMultichainBalances() {
  const arbitrumBalance = await arbitrumPublicClient.getBalance({
    address: "0x439aa01146DEB050881a254c7490c7f466e4D88d",
  });

  const klaytnBalance = await klaytnPublicClient.getBalance({
    address: "0x439aa01146DEB050881a254c7490c7f466e4D88d",
  });

  return { arbitrumBalance, klaytnBalance };
}

export default async function Page() {
  const { arbitrumBalance, klaytnBalance } = await getMultichainBalances();

  return (
    <div className="flex flex-col gap-8 w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>treasury</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        treasury
      </h1>
      <div className="flex flex-col gap-2">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Arbitrum
        </h2>
        <p>{formatEther(arbitrumBalance)} ETH</p>
        <a
          href="https://arbiscan.io/address/0x439aa01146DEB050881a254c7490c7f466e4D88d"
          target="_blank"
          className="flex flex-row items-center underline underline-offset-2 text-blue-500 w-fit"
        >
          Arbiscan
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Kaia
        </h2>
        <p>{formatEther(klaytnBalance)} KLAY</p>
        <a
          href="https://arbiscan.io/address/0x439aa01146DEB050881a254c7490c7f466e4D88d"
          target="_blank"
          className="flex flex-row items-center underline underline-offset-2 text-blue-500 w-fit"
        >
          KlaytnFinder
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
