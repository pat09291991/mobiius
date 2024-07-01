"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { goingDown, goingTop } from "./keyframes";
import { MouseEvent, useRef } from "react";
import Image from "next/image";

const Scenario = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [containerRef, containerInView] = useInView({
    triggerOnce: false,
    rootMargin: "-300px 0px",
  });
  const imageAnimate = containerInView
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 50 };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (
      scrollContainerRef &&
      scrollContainerRef.current &&
      event.button === 0
    ) {
      const startX = event.clientX;
      const scrollLeft = scrollContainerRef.current.scrollLeft;

      const handleMouseMove = (event: globalThis.MouseEvent) => {
        const x = event.clientX;
        const walk = x - startX;

        if (!scrollContainerRef.current) {
          return;
        }

        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current && event.touches.length === 1) {
      const touch = event.touches[0];
      const startX = touch.clientX;
      const scrollLeft = scrollContainerRef.current.scrollLeft;

      const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length === 1) {
          const touch = event.touches[0];
          const x = touch.clientX;
          const walk = x - startX;

          if (!scrollContainerRef.current) {
            return;
          }

          scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }
  };

  return (
    <div
      className="flex flex-col gap-10 justify-center items-center my-5 w-full"
      ref={containerRef}
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={imageAnimate}
        variants={goingTop}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="text-center text-white text-3xl xl:text-4xl xl:mt-0 font-bold"
      >
        KYC needed in almost everything
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={imageAnimate}
        variants={goingDown}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className={`relative flex flex-nowrap gap-x-3 overflow-x-hidden w-full max-h-96 h-96 scroll-wrapper hover:overflow-x-scroll lg:hover:overflow-x-hidden stop`}
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className={
            containerInView
              ? "[&_img]:max-w-none animate-infinite-scroll flex gap-x-3 w-auto"
              : ""
          }
        >
          <ScenarioImages />
        </div>
        <div
          className={
            containerInView
              ? "[&_img]:max-w-none animate-infinite-scroll flex gap-x-3 w-auto"
              : ""
          }
        >
          <ScenarioImages />
        </div>
      </motion.div>
    </div>
  );
};

export default Scenario;

