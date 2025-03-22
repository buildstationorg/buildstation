import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "my opinion on hackathon vs. bounty",
      url: "/articles/my-opinion-on-hackathon-vs-bounty"
    },
    {
      id: 2, 
      title: "the pitfalls of devrel",
      url: "/articles/the-pitfalls-of-devrel"
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>articles</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Articles</h1>
        <div className="flex flex-col gap-2">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.url}
              className="text-muted-foreground hover:text-primary hover:underline"
            >
              {article.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}