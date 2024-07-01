import {
  CAMERA_HEIGHT,
  CAMERA_WIDTH,
} from "@/app/verify/[userHash]/id/take-photo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function CameraBox({
  id,
  className,
  setImage,
  captureCallback,
  facingMode,
  shape,
  buttons,
}: {
  id?: string;
  className?: string;
  setImage: (imageSrc: string) => void;
  captureCallback?: () => void;
  facingMode: "user" | "environment";
  shape: "square" | "card";
  buttons?: React.ReactNode;
}) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [screenshotSrc, setScreenshotSrc] = useState("");
  const webcamRef = useRef(null);

  const width = CAMERA_WIDTH;
  const height = shape === "square" ? CAMERA_WIDTH : CAMERA_HEIGHT;

  const videoConstraints = {
    width: width,
    height: shape === "square" ? width : height,
    facingMode: facingMode,
    aspectRatio: {
      ideal: shape === "square" ? 1 : 1.58,
    },
  };

  const phase1 = !isCameraOpen && !screenshotSrc;
  const phase2 = isCameraOpen && !screenshotSrc;
  const phase3 = !isCameraOpen && !!screenshotSrc;

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) {
      return;
    }

    // @ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();

    setIsCameraOpen(false);
    setScreenshotSrc(imageSrc);

    if (captureCallback) {
      captureCallback();
    }
  }, [captureCallback]);

  const retake = () => {
    setScreenshotSrc("");
    setIsCameraOpen(true);
  };

  useEffect(() => {
    if (screenshotSrc) {
      setImage(screenshotSrc);
    }
  }, [screenshotSrc, setImage]);

  return (
    <div id={id} className="flex flex-col gap-4">
      <div
        className={`border rounded-xl w-full flex justify-center items-center border-dashed cursor-pointer overflow-hidden ${className}`}
        onClick={openCamera}
      >
        {phase1 && (
          <div className="flex flex-col gap-3 items-center justify-center h-full">
            {phase1 && <span className="p-32">Open camera</span>}
          </div>
        )}
        {phase2 && (
          <Webcam
            ref={webcamRef}
            className="h-full w-auto"
            screenshotQuality={1}
            videoConstraints={videoConstraints}
          />
        )}
        {phase3 && (
          <Image
            className="h-full w-auto object-contain"
            src={screenshotSrc}
            width={width}
            // TODO: Check if the values are correct
            height={shape === "square" ? width : height}
            alt="Screenshot of the camera"
          />
        )}
      </div>
      <div className="flex gap-4 justify-center">
        {!phase1 && (
          <div className="flex gap-4 justify-center">
            <Button onClick={retake} disabled={phase2}>
              Retake
            </Button>
            <Button onClick={capture} disabled={phase3}>
              Capture
            </Button>
          </div>
        )}
        {buttons}
      </div>
    </div>
  );
}
