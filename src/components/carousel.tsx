"use client";
import React, { useState } from "react";
import Animate from "./ui/Animate";
import Image from "next/image";
import ActiveLink from "./ui/activelink";
import InactiveLink from "./ui/inactivelink";
type linkTypes = "commerce" | "security" | "transaction" | "p2p";

export default function Carousel() {
  const [activeLink, setActiveLink] = useState<linkTypes>("commerce");
  const [activeClass, setActiveClass] = useState<string | null>(null);
  const [isImgLoaded, setIsImageLoaded] = useState<boolean>(true);
  const [activeDetails, setActiveDetails] = useState<linkTypes>("commerce");

  const carouselItem = {
    commerce: {
      id: 1,
      image: "/commerce.jpg",
      title: "Eliminate Scams on online transactions",
      content:
        "Don’t Keep your users waiting. Solana has block times of 400 milliseconds - and as hardware gets faster, so will the network",
    },
    security: {
      id: 2,
      image: "/security.jpg",
      title: "Safeguard Your Data with Mobiius",
      content: `In today's digital world, <br> protecting your data is paramount. Mobiius offers a comprehensive security solution designed to fortify your defenses against evolving threats.`,
    },
    transaction: {
      id: 3,
      image: "/transaction.jpg",
      title: "Mobiius: Your Key to Secure and Compliant Transactions",
      content:
        "The digital age has revolutionized how we conduct business, but with convenience comes the ever-present threat of fraud and financial crime.",
    },
    p2p: {
      id: 4,
      image: "/p2p.jpg",
      title: "Mobiius: Building Trust in the Peer-to-Peer Economy",
      content:
        "The peer-to-peer (P2P) landscape thrives on connection and convenience.But with anonymity comes the risk of encountering untrustworthy individuals.",
    },
  };

  function selectCarouselItem(link: linkTypes) {
    if (link === activeLink) return;
    const pastId = carouselItem[activeLink].id;
    const currentId = carouselItem[link].id;

    setActiveLink(link);

    if (pastId > currentId) {
      setActiveClass("slide-center-right");
    } else {
      setActiveClass("slide-center-left");
    }

    const cssTimeOut = setTimeout(() => {
      setActiveDetails(link);

      setIsImageLoaded(false);
      if (pastId > currentId) {
        setActiveClass("slide-left-center");
      } else {
        setActiveClass("slide-right-center");
      }

      clearTimeout(cssTimeOut);
    }, 1000);
  }

  return (
    <div className="bg-center bg-top bg-no-repeat min-h-400 bg-[url('/svg/carouseldetails.svg')] w-full flex flex-col justify-center items-center gap-10 px-3 py-3 md:py-16 overflow-x-clip">
      <div>
        <Animate animationClass="animate-in slide-in-from-bottom duration-700">
          <h1 className="text-4xl font-semibold text-center">
            Where you can use mobiius?
          </h1>
        </Animate>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {activeLink == "commerce" ? (
          <ActiveLink
            text="E-commerce"
            action={() => selectCarouselItem("commerce")}
          />
        ) : (
          <InactiveLink
            text="E-commerce"
            action={() => selectCarouselItem("commerce")}
          />
        )}
        {activeLink == "security" ? (
          <ActiveLink
            text="Security"
            action={() => selectCarouselItem("security")}
          />
        ) : (
          <InactiveLink
            text="Security"
            action={() => selectCarouselItem("security")}
          />
        )}
        {activeLink == "transaction" ? (
          <ActiveLink
            text="Transaction"
            action={() => selectCarouselItem("transaction")}
          />
        ) : (
          <InactiveLink
            text="Transaction"
            action={() => selectCarouselItem("transaction")}
          />
        )}
        {activeLink == "p2p" ? (
          <ActiveLink
            text="Peer to Peer"
            action={() => selectCarouselItem("p2p")}
          />
        ) : (
          <InactiveLink
            text="Peer to Peer"
            action={() => selectCarouselItem("p2p")}
          />
        )}
      </div>
      <div className="max-w-4xl mx-auto relative">
        <div
          className={`${
            activeClass == null ? "" : activeClass
          }  z-[-1] blur-[50px] bg-glow w-full h-full absolute top-[0] left-[0] `}
        />

        <div
          id="carouselItem"
          className={`${
            activeClass == null ? "" : activeClass
          } relative rounded-lg overflow-hidden flex flex-col sm:flex-row p-4 min-h-[600px] md:min-h-[300px]`}
          style={{
            background:
              "linear-gradient(100.72deg, #9F7DEA 17.55%, #611DFC 91.92%)",
          }}
        >
          <Image
            className="w-full h-full left-0 top-0 absolute mix-blend-multiply z-[0]"
            src="/carouselbg.png"
            alt="overlay"
            fill
          />
          <div className="sm:w-1/3 z-[1] relative min-h-[270px]">
            <div
              className={`absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] ${
                isImgLoaded ? "hidden" : "visible"
              }`}
            >
              <svg
                className="animate-spin h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
              </svg>
            </div>
            <Image
              src={carouselItem[activeDetails].image}
              onLoad={() => setIsImageLoaded(true)}
              alt="Card Image"
              className={`rounded-lg w-full h-full min-h-[270px] object-cover transition-opacity duration-300 ${
                isImgLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
              fill
            />
          </div>
          <div className="p-6 sm:w-2/3 text-left z-[1]">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                {carouselItem[activeDetails].title}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: carouselItem[activeDetails].content,
                }}
              ></p>
              <a className="inline-flex items-center underline">
                <span className="mr-2">Try Mobiius</span>
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2987 1.1875V5.40625C14.2987 5.59273 14.2246 5.77157 14.0927 5.90343C13.9609 6.0353 13.782 6.10938 13.5956 6.10938C13.4091 6.10938 13.2302 6.0353 13.0984 5.90343C12.9665 5.77157 12.8924 5.59273 12.8924 5.40625V2.88672L7.53052 8.24922C7.46519 8.31477 7.38757 8.36678 7.30211 8.40227C7.21664 8.43776 7.12501 8.45602 7.03247 8.45602C6.93993 8.45602 6.8483 8.43776 6.76283 8.40227C6.67737 8.36678 6.59975 8.31477 6.53442 8.24922L0.909423 2.62422C0.777333 2.49213 0.703125 2.31298 0.703125 2.12617C0.703125 1.93937 0.777333 1.76022 0.909423 1.62812C1.04151 1.49603 1.22067 1.42183 1.40747 1.42183C1.59427 1.42183 1.77343 1.49603 1.90552 1.62812L7.03306 6.75391L11.8963 1.89062H9.37681C9.19033 1.89062 9.01148 1.81655 8.87962 1.68468C8.74776 1.55282 8.67368 1.37398 8.67368 1.1875C8.67368 1.00102 8.74776 0.822177 8.87962 0.690315C9.01148 0.558454 9.19033 0.484375 9.37681 0.484375H13.5956C13.782 0.484375 13.9609 0.558454 14.0927 0.690315C14.2246 0.822177 14.2987 1.00102 14.2987 1.1875Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
