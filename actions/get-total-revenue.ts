import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async () => {
  const paidReservations = await prismadb.reservation.findMany({
    where: {
      isPaid: true,
    },
  });

  const totalRevenue = paidReservations.reduce((total, order) => {
    return total + order.totalPrice;
  }, 0);

  return totalRevenue;
};
