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
import KeyboardNav from "@/components/keyboard-nav";
import { MousePointerClick, ChevronRight } from 'lucide-react';
import TerminalContent, { TerminalContentProps } from "@/components/terminal-content";
import { MenuItem } from "@/components/terminal-menu";


export default function CaseStudiesPage() {

  const [terminalContent, setTerminalContent] = useState<TerminalContentProps>({
    title: "",
    contents: [],
  });

  const terminalContentList = [
    {
      title: "meetup-strategy.md",
      contents: [
        "Many grifters/grift agencies always offer solutions that are unrealistic, unsustainable, and costly (especially if the foundation is giving them money) without being able to deliver any tangible results.",
      ],
    },
    {
      title: "builder-program.md",
      contents: [
        "Hackathons don't work as well as they used to be. They are expensive to run, hackathon winners usually don't continue building after the hackathon ends, and hackathons often exclude vast amount of developers that are too busy to participate because of their day jobs."
      ],
    },
    {
      title: "better-hackathon.md",
      contents: [
        "Scammy/soft-rug projects that always demand big grants without actually delivering any products or services."
      ],
    },
    {
      title: "ai-powered-approach.md",
      contents: [
        "Lack of defined tracking metrics, accountability and transparency in the ecosystem, especially in the various incentive programs to builders."
      ],
    }
  ];

  // <h3 className="text-xl font-semibold mb-4">Case study 1 with Kaia Vietnam</h3>
  // <ul className="list-disc pl-6 mb-6">
  //   <li className="mb-2">Kaia launched a series of weekly mini meetups in Vietnam to attract more developers to build on their platform. The mini meetups were a huge success and attracted many developers to build on Klaytn. Cost for each meetup was less than $50 and the marketing impact was huge.</li>
  //   <li className="mb-2">Kaia also created a builder program with Dorahacks to incentivize developers to contribute. The bounty program quickly attracted over 50 developers within its first month to actively contribute to the Klaytn ecosystem. Activites are transparently tracked on GitHub (with Issues, Pull Requests and Discussion topics).</li>
  //   <li className="mb-2">Builder program created more impact to Kaia ecosystem than the previous Hackathon event (Klaymakers23) in terms of developer engagement and contributions.</li>
  // </ul>

  // <h3 className="text-xl font-semibold mb-4">Case study 2 with Solana Superteam Vietnam</h3>
  // <ul className="list-disc pl-6 mb-6">
  //   <li className="mb-2">Superteam launched a series of weekly mini meetups in Vietnam to attract more developers to build on Solana. The mini meetups became a weekly gathering for the Solana community in Vietnam and attracted many developers to build on Solana.</li>
  //   <li className="mb-2">Superteam saw the success of the mini meetups and used the momentum to launch a developer bootcamp to train more developers on Solana tech stack.</li>
  // </ul>


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

  const keyboardNavItems = [
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
  ];

  function handleTerminalContentClick(title: string) {
    const content = terminalContentList.find((item) => item.title === `${title}.md`);
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
              <button onClick={() => handleTerminalContentClick("grifters")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Meetup strategy
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("hackathon-trap")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Builder program
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("scammy-projects")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                Better hackathon
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => handleTerminalContentClick("lack-of-goals-and-metrics")} className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary">
                <ChevronRight className="w-6 h-6 mr-2" />
                AI powered approach
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
