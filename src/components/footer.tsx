import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-8 md:px-14 py-6">
      <div className="flex flex-col gap-10">
        <div className="flex w-full justify-center flex-wrap gap-10 md:gap-0">
          <div className="flex justify-center w-full md:w-1/2 relative h-12">
            <div>
              <Image
                src="/svg/mobiifootericon.svg"
                alt="Mobii"
                fill
                className="w-full "
              />
            </div>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <div className="justify-start items-start flex gap-10 lg:gap-20">
              <div className="flex-col justify-start items-center md:items-start flex gap-6">
                <div className="text-[13px] font-semibold">Resources</div>
                <div className="py-3 flex-col justify-start items-center md:items-start flex gap-4">
                  <p>Documentation</p>
                  <p>Help</p>
                  <p>API</p>
                  <p>Support</p>
                  <p>Pricing</p>
                </div>
              </div>
              <div className="flex-col justify-start items-center md:items-start flex gap-6">
                <div className="text-[13px] font-semibold">Mobiius</div>
                <div className="py-3 flex-col justify-start items-center md:items-start flex gap-4">
                  <p>Terms & Conditions</p>
                  <p>Privacy Notice</p>
                  <p>Legal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-zinc-500 text-[13px]">2023 - 2025 Mobiius</div>
      </div>
    </footer>
  );
}
