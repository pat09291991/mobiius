"use client";

import { Icon } from "@/components/ui/Icon";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

export const CAMERA_WIDTH = 1280;
export const CAMERA_HEIGHT = 850.13;

const TakePhoto = ({
  onCheck,
  onCancel,
}: {
  onCheck: (image: string) => void;
  onCancel: () => void;
}) => {
  const [screenshotSrc, setScreenshotSrc] = useState("");
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: CAMERA_WIDTH,
    height: CAMERA_HEIGHT,
    facingMode: "environment",
    aspectRatio: {
      ideal: 1.58,
    },
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) {
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) setScreenshotSrc(imageSrc);
  }, []);

  const retake = () => {
    setScreenshotSrc("");
  };

  return (
    <>
      <Icon
        className="material-icons absolute top-5 left-5"
        icon="arrow_back"
        size={30}
        onClick={onCancel}
      />
      <div className="flex flex-col gap-40 h-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-4">
          {screenshotSrc ? (
            <Image
              className="h-full w-auto object-contain"
              src={screenshotSrc}
              height={850.13}
              width={1280}
              alt="image"
            />
          ) : (
            <div className="flex items-center justify-center bg-[url('/camera-border.png')] h-52 w-80  bg-no-repeat bg-contain px-3">
              <Webcam
                ref={webcamRef}
                className="h-auto w-auto"
                screenshotQuality={1}
                videoConstraints={videoConstraints}
              />
            </div>
          )}
          <Label className="text-xl">Take a Takephoto of your ID</Label>
          <Label className="text-normal">
            Make sure there&apos;s enough light to see all the details on your
            ID clearly.
          </Label>
        </div>
        {screenshotSrc ? (
          <div className="flex gap-28 items-center">
            <Icon
              className="material-icons text-red-800"
              icon="clear"
              size={70}
              onClick={retake}
            />
            <Icon
              className="material-icons text-lime-900"
              icon="check"
              size={70}
              onClick={() => onCheck(screenshotSrc)}
            />
          </div>
        ) : (
          <Icon
            className="material-icons text-[#611DFC]"
            icon="camera"
            size={70}
            onClick={capture}
          />
        )}
      </div>
    </>
  );
};

export default TakePhoto;
