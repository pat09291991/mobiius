"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SeedPhrase() {
  const router = useRouter();
  const [seedPhraseData, setSeedPhraseData] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const changedData = seedPhraseData.map((seed) => {
      if (seed.id === id) {
        seed.label = e.target.value;
      }
      return seed;
    });

    setSeedPhraseData(changedData);
  };

  const login = () => {
    router.push(`/admin/1/dashboard`);
  };
  return (
    <div className="flex flex-col gap-y-10 items-center px-4">
      <Logo className="text-4xl font-bold" />
      <div className="flex flex-col gap-y-4 border-2 border-[#875FFE] p-8 rounded-lg mb-10 w-full lg:w-5/6">
        <Label className="text-xl font-semibold">Your Seed Phrase</Label>
        <div className="grid grid-cols-3 gap-4">
          {seedPhraseData.map((seed) => (
            <Input
              key={seed.id}
              name={`seedphrase${seed.id}`}
              value={seed.label}
              className="bg-transparent border-2 border-gray-500"
              placeholder={seed.placeholder}
              onChange={(e) => handleChange(e, seed.id)}
            />
          ))}
        </div>
        <Label className="font-light text-sm text-gray-300">
          or paste your seed phrase
        </Label>
        <Input
          className="bg-transparent border-2 border-gray-500"
          placeholder={"Paste your seed phrase here"}
        />
        <Button className="bg-button-gradient" onClick={login}>
          Login
        </Button>
      </div>
      <Label className="absolute bottom-5 px-4 text-gray-500 leading-5">
        <span>This site is protected by reCAPTCHA and the </span>
        <Link href="" className="text-[#875FFE]">
          Privacy Policy{" "}
        </Link>
        <span>and </span>
        <Link href="" className="text-[#875FFE]">
          Terms of Service{" "}
        </Link>
        <span>apply.</span>
      </Label>
    </div>
  );
}

const initialValues = [
  {
    id: 1,
    placeholder: "1. Word",
    label: "",
  },
  {
    id: 2,
    placeholder: "2. Word",
    label: "",
  },
  {
    id: 3,
    placeholder: "3. Word",
    label: "",
  },
  {
    id: 4,
    placeholder: "4. Word",
    label: "",
  },
  {
    id: 5,
    placeholder: "5. Word",
    label: "",
  },
  {
    id: 6,
    placeholder: "6. Word",
    label: "",
  },
  {
    id: 7,
    placeholder: "7. Word",
    label: "",
  },
  {
    id: 8,
    placeholder: "8. Word",
    label: "",
  },
  {
    id: 9,
    placeholder: "9. Word",
    label: "",
  },
  {
    id: 10,
    placeholder: "10. Word",
    label: "",
  },
  {
    id: 11,
    placeholder: "11. Word",
    label: "",
  },
  {
    id: 12,
    placeholder: "12. Word",
    label: "",
  },
];
