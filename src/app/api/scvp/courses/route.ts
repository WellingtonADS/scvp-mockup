import { courses } from "@/lib/scvp-courses-data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(courses);
}
