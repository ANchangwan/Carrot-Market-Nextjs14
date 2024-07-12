import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  return NextResponse.json({
    ok: true,
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  return NextResponse.json(data);
}
