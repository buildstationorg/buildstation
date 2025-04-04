import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import TerminalMenu from "@/components/terminal-menu";
import KeyboardNav from "@/components/keyboard-nav";


export default function LearnPage() {
  const menuItems = [
    {
      id: 1,
      name: "Fullstack EVM DApp",
      url: "https://github.com/buildstationorg/evm-dapp-bootcamp",
    },
    {
      id: 2,
      name: "Solidty and Foundry",
      url: "https://github.com/buildstationorg/foundry-template",
    },
  ];

  const keyboardNavItems = [
    {
      keyboard: "1",
      description: "Links",
      url: "https://github.com/buildstationorg/evm-dapp-bootcamp",
    },
    {
      keyboard: "2",
      description: "Links",
      url: "https://github.com/buildstationorg/foundry-template",
    },
  ];


  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">00. Index</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Learn</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">
              $
            </span>
            <h1 className="text-md font-bold">Learn</h1>
          </div>
          <h1 className="text-xl md:text-3xl font-bold">
            Begin your training arc
          </h1>
          <div className="flex flex-col gap-12 mt-4">
            <p className="text-md">
              Collection of learning materials and resources to get started with
              web3 development.
            </p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-primary gap-2 pb-8">
          <div className="flex flex-row justify-between items-center bg-primary text-secondary p-2">
            <h1 className="text-lg md:text-xl font-bold">Terminal</h1>
            <p className="text-md">_</p>
          </div>
          <div className="flex flex-col px-4 py-2">
            <h2 className="text-md">$ cat learn.md</h2>
            <TerminalMenu menuItems={menuItems} />
          </div>
        </div>
      </div>
      <KeyboardNav keyboardNavItems={keyboardNavItems} />
    </div>
  );
}
