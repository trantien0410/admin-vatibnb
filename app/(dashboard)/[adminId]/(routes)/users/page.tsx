import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";
import { UserForm } from "./components/setting-form";

interface UsersProps {
  params: {
    adminId: string;
  };
}

const UsersPage: React.FC<UsersProps> = async ({ params }) => {
  const admin = await prismadb.user.findFirst({
    where: {
      id: params.adminId,
    },
  });

  if (!admin) {
    redirect("/");
  }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UserForm />
        </div>
    </div>
  );
};

export default UsersPage;
