"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CongratulationsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-y-8">
      <Image
        src="/svg/congratulations.svg"
        height={400}
        width={400}
        alt="icon"
      />
      <div className="flex flex-col gap-4">
        <Label className="text-4xl font-semibold flex flex-col">
          <span>Congratulation</span> <span>you finished the KYC</span>
        </Label>
        <Label className="text-base text-gray-500 font-normal">
          Mobiius is your one stop shop for getting a true Digital Passport here
          In The Philippines.
        </Label>
        <Link href="/" className="bg-button-gradient rounded-lg p-3 mx-5">
          Done
        </Link>
      </div>
    </div>
  );
}
