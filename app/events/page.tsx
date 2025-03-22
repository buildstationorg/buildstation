import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Events</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="prose prose-invert max-w-none">
        <h1>Events</h1>

        <h2>Calendars</h2>
        <ul>
          <li>
            <a href="https://lu.ma/buildstationorg">buildstation calendar</a>
          </li>
        </ul>

        <h2>Weekly meetups</h2>
        <ul>
          <li>
            <a href="https://lu.ma/BUIDL-station-2024">BUIDL Station</a>
          </li>
          <li>
            <a href="https://lu.ma/93m3cj1y">build buddies by metapool x kaia - Ho Chi Minh</a>
          </li>
          <li>
            <a href="https://lu.ma/93m3cj1y">build buddies by metapool x kaia - Hanoi</a>
          </li>
        </ul>

        <h2>Community calls</h2>
        <ul>
          <li>
            <a href="https://lu.ma/tact0w5t">buildstation build w frens</a>
          </li>
        </ul>
      </div>
    </main>
  );
}