import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Progress from "./progress";
import ButtonLink from "./button-link";
import { Button } from "./ui/button";

export default function CameraBoxConstant({
  id,
  className,
  setImage,
  captureCallback,
  facingMode,
  shape,
  userHash,
  message,
}: {
  id?: string;
  className?: string;
  setImage: (imageSrc: string) => void;
  captureCallback?: () => void;
  facingMode: "user" | "environment";
  shape: "square" | "card";
  userHash: string;
  message: string;
}) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [screenshotSrc, setScreenshotSrc] = useState("");
  const webcamRef = useRef(null);

  const width = 1280;
  const height = shape === "square" ? 1280 : 810.13;

  const videoConstraints = {
    width: 1920, // Higher resolution width
    height: 1080, // Higher resolution height
    facingMode: facingMode,
  };

  const phase1 = !isCameraOpen && !screenshotSrc;
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

    // setIsCameraOpen(false);
    setScreenshotSrc(imageSrc);

    if (captureCallback) {
      captureCallback();
    }
  }, [captureCallback]);

  useEffect(() => {
    if (screenshotSrc) {
      setImage(screenshotSrc);
    }
  }, [screenshotSrc, setImage]);

  // capture every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (isCameraOpen) {
        capture();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isCameraOpen, capture]);

  return (
    <div id={id} className="flex flex-col gap-4 w-full">
      <div
        className={`w-full flex justify-center items-center cursor-pointer overflow-hidden ${className}`}
      >
        {phase1 && (
          <div className="w-full h-screen flex flex-col p-8 gap-5">
            <div>
              <Progress current={3} total={5} />
            </div>
            <div className="flex-grow flex flex-col gap-4 items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="text-white text-xl">Selfie Verification</div>
                <div className="text-neutral-50 opacity-70 text-sm">
                  take a quick selfie to verify your identity. Well keep your
                  data safe and secure.
                </div>
              </div>
              <div className="bg-[url('/svg/selfie-design.svg')] bg-no-repeat bg-contain w-full h-1/2 bg-center"></div>
              <Button
                className="bg-button-gradient rounded-lg w-4/5 md:w-1/2"
                onClick={openCamera}
              >
                Start
              </Button>
            </div>
            <div>
              <ButtonLink
                className="text-white"
                href={`/verify/${userHash}/about`}
                variant="link"
              >
                Previous
              </ButtonLink>
            </div>
          </div>
        )}
        {isCameraOpen && (
          <>
            <Webcam
              className="w-full h-full object-cover transform scale-x-[-1] relative"
              ref={webcamRef}
              screenshotQuality={2}
              videoConstraints={videoConstraints}
            />
            <svg className="absolute top-0 h-screen w-screen">
              <defs>
                <mask id="mask">
                  <rect className="h-screen w-screen opacity-50" fill="white" />
                  <ellipse
                    className="border"
                    cx="50%"
                    cy="35%"
                    rx="150"
                    ry="200"
                    fill="black"
                  />
                </mask>
              </defs>
              <ellipse
                cx="50%"
                cy="35%"
                rx="148"
                ry="198"
                fill="none"
                stroke={
                  !message
                    ? "violet"
                    : message == "Face detected"
                    ? "green"
                    : "red"
                }
                stroke-width="5"
                stroke-dasharray={!message ? "8 10" : "0"}
              />
              <rect className="h-full w-full" mask="url(#mask)" />
            </svg>

            <div className="absolute w-full h-screen flex flex-col items-center justify-end gap-10 p-6">
              <div className="flex flex-col items-center gap-3">
                <p className="text-[25px] font-bold">
                  {!message
                    ? "Take a photo of yourself"
                    : message == "Face detected"
                    ? "Success!"
                    : "We couldn't see your face clearly."}
                </p>
                <p className="text-sm ">
                  {!message
                    ? "Keep your device steady for clear and accurate verification. Proper positioning ensures swift and secure identityconfirmation."
                    : message == "Face detected"
                    ? ""
                    : "Please take a new selfie in brighter light and hold the camera steady."}
                </p>
              </div>
              <div className="rounded-full h-24 w-24 bg-[#D9D9D9] opacity-70 flex items-center justify-center">
                <div className="rounded-full h-12 w-12 bg-white"></div>
              </div>
            </div>
          </>
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
    </div>
  );
}
