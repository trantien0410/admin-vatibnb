import getCurrentUser from "@/actions/get-current-user";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const admin = getCurrentUser();

    if (!admin) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const listings = await prismadb.listing.findMany({
      include: {
        user: true,
      },
    });

    return NextResponse.json(listings);
  } catch (error) {
    console.log("[LISTINGS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
