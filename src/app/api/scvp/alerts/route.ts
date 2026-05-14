import { alerts } from "@/lib/scvp-alerts-data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(alerts);
}
