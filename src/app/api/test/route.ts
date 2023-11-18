import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ success: "item gets" }, { status: 200 });
}

export async function POST(request: Request) {
  return NextResponse.json(
    { success: "items created", data: request.body },
    { status: 201 }
  );
}
