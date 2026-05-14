import { quickTips, testimonials } from "@/lib/scvp-home-data";
import { courses } from "@/lib/scvp-courses-data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    quickTips,
    featuredCourses: courses.slice(0, 6),
    testimonials,
  });
}
