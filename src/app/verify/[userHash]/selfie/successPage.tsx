import ButtonLink from "@/components/button-link";
import Progress from "@/components/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SuccessPage({
  userHash,
  onRetake,
}: {
  userHash: string;
  onRetake: () => void;
}) {
  const selfies = [
    {
      id: 1,
      image: localStorage.getItem("selfie-UP"),
      orientation: "UP",
    },
    {
      id: 2,
      image: localStorage.getItem("selfie-DOWN"),
      orientation: "DOWN",
    },
    {
      id: 3,
      image: localStorage.getItem("selfie-LEFT"),
      orientation: "LEFT",
    },
    {
      id: 4,
      image: localStorage.getItem("selfie-RIGHT"),
      orientation: "RIGHT",
    },
  ];

  return (
    <div className="flex flex-col items-center h-auto min-h-screen w-full p-8 justify-start gap-10">
      <div className="w-full">
        <Progress current={3} total={5}></Progress>
      </div>
      <div className="h-auto w-full flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-2 ">
          <p className="text-[25px]">Selfie Verification</p>
          <p className="text-neutral-50 opacity-70 text-sm">
            take a quick selfie to verify your identity.Well keep your data safe
            and secure.
          </p>
        </div>

        {selfies.map((selfie) => (
          <div
            key={selfie.id}
            className="w-full md:w-1/3 h-72 rounded-lg relative "
          >
            <div className="absolute rounded-lg  bottom-0 w-full h-full z-[1] bg-gradient-to-b from-[#0001] to-[#111] flex justify-center items-end pb-3">
              <span className="text-white">{selfie.orientation}</span>
            </div>
            <Image
              className="rounded-lg z-0 border border-[#111]"
              src={selfie.image ?? "/girl.png"}
              alt={"Selfie Image"}
              fill
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}

        <Button
          className="bg-button-gradient w-full md:w-1/3"
          onClick={onRetake}
        >
          Retake
        </Button>
      </div>
      <div className="w-full mt-auto">
        <div className="grid grid-cols-2 gap-4 w-full">
          <ButtonLink
            className="text-white"
            href={`/verify/${userHash}/about`}
            variant="link"
          >
            Previous
          </ButtonLink>
          <ButtonLink
            className="bg-button-gradient"
            href={`/verify/${userHash}/id`}
          >
            Next
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
