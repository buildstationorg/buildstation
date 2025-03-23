import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import TerminalMenu from "@/components/terminal-menu"
import KeyboardNav from "@/components/keyboard-nav"

export default function DevrelPlaybook() {

  const menuItems = [
    {
      id: 1,
      name: "Current problems",
      url: "/devrel-playbook/current-problems"
    },
    {
      id: 2,
      name: "Proposed solutions",
      url: "/devrel-playbook/proposed-solutions"
    },
    {
      id: 3,
      name: "Case studies",
      url: "/devrel-playbook/case-studies"
    }
  ]

  const keyboardNavItems = [
    {
      keyboard: "1",
      description: "Sections",
      url: "/devrel-playbook/current-problems"
    },
    {
      keyboard: "2",
      description: "Sections",
      url: "/devrel-playbook/proposed-solutions"
    },
    {
      keyboard: "3",
      description: "Sections",
      url: "/devrel-playbook/case-studies"
    }
  ]

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">00. Index</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>DevRel playbook</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">
              $
            </span>
            <h1 className="text-md font-bold">DevRel playbook</h1>
          </div>
          <h1 className="text-xl md:text-3xl font-bold">Initialize community</h1>
          <div className="flex flex-col gap-12 mt-4">
            <p className="text-md">Bootstrapping a developer community takes time, resources, and a lot of trial and error. That&apos;s why we&apos;re building a framework to help you get started.</p>
            <p className="text-md">Ecosystems can leverage the stack and buildstation community to grow their developer ecosystem.</p>
            <p className="text-md">Developers can access the resources they need to grow and scale their projects.</p>
            <p className="text-md">We only ask that if you used this playbook, please reach out to us for collaboration or give attribution to buildstation in your campaign.</p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-primary gap-2 pb-8">
          <div className="flex flex-row justify-between items-center bg-primary text-secondary p-2">
            <h1 className="text-lg md:text-xl font-bold">Terminal</h1>
            <p className="text-md">_</p>
          </div>
          <div className="flex flex-col px-4 py-2">
            <h2 className="text-md">$ cat devrel.md</h2>
            <TerminalMenu menuItems={menuItems} />
          </div>
        </div>
      </div>
      <KeyboardNav keyboardNavItems={keyboardNavItems} />
    </div>
  )
}