import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { Calendar, Pencil, Tag, GraduationCap } from 'lucide-react';

interface ArticleCardProps {
  data: {
    title: string;
    slug: string;
    updatedAt: string;
    createdAt: string;
    publishedAt: string;
    image: any;
    tags: any;
    categories: any;
    authors: any;
    date: string;
    content: string;
  }
  path: string;
}

export default function ArticleCard(
  { data, path }: ArticleCardProps
) {
  
  return (
    <div className="flex flex-col gap-4">
      <Link href={`/${path}/${data.slug}`}>
        <div className="flex flex-col gap-3">
          <Image 
            src={data.image.data.attributes.formats.medium.url}
            alt={data.image.data.attributes.name}
            width={data.image.data.attributes.formats.medium.width}
            height={data.image.data.attributes.formats.medium.height}
            className="rounded-2xl"
          />
          <div className="flex flex-row gap-3">
            <p className="flex flex-row gap-2 items-center sm:text-xs md:text-sm lg:text-md text-gray-400">
              <Calendar className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }).format(new Date(data.updatedAt))}
            </p>
            <p className="flex flex-row gap-2 items-center sm:text-xs md:text-sm lg:text-md text-gray-400">
              <GraduationCap className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              {data.categories.data[0].attributes.name}
            </p>
          </div>
          <h1 className="scroll-m-20 font-extrabold tracking-tight text-lg md:text-xl lg:text-2xl hover:underline hover:underline-offset-2 text-secondary">{data.title}</h1>
          <div className="flex flex-wrap gap-2 items-center text-gray-400">
            <Tag className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            {
              data.tags.data.map((tag: any) => (
                <Badge className="sm:text-sm md:text-md lg:text-lg bg-secondary-foreground text-secondary hover:bg-secondary hover:text-primary hover:cursor-pointer" key={tag.id}>{tag.attributes.name}</Badge>
              ))
            }
          </div>
          <p className="flex flex-row gap-2 items-center sm:text-sm md:text-md lg:text-lg text-secondary">
            <Pencil className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-400" />
            {data.authors.data[0].attributes.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

