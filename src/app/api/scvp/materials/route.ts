import { materials } from "@/lib/scvp-materials-data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(materials);
}
