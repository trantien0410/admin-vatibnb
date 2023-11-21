"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import Avatar from "../avatar";
import MenuItem from "./menu-item";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [menuRef]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className={`
                        p-4
                        md:p-1.5
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:drop-shadow
                        bg-white
                        dark:bg-zinc-900
                        ${isOpen ? "drop-shadow" : ""}
                        transition
                    `}
        >
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            mt-3
            absolute
            rounded-xl
            drop-shadow-xl
            ring-4
            ring-gray-100
            ring-opacity-30
            w-[40vw]
            md:w-[28vw]
            bg-white
            dark:bg-zinc-900
            overflow-hidden
            right-0
            text-sm
            py-2
            max-w-[16rem]
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser && (
              <MenuItem onClick={() => signOut()} label="Logout" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
