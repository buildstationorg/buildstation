import Link from "next/link";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { data } from "./data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AlertTriangle } from "lucide-react";

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
              <BreadcrumbPage>bounty</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl md:text-5xl font-bold">bounty</h1>
      <div className="flex flex-row gap-2 items-center bg-yellow-400 py-2 px-4">
        <AlertTriangle className="w-6 h-6" />
        <p>we are working on our bounty system, please check back later!</p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
