"use client";

import StartVerificationWrapper from "./StartVerificationWrapper";
import Link from "next/link";

const StartVerification = () => {
  return (
    <StartVerificationWrapper>
      <label className="font-extrabold text-5xl">Who Needs Verification?</label>
      <div className="flex gap-4">
        <Link
          href="/start/offers"
          className="uppercase font-normal w-40 p-2 text-sm rounded-lg leading-6 text-white bg-button-gradient"
        >
          verify your self
        </Link>
        <Link
          href="/start/offers"
          className="uppercase font-normal w-40 p-2 text-sm rounded-lg leading-6 text-white border-solid border border-white bg-transparent"
        >
          for someone else
        </Link>
      </div>
    </StartVerificationWrapper>
  );
};

export default StartVerification;
