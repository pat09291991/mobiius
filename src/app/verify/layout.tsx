"use client";

import { useEffect, useState } from "react";

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    handleResize(); // Check the initial screen size
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
  }, []);
  return (
    <div className="text-white text-center min-h-screen overflow-x-hidden overflow-y-auto flex flex-col">
      <div className="flex flex-col gap-8 justify-end max-w-4xl mx-auto grow w-full">
        {isMobile ? (
          <>{children}</>
        ) : (
          <div className="absolute top-1/2 mx-auto text-3xl">
            This feature is not supported on your current device.
          </div>
        )}
      </div>
    </div>
  );
}
