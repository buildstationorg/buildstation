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
import { Info } from 'lucide-react';

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
      <div className="flex flex-col gap-2 bg-blue-300 py-2 px-4">
        <h2 className="flex flex-row gap-2 items-center text-lg font-semibold">
          <Info className="w-4 h-4" />Donate
        </h2>
        <p className="leading-7 text-sm">
          if you would like to donate to the treasury, please send your donation to
        </p>
        <code className="">
          0x439aa01146DEB050881a254c7490c7f466e4D88d
        </code>
        <p className="leading-7 text-sm">beside mainnet assets, we welcome testnet native tokens as well</p>
      </div>
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
