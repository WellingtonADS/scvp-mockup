import { alerts } from "@/core/constants";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(alerts);
}
