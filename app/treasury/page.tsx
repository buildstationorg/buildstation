import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { arbitrumPublicClient, scrollPublicClient } from "./client";
import { formatEther, erc20Abi } from "viem";
import { ExternalLink } from "lucide-react";
import { Info } from 'lucide-react';
import { CopyButton } from '@/components/copy-button';

async function getMultichainBalances() {
  const [arbitrumBalance, scrollBalance] = await Promise.all([
    arbitrumPublicClient.getBalance({
      address: "0xc14c279967cd712FFEEDcFD4e56C845216b5042D",
    }),
    scrollPublicClient.readContract({
      address: "0xd29687c813D741E2F938F4aC377128810E217b1b",
      abi: erc20Abi,
      functionName: "balanceOf",
      args: ["0xc14c279967cd712FFEEDcFD4e56C845216b5042D"],
    }),
  ]);

  return { arbitrumBalance, scrollBalance };
}
export const fetchCache = "force-no-store";

export default async function Page() {
  const { arbitrumBalance, scrollBalance } = await getMultichainBalances();

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
        <div className="flex flex-row">
          <code className="bg-blue-600 py-2 px-4 text-secondary overflow-x-auto">
            0xc14c279967cd712FFEEDcFD4e56C845216b5042D
          </code>
          <div className="flex flex-row text-secondary px-2 py-2 text-center items-center bg-blue-600">
            <CopyButton text="0xc14c279967cd712FFEEDcFD4e56C845216b5042D" />
          </div>
        </div>
        <p className="leading-7 text-sm">on Arbitrum, Base or Scroll.</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Arbitrum
        </h2>
        <p>{formatEther(arbitrumBalance)} ETH</p>
        <a
          href="https://arbiscan.io/address/0xc14c279967cd712FFEEDcFD4e56C845216b5042D"
          target="_blank"
          className="flex flex-row items-center underline underline-offset-2 text-blue-500 w-fit"
        >
          Arbiscan
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Scroll
        </h2>
        <p>{formatEther(scrollBalance)} SCR</p>
        <a
          href="https://scrollscan/address/0xc14c279967cd712FFEEDcFD4e56C845216b5042D"
          target="_blank"
          className="flex flex-row items-center underline underline-offset-2 text-blue-500 w-fit"
        >
          Scrollscan
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
