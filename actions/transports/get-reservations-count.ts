import prismadb from "@/lib/prismadb";

export const getVehicleReservationsCount = async () => {
  const reservationsCount = await prismadb.vehicleReservation.count({
    where: {
      isPaid: true,
    },
  });

  return reservationsCount;
};
