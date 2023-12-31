"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ListingsColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface ListingClientProps {
  data: ListingsColumn[];
}

export const ListingClient: React.FC<ListingClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Listings (${data.length})`}
        description="Manage listings for your website"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
