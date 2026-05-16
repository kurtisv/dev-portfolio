import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "dev-portfolio",
    time: new Date().toISOString(),
  });
}
