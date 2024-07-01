"use client";

import ButtonLink from "@/components/button-link";
import PageHeader from "@/components/page-header";
import Progress from "@/components/progress";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { UserPassport } from "@/lib/types";
import { useUser } from "@/lib/useUser";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState, useEffect } from "react";

interface JsonBody {
  firstName?: string;
  lastName?: string;
  dob?: string;
  sex?: string;
  address?: string;
}

export default function VerifyAboutContent({ userHash }: { userHash: string }) {
  const userPassport = useUser(userHash);
  const [jsonBody, setJsonBody] = useState<JsonBody>({});
  const router = useRouter();
  const canSave =
    !!jsonBody.firstName &&
    !!jsonBody.lastName &&
    !!jsonBody.dob &&
    !!jsonBody.sex &&
    !!jsonBody.address;

  const handleSubmit = async () => {
    if (
      jsonBody.firstName != userPassport?.firstName ||
      jsonBody.lastName != userPassport?.lastName ||
      jsonBody.dob != userPassport?.dob ||
      jsonBody.sex != userPassport?.sex ||
      jsonBody.address != userPassport?.address
    ) {
      // await fetch(`${process.env.NEXT_PUBLIC_API}/users/${userPassport?.id}`, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(jsonBody),
      // });
    }
    localStorage.setItem("about", JSON.stringify(jsonBody));
    router.push(`/verify/${userHash}/selfie`);
  };

  return (
    <div className="flex flex-col p-8 h-screen gap-8 items-center">
      <Progress current={2} total={5} />

      <div className="flex-grow flex flex-col gap-5">
        <div className="flex flex-col gap-2 max-w-md">
          <PageHeader>Personal Information</PageHeader>
          <p className="text-zinc-500">
            Tell us a little about yourself. This information helps us offer
            relevant features and ensure a smooth KYC process.
          </p>
        </div>

        <AboutForm
          userPassport={userPassport}
          setJsonBody={setJsonBody}
          jsonBody={jsonBody}
        />
        <p className="text-zinc-500 text-xs text-left">
          Note: the address will auto filled based on your location and you can
          edit it if not accurate
        </p>
      </div>

      <div className="gap-4 grid grid-cols-2 w-full">
        <ButtonLink
          className="text-white"
          href={`/verify/${userHash}/location`}
          variant="link"
        >
          Previous
        </ButtonLink>
        <Button
          onClick={() => handleSubmit()}
          className="bg-button-gradient rounded-lg disabled:bg-white"
          disabled={!canSave}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

// TODO: Use react-hook-form and zod
function AboutForm({
  userPassport,
  setJsonBody,
  jsonBody,
}: {
  userPassport: UserPassport | undefined;
  setJsonBody: React.Dispatch<React.SetStateAction<JsonBody>>;
  jsonBody: JsonBody;
}) {
  const [firstName, setFirstName] = useState(userPassport?.firstName || "");
  const [lastName, setLastName] = useState(userPassport?.lastName || "");
  const [dob, setDob] = useState(userPassport?.dob || "");
  const [sex, setSex] = useState(userPassport?.sex || "");
  const [address, setAddress] = useState(userPassport?.address || "");

  const [inputType, setInputType] = useState<string>("text");

  useEffect(() => {
    if (!userPassport) {
      return;
    }

    setFirstName(userPassport?.firstName || "");
    setLastName(userPassport?.lastName || "");

    if (userPassport.dob) {
      const formattedDate = new Date(userPassport?.dob || "");
      setDob(formattedDate.toISOString().split("T")[0]);
    }

    setSex(userPassport?.sex || "");
    setAddress(userPassport?.address || "");

    if (
      userPassport.firstName &&
      userPassport.lastName &&
      userPassport.dob &&
      userPassport.sex &&
      userPassport.address
    ) {
      setJsonBody({
        firstName: userPassport.firstName,
        lastName: userPassport.lastName,
        dob: userPassport.dob,
        sex: userPassport.sex,
        address: userPassport.address,
      });
    }
  }, [userPassport, setJsonBody]);

  return (
    <form className="space-y-4 text-left text-foreground w-full max-w-md mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            className="bg-neutral-800 py-6 border-none text-[#bebebe]"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setJsonBody({
                ...jsonBody,
                firstName: e.target.value,
              });
            }}
            required
          />
        </div>
        <div>
          <Input
            className="bg-neutral-800 py-6 border-none text-[#bebebe]"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setJsonBody({
                ...jsonBody,
                lastName: e.target.value,
              });
            }}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative w-full h-full">
          <Input
            className="bg-neutral-800 py-6 border-none text-[#bebebe] dark:bg-white"
            id="dob"
            type={inputType}
            value={dob}
            placeholder="Date of Birth"
            onFocus={() => setInputType("date")}
            onBlur={() => setInputType("text")}
            onChange={(e) => {
              setDob(e.target.value);
              setJsonBody({
                ...jsonBody,
                dob: e.target.value,
              });
            }}
            required
          />
          <Icon
            className={`material-icons absolute top-1/2 right-4 translate-x-1/4 -translate-y-1/2 pointer-events-none ${
              inputType == "date" ? "opacity-0" : "opacity-50"
            }`}
            icon="calendar_month"
            size={13}
            color="white"
          />
        </div>
        <div>
          <Select
            onValueChange={(value) => {
              setSex(value);
              setJsonBody({
                ...jsonBody,
                sex: value,
              });
            }}
            value={sex}
          >
            <SelectTrigger className="bg-neutral-800 py-6 border-none text-[#bebebe]">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-800 border-none text-[#bebebe]">
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Input
          className="bg-neutral-800 py-6 border-none text-[#bebebe]"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            setJsonBody({
              ...jsonBody,
              address: e.target.value,
            });
          }}
          required
        />
      </div>
    </form>
  );
}
