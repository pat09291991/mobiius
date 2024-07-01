"use client";
import { useEffect } from "react";

const useLockBodyScroll = (shouldLock: boolean) => {
  useEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount if shouldLock is true
    if (shouldLock) {
      document.body.style.overflow = "hidden";
    }
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [shouldLock]); // Only re-run if shouldLock value changes
};

export default useLockBodyScroll;
