"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { RestaurantsColumn, columns } from "./columns";

interface RestaurantClientProps {
  data: RestaurantsColumn[];
}

export const RestaurantClient: React.FC<RestaurantClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Restaurants (${data.length})`}
        description="Manage restaurants for your website"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
