"use client";

import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { SpeechRecognitionEvent } from "@/lib/types";
import { useEffect, useState } from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";

type AudioRecorderProps = {
  onRecord: (blob: Blob | null) => void;
  onError: (err: string) => void;
};

interface SpeechRecognitionErrorEvent {
  readonly error: string;
  readonly message: string;
}

interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
}

// Extend the Window interface to include webkitSpeechRecognition
interface Window {
  webkitSpeechRecognition: {
    new (): SpeechRecognition;
  };
}

export default function AudioRecorder({
  onRecord,
  onError,
}: AudioRecorderProps) {
  const recorderControls = useVoiceVisualizer();
  const {
    webkitSpeechRecognition,
  }: { webkitSpeechRecognition: new () => SpeechRecognition } = window as any;

  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const { recordedBlob, error, startRecording, stopRecording, clearCanvas } =
    recorderControls;

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "Your browser does not support speech recognition. Please use Chrome or another supported browser.",
      );
    }
  }, []);

  useEffect(() => {
    if (!isVerified) return;
    if (!recordedBlob) return;
    if (error) {
      onError("Recording error! Please refresh the page");
    }
  }, [onError, recordedBlob, error, isVerified]);

  const startVoiceRecording = () => {
    onRecord(null);
    onError("");
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsRecording(true);
      setTranscript("");
      setIsVerified(false);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const speechResult = event.results[0][0].transcript.toLowerCase();
      setTranscript(speechResult);
      if (speechResult === "i am verifying my identity.") {
        if (recordedBlob) onRecord(recordedBlob);
        setIsVerified(true);
        clearCanvas();
      }
      stopRecording();
      setIsRecording(false);
    };

    recognition.onerror = () => {
      setIsRecording(false);
      clearCanvas();
    };

    recognition.onend = () => {
      setIsRecording(false);
      clearCanvas();
    };

    recognition.start();
  };

  return (
    <>
      <VoiceVisualizer
        controls={recorderControls}
        secondaryBarColor={"#611DFC"}
        barWidth={10}
        isControlPanelShown={false}
        controlButtonsClassName="hidden"
      />
      {!isVerified && (
        <div className="flex gap-2 justify-center items-center w-full">
          {!isRecording ? (
            <Button
              onClick={() => {
                startRecording();
                startVoiceRecording();
              }}
              className="rounded-full py-10 bg-button-gradient"
            >
              <Icon className="material-icons-outlined" icon="mic" size={50} />
            </Button>
          ) : (
            <Button
              className="bg-red-500 py-10 rounded-full active:bg-red-500 focus:bg-red-500"
              onClick={() => {
                stopRecording();
                setIsRecording(false);
              }}
            >
              <Icon className="material-icons" icon="stop" size={50} />
            </Button>
          )}
        </div>
      )}
      {isVerified && (
        <div className="text-green-500 text-3xl flex gap-x-2 items-center justify-center">
          <span>Verified!</span>
          <Icon size={30} className="material-icons" icon="verified" />
        </div>
      )}
      {!isVerified && transcript && (
        <p className="text-red-500 text-2xl">
          Voice recognition failed, please try again!
        </p>
      )}
      {!isVerified && (
        <>
          <span className="text-sm font-bold text-gray-500">
            Simply repeat the provided phrase:
          </span>
          <span className="text-4xl font-semibold">
            <span>“</span>
            <span className={`${isVerified ? "text-[#611DFC]" : ""}`}>
              I am verifying my identity
            </span>
            <span>“</span>
          </span>
        </>
      )}
    </>
  );
}
