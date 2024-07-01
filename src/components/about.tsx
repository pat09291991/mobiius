"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { goingTop } from "./keyframes";
import Image from "next/image";

const About = () => {
  const [containerRef, containerInView] = useInView({
    triggerOnce: false, // Trigger animation once when the container enters the viewport
    rootMargin: "-300px 0px", // Adjust the offset as needed
  });
  const imageAnimate = containerInView
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 100 };

  return (
    <div
      className="flex flex-col gap-40 md:gap-0 md:flex-row px-3 xl:px-40 justify-between items-center h-auto xl:h-full my-40 w-full relative overflow-x-clip"
      ref={containerRef}
    >
      <div className="w-1/2 h-1/2 rounded-1/2 sm:w-1/3 sm:h-1/3 sm:rounded-1/3 md:w-1/2 md:h-1/2 md:rounded-1/2 lg:w-[600px] lg:h-[600px] lg:rounded-[600px] xl:w-[800px] xl:h-[800px] xl:rounded-[800px] absolute bottom-0 right-0 transform translate-x-[50%] translate-y-[40%] rounded-full bg-glow filter blur-[200px] z-[-1]" />
      <div className="text-start w-full me-2 px-8 xl:px-2 xl:px-28">
        <div className="flex-col justify-start xl:items-start gap-6 flex">
          <motion.h1
            initial="hidden"
            animate={imageAnimate}
            variants={goingTop}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-4xl font-bold leading-relaxed text-center xl:text-left"
          >
            What is Mobiius
          </motion.h1>
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="text-gray-400 text-4 font-normal capitalize leading-7">
              <ul className="flex flex-col gap-3">
                <motion.li
                  initial="hidden"
                  animate={imageAnimate}
                  variants={goingTop}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="list-none relative flex"
                >
                  <Image
                    src={"/svg/ellipsis.svg"}
                    height={10}
                    width={10}
                    alt="ellipsis"
                    className="absolute top-2"
                  />
                  <span className="ml-6">
                    A KYC platform is a software solution that helps businesses
                    comply with these KYC regulations.
                  </span>
                </motion.li>
                <motion.li
                  initial="hidden"
                  animate={imageAnimate}
                  variants={goingTop}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  className="list-none relative flex"
                >
                  <Image
                    src={"/svg/ellipsis.svg"}
                    height={10}
                    width={10}
                    alt="ellipsis"
                    className="absolute top-2"
                  />
                  <span className="ml-6">
                    In today&apos;s digital world, where online transactions are
                    common, businesses need a way to verify their
                    customers&apos; identities. This is where KYC platforms come
                    in. KYC stands for &quot;Know Your Customer,&quot; and
                    it&apos;s a set of regulations that financial institutions
                    and other organizations must follow to prevent illegal
                    activities like money laundering and identity theft.
                  </span>
                </motion.li>
              </ul>
            </div>
          </div>
          <motion.button
            initial="hidden"
            animate={imageAnimate}
            variants={goingTop}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="cursor-pointer border px-4 py-2 rounded-lg w-36"
          >
            Learn More
          </motion.button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={imageAnimate}
          variants={goingTop}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src="/phone1.png"
            className="relative top-[8rem] left-20 z-30"
            width={250.23}
            height={507.15}
            alt="phone1"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={imageAnimate}
          variants={goingTop}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/phone2.png"
            className="relative z-20"
            width={250.23}
            height={507.15}
            alt="phone2"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={imageAnimate}
          variants={goingTop}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/phone3.png"
            className="relative left-[-4.8rem] top-[-6rem] z-10"
            width={250.23}
            height={507.15}
            alt="phone3"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
