import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log(req.headers);

  return NextResponse.json({ message: "pk" });
}
