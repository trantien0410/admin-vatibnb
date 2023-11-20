"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { UserColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface UserClientProps {
  data: UserColumn[];
}

export const UserClient: React.FC<UserClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Users (${data.length})`}
        description="Manage users for your website"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="email" />
    </>
  );
};
