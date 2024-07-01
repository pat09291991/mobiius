import Image from "next/image";
import { Label } from "../ui/label";

export default function ContractCard({
  image,
  category,
  price,
  status,
}: {
  image: string;
  category: string;
  price: number;
  status: string;
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
        <Label>{category}</Label>
        <Label>
          <span className="font-bold">Market Cap:</span> P{price}
        </Label>
        <Label
          className={`${
            status === "ending_soon"
              ? "text-[#DA5254]"
              : "text-[#875FFE] capitalize"
          }`}
        >
          {status === "ending_soon" ? "Ending Soon" : status}
        </Label>
      </div>
    </div>
  );
}
