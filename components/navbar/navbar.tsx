import Logo from "./logo";
import { SafeUser } from "@/types";
import UserMenu from "./user-menu";
import getCurrentUser from "@/actions/get-current-user";
import { redirect } from "next/navigation";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import StoreSwitcher from "../store-switcher";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = async ({ currentUser }) => {
  const admin = await getCurrentUser();

  if (!admin) {
    redirect("/");
  }
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Logo />
        <StoreSwitcher className="ml-10" />
        <MainNav className="mx-10" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserMenu currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
