import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { ListingsColumn } from "./components/columns";
import { ListingClient } from "./components/client";

const ListingsPage = async () => {
  const listings = await prismadb.listing.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedListings: ListingsColumn[] = listings.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    roomCount: item.roomCount,
    bathroomCount: item.bathroomCount,
    guestCount: item.guestCount,
    price: item.price,
    location: [item.detailedAddress, item.countryValue],
    host: item.user.name || "",
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ListingClient data={formattedListings} />
      </div>
    </div>
  );
};

export default ListingsPage;
