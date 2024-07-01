import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ButtonShare from "../result/button-share";
import DigitalIdContainer from "./digital-id-container";
import SeedPhraseModal from "./seed-phrase-modal";
import SendEmailModal from "./send-email-modal";

export default function Qr({ userHash }: { userHash: string }) {
  const textToCopy = "0xaldgojo193-5qojladf0lksjfod";
  const [copy, setCopy] = useState<boolean>(false);
  const [openSeedPhraseModal, setOpenSeedPhraseModal] = useState(false);
  const [openSendEmailModal, setOpenSendEmailModal] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    });
  };

  const toggleSeedPhraseModal = () => {
    setOpenSeedPhraseModal(!openSeedPhraseModal);
  };

  const toggleSendEmailModal = () => {
    setOpenSendEmailModal(!openSendEmailModal);
  };

  return (
    <DigitalIdContainer>
      <Image
        src={"/qr-code-img.png"}
        className="w-full h-full rounded-t-2xl object-contain"
        alt="QR"
        width={128}
        height={128}
      />
      <div className="flex flex-col gap-2">
        <Label className="text-2xl">Your ID</Label>
        <div className="flex justify-center items-center gap-x-2">
          <Label>0xaldgojo193-5qojladf0lksjfod</Label>
          <div className="relative">
            <Icon
              className="material-icons cursor-pointer"
              icon="content_copy"
              size={20}
              onClick={handleCopyId}
            />
            {copy && (
              <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded animate-fadeInOut">
                Copied!
              </div>
            )}
          </div>
          <ButtonShare
            href={`/verify/${userHash}/digital-id`}
            className="bg-transparent focus:bg-transparent active:bg-transparent px-0"
          >
            <Icon className="material-icons" icon="share" size={20} />
          </ButtonShare>
        </div>
      </div>
      <Button
        onClick={toggleSeedPhraseModal}
        className="bg-transparent focus:bg-transparent active:bg-transparent text-[#611DFC] text-xl"
      >
        view your Seed Phrase
      </Button>
      <Button
        onClick={toggleSendEmailModal}
        className="bg-transparent focus:bg-transparent active:bg-transparent flex gap-x-2 justify-center items-center"
      >
        <Icon className="material-icons-outlined" icon="email" size={20} />
        Send To Email
      </Button>
      <Label className="text-gray-500 text-sm mb-8">
        Don&apos;t share any confidential information
      </Label>
      <SeedPhraseModal
        openSeedPhraseModal={openSeedPhraseModal}
        toggleSeedPhraseModal={toggleSeedPhraseModal}
      />
      <SendEmailModal
        openSendEmailModal={openSendEmailModal}
        toggleSendEmailModal={toggleSendEmailModal}
      />
    </DigitalIdContainer>
  );
}
