"use client";

import { useEffect, useState } from "react";

export default function Processing({
  onProcess,
}: {
  onProcess: (value: boolean) => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        onProcess(false);
        clearInterval(interval);
      }
    }, 50); // Adjust the interval for smoother or faster animation

    return () => clearInterval(interval);
  }, [progress]);

  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex items-center justify-center h-screen">
        <svg className="w-96 h-96" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="stroke-current stroke-white"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className="stroke-current text-[#611DFC]"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            transform="rotate(-90 50 50)"
          />
          {/* Optional: Progress text */}
          <text
            className="font-bold"
            fill="white"
            x="50%"
            y="40%"
            dy=".3em"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            <tspan x="50%" dy="0" className="text-[0.4rem]">
              Processing Your Data
            </tspan>
            <tspan x="50%" dy="1.6em" className="text-[0.3rem] font-bold">
              Please wait while we securely
            </tspan>
            <tspan x="50%" dy="1.2em" className="text-[0.3rem] font-bold">
              process your information
            </tspan>
            <tspan x="50%" dy="1.2em" className="text-[0.3rem] font-bold">
              to complete the verification.
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}
