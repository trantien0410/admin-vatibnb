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
      <div className="flex items-center justify-between">
        <Heading
          title={`Users (${data.length})`}
          description="Manage billboards for your store"
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="email"/>
    </>
  );
};
