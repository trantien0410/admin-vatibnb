"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { VehicleReservationsColumn, columns } from "./columns";

interface VehicleReservationClientProps {
  data: VehicleReservationsColumn[];
}

export const VehicleReservationClient: React.FC<VehicleReservationClientProps> = ({
  data,
}) => {
  return (
    <>
      <Heading
        title={`Reservations (${data.length})`}
        description="Manage vehicle reservations of your website"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
