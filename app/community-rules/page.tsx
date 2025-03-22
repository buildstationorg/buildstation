import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">00. Index</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Community Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Community Rules
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Be Kind and Respectful
      </h2>
      <p className="leading-7">
        Together let&rsquo;s build a positive, welcoming environment where
        everyone feels safe to share ideas, thoughts, and feedback. Let&rsquo;s
        be supportive, respect individual opinions, and report inappropriate
        posts if needed.
      </p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Give More Than You Take—No Solicitations
      </h2>
      <p className="leading-7">
        This includes self-promotion, unsolicited direct messages, spamming,
        links to offers, posing as Thinkific Experts or Partners, and any
        selling disguised as content or help posts with the purpose of lead
        generation. These types of posts will be removed to ensure we stay
        focused on meaningful discussion.
      </p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Zero Tolerance for Harassment
      </h2>
      <p className="leading-7">
        You should respectfully challenge ideas, but never directly attack a
        person. Any posts, comments, or DMs to members or admins that are
        inappropriate, rude, or aggressive will be immediately removed. This
        includes posts that spread misinformation &amp; are disruptive to the
        group.
      </p>
    </div>
  );
}
