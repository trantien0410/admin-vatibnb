import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { VehicleReservationsColumn } from "./components/columns";
import { VehicleReservationClient } from "./components/client";

const VehicleReservationsPage = async () => {
  const vehicleReservations = await prismadb.vehicleReservation.findMany({
    include: {
      user: true,
      vehicle: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedVehicleReservations: VehicleReservationsColumn[] =
    vehicleReservations.map((item) => ({
      id: item.id,
      totalPrice: formatter.format(item.totalPrice),
      startDate: format(item.startDate, "MMMM do, yyyy"),
      endDate: format(item.endDate, "MMMM do, yyyy"),
      phone: item.phone,
      address: item.address,
      isPaid: item.isPaid,
      renter: item.user.name || "",
      title: item.vehicle.title,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <VehicleReservationClient data={formattedVehicleReservations} />
      </div>
    </div>
  );
};

export default VehicleReservationsPage;
