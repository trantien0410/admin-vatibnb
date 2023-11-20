import getCurrentUser from "@/actions/get-current-user";
import prismadb from "@/lib/prismadb";
import { Role } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const admin = getCurrentUser();

    if (!admin) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const users = await prismadb.user.findMany({
      where: {
        role: Role.USER,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.log("[USERS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
