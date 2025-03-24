"use client";
import { useState } from "react";
import { formatEther, erc20Abi } from "viem";
import { ChevronRight, ExternalLink, MousePointerClick } from "lucide-react";
import { Info } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import TerminalMenu from "@/components/terminal-menu";
import KeyboardNav from "@/components/keyboard-nav";
import TerminalContent, { TerminalContentProps } from "@/components/terminal-content";
import { 
  useBalance,
  useReadContract,
} from "wagmi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { arbitrum, scroll } from "wagmi/chains";

export default function TreasuryPage() {

  const [terminalContent, setTerminalContent] = useState<TerminalContentProps>({
    title: "",
    contents: [],
    links: undefined,
  });

  const { data: arbEthBalance, isLoading: arbLoading } = useBalance({
    address: '0xc14c279967cd712FFEEDcFD4e56C845216b5042D',
    chainId: arbitrum.id,
    query: {
      enabled: terminalContent.title === "arbitrum",
    },
  })

  const { data: scrollBalance, isLoading: scrollLoading } = useReadContract({
    address: '0xd29687c813D741E2F938F4aC377128810E217b1b',
    chainId: scroll.id,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: ['0xc14c279967cd712FFEEDcFD4e56C845216b5042D'],
    query: {
      enabled: terminalContent.title === "scroll",
    },
  })

  const menuItems = [
    {
      id: 1,
      name: "Arbitrum",
      url: "/treasury/arbitrum",
    },
  ];

  const terminalContentList = [
    {
      title: "scroll",
      contents: [
        "0 SCR"
      ],
      links: undefined,
    },
    {
      title: "arbitrum",
      contents: [
        "ETH"
      ],
      links: undefined,
    },
    {
      title: "donate",
      contents: [
        "ETH"
      ],
      links: undefined,
    }
  ];

  const keyboardNavItems = [
    {
      keyboard: "1",
      description: "Sections",
      url: "/treasury/arbitrum",
    },
  ];

  function handleTerminalContentClick(title: string) {
    const content = terminalContentList.find((item) => item.title === `${title}`);
    if (content) {
      setTerminalContent(content);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">00. Index</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Treasury</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">
              $
            </span>
            <h1 className="text-md font-bold">Treasury</h1>
          </div>
          <h1 className="text-xl md:text-3xl font-bold">Track our spendings</h1>
          <div className="flex flex-col gap-12 mt-4">
            <p className="text-md">
              Turns out, blockchain is great for tracking treasury activities. You can see our balances of the treasury on all chains.
            </p>
            <div className="flex flex-col gap-4">
              <button onClick={() => handleTerminalContentClick("arbitrum")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Arbitrum
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("scroll")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Scroll
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-md">
                If you would like to donate to the treasury, please send your donation to
              </p>
              <button onClick={() => handleTerminalContentClick("donate")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Donate
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 border-primary gap-2 pb-8">
          <div className="flex flex-row justify-between items-center bg-primary text-secondary p-2">
            <h1 className="text-lg md:text-xl font-bold">Terminal</h1>
            <p className="text-md">_</p>
          </div>
          <div className="flex flex-col gap-4 px-4 py-2">
            <h2 className="text-md">
              {terminalContent.title ? (
                `$ curl https://buildstation.org/${terminalContent.title}`
              ) : (
                <span>$ <span className="text-muted-foreground">click <MousePointerClick className="inline w-4 h-4 ml-2" /> to view balance</span></span>
              )}
            </h2>
            {terminalContent.title === "arbitrum" ? (
              arbLoading ? (
                <p className="text-muted-foreground">⠋ Loading...</p>
              ) : (
                <p className="text-muted-foreground">
                  {'>'} {formatEther(arbEthBalance?.value || BigInt(0))} ETH
                </p>
              )
            ) : terminalContent.title === "scroll" ? (
              scrollLoading ? (
                <p className="text-muted-foreground">⠋ Loading...</p>
              ) : (
                <p className="text-muted-foreground">
                  {'>'} {formatEther(scrollBalance || BigInt(0))} SCR
                </p>
              )
            ) : null}
          </div>
        </div>
      </div>
      <KeyboardNav keyboardNavItems={keyboardNavItems} />
    </div>

    // <div className="flex flex-col gap-8 w-full">
    //   <Breadcrumb>
    //     <BreadcrumbList>
    //       <BreadcrumbItem>
    //         <BreadcrumbLink href="/">home</BreadcrumbLink>
    //       </BreadcrumbItem>
    //       <BreadcrumbSeparator />
    //       <BreadcrumbItem>
    //         <BreadcrumbPage>treasury</BreadcrumbPage>
    //       </BreadcrumbItem>
    //     </BreadcrumbList>
    //   </Breadcrumb>
    //   <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    //     treasury
    //   </h1>
    //   <div className="flex flex-col gap-2 bg-blue-300 py-2 px-4">
    //     <h2 className="flex flex-row gap-2 items-center text-lg font-semibold">
    //       <Info className="w-4 h-4" />Donate
    //     </h2>
    //     <p className="leading-7 text-sm">
    //       if you would like to donate to the treasury, please send your donation to
    //     </p>
    //     <div className="flex flex-row">
    //       <code className="bg-blue-600 py-2 px-4 text-secondary overflow-x-auto">
    //         0xc14c279967cd712FFEEDcFD4e56C845216b5042D
    //       </code>
    //       <div className="flex flex-row text-secondary px-2 py-2 text-center items-center bg-blue-600">
    //         <CopyButton text="0xc14c279967cd712FFEEDcFD4e56C845216b5042D" />
    //       </div>
    //     </div>
    //     <p className="leading-7 text-sm">on Arbitrum, Base or Scroll.</p>
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
    //       Arbitrum
    //     </h2>
    //     <p>0 ETH</p>
    //     <a
    //       href="https://arbiscan.io/address/0xc14c279967cd712FFEEDcFD4e56C845216b5042D"
    //       target="_blank"
    //       className="flex flex-row items-center underline underline-offset-2 text-blue-500 w-fit"
    //     >
    //       Arbiscan
    //       <ExternalLink className="w-4 h-4 ml-2" />
    //     </a>
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
    //       Scroll
    //     </h2>
    //     <p>0 SCR</p>
    //     <a
    //       href="https://scrollscan.com/address/0xc14c279967cd712FFEEDcFD4e56C845216b5042D"
    //       target="_blank"
    //       className="flex flex-row items-center underline underline-offset-2 text-blue-500 w-fit"
    //     >
    //       Scrollscan
    //       <ExternalLink className="w-4 h-4 ml-2" />
    //     </a>
    //   </div>
    // </div>
  );
}
