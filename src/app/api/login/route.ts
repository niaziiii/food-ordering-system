import { NextRequest, NextResponse } from "next/server";
import { allData } from "./data";
import { IUser } from "@/app/utils/type";

let userData: IUser[] = [...allData];

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.type == "login") {
    const user = userData.find(
      (u) => u.email === body.email && u.password == body.password
    );
    if (user) {
      return NextResponse.json(
        { message: "LoggedIn user!", success: true, data: user },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "failed", success: false, data: null },
        { status: 404 }
      );
    }
  } else if (body.type == "register") {
    allData.push(body);
    return NextResponse.json(
      { message: "Registerd user!", success: true, data: body },
      { status: 201 }
    );
  }

  return NextResponse.json(
    { message: "failed", success: false, data: null },
    { status: 404 }
  );
}
