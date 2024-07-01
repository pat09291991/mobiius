"use client";

import Container from "@/components/container";
import ContentCenter from "@/components/content-center";
import PageHeader from "@/components/page-header";
import { UserPassport } from "@/lib/types";
import Image from "next/image";
import ButtonShare from "./button-share";
import PageDescription from "@/components/page-description";
import { Icon } from "@/components/ui/Icon";
import ButtonLink from "@/components/button-link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DisplayIds from "./display-ids";
import IconVerified from "./icon-verified";
import Processing from "./processing";
import Progress from "@/components/progress";
import { useRouter } from "next/navigation";

// async function fetchUserPassport(id: number): Promise<UserPassport> {
//   const response = await fetch(
//     `${process.env.API}/users/${id}/digital-passport`,
//     {
//       cache: "no-store",
//     },
//   );

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }

//   return response.json();
// }

// async function fetchUser(userHash: string): Promise<UserPassport> {
//   const response = await fetch(`${process.env.API}/users/${userHash}`, {
//     cache: "no-store",
//   });

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }

//   return response.json();
// }

export default function VerifyResultPage({
  params,
}: {
  params: { userHash: string };
}) {
  // const user = await fetchUser(params.userHash);
  // const userPassport = await fetchUserPassport(user.id);

  // const facialVerified = !!userPassport.biometrics[0];
  // const idVerified = !!userPassport.documents[0];
  // const voiceVerified = !!userPassport.voice_recordings[0];
  // const fullyVerified = facialVerified && idVerified && voiceVerified;

  const facialVerified = true;
  const idVerified = true;
  const voiceVerified = true;
  const fullyVerified = facialVerified && idVerified && voiceVerified;
  const [processData, setProcessData] = useState(false);
  const router = useRouter();

  const aboutString = localStorage.getItem("about");
  const about = aboutString ? JSON.parse(aboutString) : "";
  const idFront = localStorage.getItem("idFront");
  const idBack = localStorage.getItem("idBack");
  const selfieUp = localStorage.getItem("selfie-UP");

  const handleProcessData = (value: boolean) => {
    setProcessData(value);
    router.push(`/verify/${params.userHash}/digital-id`);
  };

  return (
    <Container className="py-8 px-4">
      <Progress current={5} total={5} />
      {processData && <Processing onProcess={handleProcessData} />}
      <div className="flex flex-col gap-2 max-w-md grow">
        <PageHeader>Confirm All Details</PageHeader>
        <PageDescription className="px-10">
          Securely submit your ID document for identity verification
        </PageDescription>
        <div className="flex flex-col items-center gap-8 bg-white w-full mt-16 p-4 rounded-lg bg-[url('/confirm-image-bg.png')] bg-no-repeat bg-cover">
          <div className="mt-[-72px]">
            <Image
              src={selfieUp ?? "/scenario9.jpg"}
              className="w-32 h-32 rounded-full object-cover"
              alt="Selfie"
              width={128}
              height={128}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            {/* Insert Name */}
            <span className="text-black font-bold text-2xl">
              {`${about.firstName} ${about.lastName}`}{" "}
              <Icon
                className="material-icons text-[#5251DA]"
                icon="check_circle"
                size={20}
              />
            </span>
            {/* Insert Birthday */}
            <span className="text-[#686873] text-sm font-normal">
              Birthdate: {about.dob}
            </span>
            {/* Insert Address */}
            <span className="text-[#686873] text-sm font-normal">
              Address: {about.address}
            </span>
          </div>
          <div className="flex justify-center items-center gap-x-8">
            <IconVerified icon={"account_circle"} />
            <IconVerified icon={"badge"} />
            <IconVerified icon={"mic_none"} />
          </div>
        </div>
      </div>
      <DisplayIds label={"Front ID"} type="image" file={idFront} />
      <DisplayIds label={"Back ID"} type="image" file={idBack} />
      <DisplayIds label={"Voice"} type="audio" />
      <div className="grid grid-cols-2 gap-4 w-full">
        <ButtonLink
          className="text-white"
          href={`/verify/${params.userHash}/voice`}
          variant="link"
        >
          Previous
        </ButtonLink>
        <Button
          onClick={() => handleProcessData(true)}
          className="bg-button-gradient"
        >
          Next
        </Button>
      </div>
    </Container>
  );
}
