import HomeAwesomeBuildstation from "@/components/home-awesome-buildstation";
import HomeGrants from "@/components/home-grants";
import HomeLearn from "@/components/home-learn";
import HomeLogo from "@/components/home-logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center w-full">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <HomeGrants />
        <HomeAwesomeBuildstation />
        <HomeLearn />
      </div>
    </div>
  );
}
