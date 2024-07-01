"use client";

import CameraBoxConstant from "@/components/camera-box-constant";
import Container from "@/components/container";
import ContentCenter from "@/components/content-center";
import { useUser } from "@/lib/useUser";
import { dataURLtoFile } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import SuccessPage from "./successPage";

export default function SelfiePageContent({ userHash }: { userHash: string }) {
  const userPassport = useUser(userHash);
  const [screenshotSrc, setScreenshotSrc] = useState("");
  const [message, setMessage] = useState("");
  const [orientation, setOrientation] = useState<
    "UP" | "DOWN" | "LEFT" | "RIGHT"
  >("UP");
  const [isFaceScanComplete, setIsFaceScanComplete] = useState(false);

  //TODO: Uncomment for skip feature
  // const [enableSkip, setEnableSkip] = useState(false);

  const uploadImage = useCallback(async () => {
    // if (!userPassport?.id) {
    //   return;
    // }
    if (!screenshotSrc) {
      return;
    }

    setMessage("");

    const formData = new FormData();
    // formData.append("userId", String(userPassport.id));
    formData.append("orientation", orientation);
    formData.append("face", dataURLtoFile(screenshotSrc, "selfie") ?? "");

    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API}/biometrics/detect-face`,
    //   {
    //     method: "POST",
    //     body: formData,
    //   },
    // );

    // const data = await response.json();

    // if (data.statusCode == 400) {
    //   setMessage(data.message);
    //   return;
    // }

    // if (data.statusCode == 500) {
    //   setMessage("Something went wrong. Please try again.");
    //   return;
    // }

    setTimeout(() => {
      setMessage("Face detected");
    }, 2000);
    localStorage.setItem(`selfie-${orientation}`, screenshotSrc);
    setTimeout(() => {
      if (orientation == "UP") {
        setOrientation("DOWN");
        setMessage("");
      }
      if (orientation == "DOWN") {
        setMessage("");
        setOrientation("LEFT");
      }
      if (orientation == "LEFT") {
        setMessage("");
        setOrientation("RIGHT");
      }
      if (orientation == "RIGHT") {
        setIsFaceScanComplete(true);
        return;
      }
    }, 4000);

    // if (data.orientation == "UP") {
    //   setOrientation("DOWN");
    // }
    // if (data.orientation == "DOWN") {
    //   setOrientation("LEFT");
    // }
    // if (data.orientation == "LEFT") {
    //   setOrientation("RIGHT");
    // }
    // if (data.orientation == "RIGHT") {
    //   setIsFaceScanComplete(true);
    //   return;
    // }
  }, [orientation, screenshotSrc, userPassport]);

  // TODO: Show uploaded selfies if they exist
  useEffect(() => {
    if (userPassport == null) {
      return;
    }

    userPassport.biometrics.forEach((biometric) => {
      if (biometric.orientation == "UP") {
        setOrientation("DOWN");
      }
      if (biometric.orientation == "DOWN") {
        setOrientation("LEFT");
      }
      if (biometric.orientation == "LEFT") {
        setOrientation("RIGHT");
      }
      if (biometric.orientation == "RIGHT") {
        setIsFaceScanComplete(true);
        return;
      }
    });
  }, [userPassport]);

  useEffect(() => {
    if (screenshotSrc) {
      uploadImage();
    }
  }, [screenshotSrc, uploadImage]);

  //TODO: Uncomment for skip feature
  // Allow skip after 30 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setEnableSkip(true);
  //   }, 30000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Container>
      <ContentCenter>
        {isFaceScanComplete ? (
          <SuccessPage
            userHash={userHash}
            onRetake={() => {
              setMessage("");
              setOrientation("UP");
              setIsFaceScanComplete(false);
            }}
          />
        ) : (
          <>
            <CameraBoxConstant
              message={message}
              userHash={userHash}
              setImage={setScreenshotSrc}
              facingMode="user"
              shape="square"
              className="h-screen w-full"
            />
          </>
        )}
      </ContentCenter>
    </Container>
  );
}
