"use client";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-50 left-0 right-0 h-1 z-20 bg-[#611DFC] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
