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
import { MousePointerClick, ChevronRight } from "lucide-react";
import TerminalContent, {
  TerminalContentProps,
} from "@/components/terminal-content";
import { MenuItem } from "@/components/terminal-menu";

export default function ProposedSolutionsPage() {
  const [terminalContent, setTerminalContent] = useState<TerminalContentProps>({
    title: "",
    contents: [],
    links: undefined,
  });

  const terminalContentList = [
    {
      title: "meetup-strategy.md",
      contents: [
        "buildstation meetup is a simple meetup concept that is cost effective to run and has big marketing impact. buildstation core team ZxStim and Dylan have ran a weekly meetup series for over 2 years. This style of meetup is great for networking and for any ecosystem builders/developer relations/developer advocates to undertake.",
        "Any buildstation meetup requires at least one person as host. The host is the key to the success of buildstation meetup. The host doesn't have to be a super technical person but the host should be a web3 native with deep domain knowledge of the crypto industry. It is preferable that the host to also possess extensive professional work experiences or entrepreneurship experiences. In addition, the host needs to be a good communicator with positive and relatable vibe to ensure a productive meetup environment.",
        "The ideal size this meetup style is 10 to 20 attendees. This allows the host to be able to move around different discussion groups and converse to all attendees. It's also not an issue if the meetup has less than 10 people, the host can have a more focused conversation with the attendees.",
        "It is vital that buildstation meetup to occur weekly. This allows the host to quickly iterate on moderation style and instills a habit within the attendees to come to the meetup. Regular attendees also become a good referral source for new attendees to join.",
        "Depending on the cultural context, select a location that is affordable, food and drinks are available as refreshments for attendees. Ideally, the venue should not charge for venue rental, only food and drinks cost (which is a lot less than venue rental).",
        "The host should be keeping tabs of what's going on right now in the crypto space, both internationally and locally. This includes major events, announcements, discussions, controversies, etc. These can be potential topics for discussion during the meetup. At the same time, the host should monitor the community groups to check on and resolve all the questions, or requests from the attendees. buildstation suggests using Telegram or Discord for the community group but the host can choose his/her preferred social platform.",
        "The host should welcome all attendees to their seats in the venue and always initiate a small break-the-ice activities or introduce newcomers to others. The meetup does not have a speaker, nor a pre-defined topic so it's up to the host to maintain the conversions going. Often times, the attendees also break out into smaller discussion groups on their own so the host can move around between discussion groups and keep the energy vibrant. At the same time, the host should be keeping tab on any negative behaviors like harassment or bullying to interfere and resolve the issues.",
        "Make sure to take adequate amount of photos during the meetups for social media posts. This is a cost effective ways to keep track of previous meetups and a fun way for the community to engage. The host should also collect feedbacks (if any) from attendees to improve the meetup further.",
      ],
      links: undefined,
    },
    {
      title: "builder-program.md",
      contents: [
        "A builder program is an initiative that organizations launch to encourage individuals to contribute software, ideas, or products into the ecosystem. By offering rewards or compensation for these contributions, the program aims to expand open source solutions within the ecosystem, grow the developer/builder community and create funnels for larger projects to explore.",
        "In contrast to a hackathon, a builder program is a long-term initiative that encourages regular contributions from individuals. So the program places more emphasis on developer retention and the quality of contributions rather than the quantity.",
      ],
      links: undefined,
    },
    {
      title: "better-hackathon.md",
      contents: [
        "Hackathons usually work better as a top funnel to build awareness and engagement for the ecosystem.",
        "So the strategy should be focused on mass media marketing, social blast and creative community experiences. You want to leave an instant impression on the participants and make them want to join and explore the ecosystem.",
        "Hackathon submissions should be centered around the technical implementation of the ideas proposed, not about business plans or marketing strategies. Matters related to go-to-market should be reserved for the post-hackathon period.",
        "In terms of timeline, we think 2 to 3 weeks long hackathon, with 2 weeks of promotion leading up to the hackathon, is the sweet spot. It's not too long that it becomes a burden for the participants, nor too short that it doesn't allow the participants to build anything substantial.",
      ],
      links: undefined,
    },
    {
      title: "ai-powered-approach.md",
      contents: [
        "Leverage AI agents to become a devrel or support the developers in their journey, around the clock.",
        "Your technical documentation should be optimized for AI to use, with a llms.txt or llms.md file to provide valuable context to the AI agents.",
        "You should have AI agents to help navigate the ecosystem, provide information on projects, available toolings, and more.",
      ],
      links: undefined,
    },
    {
      title: "devrel-as-a-builder-in-residence.md",
      contents: [
        "So currently DevRel is more of a developer support/developer sales + marketing role. We think with the growth of AI developer toolings, it's better to have the DevRel to be a builder in residence.",
        "The DevRel(s) will be building in public open source projects/software/dapps and contribute to the ecosystem similar to every other builders. They need to be active on social media platforms, promote their work, and show what the ecosystem is capable of.",
        "This way, other developers can learn from the journey, and the DevRel can be a role model for the community to follow, someone that inspires others to build.",
      ],
      links: undefined,
    },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Current problems",
      url: "/devrel-playbook/current-problems",
    },
    {
      id: 2,
      name: "Case studies",
      url: "/devrel-playbook/case-studies",
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
      url: "/devrel-playbook/case-studies",
    },
  ];

  function handleTerminalContentClick(title: string) {
    const content = terminalContentList.find(
      (item) => item.title === `${title}.md`
    );
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
            <BreadcrumbLink href="/devrel-playbook">
              DevRel playbook
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Proposed solutions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">
              $
            </span>
            <h1 className="text-md font-bold">Proposed solutions</h1>
          </div>
          <h1 className="text-xl md:text-3xl font-bold">Patience is the key</h1>
          <div className="flex flex-col gap-12 mt-4">
            <p className="text-md">
              Recognizing the problems, buildstation has pioneered and tested
              various solutions to help all ecosystems to grow their builder
              base in a sustainable manner, which includes:
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleTerminalContentClick("meetup-strategy")}
                className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary"
              >
                <ChevronRight className="w-6 h-6 mr-2" />
                Meetup strategy
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => handleTerminalContentClick("builder-program")}
                className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary"
              >
                <ChevronRight className="w-6 h-6 mr-2" />
                Builder program
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => handleTerminalContentClick("better-hackathon")}
                className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary"
              >
                <ChevronRight className="w-6 h-6 mr-2" />
                Better hackathon
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() =>
                  handleTerminalContentClick("ai-powered-approach")
                }
                className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary"
              >
                <ChevronRight className="w-6 h-6 mr-2" />
                AI powered approach
                <MousePointerClick className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() =>
                  handleTerminalContentClick("devrel-as-a-builder-in-residence")
                }
                className="flex flex-row items-center rounded-none text-left w-fit relative after:absolute after:bg-primary after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 after:left-0 after:top-0 after:-z-10 hover:text-secondary"
              >
                <ChevronRight className="w-6 h-6 mr-2" />
                DevRel as a builder in residence
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
