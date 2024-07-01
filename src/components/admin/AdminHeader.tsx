"use client";

import { useOpenSidebar } from "@/lib/context/SidebarContext";
import Image from "next/image";
import { Icon } from "../ui/Icon";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Logo from "../ui/logo";

export default function AdminHeader({
  image,
  hasNotification,
}: {
  image?: string;
  hasNotification?: boolean;
}) {
  const { updateIsOpen, isOpen } = useOpenSidebar();

  const handleToggleSidebar = () => {
    updateIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full gap-x-20 items-center hidden lg:flex">
        <div className="max-w-40 flex items-center gap-x-2">
          {image ? (
            <Image src={image} height={20} width={20} alt="Icon" />
          ) : (
            <Icon className="material-icons" icon="account_circle" size={30} />
          )}

          <Label className="whitespace-nowrap me-8">Jane S.</Label>
          <Icon className="material-icons" icon="arrow_drop_down" size={20} />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Icon
              className="material-icons text-[#875FFE]"
              icon="search"
              size={30}
            />
            <input
              type="text"
              placeholder="Quick Search"
              className="text-base p-4 outline-none bg-transparent"
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Button className="bg-button-gradient text-white flex gap-x-2 items-center px-6 py-2 rounded-lg">
              <Icon
                className="material-icons-outlined"
                icon="qr_code_scanner"
                size={20}
              />
              <span className="text-lg font-semibold whitespace-nowrap">
                Verify
              </span>
            </Button>
            <Button className="bg-transparent hover:bg-transparent border-2 border-[#611DFC] text-white flex gap-x-2 items-center px-6 py-2 rounded-lg">
              <Icon className="material-icons-outlined" icon="add" size={25} />
              <span className="text-lg font-semibold whitespace-nowrap">
                Add another account
              </span>
            </Button>
            <div className="flex gap-0">
              <Icon
                className="material-icons text-[#875FFE] cursor-pointer"
                icon="notifications"
                size={30}
              />
              {!hasNotification && (
                <Icon
                  className="material-icons text-[#EB5757]"
                  icon="lens"
                  size={10}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-between items-center w-full">
        <Logo />
        {isOpen ? (
          <Icon
            className="material-icons-outlined"
            icon="close"
            size={40}
            onClick={handleToggleSidebar}
          />
        ) : (
          <Icon
            className="material-icons-outlined"
            icon="menu"
            size={40}
            onClick={handleToggleSidebar}
          />
        )}
      </div>
    </>
  );
}
