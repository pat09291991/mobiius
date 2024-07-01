import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

export default function Offers() {
  return (
    <div className="h-auto lg:h-screen mt-[-5rem] pt-20 overflow-hidden ">
      <div className="flex flex-col justify-center items-center h-full p-5 md:p-20 lg:p-20 gap-10 md:gap-20 lg:gap-20">
        <div>
          <p className="text-center text-white text-3xl md:text-5xl font-extrabold">
            10-day free trial
            <br />
            no credit card required
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <OfferCard price="10" />
          <OfferCard price="20" />
          <OfferCard price="30" />
        </div>
      </div>
    </div>
  );
}

const OfferCard = ({ price }: { price: string }) => {
  return (
    <div className="flex flex-col p-3 items-start bg-[#1D1A23] rounded-lg">
      <div className="flex-grow flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <p className="text-indigo-500 font-bold">One time payment</p>
          <div className="flex">
            <p className="text-sm font-bold">$</p>
            <p className="text-5xl">{price}</p>
          </div>
        </div>
        <p className="text-left text-indigo-500 font-bold">10 Verification</p>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-gray-400 font-bold">Plan includes:</p>
          <div className="flex items-center gap-1">
            <CheckIcon />
            <p className="font-semibold text-sm">ID Verification</p>
          </div>
          <div className="flex items-center gap-1">
            <CheckIcon />
            <p className="font-semibold text-sm">Facial Recognition</p>
          </div>
          <div className="flex items-center gap-1">
            <CheckIcon />
            <p className="font-semibold text-sm">Voice Verification</p>
          </div>
        </div>
        <Link
          href="/start/send-email"
          className="rounded-lg px-9 py-2 bg-button-gradient w-64 uppercase"
        >
          Verify
        </Link>
      </div>
    </div>
  );
};

const CheckIcon = () => {
  return (
    <Icon
      className="material-icons-outlined"
      icon="check_circle"
      size={15}
      color="#5E43D7"
    />
  );
};
