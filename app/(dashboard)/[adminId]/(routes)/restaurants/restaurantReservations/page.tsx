import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { RestaurantReservationsColumn } from "./components/columns";
import { RestaurantReservationClient } from "./components/client";

const RestaurantReservationsPage = async () => {
  const restaurantReservations = await prismadb.restaurantReservation.findMany({
    include: {
      user: true,
      restaurant: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedRestaurantReservations: RestaurantReservationsColumn[] =
    restaurantReservations.map((item) => ({
      id: item.id,
      totalPrice: formatter.format(item.totalPrice),
      startDate: format(item.startDate, "MMMM do, yyyy"),
      endDate: format(item.endDate, "MMMM do, yyyy"),
      phone: item.phone,
      address: item.address,
      isPaid: item.isPaid,
      renter: item.user.name || "",
      title: item.restaurant.title,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <RestaurantReservationClient data={formattedRestaurantReservations} />
      </div>
    </div>
  );
};

export default RestaurantReservationsPage;
