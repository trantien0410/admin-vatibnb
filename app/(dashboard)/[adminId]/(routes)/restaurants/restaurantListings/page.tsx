import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { RestaurantsColumn } from "./components/columns";
import { RestaurantClient } from "./components/client";

const RestaurantPage = async () => {
  const restaurants = await prismadb.restaurant.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedRestaurants: RestaurantsColumn[] = restaurants.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    phoneContact: item.phoneContact,
    guestCount: item.guestCount,
    price: item.price,
    location: [item.detailedAddress, item.countryValue],
    host: item.user.name || "",
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <RestaurantClient data={formattedRestaurants} />
      </div>
    </div>
  );
};

export default RestaurantPage;
