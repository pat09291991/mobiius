"use client";

import { Icon } from "@/components/ui/Icon";
import Image from "next/image";
import { useEffect, useState } from "react";
import { VoiceVisualizer, useVoiceVisualizer } from "react-voice-visualizer";

export default function DisplayIds({
  label,
  type,
  file,
}: {
  label: string;
  type: string;
  file?: string | undefined | null;
}) {
  const recorderControls = useVoiceVisualizer();
  const { setPreloadedAudioBlob, isProcessingRecordedAudio } = recorderControls;
  const [error, setError] = useState("");

  const updateAudio = (audioBlob: Blob) => setPreloadedAudioBlob(audioBlob);

  useEffect(() => {
    if (isProcessingRecordedAudio) return;
    const preloadAudio = async () => {
      try {
        const response = await fetch("/recorded_audio.weba");
        const arrayBuffer = await response.arrayBuffer();
        const audioBlob = new Blob([arrayBuffer], { type: "audio/mp3" });
        updateAudio(audioBlob);
      } catch (error) {
        setError("Error loading audio file: " + error);
      }
    };

    preloadAudio();
  }, []);

  return (
    <div className="flex justify-start flex-col gap-2 p-4  bg-[#222222] w-full">
      <div className="flex gap-x-1">
        <Icon className="material-icons-outlined" icon="badge" size={20} />
        <span>{label}</span>
      </div>
      {type === "image" && (
        <Image
          src={file ?? "/scenario8.jpg"}
          className="w-full h-auto rounded-lg object-contain"
          alt="Selfie"
          width={128}
          height={128}
        />
      )}

      {type === "audio" && !error && (
        <VoiceVisualizer
          controls={recorderControls}
          controlButtonsClassName="hidden"
          secondaryBarColor={"#611DFC"}
          barWidth={10}
        />
      )}
    </div>
  );
}
