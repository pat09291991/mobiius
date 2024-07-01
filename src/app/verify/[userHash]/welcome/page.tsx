"use client";
import ButtonLink from "@/components/button-link";
import Container from "@/components/container";
import PageDescription from "@/components/page-description";
import ContentCenter from "@/components/content-center";
import React, { useState, useEffect } from "react";
import { Icon } from "@/components/ui/Icon";

export default function VerifyWelcomePage({
  params,
}: {
  params: { userHash: string };
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    handleResize(); // Check the initial screen size
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
  }, []);

  useEffect(() => {
    /*
      This handles the fade in and fade out 
      effect for the loading page.    
    */
    const timer = setTimeout(() => {
      setIsFading(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <ContentCenter>
        {isLoading ? (
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              isFading ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl uppercase font-bold">Mobiius</h1>
          </div>
        ) : (
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              isLoading ? "opacity-0" : "opacity-100"
            } flex flex-col items-center justify-center min-h-screen py-2`}
          >
            <div
              className={`transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl uppercase font-bold">Mobiius</h1>
                <div className="max-w-sm">
                  <PageDescription>
                    Mobiius is your one stop shop <br />
                    for getting a true Digital Passport here <br /> in The
                    Philippines.
                  </PageDescription>
                </div>
                <div>
                  <p>
                    Link owner:{" "}
                    <span className="text-violet-700 font-semibold">
                      {"[USEREMAIL]"}
                    </span>
                  </p>
                </div>
                <div className="flex w-full justify-center items-center">
                  <ButtonLink
                    href={`/verify/${params.userHash}/location`}
                    className="max-w-sm w-full bg-button-gradient py-6"
                  >
                    <div className="flex gap-2 items-center">
                      <Icon
                        className="material-icons"
                        icon="portrait"
                        size={22}
                        color="white"
                      />
                      <p>Start Verification</p>
                    </div>
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </ContentCenter>
    </Container>
  );
}
