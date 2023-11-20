import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { ReservationClient } from "./components/client";
import { formatter } from "@/lib/utils";
import { ReservationsColumn } from "./components/columns";

const ReservationsPage = async () => {
  const reservations = await prismadb.reservation.findMany({
    include: {
      user: true,
      listing: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedReservations: ReservationsColumn[] = reservations.map(
    (item) => ({
      id: item.id,
      totalPrice: formatter.format(item.totalPrice),
      startDate: format(item.startDate, "MMMM do, yyyy"),
      endDate: format(item.endDate, "MMMM do, yyyy"),
      phone: item.phone,
      address: item.address,
      isPaid: item.isPaid,
      renter: item.user.name || "",
      title: item.listing.title,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ReservationClient data={formattedReservations} />
      </div>
    </div>
  );
};

export default ReservationsPage;
