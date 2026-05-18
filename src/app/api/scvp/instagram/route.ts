import { getInstagramPosts } from "@/core/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");
  const limit = limitParam ? Number.parseInt(limitParam, 10) : 5;
  const safeLimit = Number.isFinite(limit)
    ? Math.min(Math.max(limit, 1), 10)
    : 5;

  const posts = await getInstagramPosts(safeLimit);

  return NextResponse.json(
    {
      items: posts,
      source: process.env.SCVP_INSTAGRAM_USERNAME ? "automatic" : "fallback",
    },
    {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
}
