import getCurrentUser from "@/actions/get-current-user";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { listingId: string } }
) {
  try {
    if (!params.listingId) {
      return new NextResponse("Listing id is required", { status: 400 });
    }

    const listing = await prismadb.listing.findUnique({
      where: {
        id: params.listingId,
      },
    });
    return NextResponse.json(listing);
  } catch (error) {
    console.log("[LISTING_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { listingId: string } }
) {
  try {
    const admin = getCurrentUser();

    if (!admin) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!params.listingId) {
      return new NextResponse("Listing id is required", { status: 400 });
    }

    const listing = await prismadb.listing.deleteMany({
      where: {
        id: params.listingId,
      },
    });
    return NextResponse.json(listing);
  } catch (error) {
    console.log("[LISTING_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
