import { ExternalLink } from "lucide-react";
export default function A({
  children,
  href,
}: {
  children?: React.ReactNode;
  href?: string | undefined;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-row items-center font-medium text-blue-500 underline underline-offset-4"
    >
      {children}
      <ExternalLink className="w-4 h-4 ml-2" />
    </a>
  );
}
