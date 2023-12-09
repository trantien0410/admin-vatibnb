import prismadb from "@/lib/prismadb";

export const getVehicleTotalRevenue = async () => {
  const paidReservations = await prismadb.vehicleReservation.findMany({
    where: {
      isPaid: true,
    },
  });

  const totalRevenue = paidReservations.reduce((total, order) => {
    return total + order.totalPrice;
  }, 0);

  return totalRevenue;
};
