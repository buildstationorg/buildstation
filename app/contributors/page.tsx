import { columns } from "./columns";
import { DataTable } from "./data-table";
import { data, coreData } from "./data";
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
    <div className="flex flex-col gap-8 w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
              <BreadcrumbPage>contributors</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl md:text-5xl font-bold">contributors</h1>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-8">core</h2>
      <DataTable columns={columns} data={coreData} />
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-8">community</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
