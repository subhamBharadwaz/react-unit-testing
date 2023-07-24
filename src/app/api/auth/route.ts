import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const json = await req.json();
  console.log(json);
  return NextResponse.json({});
}
