"use client";
import { useState } from "react";
import { formatEther, erc20Abi } from "viem";
import { ChevronRight, MousePointerClick } from "lucide-react";
import Link from "next/link";
import KeyboardNav, { KeyboardNavItem } from "@/components/keyboard-nav";
import { TerminalContentProps } from "@/components/terminal-content";
import { useBalance, useReadContract } from "wagmi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { arbitrum, scroll } from "wagmi/chains";
import { CopyButton } from "@/components/copy-button";

export default function TreasuryPage() {
  const [terminalContent, setTerminalContent] = useState<TerminalContentProps>({
    title: "",
    contents: [],
    links: undefined,
  });

  const [keyboardNavItems, setKeyboardNavItems] = useState<KeyboardNavItem[]>([
    { keyboard: "1", description: "Sections", url: "/treasury" },
  ]);

  const { data: arbEthBalance, isLoading: arbLoading } = useBalance({
    address: "0xc14c279967cd712FFEEDcFD4e56C845216b5042D",
    chainId: arbitrum.id,
    query: {
      enabled: terminalContent.title === "arbitrum",
    },
  });

  const { data: scrollBalance, isLoading: scrollLoading } = useReadContract({
    address: "0xd29687c813D741E2F938F4aC377128810E217b1b",
    chainId: scroll.id,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: ["0xc14c279967cd712FFEEDcFD4e56C845216b5042D"],
    query: {
      enabled: terminalContent.title === "scroll",
    },
  });

  const terminalContentList = [
    {
      title: "scroll",
      contents: ["0 SCR"],
      links: [
        {
          id: 1,
          name: "Scrollscan",
          url: "https://scrollscan.com/address/0xc14c279967cd712FFEEDcFD4e56C845216b5042D",
        },
      ],
    },
    {
      title: "arbitrum",
      contents: ["ETH"],
      links: [
        {
          id: 1,
          name: "Arbiscan",
          url: "https://arbiscan.io/address/0xc14c279967cd712FFEEDcFD4e56C845216b5042D",
        },
      ],
    },
    {
      title: "donate",
      contents: ["ETH"],
      links: undefined,
    },
  ];

  function handleTerminalContentClick(title: string) {
    const content = terminalContentList.find(
      (item) => item.title === `${title}`
    );
    if (content) {
      setTerminalContent(content);
    }

    switch (title) {
      case "arbitrum":
        setKeyboardNavItems([
          {
            keyboard: "1",
            description: "Arbiscan",
            url: "https://arbiscan.io/address/0xc14c279967cd712FFEEDcFD4e56C845216b5042D",
          },
        ]);
        break;

      case "scroll":
        setKeyboardNavItems([
          {
            keyboard: "1",
            description: "Scrollscan",
            url: "https://scrollscan.com/address/0xc14c279967cd712FFEEDcFD4e56C845216b5042D",
          },
        ]);
        break;

      default:
        setKeyboardNavItems([
          { keyboard: "1", description: "Sections", url: "/treasury" },
        ]);
        break;
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
              Turns out, blockchain is great for tracking treasury activities.
              You can see our balances of the treasury on all chains.
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleTerminalContentClick("arbitrum")}
                className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary"
              >
                <ChevronRight className="w-6 h-6 mr-2" />
                Arbitrum
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => handleTerminalContentClick("scroll")}
                className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary"
              >
                <ChevronRight className="w-6 h-6 mr-2" />
                Scroll
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-md">
                If you would like to donate to the treasury, please send your
                donation to
              </p>
              <button
                onClick={() => handleTerminalContentClick("donate")}
                className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary"
              >
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
                <span>
                  ${" "}
                  <span className="text-muted-foreground">
                    click <MousePointerClick className="inline w-4 h-4 ml-2" />{" "}
                    to view balance
                  </span>
                </span>
              )}
            </h2>
            {terminalContent.title === "arbitrum" ? (
              arbLoading ? (
                <p className="text-muted-foreground">⠋ Loading...</p>
              ) : (
                <p className="text-muted-foreground">
                  {">"} {formatEther(arbEthBalance?.value || BigInt(0))} ETH
                </p>
              )
            ) : terminalContent.title === "scroll" ? (
              scrollLoading ? (
                <p className="text-muted-foreground">⠋ Loading...</p>
              ) : (
                <p className="text-muted-foreground">
                  {">"} {formatEther(scrollBalance || BigInt(0))} SCR
                </p>
              )
            ) : null}
            {
              terminalContent.title === "donate" ? (
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground inline-block">
                    {">"} send any funds to <Link href="https://app.ens.domains/buildstation.eth" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 underline underline-offset-4 inline-block">buildstation.eth</Link> <span className="inline-block align-middle"><CopyButton text="buildstation.eth" /></span>
                  </p>
                  <div className="flex flex-row items-center gap-2 text-muted-foreground">
                    {">"} 0xd0...e2EbDB
                    <CopyButton text="0xd06c478DbfE22c014EA0E76A0BB216f346e2EbDB" />
                  </div>
                </div>
              ) : null
            }
            {terminalContent.links && (
              <div className="flex flex-col gap-4">
                {terminalContent.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-muted-foreground">{">"} </span>
                    <span className="bg-primary text-secondary px-1 mr-2">
                      {link.id}
                    </span>
                    <span className="text-blue-500 dark:text-blue-400 underline underline-offset-4">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <KeyboardNav keyboardNavItems={keyboardNavItems} />
    </div>
  );
}
