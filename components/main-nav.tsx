"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const isVehiclePage = pathname?.startsWith(`/${params?.adminId}/transports`);
  const isRestaurantPage = pathname?.startsWith(
    `/${params?.adminId}/restaurants`
  );

  const routes = [
    {
      href: `/${params?.adminId}`,
      label: "Home",
      active: pathname === `/${params?.adminId}`,
    },
    {
      href: `/${params?.adminId}/users`,
      label: "Users",
      active: pathname === `/${params?.adminId}/users`,
    },
    {
      href: `/${params?.adminId}/listings`,
      label: "Listings",
      active: pathname === `/${params?.adminId}/listings`,
    },
    {
      href: `/${params?.adminId}/reservations`,
      label: "Reservations",
      active: pathname === `/${params?.adminId}/reservations`,
    },
  ];
  const routesForVehicles = [
    {
      href: `/${params?.adminId}/transports`,
      label: "Home",
      active: pathname === `/${params?.adminId}/transports`,
    },
    {
      href: `/${params?.adminId}/transports/users`,
      label: "Users",
      active: pathname === `/${params?.adminId}/transports/users`,
    },
    {
      href: `/${params?.adminId}/transports/vehicles`,
      label: "Vehicles",
      active: pathname === `/${params?.adminId}/transports/vehicles`,
    },
    {
      href: `/${params?.adminId}/transports/vehicleReservations`,
      label: "Vehicle Reservations",
      active: pathname === `/${params?.adminId}/transports/vehicleReservations`,
    },
  ];
  const routesForRestaurants = [
    {
      href: `/${params?.adminId}/restaurants`,
      label: "Home",
      active: pathname === `/${params?.adminId}/restaurants`,
    },
    {
      href: `/${params?.adminId}/restaurants/users`,
      label: "Users",
      active: pathname === `/${params?.adminId}/restaurants/users`,
    },
    {
      href: `/${params?.adminId}/restaurants/restaurantListings`,
      label: "Restaurants",
      active: pathname === `/${params?.adminId}/restaurants/restaurantListings`,
    },
    {
      href: `/${params?.adminId}/restaurants/restaurantReservations`,
      label: "Restaurant Reservations",
      active:
        pathname === `/${params?.adminId}/restaurants/restaurantReservations`,
    },
  ];
  return (
    <nav
      className={cn("flex item-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {isVehiclePage
        ? routesForVehicles.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-rose-500",
                route.active
                  ? "text-rose-500 dark:text-rose-500"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))
        : isRestaurantPage
        ? routesForRestaurants.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-rose-500",
                route.active
                  ? "text-rose-500 dark:text-rose-500"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))
        : routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-rose-500",
                route.active
                  ? "text-rose-500 dark:text-rose-500"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
    </nav>
  );
}
