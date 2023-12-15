"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Store as StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {}

const stores = [
  {
    value: "hotels",
    label: "Hotels",
  },
  {
    value: "transports",
    label: "Transports",
  },
  {
    value: "restaurants",
    label: "Restaurants",
  },
];

export default function StoreSwitcher({ className }: StoreSwitcherProps) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const isVehiclePage = pathname?.startsWith(`/${params?.adminId}/transports`);
  const isRestaurantPage = pathname?.startsWith(
    `/${params?.adminId}/restaurants`
  );
  const [open, setOpen] = useState(false);

  const currentStore = stores.find(
    (item) =>
      item.value ===
      (isVehiclePage
        ? "transports"
        : isRestaurantPage
        ? "restaurants"
        : "hotels")
  );

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    if (store.value === "hotels") {
      router.push(`/${params?.adminId}`);
    } else {
      router.push(`/${params?.adminId}/${store.value}`);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {currentStore?.label}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search Store..." />
            <CommandEmpty>No Store Found</CommandEmpty>
            <CommandGroup heading="Store">
              {stores.map((store) => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelect(store)}
                  className="text-sm"
                >
                  <StoreIcon className="mr-2 h-4 w-4" />
                  {store.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentStore?.value === store.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
