import Logo from "./logo";
import { SafeUser } from "@/types";
import UserMenu from "./user-menu";
import getCurrentUser from "@/actions/get-current-user";
import { redirect } from "next/navigation";

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
        <div className="ml-auto flex items-center space-x-4">
          <UserMenu currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
