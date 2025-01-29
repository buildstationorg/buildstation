import HomeAwesomeBuildstation from "@/components/home-awesome-buildstation";
import HomeGrants from "@/components/home-grants";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center text-center">
      <HomeAwesomeBuildstation />
      <HomeGrants />
    </div>
  );
}
