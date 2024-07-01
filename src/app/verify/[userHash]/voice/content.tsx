"use client";

import ButtonLink from "@/components/button-link";
import Container from "@/components/container";
import PageDescription from "@/components/page-description";
import PageHeader from "@/components/page-header";
import Progress from "@/components/progress";
import { useUser } from "@/lib/useUser";
import { useEffect, useState } from "react";
import AudioRecorder from "./audio-recorder";

export default function VerifyVoicePageContent({
  userHash,
}: {
  userHash: string;
}) {
  const userPassport = useUser(userHash);
  const [isAudioSaved, setIsAudioSaved] = useState(false);
  const [audio, setAudio] = useState<Blob | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const canGoNext = isAudioSaved;

  const uploadVoice = async () => {
    if (!userPassport?.id) {
      return;
    }

    if (!audio) return;

    // Convert blob to file
    const file = new File([audio], "voice", { type: "audio/wav" });

    const formData = new FormData();
    formData.append("userId", String(userPassport.id));
    formData.append("voice", file);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/voice-recordings`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (data.statusCode == 500) {
      setErrorMessage("Something went wrong. Please try again.");
      return;
    }

    if (data.statusCode == 400) {
      setErrorMessage(data.message);
      return;
    }

    setIsAudioSaved(true);
  };

  useEffect(() => {
    if (!userPassport) {
      return;
    }

    if (userPassport.voice_recordings.length > 0) {
      setIsAudioSaved(true);
    }
  }, [userPassport]);

  return (
    <Container className="py-8 px-4">
      <Progress current={4} total={5} />
      <div className="flex flex-col gap-2 max-w-md">
        <PageHeader>Voice Recognition</PageHeader>
        <PageDescription className="text-gray-500">
          Let&apos;s verify your identity with a quick voice recording. This
          helps us confirm it&apos;s really you.
        </PageDescription>
      </div>
      <div className="flex flex-col gap-4 grow">
        {isAudioSaved && (
          <span>
            Your voice has been saved. You can proceed to the next step.
          </span>
        )}

        <AudioRecorder
          onRecord={(recordedAudio: Blob | null) => {
            setAudio(recordedAudio);
          }}
          onError={(err: string) => setErrorMessage(err)}
        />

        {errorMessage && (
          <p className="p-4 bg-red-700 rounded-xl">{errorMessage}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <ButtonLink
          className="text-white"
          href={`/verify/${userHash}/id`}
          variant="link"
        >
          Previous
        </ButtonLink>
        <ButtonLink
          className="bg-button-gradient"
          href={`/verify/${userHash}/result`}
        >
          Next
        </ButtonLink>
      </div>
    </Container>
  );
}
