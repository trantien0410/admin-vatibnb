import prismadb from "@/lib/prismadb";

export const getRestaurantReservationsCount = async () => {
  const reservationsCount = await prismadb.restaurantReservation.count({
    where: {
      isPaid: true,
    },
  });

  return reservationsCount;
};
