"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type VehiclesColumn = {
  id: string;
  title: string;
  description: string;
  seatCount: number;
  price: number;
  location: string[];
  host: string;
  createdAt: string;
};

export const columns: ColumnDef<VehiclesColumn>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "host",
    header: "Host",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "seatCount",
    header: "Total Allowed Guests",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
