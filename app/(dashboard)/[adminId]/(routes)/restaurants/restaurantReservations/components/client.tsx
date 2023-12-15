"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { RestaurantReservationsColumn, columns } from "./columns";

interface RestaurantReservationClientProps {
  data: RestaurantReservationsColumn[];
}

export const RestaurantReservationClient: React.FC<
  RestaurantReservationClientProps
> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Reservations (${data.length})`}
        description="Manage restaurant reservations of your website"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
