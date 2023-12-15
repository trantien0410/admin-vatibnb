import getCurrentUser from "@/actions/get-current-user";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { restaurantId: string } }
) {
  try {
    if (!params.restaurantId) {
      return new NextResponse("Restaurant id is required", { status: 400 });
    }

    const restaurant = await prismadb.restaurant.findUnique({
      where: {
        id: params.restaurantId,
      },
    });
    return NextResponse.json(restaurant);
  } catch (error) {
    console.log("[RESTAURANT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { restaurantId: string } }
) {
  try {
    const admin = getCurrentUser();

    if (!admin) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!params.restaurantId) {
      return new NextResponse("Restaurant id is required", { status: 400 });
    }

    const restaurant = await prismadb.restaurant.deleteMany({
      where: {
        id: params.restaurantId,
      },
    });
    return NextResponse.json(restaurant);
  } catch (error) {
    console.log("[RESTAURANT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
