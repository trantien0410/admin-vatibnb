import getCurrentUser from "@/actions/get-current-user";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { vehicleId: string } }
) {
  try {
    if (!params.vehicleId) {
      return new NextResponse("Vehicle id is required", { status: 400 });
    }

    const vehicle = await prismadb.vehicle.findUnique({
      where: {
        id: params.vehicleId,
      },
    });
    return NextResponse.json(vehicle);
  } catch (error) {
    console.log("[VEHICLE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { vehicleId: string } }
) {
  try {
    const admin = getCurrentUser();

    if (!admin) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!params.vehicleId) {
      return new NextResponse("Vehicle id is required", { status: 400 });
    }

    const vehicle = await prismadb.vehicle.deleteMany({
      where: {
        id: params.vehicleId,
      },
    });
    return NextResponse.json(vehicle);
  } catch (error) {
    console.log("[VEHICLE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
