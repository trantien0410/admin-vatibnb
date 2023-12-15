import prismadb from "@/lib/prismadb";

export const getRestaurantsCount = async () => {
  const restaurantsCount = await prismadb.restaurant.count();

  return restaurantsCount;
};
