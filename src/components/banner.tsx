import Animate from "./ui/Animate";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="bg-[url('/svg/bannerbackground.svg')] bg-top bg-no-repeat min-h-[400px] h-[100vh] mt-[-5rem] pt-20 flex flex-col gap-10 justify-center items-center px-5 pb-5 bg-contain 5xl:bg-cover overflow-hidden">
      <div className="mt-auto sm:mx-6 md:mx-8 lg:mx-10 xl:mx-24">
        <Animate animationClass="animate-in slide-in-from-top duration-1000">
          <h1 className="text-4xl lg:text-5xl font-semibold text-center">
            Your one stop shop for <br className="hidden sm:block md:block" />
            getting a true Digital Passport
            <br className="hidden sm:block md:block" /> here In The Philippines.
          </h1>
        </Animate>
      </div>
      <div>
        <div className="flex gap-3 justify-center">
          <button className="rounded-lg px-9 py-2 bg-button-gradient">
            VERIFY
          </button>
          <button className="bg-black border-white border rounded-lg px-9 py-2">
            FOR BUSINESS
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-auto px-5 sm:px-0 lg:w-2/3">
        <p className="text-[#6261EC]">
          Powering tool and integration from companies all around the world
        </p>
        <div className="grid grid-cols-4 gap-7">
          <div className="w-full flex items-center justify-center col-span-2 sm:col-span-2 md:col-span-1 ">
            <Animate
              customClass="h-full w-full"
              animationClass="animate-in slide-in-from-bottom duration-300"
            >
              <div className="h-10 relative">
                <Image alt="Mobii Icon" src="/svg/mobi.svg" fill />
              </div>
            </Animate>
          </div>
          <div className="w-full flex items-center justify-center col-span-2 sm:col-span-2 md:col-span-1 ">
            <Animate
              customClass="h-full w-full"
              animationClass="animate-in slide-in-from-bottom duration-500"
            >
              <div className="h-10 relative">
                <Image alt="Vogue Icon" src="/svg/vogue.svg" fill />
              </div>
            </Animate>
          </div>
          <div className="w-full flex items-center justify-center col-span-2 sm:col-span-2 md:col-span-1 ">
            <Animate
              customClass="h-full w-full"
              animationClass="animate-in slide-in-from-bottom duration-700"
            >
              <div className="h-10 relative">
                <Image alt="Lalamove Icon" src="/svg/lalamove.svg" fill />
              </div>
            </Animate>
          </div>
          <div className="w-full flex items-center justify-center col-span-2 sm:col-span-2 md:col-span-1 ">
            <Animate
              customClass="h-full w-full"
              animationClass="animate-in slide-in-from-bottom duration-1000"
            >
              <div className="h-10 relative">
                <Image alt="Forent Icon" src="/svg/forent.svg" fill />
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </div>
  );
}
