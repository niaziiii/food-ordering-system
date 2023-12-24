import { NextRequest, NextResponse } from "next/server";
import Order from "./order-schema";

export async function GET(request: Request) {
  const orders = await Order.find().populate("userId");

  return NextResponse.json(
    { success: "All Orders", length: orders.length, data: orders },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newOrder = await Order.create({ ...body });

  return NextResponse.json(
    { message: "Order has been placed.", data: newOrder },
    { status: 201 }
  );
}

export async function PUT(request: Request) {
  const body = await request.json();
  const id = body.id;
  const updatedData = body;

  if (updatedData) {
    return NextResponse.json(
      { success: "Order updated", data: [] },
      { status: 202 }
    );
  } else {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
}
