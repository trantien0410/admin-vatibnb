import prismadb from "@/lib/prismadb";

export const getRestaurantTotalRevenue = async () => {
  const paidReservations = await prismadb.restaurantReservation.findMany({
    where: {
      isPaid: true,
    },
  });

  const totalRevenue = paidReservations.reduce((total, order) => {
    return total + order.totalPrice;
  }, 0);

  return totalRevenue;
};
