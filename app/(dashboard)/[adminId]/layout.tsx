import getCurrentUser from "@/actions/get-current-user";
import Navbar from "@/components/navbar/navbar";
import prismadb from "@/lib/prismadb";
import { Role } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { adminId: string };
}) {
  const currentUser = await getCurrentUser();

  const admin = await prismadb.user.findFirst({
    where: {
      id: params.adminId,
    },
  });

  if (!currentUser && !admin) {
    redirect("/");
  }
  return (
    <>
      <Navbar currentUser={currentUser} />
      {children}
    </>
  );
}
