/* eslint-disable @next/next/no-img-element */
import Animate from "./ui/Animate";

export default function Steps() {
  const containerCss =
    "flex flex-col justify-center items-center col-span-4 sm:col-span-4 lg:col-span-2 h-full py-14";
  return (
    <div className="grid grid-cols-4 w-full">
      <div className={containerCss}>
        <div className="flex flex-col gap-10 h-full px-5 sm:px-0">
          <Animate animationClass="animate-in slide-in-from-left duration-700">
            <div className="flex gap-5 hover:scale-105 transition-transform">
              <div className="rounded-lg flex justify-center items-center steplist  max-h-[60px] min-h-[60px] max-w-[60px] min-w-[60px] bg-icon">
                <img
                  className="h-[45%] w-[45%]"
                  src="/svg/bellicon.svg"
                  alt="bell"
                ></img>
              </div>
              <div className="flex flex-col gap-2 flex-grow text-left">
                <p className="font-semibold">Selfie Verification</p>
                <p>
                  A KYC platform is a software solution that helps{" "}
                  <br className="hidden sm:block md:block" />
                  businesses comply with these KYC regulations.
                </p>
              </div>
            </div>
          </Animate>
          <Animate animationClass="animate-in slide-in-from-left duration-700">
            <div className="flex gap-5 hover:scale-105 transition-transform">
              <div className="rounded-lg flex justify-center items-center steplist max-h-[60px] min-h-[60px] max-w-[60px] min-w-[60px] bg-icon">
                <img
                  className="h-[45%] w-[45%]"
                  src="/svg/volumeicon.svg"
                  alt="bell"
                ></img>
              </div>
              <div className="flex flex-col gap-2 flex-grow text-left">
                <p className="font-semibold">Voice Verification</p>
                <p>
                  A KYC platform is a software solution that helps{" "}
                  <br className="hidden sm:block md:block" />
                  businesses comply with these KYC regulations.
                </p>
              </div>
            </div>
          </Animate>
          <Animate animationClass="animate-in slide-in-from-left duration-700">
            <div className="flex gap-5 hover:scale-105 transition-transform">
              <div className="rounded-lg flex justify-center items-center steplist max-h-[60px] min-h-[60px] max-w-[60px] min-w-[60px] bg-icon">
                <img
                  className="h-[45%] w-[45%]"
                  src="/svg/cardicon.svg"
                  alt="bell"
                ></img>
              </div>
              <div className="flex flex-col gap-2 flex-grow text-left">
                <p className="font-semibold">Digital ID</p>
                <p>
                  A KYC platform is a software solution that helps{" "}
                  <br className="hidden sm:block md:block" />
                  businesses comply with these KYC regulations.
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </div>
      <div
        className={`bg-contain bg-center bg-no-repeat min-h-300 bg-[url('/svg/stepsbackground.svg')] ${containerCss}`}
      >
        <div className="flex flex-col h-full gap-4">
          <Animate animationClass="animate-in zoom-in duration-500">
            <h1 className="text-4xl font-semibold text-left">
              How Mobiius Works?
            </h1>
          </Animate>
          <Animate animationClass="animate-in zoom-in duration-500">
            <p className="text-left">
              A KYC platform is a software solution that helps <br />
              businesses comply with these KYC regulations.
            </p>
          </Animate>
          <div>
            <div className="flex gap-3 justify-start">
              <button
                className="rounded-lg px-9 py-2"
                style={{
                  background:
                    "linear-gradient(90deg, #7D49F4 0%, #611DFC 77.5%)",
                }}
              >
                VERIFY
              </button>
              <button className="bg-black border-white border rounded-lg px-9 py-2">
                FOR BUSINESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
