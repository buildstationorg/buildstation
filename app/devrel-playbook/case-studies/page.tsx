"use client";

import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import KeyboardNav, { KeyboardNavItem } from "@/components/keyboard-nav";
import { MousePointerClick, ChevronRight } from 'lucide-react';
import TerminalContent, { TerminalContentProps } from "@/components/terminal-content";
import { MenuItem } from "@/components/terminal-menu";


export default function CaseStudiesPage() {

  const [terminalContent, setTerminalContent] = useState<TerminalContentProps>({
    title: "",
    contents: [],
    links: undefined,
  });

  const [keyboardNavItems, setKeyboardNavItems] = useState<KeyboardNavItem[]>([
    {
      keyboard: "1",
      description: "Sections",
      url: "/devrel-playbook/current-problems",
    },
    {
      keyboard: "2",
      description: "Sections",
      url: "/devrel-playbook/proposed-solutions",
    },
  ]);

  const terminalContentList = [
    {
      title: "kaia.md",
      contents: [
        "Kaia ecosystem back in 2023 was very small, and lack developer activities from the community.",
        "buildstation along with Kaia team and partners launched a series of weekly mini meetups in Vietnam to attract more developers to build on Kaia. And a builder program with block rewards was setup to incentivize developers to contribute to the ecosystem.",
        "The program was a success, attracted tons of proposals and contributions to the ecosystem."
      ],
      links: [
        {
          id: 3,
          name: "Kaia Dapp Monorepo",
          url: "https://github.com/kaiachain/kaia-dapp-mono",
        },
      ],
    },
    {
      title: "openguild.md",
      contents: [
        "OpenGuild is a community that onboards new builders to the Polkadot ecosystem.",
        "buildstation collaborates with OpenGuild to build open source software (e.g. DotUI), operate hackathons and meetups together."
      ],
      links: [
        {
          id: 4,
          name: "DotUI",
          url: "https://dotui.buildstation.org",
        },
        {
          id: 5,
          name: "OpenGuild",
          url: "https://openguild.wtf",
        },
      ],
    },
    {
      title: "solana-superteam-vietnam.md",
      contents: [
        "Solana Superteam Vietnam is a community that onboards new builders to the Solana ecosystem.",
        "buildstation collaborates with Solana Superteam Vietnam to run Solana BuildStation meetups."
      ],
      links: undefined,
    },
    {
      title: "sui-aquamove.md",
      contents: [
        "Sui AquaMove Vietnam is a community that onboards new builders to the Sui ecosystem.",
        "buildstation collaborates with Sui AquaMove Vietnam to run Sui BuildStation meetups."
      ],
      links: undefined,
    },
    {
      title: "metapool-build-buddies.md",
      contents: [
        "MetaPool is a Liquid Staking platform for various L1s.",
        "buildstation collaborates with MetaPool to run MetaPool Build Buddies meetups."
      ],
      links: undefined,
    },
    {
      title: "bifrost.md",
      contents: [
        "Bifrost is a crosschain Liquid Staking platform for Polkadot and Ethereum.",
        "buildstation along with community partners collaborates with Bifrost to run Bifrost Mono grant program and Bifrost DeFi 101 meetups."
      ],
      links: [
        {
          id: 6,
          name: "Bifrost Mono",
          url: "https://github.com/bifrost-io/mono",
        },
        {
          id: 7,
          name: "Bifrost Events",
          url: "https://lu.ma/user/Bifrost",
        },
      ],
    }
  ];


  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Current problems",
      url: "/devrel-playbook/current-problems",
    },
    {
      id: 2,
      name: "Proposed solutions",
      url: "/devrel-playbook/proposed-solutions",
    },
  ];


  function handleTerminalContentClick(title: string) {
    const content = terminalContentList.find((item) => item.title === `${title}.md`);
    if (content) {
      setTerminalContent(content);
    }

    switch (title) {
      case "kaia":
        setKeyboardNavItems([
          { keyboard: "1", description: "Sections", url: "/devrel-playbook/current-problems" },
          { keyboard: "2", description: "Sections", url: "/devrel-playbook/proposed-solutions" },
          { keyboard: "3", description: "Sections", url: "https://github.com/kaiachain/kaia-dapp-mono" },
        ]);
        break;
      
      case "openguild":
        setKeyboardNavItems([
          { keyboard: "1", description: "Sections", url: "/devrel-playbook/current-problems" },
          { keyboard: "2", description: "Sections", url: "/devrel-playbook/proposed-solutions" },
          { keyboard: "4", description: "Sections", url: "https://dotui.buildstation.org" },
          { keyboard: "5", description: "Sections", url: "https://openguild.wtf" },
        ]);
        break;

      case "solana-superteam-vietnam":
        setKeyboardNavItems([
          { keyboard: "1", description: "Sections", url: "/devrel-playbook/current-problems" },
          { keyboard: "2", description: "Sections", url: "/devrel-playbook/proposed-solutions" },
        ]);
        break;
      case "sui-aquamove":
        setKeyboardNavItems([
          { keyboard: "1", description: "Sections", url: "/devrel-playbook/current-problems" },
          { keyboard: "2", description: "Sections", url: "/devrel-playbook/proposed-solutions" },
        ]);
        break;
      case "metapool-build-buddies":
        setKeyboardNavItems([
          { keyboard: "1", description: "Sections", url: "/devrel-playbook/current-problems" },
          { keyboard: "2", description: "Sections", url: "/devrel-playbook/proposed-solutions" },
        ]);
        break;

      case "bifrost":
        setKeyboardNavItems([
          { keyboard: "1", description: "Sections", url: "/devrel-playbook/current-problems" },
          { keyboard: "2", description: "Sections", url: "/devrel-playbook/proposed-solutions" },
          { keyboard: "6", description: "Sections", url: "https://github.com/bifrost-io/mono" },
          { keyboard: "7", description: "Sections", url: "https://lu.ma/user/Bifrost" },
        ]); 
        break;

      default:
        setKeyboardNavItems([
          { keyboard: "1", description: "Sections", url: "/devrel-playbook/current-problems" },
          { keyboard: "2", description: "Sections", url: "/devrel-playbook/proposed-solutions" },
        ]);
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
            <BreadcrumbLink href="/devrel-playbook">DevRel playbook</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Case studies</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">
              $
            </span>
            <h1 className="text-md font-bold">Case studies</h1>
          </div>
          <h1 className="text-xl md:text-3xl font-bold">Net positive with minor issues</h1>
          <div className="flex flex-col gap-12 mt-4">
            <p className="text-md">
              Recognizing the problems, buildstation has pioneered and tested various solutions to help all ecosystems to grow their builder base in a sustainable manner, which includes:
            </p>
            <div className="flex flex-col gap-4">
              <button onClick={() => handleTerminalContentClick("kaia")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Kaia
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("openguild")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                OpenGuild
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("solana-superteam-vietnam")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Solana Superteam Vietnam
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("sui-aquamove")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Sui AquaMove Vietnam
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("metapool-build-buddies")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                MetaPool Build Buddies
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("bifrost")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Bifrost
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        <TerminalContent contentProps={terminalContent} menuItems={menuItems} />
      </div>
      <KeyboardNav keyboardNavItems={keyboardNavItems} />
    </div>
  );
}
