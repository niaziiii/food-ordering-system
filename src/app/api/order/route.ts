import { NextRequest, NextResponse } from "next/server";
import { allData } from "./data";
import { IOrder } from "@/app/utils/type";

let menuData: IOrder[] = [...allData];
export async function GET(request: Request) {
  return NextResponse.json(
    { success: "All Orders", length: menuData.length, data: menuData },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const menu = body;
  menuData.push(menu);

  return NextResponse.json(
    { success: "Order Created", data: menu },
    { status: 201 }
  );
}

export async function PUT(request: Request) {
  const body = await request.json();
  const id = body.id;
  const updatedData = body;

  const index = menuData.findIndex((item: any) => item.id === id);

  if (index !== -1) {
    menuData[index] = { ...menuData[index], ...updatedData };
    return NextResponse.json(
      { success: "Order updated", data: menuData[index] },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
}
