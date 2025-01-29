import HomeAwesomeBuildstation from "@/components/home-awesome-buildstation";
import HomeDevrelPlaybook from "@/components/home-devrel-playbook";
import HomeGrants from "@/components/home-grants";
import HomeLearn from "@/components/home-learn";
import HomeVideos from "@/components/home-videos";
import HomeArticles from "@/components/home-articles";
import HomeEvents from "@/components/home-events";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center text-center w-full">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <HomeGrants />
        <HomeAwesomeBuildstation />
        <HomeLearn />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <HomeDevrelPlaybook />
        <HomeVideos />
        <HomeArticles />
        <HomeEvents />
      </div>
    </div>
  );
}
