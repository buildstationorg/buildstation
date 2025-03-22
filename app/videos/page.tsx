import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function VideosPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Videos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Videos</h1>

      <section>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Livestreams</h2>
        <ul className="my-4 ml-6 list-disc">
          <li>
            <a href="/videos/zero-to-one/">Zero to One</a>
          </li>
        </ul>
      </section>
    </div>
  );
}