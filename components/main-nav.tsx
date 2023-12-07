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
    {
      href: `/${params?.adminId}/vehicles`,
      label: "Vehicles",
      active: pathname === `/${params?.adminId}/vehicles`,
    },
    {
      href: `/${params?.adminId}/vehicleReservations`,
      label: "Vehicle Reservations",
      active: pathname === `/${params?.adminId}/vehicleReservations`,
    },
  ];
  return (
    <nav
      className={cn("flex item-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
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
