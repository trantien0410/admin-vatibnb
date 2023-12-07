"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { VehiclesColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface VehicleClientProps {
  data: VehiclesColumn[];
}

export const VehicleClient: React.FC<VehicleClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Vehicles (${data.length})`}
        description="Manage vehicles for your website"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
