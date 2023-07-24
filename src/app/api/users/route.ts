import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(
    [
      {
        id: 1,
        username: "subham",
      },
      {
        id: 2,
        username: "jack",
      },
      {
        id: 3,
        username: "anson",
      },
    ],
    { status: 200 }
  );
}
