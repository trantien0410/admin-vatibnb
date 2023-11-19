import getCurrentUser from "@/actions/get-current-user";
import Navbar from "@/components/navbar/navbar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/");
  }
  return (
    <>
      <Navbar currentUser={currentUser} />
      {children}
    </>
  );
}
