export default function Header() {
  return (
    <div className="flex flex-col gap-4 md:flex lg:flex-row lg:justify-between items-center border-b-2 pb-6 md:py-6 border-primary md:px-4">
      <h1 className="text-xl lg:text-4xl font-extrabold">buildstation<span className="text-xl lg:text-4xl font-medium bg-primary rounded-md text-secondary px-2 py-1 ml-2">HQ</span></h1>
    </div>
  );
}