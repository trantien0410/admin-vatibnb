import prismadb from "@/lib/prismadb";

export const getReservationsCount = async () => {
  const reservationsCount = await prismadb.reservation.count({
    where: {
      isPaid: true,
    },
  });

  return reservationsCount;
};
