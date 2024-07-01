"use client";

import ButtonLink from "@/components/button-link";
import PageDescription from "@/components/page-description";
import PageHeader from "@/components/page-header";
import Progress from "@/components/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/useUser";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { useRouter } from "next/navigation";

export default function VerifyLocationPageContent({
  userHash,
}: {
  userHash: string;
}) {
  const router = useRouter();
  const userPassport = useUser(userHash);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [hasError, setHasError] = useState(false);
  const canGoNext = position != null && !hasError && isSubmitted;

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);

    setIsSubmitted(false);
  };

  const success = (position: GeolocationPosition) => {
    setPosition(position);
  };

  const error = () => {
    setHasError(true);
  };

  const handleSave = async () => {
    setIsSubmitted(true);

    const longitude = position?.coords.longitude;
    const latitude = position?.coords.latitude;

    if (!longitude || !latitude) {
      setHasError(true);
      return;
    }

    // await fetch(`${process.env.NEXT_PUBLIC_API}/users/${userPassport?.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     latitude,
    //     longitude,
    //   }),
    // });
  };

  // If location already exists, add it to the page
  useEffect(() => {
    if (position) {
      return;
    }

    if (!userPassport) {
      return;
    }

    if (userPassport.longitude && userPassport.latitude) {
      setPosition({
        coords: {
          latitude: userPassport.latitude,
          longitude: userPassport.longitude,
          accuracy: 0,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: 0,
      });
      setIsSubmitted(true);
    }
  }, [position, userPassport]);

  return (
    <div className="flex flex-col h-screen">
      <div className="p-8">
        <Progress current={1} total={5} />
      </div>
      <div className="flex flex-col gap-10 flex-grow items-center">
        <div
          className={`flex flex-col gap-2 max-w-md p-4 ${position && "hidden"}`}
        >
          <PageHeader>Location</PageHeader>
          <PageDescription>
            Sharing your location helps us verify you quickly for KYC.
          </PageDescription>
        </div>
        <div className="w-full h-full">
          {position && (
            <div className="flex flex-col gap-2 h-full relative">
              <div className="h-full w-full relative">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                    position.coords.longitude - 0.001
                  }%2C${position.coords.latitude - 0.001}%2C${
                    position.coords.longitude + 0.001
                  }%2C${position.coords.latitude + 0.001}&amp;layer=mapnik&amp`}
                  width="100%"
                  height="100%"
                ></iframe>
                <div className="w-full h-full top-0 absolute"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-full bg-[#5251DA] w-24 h-24 flex justify-center items-center opacity-60">
                    <Icon
                      className="material-icons"
                      icon="location_on"
                      size={40}
                      color="white"
                    />
                  </div>
                </div>
              </div>
              <div className="z-1 absolute bottom-0 w-full rounded-lg p-6">
                <div className="bg-[#121212] rounded-lg p-6 flex flex-col gap-5">
                  <div className="flex">
                    <Icon
                      className="material-icons"
                      icon="location_on"
                      size={40}
                      color="#5251DA"
                    />
                    <div className="flex flex-col items-start">
                      <div>[SAMPLE ADDRESS]</div>
                      <div className="text-sm text-zinc-500 font-bold">
                        {position.coords.latitude}, {position.coords.longitude}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-[#614AD9]"
                    onClick={handleSave}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? "Saved" : "Save"}
                  </Button>
                </div>
              </div>
            </div>
          )}
          {!position && (
            <div className="flex flex-col justify-center items-center h-72 gap-10 w-full">
              <div className="relative h-full w-full">
                <Image alt="Pin" src="/svg/pin-image.svg" fill />
              </div>
              <Button
                className="bg-button-gradient w-2/3 md:w-1/3"
                onClick={fetchLocation}
              >
                Allow location access
              </Button>
            </div>
          )}
          {hasError && (
            <div className="flex flex-col gap-4">
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  We were unable to get your location. Please try again.
                </AlertDescription>
              </Alert>
              <Button onClick={fetchLocation}>Try again</Button>
            </div>
          )}
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2 w-full mt-auto p-8">
        <ButtonLink
          className="text-white"
          href={`/verify/${userHash}/welcome`}
          variant="link"
        >
          Previous
        </ButtonLink>
        <ButtonLink
          className="bg-button-gradient"
          href={`/verify/${userHash}/about`}
          disabled={!canGoNext}
        >
          Next
        </ButtonLink>
      </div>
    </div>
  );
}
