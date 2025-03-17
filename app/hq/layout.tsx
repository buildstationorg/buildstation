import Header from "@/components/header";
import SidebarDesktop from "@/components/sidebar-desktop";
import SidebarMobile from "@/components/sidebar-mobile";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col lg:flex-row gap-4">
        <SidebarDesktop />
        <SidebarMobile />
        {children}
      </div>
    </div>
  );
}