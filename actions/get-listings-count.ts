import prismadb from "@/lib/prismadb";

export const getListingsCount = async () => {
  const listingsCount = await prismadb.listing.count();

  return listingsCount;
};
