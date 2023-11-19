import getCurrentUser from "@/actions/get-current-user";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    redirect(`/${currentUser.id}`);
  }

  return <>{children}</>;
}
