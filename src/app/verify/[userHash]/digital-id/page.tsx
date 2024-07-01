"use client";

import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import Progress from "@/components/progress";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import Qr from "./qr";
import ButtonShare from "../result/button-share";
import Details from "./details";
import Link from "next/link";

export default function DigitalId({
  params,
}: {
  params: { userHash: string };
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Container className="py-8 px-4">
      <Progress current={5} total={5} />
      <PageHeader className="font-bold">Your Digital ID</PageHeader>
      <div
        className={`flip-container w-full grow ${isFlipped ? "flipped" : ""}`}
      >
        <div className="flipper relative preserve-3d w-full h-full transition duration-700 ease-out transform-style-3d">
          <div
            className={`w-full flex flex-col justify-center front ${
              !isFlipped ? "block z-10" : "hidden z-1"
            }`}
          >
            <Details />
            <ButtonShare
              href={`/verify/${params.userHash}/result`}
              className="text-lg bg-transparent focus:bg-transparent active:bg-transparent flex gap-2 mt-2"
            >
              <Icon className="material-icons" icon="share" size={20} />
              Share
            </ButtonShare>
          </div>
          <div
            className={`back w-full ${isFlipped ? "block z-10" : "hidden z-1"}`}
          >
            <Qr userHash={params.userHash} />
          </div>
        </div>
      </div>
      <Button
        onClick={() => setIsFlipped((prev) => !prev)}
        className="text-lg bg-[#611DFC] hover:bg-[#611DFC] active:bg-[#611DFC] w-full"
      >
        Flip Me
      </Button>
      <Link
        href="/verify/1/congratulations"
        className="bg-button-gradient w-full p-2 rounded-lg"
      >
        Finish KYC
      </Link>
    </Container>
  );
}
