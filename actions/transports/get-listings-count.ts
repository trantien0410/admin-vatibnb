import prismadb from "@/lib/prismadb";

export const getVehiclesCount = async () => {
  const vehiclesCount = await prismadb.vehicle.count();

  return vehiclesCount;
};