const ScenarioImages = () => {
  return (
    <>
      <div className="relative w-64 group">
        <Image
          src="/scenario1.jpg"
          className="rounded-lg w-full h-full group-hover:opacity-100 transition-opacity duration-300 object-contain"
          height={457}
          width={334}
          alt="image"
        />
        <div className="absolute top-0 left-0 h-96 w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-3xl font-bold leading-10 text-start absolute bottom-20">
            Josh needs to make sure the business he&apos;s buying for is legit
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-72">
        <div className="h-48 rounded-xl bg-[#1D1A23]">
          <div className="h-full w-72 flex flex-col justify-center items-center gap-6">
            <p className="font-semibold text-5xl leading-10 text-transparent bg-clip-text bg-gradient-to-r from-[#A07FEA] to-[#611DFC]">
              9,000
            </p>
            <p className="uppercase text-xs font-normal leading-5">
              people get scammed per hour in the ph
            </p>
          </div>
        </div>
        <div className="relative group h-48 w-full">
          <Image
            src="/scenario2.jpg"
            className="rounded-lg h-full w-full group-hover:opacity-100 transition-opacity duration-300"
            height={220}
            width={334}
            alt="image"
          />
          <div className="absolute top-0 left-0 h-full w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col absolute bottom-8 gap-2">
              <p className="text-xl font-bold leading-6 text-start">
                Verify people who you just met
              </p>
              <p className="text-[12px] font-normal leading-4 text-start">
                Don&apos;t Keep your users waiting. Solana has block times of
                400 milliseconds - and as hardware gets faster, so will the
                network
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full group">
        <Image
          src="/scenario3.jpg"
          className="rounded-lg h-full group-hover:opacity-100 transition-opacity duration-300"
          height={457}
          width={609}
          alt="image"
        />
        <div className="absolute bottom-0 left-0 h-full w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-16 flex flex-col gap-3">
            <p className="text-4xl font-bold leading-10 text-start">
              Eliminate Scams on online transactions
            </p>
            <p className="text-sm font-normal leading-5 text-start w-2/3">
              Don&apos;t Keep your users waiting. Solana has block times of 400
              milliseconds - and as hardware gets faster, so will the network
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/scenario5.jpg"
        className="rounded-lg h-full w-64 object-cover"
        height={457}
        width={334}
        alt="image"
      />
      <div className="relative h-full w-64 group">
        <Image
          src="/scenario6.jpg"
          className="rounded-lg h-full w-full group-hover:opacity-100 transition-opacity duration-300"
          height={457}
          width={334}
          alt="image"
        />
        <div className="absolute bottom-0 left-0 h-full w-full p-4 bg-black bg-opacity-50 text-white rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-3xl font-bold leading-10 absolute bottom-20 text-start">
            Know Your Customer is a crucial step in the world of finance.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-72">
        <div className="h-48 w-72 rounded-xl bg-[#1D1A23]">
          <div className="h-full flex flex-col justify-center items-center gap-6">
            <p className="font-semibold text-5xl leading-10 text-transparent bg-clip-text bg-gradient-to-r from-[#A07FEA] to-[#611DFC]">
              82.6M
            </p>
            <p className="uppercase text-sm font-normal leading-5">
              Transaction happen Every DAY
            </p>
          </div>
        </div>
        <div className="relative h-48 group w-72">
          <Image
            src="/scenario7.jpg"
            className="rounded-lg h-full w-full group-hover:opacity-100 transition-opacity duration-300"
            height={220}
            width={334}
            alt="image"
          />
          <div className="absolute top-0 left-0 h-full w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col absolute bottom-8 gap-2">
              <p className="text-xl font-bold leading-6 text-start">
                Fighting Financial Crime
              </p>
              <p className="text-xs font-normal leading-4 text-start">
                KYC helps prevent money laundering and terrorist financing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full group">
        <Image
          src="/scenario8.jpg"
          className="rounded-lg h-full group-hover:opacity-100 transition-opacity duration-300"
          height={457}
          width={609}
          alt="image"
        />
        <div className="absolute bottom-0 left-0 h-full w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col gap-3 absolute bottom-10">
            <p className="text-4xl font-bold leading-10 text-start">
              Stop Scams in Their Tracks
            </p>
            <p className="text-sm font-normal leading-5 text-start w-2/3">
              Scammers are constantly cooking up new schemes, but you can
              outsmart them by following a few key principles. Here&apos;s how
              to avoid falling victim to a scam
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-full group w-64">
        <Image
          src="/scenario9.jpg"
          className="rounded-lg h-full w-full group-hover:opacity-100 transition-opacity duration-300"
          height={457}
          width={325}
          alt="image"
        />
        <div className="absolute bottom-0 left-0 h-full w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-3xl font-bold leading-10 text-start absolute bottom-20">
            KYC <br /> HELPS PROTECT <br />
            AND BUILD TRUST
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-72">
        <div className="h-48 w-72 rounded-xl bg-[#1D1A23]">
          <div className="h-full flex flex-col justify-center items-center gap-6">
            <p className="font-semibold text-5xl leading-10 text-transparent bg-clip-text bg-gradient-to-r from-[#A07FEA] to-[#611DFC]">
              $2 BILLION
            </p>
            <p className="uppercase text-sm font-normal leading-5">
              ESTIMATED <br /> amount that been stole by scammers
            </p>
          </div>
        </div>
        <div className="relative h-48 group w-72">
          <Image
            src="/scenario10.jpg"
            className="rounded-lg h-full w-full group-hover:opacity-100 transition-opacity duration-300 object-cover"
            height={220}
            width={334}
            alt="image"
          />
          <div className="absolute top-0 left-0 h-full w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col absolute bottom-8 gap-2">
              <p className="text-xl font-bold leading-6 text-start">
                Fighting Financial Crime
              </p>
              <p className="text-[13px] font-normal leading-4 text-start">
                KYC helps prevent money laundering and terrorist financing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full group w-64">
        <Image
          src="/scenario11.jpg"
          className="rounded-lg h-full w-full group-hover:opacity-100 transition-opacity duration-300 object-cover"
          height={457}
          width={325}
          alt="image"
        />
        <div className="absolute bottom-0 left-0 h-full w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-4xl font-bold text-start absolute bottom-20">
            KYC: Building Trust in the Age of Tech
          </p>
        </div>
      </div>
      <div className="relative h-full group flex flex-col gap-3">
        <div className="w-564 h-48 rounded-xl bg-[#1D1A23]">
          <div className="h-full flex flex-col justify-center items-center gap-6">
            <p className="font-semibold text-5xl leading-10 text-transparent bg-clip-text bg-gradient-to-r from-[#A07FEA] to-[#611DFC]">
              20,000
            </p>
            <p className="uppercase text-sm font-normal leading-5">
              scams prevented by kyc
            </p>
          </div>
        </div>
        <div className="w-564 h-48 rounded-xl bg-[#1D1A23]">
          <div className="h-full flex flex-col justify-center items-center gap-6">
            <p className="font-semibold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#A07FEA] to-[#611DFC]">
              155.20 million php
            </p>
            <p className="uppercase text-sm font-normal">
              filipino lost in first eight months of 2023
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-full group w-64">
        <Image
          src="/scenario12.jpg"
          className="rounded-lg h-full w-full group-hover:opacity-100 transition-opacity duration-300 object-cover"
          height={457}
          width={325}
          alt="image"
        />
        <div className="absolute top-0 left-0 h-full w-full p-4 bg-opacity-50 bg-black text-white rounded-lg rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col gap-3 absolute bottom-10">
            <p className="text-2xl font-bold leading-10 text-start">
              Why KYC is Essential in P2P Tech
            </p>
            <p className="text-sm font-normal leading-5 text-start">
              Combating Fraud: In a world without bank tellers, KYC acts as a
              digital guard. Verifying identities makes it much harder for
              fraudsters to steal yours or conduct unauthorized transactions. It
              discourages them from targeting the platform altogether.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
