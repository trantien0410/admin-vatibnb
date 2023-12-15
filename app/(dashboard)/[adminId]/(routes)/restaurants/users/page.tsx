import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { UserClient } from "./components/client";
import { Role } from "@prisma/client";
import { UserColumn } from "./components/columns";

const UsersPage = async () => {
  const users = await prismadb.user.findMany({
    where: {
      role: Role.USER,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedUsers: UserColumn[] = users.map((item) => ({
    id: item.id,
    name: item.name || "",
    email: item.email || "",
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UserClient data={formattedUsers} />
      </div>
    </div>
  );
};

export default UsersPage;
