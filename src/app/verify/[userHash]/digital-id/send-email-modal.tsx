"use client";

import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SendEmailModal({
  openSendEmailModal,
  toggleSendEmailModal,
}: {
  openSendEmailModal: boolean;
  toggleSendEmailModal: () => void;
}) {
  if (!openSendEmailModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-full">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="relative bg-[#222222] p-8 rounded-lg shadow-lg transform transition-all animate-slideInTop flex flex-col gap-y-4 text-start">
        <Icon
          className="material-icons-outlined ml-auto"
          icon="close"
          size={30}
          onClick={toggleSendEmailModal}
        />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl ">Send to your email</h2>
          <p className="">Please put a email that you have a access</p>
        </div>
        <Input className="bg-[#3D3D3D] py-6" placeholder="Enter your email" />
        <Button className="bg-button-gradient">Send</Button>
      </div>
    </div>
  );
}
