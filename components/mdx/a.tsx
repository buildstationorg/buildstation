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
      className="font-medium text-blue-400 underline underline-offset-4"
    >
      {children}
    </a>
  );
}
