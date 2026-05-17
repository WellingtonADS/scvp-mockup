import { HomeView } from "@/components/views/home-view";
import { getCourses, getHomePageData } from "@/core/services";

export default async function Home() {
  const { featuredCourses, quickTips, testimonials } = await getHomePageData();
  const allCourses = await getCourses();
  const bestSellingCourses = allCourses.slice(6, 14);

  return (
    <HomeView
      featuredCourses={featuredCourses}
      bestSellingCourses={bestSellingCourses}
      quickTips={quickTips}
      testimonials={testimonials}
    />
  );
}
