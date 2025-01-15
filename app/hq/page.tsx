import DashboardContent from "@/components/dashboard-content";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
        <p className="text-md text-muted-foreground">The central command of your dream</p>
      </div>
      <DashboardContent />
    </div>
  );
}