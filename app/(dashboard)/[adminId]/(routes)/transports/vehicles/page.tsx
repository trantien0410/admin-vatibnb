import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { VehiclesColumn } from "./components/columns";
import { VehicleClient } from "./components/client";

const VehiclesPage = async () => {
  const vehicles = await prismadb.vehicle.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedVehicles: VehiclesColumn[] = vehicles.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    seatCount: item.seatCount,
    price: item.price,
    location: [item.detailedAddress, item.countryValue],
    host: item.user.name || "",
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <VehicleClient data={formattedVehicles} />
      </div>
    </div>
  );
};

export default VehiclesPage;
