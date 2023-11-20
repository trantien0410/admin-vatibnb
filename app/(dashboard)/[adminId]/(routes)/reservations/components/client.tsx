"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ReservationsColumn, columns } from "./columns";

interface ReservationClientProps {
  data: ReservationsColumn[];
}

export const ReservationClient: React.FC<ReservationClientProps> = ({
  data,
}) => {
  return (
    <>
      <Heading
        title={`Reservations (${data.length})`}
        description="Manage reservations of your website"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
