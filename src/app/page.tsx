import { HomeView } from "@/components/views/home-view";
import { getHomePageData } from "@/core/services";

export default async function Home() {
  const { featuredCourses, quickTips } = await getHomePageData();

  return <HomeView featuredCourses={featuredCourses} quickTips={quickTips} />;
}
