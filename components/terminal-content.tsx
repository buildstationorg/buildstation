import { MousePointerClick } from "lucide-react";
import Link from "next/link";
import { MenuItem } from "@/components/terminal-menu";
import TerminalMenu from "@/components/terminal-menu";

export interface TerminalContentProps {
  title: string;
  contents: string[];
  links:
    | {
        id: number;
        name: string;
        url: string;
      }[]
    | undefined;
}

export default function TerminalContent({
  contentProps,
  menuItems,
}: {
  contentProps: TerminalContentProps;
  menuItems: MenuItem[];
}) {
  return (
    <div className="flex flex-col border-2 border-primary gap-2 pb-8">
      <div className="flex flex-row justify-between items-center bg-primary text-secondary p-2">
        <h1 className="text-lg md:text-xl font-bold">Terminal</h1>
        <p className="text-md">_</p>
      </div>
      <div className="flex flex-col gap-8 px-4 py-2">
        <div className="flex flex-col">
          <h2 className="text-md">
            {contentProps.title ? (
              `$ cat ${contentProps.title}`
            ) : (
              <span>
                ${" "}
                <span className="text-muted-foreground">
                  click <MousePointerClick className="inline w-4 h-4 ml-2" /> to
                  view contents
                </span>
              </span>
            )}
          </h2>
          <div className="flex flex-col gap-2 mt-4">
            {contentProps.contents.map((content, index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                <p className="self-start text-muted-foreground">{">"}</p>
                <p className="text-md text-muted-foreground">{content}</p>
              </div>
            ))}
          </div>
          <h2 className="text-md text-muted-foreground mt-4">
            {contentProps.links && `> links`}
          </h2>
          <div className="flex flex-col gap-2 mt-4">
            {contentProps.links?.map((link, index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                <p className="self-start text-muted-foreground">{">"}</p>
                <p className="bg-primary text-secondary px-1 mr-2">
                  {link.id}
                </p>
                <Link
                  href={link.url}
                  className="text-md underline underline-offset-4 text-blue-500 dark:text-blue-400"
                  target={`${link.url.includes("http") ? "_blank" : "_self"}`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-md">$ related</h2>
          <TerminalMenu menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
}
