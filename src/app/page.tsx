import { getHomePageData } from "@/lib/scvp-service";
import { HomePremium } from "../components/scvp/home-premium";

export default async function Home() {
  const { featuredCourses, quickTips } = await getHomePageData();

  return (
    <HomePremium featuredCourses={featuredCourses} quickTips={quickTips} />
  );
}
