import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <div className="flex flex-col gap-24 w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>our story</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl lg:text-5xl font-bold">
        be the change you wish to see in the world.
      </h1>
      <div className="flex flex-col w-full gap-12">
        <h1 className="text-3xl font-medium">hi there!</h1>
        <p>welcome aboard builders</p>
        <p>let&apos;s get you up to date with the storyline so far</p>
        <p>
          back in 2023, we{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            ZxStim
          </code>
          {" "}and{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Dylan
          </code>{" "}
          started a small meetup series concept that later went viral in
          Vietnam. we were tired of the endless low quality events, repetitive
          talking points and no real actions. the series got a ton of tractions and many other ecosystems adopting it. NOW, we have a meetup every day in Vietnam.
        </p>
        <p>so now, we plan to take this global.</p>
        <p>
          but we don&apos;t want to just become another souless marketing
          agency.
        </p>
        <p>we want to make this into a global builder movement,</p>
        <p>an initiative for builders to shape the future of finance,</p>
        <p>and thus buildstation is born!</p>
        <p>so join us, let&apos;s build the future together.</p>
        <p>Your frens</p>
        <p>
          <a
            className="text-blue-500 underline"
            href="https://twitter.com/zxstim"
          >
            Zxstim
          </a>
          ,{" "}
          <a
            className="text-blue-500 underline"
            href="https://twitter.com/0xdyln"
          >
            Dylan
          </a>
        </p>
      </div>
    </div>
  );
}
