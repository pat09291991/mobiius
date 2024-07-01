"use client";

import { Icon } from "@/components/ui/Icon";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SeedPhraseModal({
  openSeedPhraseModal,
  toggleSeedPhraseModal,
}: {
  openSeedPhraseModal: boolean;
  toggleSeedPhraseModal: () => void;
}) {
  const [seedPhraseData, setSeedPhraseData] = useState(initialValues);

  if (!openSeedPhraseModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-full">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="relative bg-[#222222] p-8 rounded-lg shadow-lg transform transition-all animate-slideInTop flex flex-col gap-y-6 text-start">
        <Icon
          className="material-icons-outlined ml-auto"
          icon="close"
          size={30}
          onClick={toggleSeedPhraseModal}
        />
        <h2 className="text-2xl ">Your Seed Phrase</h2>
        <div className="flex gap-x-4">
          <p className="">
            Your Seed Phrase is used to generate and recover your account
          </p>
          <Icon
            className="material-icons-outlined ml-auto"
            icon="copy"
            size={30}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {seedPhraseData.map((seed) => (
            <Label
              key={seed.id}
              className="p-3 w-24 bg-[#5F47D8] text-center rounded-full"
            >
              {`${seed.id}. ${seed.label}`}
            </Label>
          ))}
        </div>
        <Label className="text-base text-gray-400">
          Please save these 12 words on a piece of paper. The order is
          important. This seed will allow you to recover your account.{" "}
          <span className="text-white">You will only see this once.</span>
        </Label>
      </div>
    </div>
  );
}

const initialValues = [
  {
    id: 1,
    label: "Issue",
  },
  {
    id: 2,
    label: "Flame",
  },
  {
    id: 3,
    label: "Sample",
  },
  {
    id: 4,
    label: "Lyric",
  },
  {
    id: 5,
    label: "Find",
  },
  {
    id: 6,
    label: "Vault",
  },
  {
    id: 7,
    label: "Dog",
  },
  {
    id: 8,
    label: "Banner",
  },
  {
    id: 9,
    label: "Cute",
  },
  {
    id: 10,
    label: "Cat",
  },
  {
    id: 11,
    label: "Civil",
  },
  {
    id: 12,
    label: "Goat",
  },
];
