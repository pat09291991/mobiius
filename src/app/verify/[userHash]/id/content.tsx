"use client";

import ButtonLink from "@/components/button-link";
import Container from "@/components/container";
import ContentCenter from "@/components/content-center";
import PageDescription from "@/components/page-description";
import PageHeader from "@/components/page-header";
import Progress from "@/components/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { useUser } from "@/lib/useUser";
import { dataURLtoFile } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UploadImage } from "@/components/upload-image";
import TakePhoto, { CAMERA_HEIGHT, CAMERA_WIDTH } from "./take-photo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function IdPageContent({ userHash }: { userHash: string }) {
  const userPassport = useUser(userHash);
  const [openCamera, setOpenCamera] = useState(false);
  const [imageType, setImageType] = useState("");
  const [frontIdSrc, setFrontIdSrc] = useState("");
  const [backIdSrc, setBackIdSrc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const canGoNext = uploadSuccessful;
  const router = useRouter();

  const uploadImage = async () => {
    // if (!userPassport?.id) {
    //   return;
    // }

    setIsUploading(true);
    setErrorMessage("");

    const formData = new FormData();
    // formData.append("userId", String(userPassport.id));
    formData.append("idFront", dataURLtoFile(frontIdSrc, "id-front") ?? "");
    formData.append("idBack", dataURLtoFile(backIdSrc, "id-back") ?? "");

    localStorage.setItem("idFront", frontIdSrc);
    localStorage.setItem("idBack", frontIdSrc);

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API}/documents`, {
    //   method: "POST",
    //   body: formData,
    // });

    // const data = await response.json();

    // if (data.statusCode == 400) {
    //   setErrorMessage(data.message);
    //   return;
    // }

    // if (data.statusCode == 500) {
    //   setErrorMessage(
    //     "An error occurred while uploading your ID. Please try again.",
    //   );
    //   return;
    // }

    setIsUploading(false);
    setUploadSuccessful(true);
    router.push(`/verify/${userHash}/voice`);
  };

  useEffect(() => {
    if (!userPassport) {
      return;
    }

    if (userPassport.documents.length > 0) {
      setUploadSuccessful(true);
    }
  }, [userPassport]);

  const handleSaveImage = (image: string) => {
    if (imageType == "front") {
      setFrontIdSrc(image);
    } else {
      setBackIdSrc(image);
    }
    setOpenCamera(false);
  };

  if (openCamera) {
    return (
      <TakePhoto
        onCheck={handleSaveImage}
        onCancel={() => setOpenCamera(false)}
      />
    );
  }

  return (
    <Container className="py-8 px-2">
      <Progress current={3} total={5} />
      <div className="flex flex-col gap-2 max-w-md">
        <PageHeader className="font-bold">
          Upload your identification
        </PageHeader>
        <PageDescription className="px-6">
          We take security seriously. To verify your identity quickly, securely
          upload a photo of your ID.
        </PageDescription>
      </div>
      <ContentCenter>
        {errorMessage && (
          <Alert>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        <div className="flex flex-col items-start gap-1">
          <Label className="text-xl" htmlFor="frontId">
            Front
          </Label>
          {frontIdSrc ? (
            <Image
              className="h-full w-full object-contain rounded-xl"
              src={frontIdSrc}
              height={CAMERA_HEIGHT}
              width={CAMERA_WIDTH}
              alt="image"
              onClick={() => {
                setOpenCamera(true);
                setImageType("front");
              }}
            />
          ) : (
            <UploadImage
              onClick={() => {
                setOpenCamera(true);
                setImageType("front");
              }}
            />
          )}
          <Label className="text-xl" htmlFor="frontId">
            Back
          </Label>
          {backIdSrc ? (
            <Image
              className="h-full w-auto object-contain rounded-xl"
              src={backIdSrc}
              height={CAMERA_HEIGHT}
              width={CAMERA_WIDTH}
              alt="image"
              onClick={() => {
                setOpenCamera(true);
                setImageType("back");
              }}
            />
          ) : (
            <UploadImage
              onClick={() => {
                setOpenCamera(true);
                setImageType("back");
              }}
            />
          )}
        </div>

        {uploadSuccessful && (
          <div className="bg-green-50 text-green-600 p-4 rounded">
            ID Matched! You can now proceed to the next step.
          </div>
        )}
      </ContentCenter>
      <div className="grid grid-cols-2 gap-4 w-full px-4">
        <ButtonLink
          className="text-white"
          href={`/verify/${userHash}/selfie`}
          variant="link"
        >
          Previous
        </ButtonLink>
        <Button
          className="bg-button-gradient"
          disabled={isUploading || !backIdSrc || !frontIdSrc}
          onClick={() => {
            // router.push(`/verify/${userHash}/voice`);
            uploadImage();
          }}
        >
          Next
        </Button>
      </div>
    </Container>
  );
}
