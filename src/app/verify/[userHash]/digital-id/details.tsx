import { Icon } from "@/components/ui/Icon";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import DigitalIdContainer from "./digital-id-container";

export default function Details() {
  const aboutString = localStorage.getItem("about");
  const about = aboutString ? JSON.parse(aboutString) : "";
  const selfieUp = localStorage.getItem("selfie-UP");

  return (
    <DigitalIdContainer>
      <Image
        src={selfieUp ?? "/scenario7.jpg"}
        className="w-full h-full rounded-t-2xl object-contain"
        alt="Selfie"
        width={128}
        height={128}
      />
      <div className="flex flex-col gap-2 text-start px-4">
        <Label className="text-3xl">
          {about.firstName} {about.lastName}
        </Label>
        <Label className="text-base font-normal text-gray-400">
          <span className="font-bold">Birthdate:</span> {about.dob}
        </Label>
        {/* <Label className="text-base font-normal text-gray<span>-400">Age:</span> 30</Label> */}
        <Label className="text-base font-normal text-gray-400">
          <span className="font-bold">Address:</span> {about.address}
        </Label>
      </div>
      <div className="flex flex-col gap-2 text-start px-4 pb-8">
        <Label className="text-3xl text-[#611DFC] flex gap-x-2 items-center">
          <span>Fully verified</span>
          <Icon className="material-icons-outlined" icon="verified" size={30} />
        </Label>
        <Label className="text-base">ID Verification</Label>
        <Label className="text-base">Facial Documentation</Label>
        <Label className="text-base">Voice Recognition</Label>
      </div>
    </DigitalIdContainer>
  );
}
