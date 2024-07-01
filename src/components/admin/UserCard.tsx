import Image from "next/image";
import { Label } from "../ui/label";

export default function UserCard({
  image,
  name,
  price,
  status,
  date,
}: {
  image: string;
  name: string;
  price: number;
  status: string;
  date: string;
}) {
  return (
    <div className="max-w-60 w-full h-full max-h-96 bg-gray-700/75 rounded-md">
      <Image
        src={image}
        height={200}
        width={200}
        alt="image"
        className="bg-white w-full h-40 object-cover rounded-md"
      />
      <div className="p-5 flex flex-col gap-y-5">
        <Label>{name}</Label>
        <Label>
          <span className="font-bold">Price: </span> P{price}
        </Label>
        <Label>
          <span className="font-bold">KYC Date: </span>
          {date}
        </Label>
        <Label
          className={`${
            status === "finished" ? "text-[#875FFE]" : "text-[#DA5254]"
          }`}
        >
          {status === "ending_soon" ? "Ending Soon" : status}
        </Label>
      </div>
    </div>
  );
}
