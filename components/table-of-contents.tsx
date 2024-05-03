import React from 'react';
import Link from 'next/link';

interface TableOfContentsProps {
  headings: {
    text: string,
    level: number
  }[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {

  return (
    <div className="sticky top-[126px] h-[calc(100vh-121px)]">
      <div className="flex flex-col gap-2">
        <div className="!text-primary">On this page</div>
        <div className="flex flex-col gap-2">
          {headings.map((heading, index) => (
            <Link key={index} className={`text-sm text-muted-foreground hover:text-blue-500`} href={`#${heading.text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().split(' ').join('-')}`}>
              {heading.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}