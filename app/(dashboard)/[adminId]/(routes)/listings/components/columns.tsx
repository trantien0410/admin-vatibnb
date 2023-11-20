"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type ListingsColumn = {
  id: string;
  title: string;
  description: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  price: number;
  location: string[];
  host: string;
  createdAt: string;
};

export const columns: ColumnDef<ListingsColumn>[] = [
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
    accessorKey: "roomCount",
    header: "Total Rooms",
  },
  {
    accessorKey: "bathroomCount",
    header: "Total Bathrooms",
  },
  {
    accessorKey: "guestCount",
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
