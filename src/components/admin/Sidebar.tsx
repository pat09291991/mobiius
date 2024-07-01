"use client";

import { useOpenSidebar } from "@/lib/context/SidebarContext";
import useMatch from "@/lib/hooks";
import useLockBodyScroll from "@/lib/useLockBodyScroll";
import Link from "next/link";
import { Label } from "../ui/label";
import { Icon } from "../ui/Icon";

export default function Sidebar() {
  const isDashboard = useMatch("dashboard");
  const isUsers = useMatch("users");

  const { isOpen, updateIsOpen } = useOpenSidebar();

  useLockBodyScroll(isOpen);

  return (
    <nav
      className={`${
        isOpen
          ? "flex absolute bg-black h-screen left-0 top-0 pl-10 py-5 z-10 max-w-60 transform transition-transform duration-300 w-72"
          : "hidden"
      } lg:flex flex-col gap-y-14 max-w-40 w-40`}
      onClick={() => updateIsOpen(false)}
    >
      <div className="flex flex-col gap-y-10">
        <Label className="text-3xl font-bold text-start">Mobiius</Label>
        <Link
          onClick={() => updateIsOpen(false)}
          href="dashboard"
          className={`flex gap-x-2 items-center ${
            isDashboard ? "text-[#875FFE]" : ""
          }`}
        >
          <Icon className="material-icons" icon="dashboard" size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          onClick={() => updateIsOpen(false)}
          href="users"
          className={`flex gap-x-2 items-center ${
            isUsers ? "text-[#875FFE]" : ""
          }`}
        >
          <Icon className="material-icons" icon="people" size={20} />
          <span>Users</span>
        </Link>
        {/* <Link
          onClick={() => updateIsOpen(false)}
          href="team"
          className={`flex gap-x-2 items-center ${
            isTeam ? "text-[#875FFE]" : ""
          }`}
        >
          <Icon className="material-icons" icon="groups" size={20} />
          <span>Team</span>
        </Link> */}
      </div>
    </nav>
  );
}
