"use client";

import { ColumnDef } from "@tanstack/react-table";

export type RestaurantReservationsColumn = {
  id: string;
  phone: string;
  address: string;
  startDate: string;
  endDate: string;
  isPaid: boolean;
  totalPrice: string;
  renter: string;
  title: string;
  createdAt: string;
};

export const columns: ColumnDef<RestaurantReservationsColumn>[] = [
  {
    accessorKey: "renter",
    header: "Renter",
  },
  {
    accessorKey: "title",
    header: "Listing",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Customer Address",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
