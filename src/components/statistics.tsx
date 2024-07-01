"use client";
import { Spinner } from "./ui/spinner";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "0px",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(true);
    }
  }, [inView]);

  return (
    <div
      className="flex-col justify-start items-center gap-9 inline-flex my-20 h-1/2"
      ref={ref}
    >
      <div className="text-white text-4xl font-bold leading-10">
        Statistics of Scams in the Philippines
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 inline-flex">
        <div className="flex-col justify-center items-center inline-flex gap-6">
          <div className="text-center text-violet-400 text-4xl md:text-7xl leading-10 font-normal">
            {!loading ? "29.7M" : <Spinner />}
          </div>
          <div className="text-center text-gray-400 text-sm font-normal leading-normal">
            FINANCIAL RELATED SCAMS
          </div>
        </div>
        <div className="hidden lg:block w-12 h-0 origin-top-left rotate-90 border border-white"></div>
        <div className="flex-col justify-center items-center gap-6 inline-flex">
          <div className="text-center text-indigo-600 text-4xl md:text-7xl font-normal">
            {!loading ? "340M+" : <Spinner />}
          </div>
          <div className="text-center text-gray-400 text-sm font-normal leading-normal">
            SOCIAL MEDIA SCAMS
          </div>
        </div>
        <div className="hidden lg:block w-12 h-0 origin-top-left rotate-90 border border-white"></div>
        <div className="flex-col justify-center items-center gap-6 inline-flex">
          <div className="text-center text-indigo-600 text-4xl md:text-7xl font-normal">
            {!loading ? "340M+" : <Spinner />}
          </div>
          <div className="text-center text-gray-400 text-sm font-normal leading-normal">
            ONLINE TRANSACTION RELATED SCAMS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
