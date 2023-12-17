"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type RestaurantsColumn = {
  id: string;
  title: string;
  description: string;
  phoneContact: string;
  guestCount: number;
  price: number;
  location: string[];
  host: string;
  createdAt: string;
};

export const columns: ColumnDef<RestaurantsColumn>[] = [
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
    accessorKey: "phoneContact",
    header: "Contact",
  },
  {
    accessorKey: "location",
    header: "Location",
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
